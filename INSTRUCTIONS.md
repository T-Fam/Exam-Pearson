# WAEC Website — Project Instructions

Daily work window: **4pm – 6pm** (user-scheduled).

## Goals
1. Produce a full working website.
2. Research hosting options.
3. Allow users to use freely.
4. **Generate 50 questions per subject, every day. No question may ever repeat — within a day or across days.**

## Daily question-generation rules
- Source subject list: `/subjects/*.txt`
- Output folder: `/questions/YYYY-MM-DD/<subject>.txt`
- Before writing, scan all prior dated folders and dedupe against them.
- Mix question types appropriate to each subject's WAEC syllabus (objective, theory, practical).
- Include a daily report summarizing counts, skips, and dedup rejections.
