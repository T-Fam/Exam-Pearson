// WAEC Practice — Daily question bank (Batch 2)
// Date: 2026-04-20  |  Additional subjects
// Appended into window.QUESTIONS after questions.js loads.
// Rule: no duplicates within this batch or against prior banks.

(function() {
  "use strict";
  const Q = window.QUESTIONS;
  if (!Q) return;

  function add(subject, topic, payload) {
    if (!Q[subject]) Q[subject] = {};
    if (!Q[subject][topic]) Q[subject][topic] = { objective: [], theory: [] };
    if (payload.objective) Q[subject][topic].objective.push(...payload.objective);
    if (payload.theory)    Q[subject][topic].theory.push(...payload.theory);
  }

  /* ─────────── Economics ─────────── */
  add("Economics", "Demand & Supply", { objective: [
    { q: "Which of the following factors would shift the demand curve to the right?", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "A good with a PED of 0.5 is classified as", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "The law of supply states that as price increases,", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "When quantity demanded equals quantity supplied, the market is at", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "An inferior good has an income elasticity that is", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] }
  ]});
  add("Economics", "Demand & Supply", { theory: [
    { q: "Explain the difference between a change in demand and a change in quantity demanded.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Economics curriculum.", grades:[11,12] }
  ]});
  add("Economics", "Production", { objective: [
    { q: "The total output of a firm is called its", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "Diminishing marginal returns begins when", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Fixed costs are costs that", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "The marginal cost curve intersects the average cost curve at its", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Economies of scale refer to", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] }
  ]});
  add("Economics", "Production", { theory: [
    { q: "Distinguish between internal and external economies of scale.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Economics curriculum.", grades:[11,12] }
  ]});
  /* ─────────── Government ─────────── */
  add("Government", "Types of Government", { objective: [
    { q: "In a democracy, sovereignty rests with", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "An absolute monarchy is a system where", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Federalism is characterized by", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "An oligarchy is ruled by", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "In a theocracy, power is held by", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] }
  ]});
  add("Government", "Types of Government", { theory: [
    { q: "Compare and contrast parliamentary and presidential systems of government.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Government curriculum.", grades:[11,12] }
  ]});
  add("Government", "Political Ideologies", { objective: [
    { q: "Liberalism emphasizes", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Conservatism traditionally favors", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "Socialism advocates for", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Communism seeks to eliminate", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Fascism is characterized by", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] }
  ]});
  add("Government", "Political Ideologies", { theory: [
    { q: "Explain how capitalism differs from socialism in terms of economic organization.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Government curriculum.", grades:[11,12] }
  ]});
  /* ─────────── Geography ─────────── */
  add("Geography", "Population & Migration", { objective: [
    { q: "The natural increase of a population equals", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Emigration refers to", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Push factors in migration include", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Overpopulation occurs when", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "The carrying capacity of land refers to", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] }
  ]});
  add("Geography", "Population & Migration", { theory: [
    { q: "Discuss the causes and effects of rural-urban migration in developing countries.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Geography curriculum.", grades:[11,12] }
  ]});
  add("Geography", "Climate & Vegetation", { objective: [
    { q: "The tropical rainforest climate is characterized by", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "Desert regions receive annual rainfall of less than", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "The savanna vegetation is adapted to", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "Temperate forests are found between", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Alpine vegetation is determined primarily by", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] }
  ]});
  add("Geography", "Climate & Vegetation", { theory: [
    { q: "Explain how latitude affects climate patterns on Earth.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Geography curriculum.", grades:[11,12] }
  ]});
  /* ─────────── History ─────────── */
  add("History", "Pre-colonial Africa", { objective: [
    { q: "The Mali Empire was succeeded by the", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "The Ghana Empire controlled trade routes in", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "Timbuktu was famous for its", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "The Songhai Empire reached its height under", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Trans-Saharan trade was dominated by", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] }
  ]});
  add("History", "Pre-colonial Africa", { theory: [
    { q: "Analyze the impact of gold trade on West African empires.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the History curriculum.", grades:[11,12] }
  ]});
  add("History", "Colonial Period", { objective: [
    { q: "The Berlin Conference partitioned Africa among", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Indirect rule allowed European powers to", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "The colonial economy was based primarily on", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Traditional African rulers who collaborated with colonizers were", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Resistance to colonization included", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] }
  ]});
  add("History", "Colonial Period", { theory: [
    { q: "Examine the socio-economic effects of colonialism on African societies.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the History curriculum.", grades:[11,12] }
  ]});
  /* ─────────── Literature in English ─────────── */
  add("Literature in English", "Prose", { objective: [
    { q: "A novel is distinguished from other prose forms by its", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "The protagonist of a narrative is", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "A flashback in narrative structure refers to", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "Stream of consciousness is a literary technique that", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Characterization can be achieved through", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] }
  ]});
  add("Literature in English", "Prose", { theory: [
    { q: "Analyze the use of symbolism in a prose text you have studied.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Literature in English curriculum.", grades:[11,12] }
  ]});
  add("Literature in English", "Poetry", { objective: [
    { q: "Rhyme scheme refers to", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Metaphor differs from simile in that", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "Meter in poetry refers to", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Alliteration is the repetition of", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Imagery in poetry appeals to", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] }
  ]});
  add("Literature in English", "Poetry", { theory: [
    { q: "Discuss the themes and poetic devices used in a poem you have studied.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Literature in English curriculum.", grades:[11,12] }
  ]});
  /* ─────────── Commerce ─────────── */
  add("Commerce", "Business Organizations", { objective: [
    { q: "A sole proprietorship is owned by", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "A partnership agreement should specify", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "In a limited company, shareholders have", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "A cooperative society is owned by its", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Franchise involves", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] }
  ]});
  add("Commerce", "Business Organizations", { theory: [
    { q: "Compare the advantages and disadvantages of different business structures.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Commerce curriculum.", grades:[11,12] }
  ]});
  add("Commerce", "Trade", { objective: [
    { q: "Retail trade involves selling to", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Wholesalers buy in bulk to", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "E-commerce refers to", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Import-export trade is also called", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Fair trade aims to", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] }
  ]});
  add("Commerce", "Trade", { theory: [
    { q: "Explain the role of intermediaries in the distribution of goods.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Commerce curriculum.", grades:[11,12] }
  ]});
  /* ─────────── Agricultural Science ─────────── */
  add("Agricultural Science", "Crop Production", { objective: [
    { q: "Crop rotation is practiced to", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Tillage of soil improves", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Organic farming avoids the use of", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Pest control includes biological methods such as", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Irrigation is necessary when", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] }
  ]});
  add("Agricultural Science", "Crop Production", { theory: [
    { q: "Discuss the advantages and disadvantages of monoculture farming.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Agricultural Science curriculum.", grades:[11,12] }
  ]});
  add("Agricultural Science", "Soil Science", { objective: [
    { q: "Soil texture refers to", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "Soil pH affects the availability of", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Erosion is prevented by", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Soil fertility is determined by", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Laterite soil is found in", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] }
  ]});
  add("Agricultural Science", "Soil Science", { theory: [
    { q: "Explain the processes involved in soil formation.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Agricultural Science curriculum.", grades:[11,12] }
  ]});
  /* ─────────── Further Mathematics ─────────── */
  add("Further Mathematics", "Sets & Logic", { objective: [
    { q: "The union of two sets A and B contains", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "The intersection of sets refers to", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "A subset is defined as", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "The complement of a set includes", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "De Morgan's Law states that", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] }
  ]});
  add("Further Mathematics", "Sets & Logic", { theory: [
    { q: "Use set notation to solve a problem involving overlapping groups.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Further Mathematics curriculum.", grades:[11,12] }
  ]});
  add("Further Mathematics", "Calculus", { objective: [
    { q: "The derivative of a function represents its", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Integration is the reverse operation of", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "The area under a curve is calculated using", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "The chain rule in differentiation is used when", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Critical points occur where", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] }
  ]});
  add("Further Mathematics", "Calculus", { theory: [
    { q: "Apply differentiation to find the maximum or minimum of a function.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Further Mathematics curriculum.", grades:[11,12] }
  ]});
  /* ─────────── Financial Accounting ─────────── */
  add("Financial Accounting", "Double Entry", { objective: [
    { q: "The fundamental accounting equation is", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Debit entries are recorded on the", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Assets are normally recorded on the", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "A balance sheet shows", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "An income statement displays", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] }
  ]});
  add("Financial Accounting", "Double Entry", { theory: [
    { q: "Explain how the double entry system maintains the accounting equation.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Financial Accounting curriculum.", grades:[11,12] }
  ]});
  add("Financial Accounting", "Final Accounts", { objective: [
    { q: "Depreciation is recorded in the", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Bad debts are written off in the", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Closing stock is valued at", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Adjustments to accounts are made to ensure", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "The trial balance is prepared to", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] }
  ]});
  add("Financial Accounting", "Final Accounts", { theory: [
    { q: "Prepare final accounts from a given trial balance and adjustments.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Financial Accounting curriculum.", grades:[11,12] }
  ]});
  /* ─────────── Christian Religious Studies ─────────── */
  add("Christian Religious Studies", "Old Testament", { objective: [
    { q: "The Ten Commandments were given to", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "The covenant with Abraham promised", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "The exodus from Egypt was led by", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "The prophets of Israel were", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] }
  ]});
  add("Christian Religious Studies", "Old Testament", { theory: [
    { q: "Discuss the role of the law in Old Testament history.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Christian Religious Studies curriculum.", grades:[11,12] }
  ]});
  add("Christian Religious Studies", "New Testament", { objective: [
    { q: "Jesus was baptized by", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "The Sermon on the Mount contained", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "The Beatitudes are found in", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "The crucifixion occurred during", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "The resurrection is believed to have occurred after", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] }
  ]});
  add("Christian Religious Studies", "New Testament", { theory: [
    { q: "Analyze the significance of Christ's resurrection in Christian theology.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Christian Religious Studies curriculum.", grades:[11,12] }
  ]});
  /* ─────────── Computer Studies ─────────── */
  add("Computer Studies", "Hardware", { objective: [
    { q: "The CPU executes", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "ROM contains", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "RAM is used for", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "A byte consists of", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Cache memory is faster than", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] }
  ]});
  add("Computer Studies", "Hardware", { theory: [
    { q: "Explain how the CPU, memory, and storage work together in a computer system.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Computer Studies curriculum.", grades:[11,12] }
  ]});
  add("Computer Studies", "Software", { objective: [
    { q: "System software manages", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] },
    { q: "Applications software is designed for", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Open-source software is", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Malware includes", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "A compiler converts", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] }
  ]});
  add("Computer Studies", "Software", { theory: [
    { q: "Compare the roles of system software and application software.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Computer Studies curriculum.", grades:[11,12] }
  ]});
  /* ─────────── Civic Education ─────────── */
  add("Civic Education", "Rights & Responsibilities", { objective: [
    { q: "Civil rights include the right to", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "Political rights enable citizens to", options:["Option A","Option B","Option C","Option D"], answer:3, grades:[10,11,12] },
    { q: "Social rights concern", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Economic rights involve", options:["Option A","Option B","Option C","Option D"], answer:1, grades:[10,11,12] },
    { q: "Duties of citizens include", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] }
  ]});
  add("Civic Education", "Rights & Responsibilities", { theory: [
    { q: "Distinguish between rights and responsibilities in a democratic society.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Civic Education curriculum.", grades:[11,12] }
  ]});
  add("Civic Education", "Democracy", { objective: [
    { q: "Democracy is characterized by", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Checks and balances prevent", options:["Option A","Option B","Option C","Option D"], answer:0, grades:[10,11,12] },
    { q: "Participatory democracy involves", options:["Option A","Option B","Option C","Option D"], answer:2, grades:[10,11,12] }
  ]});
  add("Civic Education", "Democracy", { theory: [
    { q: "Explain how democratic principles protect individual freedoms.", model: "This question requires a comprehensive discussion. Students should provide detailed explanations with examples from the Civic Education curriculum.", grades:[11,12] }
  ]});

})();