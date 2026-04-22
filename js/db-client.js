// WAEC Practice — Supabase Database Client
// Handles all authentication and quiz progress storage
// Requires: @supabase/supabase-js

(function() {
  "use strict";

  // Initialize Supabase client
  const SUPABASE_URL = window.WAEC_CONFIG?.SUPABASE_URL || "";
  const SUPABASE_ANON_KEY = window.WAEC_CONFIG?.SUPABASE_ANON_KEY || "";

  let supabaseClient = null;

  function initSupabase() {
    if (typeof supabase === "undefined") {
      console.warn("Supabase not loaded. Quiz data will be stored locally only.");
      return null;
    }
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.warn("Supabase credentials not set. Using local storage only.");
      return null;
    }
    return supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  // ===== AUTHENTICATION =====

  async function signup({ name, username, email, password }) {
    if (!supabaseClient) {
      throw new Error("Database not connected. Contact support.");
    }

    try {
      // Create auth user in Supabase
      const { data: authData, error: authError } = await supabaseClient.auth.signUp({
        email: email || `${username}@waec.local`,
        password
      });

      if (authError) throw authError;

      const userId = authData.user.id;

      // Store user profile in database
      const { error: profileError } = await supabaseClient.from("users").insert([
        {
          id: userId,
          username,
          email: email || null,
          display_name: name,
          password_hash: username, // Store for non-auth users (optional)
          joined_at: new Date().toISOString()
        }
      ]);

      if (profileError) throw profileError;

      return { id: userId, username, name, email };
    } catch (error) {
      throw new Error(error.message || "Signup failed");
    }
  }

  async function login({ username, password, email }) {
    if (!supabaseClient) {
      throw new Error("Database not connected. Contact support.");
    }

    try {
      // Login with email or username
      const loginEmail = email || `${username}@waec.local`;
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: loginEmail,
        password
      });

      if (error) throw error;

      return { id: data.user.id, username, email: data.user.email };
    } catch (error) {
      throw new Error(error.message || "Login failed");
    }
  }

  async function logout() {
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
  }

  async function currentUser() {
    if (!supabaseClient) return null;
    const { data, error } = await supabaseClient.auth.getSession();
    if (error || !data.session) return null;

    // Get user profile
    const { data: profile } = await supabaseClient
      .from("users")
      .select("*")
      .eq("id", data.session.user.id)
      .single();

    return profile || { id: data.session.user.id, username: "User" };
  }

  // ===== QUIZ ATTEMPTS =====

  async function saveQuizAttempt(userId, quizData) {
    if (!supabaseClient) {
      console.warn("Database not connected. Quiz saved locally only.");
      return null;
    }

    try {
      const { data, error } = await supabaseClient.from("quiz_attempts").insert([
        {
          user_id: userId,
          subject: quizData.subject,
          topic: quizData.topic || null,
          grade: quizData.grade || null,
          question_type: quizData.type,
          total_questions: quizData.totalQuestions,
          correct_answers: quizData.correctAnswers,
          score: quizData.scorePercentage,
          time_taken_seconds: quizData.timeTaken,
          attempted_at: new Date().toISOString()
        }
      ]);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Failed to save quiz attempt:", error);
      return null;
    }
  }

  async function getQuizHistory(userId, subject = null) {
    if (!supabaseClient) return [];

    try {
      let query = supabaseClient
        .from("quiz_attempts")
        .select("*")
        .eq("user_id", userId)
        .order("attempted_at", { ascending: false });

      if (subject) {
        query = query.eq("subject", subject);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error("Failed to fetch quiz history:", error);
      return [];
    }
  }

  // ===== USER PROGRESS =====

  async function updateUserProgress(userId, subject, attempt) {
    if (!supabaseClient) return;

    try {
      // Get existing progress
      const { data: existing } = await supabaseClient
        .from("user_progress")
        .select("*")
        .eq("user_id", userId)
        .eq("subject", subject)
        .single();

      if (existing) {
        // Update existing
        const totalAttempts = existing.total_attempts + 1;
        const newAvg = (
          (existing.average_score || 0) * existing.total_attempts +
          attempt.scorePercentage
        ) / totalAttempts;

        await supabaseClient
          .from("user_progress")
          .update({
            total_attempts: totalAttempts,
            average_score: Math.round(newAvg),
            highest_score: Math.max(
              existing.highest_score || 0,
              attempt.scorePercentage
            ),
            last_attempt_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .eq("user_id", userId)
          .eq("subject", subject);
      } else {
        // Create new
        await supabaseClient.from("user_progress").insert([
          {
            user_id: userId,
            subject,
            total_attempts: 1,
            average_score: attempt.scorePercentage,
            highest_score: attempt.scorePercentage,
            last_attempt_at: new Date().toISOString()
          }
        ]);
      }
    } catch (error) {
      console.error("Failed to update progress:", error);
    }
  }

  async function getUserProgress(userId) {
    if (!supabaseClient) return [];

    try {
      const { data, error } = await supabaseClient
        .from("user_progress")
        .select("*")
        .eq("user_id", userId)
        .order("subject");

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error("Failed to fetch user progress:", error);
      return [];
    }
  }

  async function getUserStats(userId) {
    if (!supabaseClient) return null;

    try {
      const { data, error } = await supabaseClient
        .from("quiz_attempts")
        .select("score")
        .eq("user_id", userId);

      if (error) throw error;
      if (!data || data.length === 0) return null;

      const scores = data.map(d => d.score).filter(s => s !== null);
      const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;

      return {
        totalAttempts: data.length,
        averageScore: Math.round(avgScore),
        highestScore: Math.max(...scores)
      };
    } catch (error) {
      console.error("Failed to fetch user stats:", error);
      return null;
    }
  }

  // ===== EXPORT =====
  window.WAECDatabase = {
    init: initSupabase,
    signup,
    login,
    logout,
    currentUser,
    saveQuizAttempt,
    getQuizHistory,
    updateUserProgress,
    getUserProgress,
    getUserStats,
    isConnected: () => !!supabaseClient
  };

  // Initialize on load
  document.addEventListener("DOMContentLoaded", () => {
    supabaseClient = initSupabase();
    // Expose globally for auth-simple.js
    if (supabaseClient) {
      window.supabase = supabaseClient;
    }
  });
})();
