// WAEC Practice — Question Bank
// Schema: QUESTIONS[subject][topic] = { objective: [{q, options:[A,B,C,D], answer:idx, grades:[10,11,12]}],
//                                       theory:    [{q, model, grades:[..]}] }
// "grades" lists which grade levels this question is appropriate for.
// Add more questions daily (see /INSTRUCTIONS.md and auto-memory project rule).

const QUESTIONS = {
  "Mathematics": {
    "Algebra": {
      objective: [
        { q: "Simplify: 3x + 2x − x", options: ["3x","4x","5x","6x"], answer: 1, grades:[10,11,12] },
        { q: "If 2x + 3 = 11, find x.", options: ["2","3","4","5"], answer: 2, grades:[10,11,12] },
        { q: "Factorize: x² − 9", options: ["(x−3)(x−3)","(x+3)(x+3)","(x−3)(x+3)","(x−9)(x+1)"], answer: 2, grades:[10,11,12] },
        { q: "Solve: x² − 5x + 6 = 0", options: ["x=1,6","x=2,3","x=−2,−3","x=0,5"], answer: 1, grades:[10,11,12] },
        { q: "If log₁₀2 = 0.3010, find log₁₀8.", options: ["0.6020","0.9030","0.3010","1.2040"], answer: 1, grades:[11,12] },
        { q: "The nth term of 2,5,8,11,... is", options: ["3n−1","3n+1","2n+1","n+2"], answer: 0, grades:[10,11,12] },
        { q: "Evaluate (2³)² × 2⁻⁴", options: ["1","2","4","8"], answer: 2, grades:[11,12] },
        { q: "Solve for x: 3^(x+1) = 81", options: ["2","3","4","5"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Solve the simultaneous equations: 2x + y = 7 and x − y = 2.", model: "Add equations: 3x = 9, so x = 3. Sub back: y = 7 − 2(3) = 1. Answer: x=3, y=1.", grades:[10,11,12] },
        { q: "The sum of two numbers is 15 and their product is 54. Find the numbers.", model: "Let numbers be a,b. a+b=15, ab=54. Quadratic: t² − 15t + 54 = 0. (t−6)(t−9)=0. Numbers: 6 and 9.", grades:[10,11,12] },
        { q: "If log₁₀x + log₁₀(x−3) = 1, find x.", model: "log(x(x−3)) = 1 → x(x−3) = 10 → x² − 3x − 10 = 0 → (x−5)(x+2)=0. x=5 (reject −2 as log needs positive).", grades:[11,12] }
      ]
    },
    "Geometry & Trigonometry": {
      objective: [
        { q: "Sum of interior angles of a pentagon is", options: ["360°","480°","540°","720°"], answer: 2, grades:[10,11,12] },
        { q: "A right-angled triangle has sides 3 cm and 4 cm. The hypotenuse is", options: ["5 cm","6 cm","7 cm","12 cm"], answer: 0, grades:[10,11,12] },
        { q: "sin 30° equals", options: ["1/2","√3/2","√2/2","1"], answer: 0, grades:[10,11,12] },
        { q: "The area of a circle with radius 7 cm (π=22/7) is", options: ["44 cm²","154 cm²","49 cm²","22 cm²"], answer: 1, grades:[10,11,12] },
        { q: "In triangle ABC, if angle A = 90°, angle B = 30°, angle C is", options: ["30°","45°","60°","90°"], answer: 2, grades:[10,11,12] },
        { q: "The bearing opposite to 075° is", options: ["105°","255°","285°","075°"], answer: 1, grades:[11,12] },
        { q: "tan 45° equals", options: ["0","1/2","1","√3"], answer: 2, grades:[10,11,12] },
        { q: "Circumference of a circle with diameter 14 cm (π=22/7) is", options: ["22 cm","44 cm","88 cm","154 cm"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "A ladder 10 m long leans against a wall making an angle of 60° with the ground. How high does it reach up the wall?", model: "Height = 10 × sin 60° = 10 × (√3/2) ≈ 8.66 m.", grades:[11,12] },
        { q: "Find the volume of a cone of radius 7 cm and height 12 cm (π=22/7).", model: "V = (1/3)πr²h = (1/3)(22/7)(49)(12) = 616 cm³.", grades:[11,12] },
        { q: "Two points A and B are on a horizontal ground. The angle of elevation of a tower from A is 30° and from B (20 m closer) is 45°. Find the height of the tower.", model: "Let height = h, distance from B = x. tan45 = h/x → h=x. tan30 = h/(x+20) → h = (x+20)/√3. So x = (x+20)/√3 → √3 x = x+20 → x(√3−1)=20 → x=20/(√3−1) ≈ 27.32. Height ≈ 27.32 m.", grades:[12] }
      ]
    },
    "Statistics & Probability": {
      objective: [
        { q: "The mean of 4,6,8,10,12 is", options: ["6","7","8","9"], answer: 2, grades:[10,11,12] },
        { q: "Median of 3,1,4,1,5,9,2,6 is", options: ["3","3.5","4","4.5"], answer: 1, grades:[10,11,12] },
        { q: "Probability of getting a head on a single toss of a fair coin is", options: ["0","1/4","1/2","1"], answer: 2, grades:[10,11,12] },
        { q: "If P(A) = 0.3, then P(not A) is", options: ["0.3","0.7","0.5","1.3"], answer: 1, grades:[10,11,12] },
        { q: "The mode of 2,3,3,4,5,3,6 is", options: ["2","3","4","6"], answer: 1, grades:[10,11,12] },
        { q: "A card is drawn from a deck of 52. Probability it is a king is", options: ["1/13","1/26","1/52","4/13"], answer: 0, grades:[11,12] },
        { q: "Range of 12, 5, 20, 8, 15 is", options: ["5","10","15","20"], answer: 2, grades:[10,11,12] },
        { q: "Two dice are rolled. P(sum = 7) is", options: ["1/6","1/12","5/36","1/9"], answer: 0, grades:[11,12] }
      ],
      theory: [
        { q: "The marks scored by 5 students are 60, 65, 70, 75, 80. Find the mean and standard deviation.", model: "Mean = (60+65+70+75+80)/5 = 70. Deviations: −10,−5,0,5,10. Squared: 100,25,0,25,100 → sum 250. Variance = 250/5 = 50. SD = √50 ≈ 7.07.", grades:[11,12] },
        { q: "A bag contains 4 red and 6 blue balls. One ball is drawn at random. What is the probability it is red? If two balls are drawn without replacement, what is the probability both are red?", model: "P(red first) = 4/10 = 2/5. P(both red) = (4/10)(3/9) = 12/90 = 2/15.", grades:[11,12] },
        { q: "Define and distinguish between mutually exclusive and independent events with an example each.", model: "Mutually exclusive: two events that cannot occur together (P(A∩B)=0). Example: rolling a 3 and a 5 on one die. Independent: occurrence of one does not affect the other (P(A∩B)=P(A)P(B)). Example: tossing two different coins.", grades:[12] }
      ]
    }
  },

  "English Language": {
    "Comprehension": {
      objective: [
        { q: "The word that best means 'obvious' is", options: ["hidden","evident","subtle","vague"], answer: 1, grades:[10,11,12] },
        { q: "'He ran as fast as a cheetah' is an example of", options: ["metaphor","simile","personification","hyperbole"], answer: 1, grades:[10,11,12] },
        { q: "Choose the correctly punctuated sentence.", options: ["Where are you going.","Where are you going?","Where are you, going!","Where are you going;"], answer: 1, grades:[10,11,12] },
        { q: "The antonym of 'generous' is", options: ["kind","mean","rich","clever"], answer: 1, grades:[10,11,12] },
        { q: "Identify the noun: 'The child laughed.'", options: ["The","child","laughed","."], answer: 1, grades:[10,11,12] },
        { q: "A passage that tells a story is called", options: ["expository","narrative","argumentative","descriptive"], answer: 1, grades:[10,11,12] },
        { q: "'Between you and ___, it was a mistake.' The pronoun is", options: ["I","me","mine","myself"], answer: 1, grades:[11,12] },
        { q: "Synonym of 'begin' is", options: ["end","start","pause","stop"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "Write a summary, in not more than 60 words, of any newspaper editorial you have read recently.", model: "A good summary: identifies the main idea in the first sentence, retains key supporting points, omits examples and opinion, uses the candidate's own words, stays within the word limit, and ends with a concluding point. Marker checks: topic sentence, coherence, grammar, word count.", grades:[11,12] },
        { q: "Write a letter to your principal complaining about the poor state of the school library.", model: "Format: writer's address, date, receiver's address, salutation (Dear Sir/Ma), heading, body (3 paragraphs: purpose → specifics of the problem → requested action), close (Yours faithfully), signature and name. Tone: formal, respectful. Grammar and spelling must be correct.", grades:[10,11,12] }
      ]
    },
    "Grammar & Structure": {
      objective: [
        { q: "The past tense of 'run' is", options: ["runs","ran","runned","running"], answer: 1, grades:[10,11,12] },
        { q: "Choose the correct article: '__ honest man is respected.'", options: ["A","An","The","No article"], answer: 1, grades:[10,11,12] },
        { q: "Subject–verb agreement: 'The team ___ winning.'", options: ["is","are","were","be"], answer: 0, grades:[10,11,12] },
        { q: "Identify the adverb: 'She sang beautifully.'", options: ["She","sang","beautifully","."], answer: 2, grades:[10,11,12] },
        { q: "Plural of 'goose' is", options: ["gooses","geese","geeses","goose"], answer: 1, grades:[10,11,12] },
        { q: "Which is a complex sentence?", options: ["I came and I saw.","Although it rained, we went out.","He ran. He was tired.","She sang and danced."], answer: 1, grades:[11,12] },
        { q: "Passive voice of 'The boy kicked the ball' is", options: ["The ball was kicked by the boy.","The boy was kicked by the ball.","The ball kicks the boy.","The ball is kicking the boy."], answer: 0, grades:[11,12] },
        { q: "A group of words with a subject and predicate is a", options: ["phrase","clause","fragment","paragraph"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Write five sentences illustrating different tenses of the verb 'to read'.", model: "Present: I read a novel every week. Past: I read a novel yesterday. Future: I will read a novel tomorrow. Present perfect: I have read three novels this term. Past continuous: I was reading when she called.", grades:[10,11,12] },
        { q: "Change to indirect speech: 'I am going home,' she said.", model: "She said that she was going home.", grades:[11,12] }
      ]
    },
    "Essay Writing": {
      objective: [
        { q: "A narrative essay primarily", options: ["argues a point","tells a story","describes a scene","explains a process"], answer: 1, grades:[10,11,12] },
        { q: "The opening paragraph of an essay is called", options: ["body","conclusion","introduction","title"], answer: 2, grades:[10,11,12] },
        { q: "A formal letter ends with", options: ["Yours sincerely","Yours faithfully","Cheers","Bye"], answer: 1, grades:[10,11,12] },
        { q: "A thesis statement appears in the", options: ["title","introduction","body","bibliography"], answer: 1, grades:[11,12] },
        { q: "An argumentative essay requires", options: ["only one side","balanced points and a stand","pictures","rhyme"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Write an argumentative essay of about 450 words on the topic: 'Boarding schools are better than day schools.'", model: "Structure: introduction with clear stance → 2–3 supporting arguments with evidence (discipline, study time, social skills) → 1–2 acknowledged counter-arguments rebutted (cost, homesickness) → conclusion restating position. Use linkers (firstly, however, moreover, in conclusion). Check grammar, spelling, and paragraphing.", grades:[11,12] },
        { q: "Write a descriptive essay on 'A Busy Market'.", model: "Use vivid sensory details: sights (colorful stalls, produce piles), sounds (haggling, calls), smells (roasted corn, fresh fish), textures, and movement. Structure: introduction setting scene → paragraphs by sense or area of the market → conclusion with an overall impression.", grades:[10,11,12] }
      ]
    }
  },

  "Biology": {
    "Cell Biology": {
      objective: [
        { q: "The basic unit of life is the", options: ["tissue","cell","organ","organism"], answer: 1, grades:[10,11,12] },
        { q: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus","Mitochondrion","Ribosome","Vacuole"], answer: 1, grades:[10,11,12] },
        { q: "Chlorophyll is found in", options: ["mitochondria","chloroplasts","nuclei","ribosomes"], answer: 1, grades:[10,11,12] },
        { q: "The cell wall of a plant is made of", options: ["protein","cellulose","chitin","lipid"], answer: 1, grades:[10,11,12] },
        { q: "Movement of water from high to low water potential across a semipermeable membrane is", options: ["diffusion","osmosis","active transport","filtration"], answer: 1, grades:[10,11,12] },
        { q: "Ribosomes are responsible for", options: ["respiration","protein synthesis","photosynthesis","digestion"], answer: 1, grades:[11,12] },
        { q: "A cell with no true nucleus is", options: ["eukaryotic","prokaryotic","plant","animal"], answer: 1, grades:[11,12] },
        { q: "The structure that controls what enters and leaves a cell is the", options: ["cell wall","nucleus","cell membrane","cytoplasm"], answer: 2, grades:[10,11,12] }
      ],
      theory: [
        { q: "With a well-labelled diagram, describe the structure of a typical animal cell and state the functions of any three organelles.", model: "Diagram should show cell membrane, cytoplasm, nucleus, mitochondria, ribosomes, ER, Golgi, vacuole. Functions: nucleus controls activities and carries genetic material; mitochondria produce ATP by respiration; ribosomes synthesize proteins.", grades:[11,12] },
        { q: "Differentiate between plant and animal cells.", model: "Plant cells have cell wall (cellulose), large central vacuole, chloroplasts, and usually a regular shape. Animal cells lack cell wall and chloroplasts, have small or no vacuoles, irregular shape, and may contain centrioles.", grades:[10,11,12] }
      ]
    },
    "Ecology": {
      objective: [
        { q: "The process by which green plants make food is", options: ["respiration","photosynthesis","transpiration","digestion"], answer: 1, grades:[10,11,12] },
        { q: "An organism that makes its own food is a", options: ["consumer","producer","decomposer","parasite"], answer: 1, grades:[10,11,12] },
        { q: "Organisms that feed on dead organic matter are", options: ["producers","consumers","decomposers","predators"], answer: 2, grades:[10,11,12] },
        { q: "The place where an organism lives is its", options: ["niche","habitat","community","population"], answer: 1, grades:[10,11,12] },
        { q: "A group of organisms of the same species in an area is a", options: ["community","population","ecosystem","biome"], answer: 1, grades:[11,12] },
        { q: "The energy in an ecosystem ultimately comes from the", options: ["soil","sun","water","wind"], answer: 1, grades:[10,11,12] },
        { q: "A ↔ B is an example of", options: ["commensalism","mutualism","parasitism","predation"], answer: 1, grades:[11,12] },
        { q: "Which gas is released during photosynthesis?", options: ["CO₂","O₂","N₂","H₂"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "Explain the terms: habitat, niche, community, and ecosystem.", model: "Habitat: the natural home of an organism. Niche: the role an organism plays in its habitat (feeding, reproduction, interactions). Community: all populations of different species living together in an area. Ecosystem: a community plus its non-living environment, interacting as a unit.", grades:[11,12] },
        { q: "Describe the carbon cycle and state its importance.", model: "Carbon enters the atmosphere as CO₂ via respiration, combustion, and decomposition, and is removed by photosynthesis, forming glucose. Carbon passes through food chains as animals eat plants and each other. On death, decomposers release carbon back. Fossil fuels lock carbon for millions of years. The cycle maintains atmospheric CO₂ balance, supports life by providing carbon for organic molecules, and regulates climate.", grades:[11,12] }
      ]
    },
    "Genetics & Evolution": {
      objective: [
        { q: "The carrier of hereditary information is", options: ["RNA","DNA","ATP","NAD"], answer: 1, grades:[10,11,12] },
        { q: "A gene is a section of", options: ["protein","DNA","lipid","carbohydrate"], answer: 1, grades:[10,11,12] },
        { q: "In humans, males have sex chromosomes", options: ["XX","XY","YY","XO"], answer: 1, grades:[10,11,12] },
        { q: "The father of genetics is", options: ["Darwin","Mendel","Watson","Pasteur"], answer: 1, grades:[11,12] },
        { q: "An organism having two identical alleles for a trait is", options: ["heterozygous","homozygous","hybrid","mutant"], answer: 1, grades:[11,12] },
        { q: "Natural selection was proposed by", options: ["Lamarck","Mendel","Darwin","Linnaeus"], answer: 2, grades:[11,12] },
        { q: "A change in the DNA sequence is a", options: ["mutation","variation","migration","selection"], answer: 0, grades:[11,12] }
      ],
      theory: [
        { q: "State Mendel's first law and illustrate with a genetic cross.", model: "Law of Segregation: during gamete formation, the two alleles of a gene separate so each gamete carries only one. Example: Tt × Tt → gametes T, t from each → offspring TT : Tt : tt in 1:2:1, phenotypes 3 tall : 1 short (if T dominant).", grades:[11,12] },
        { q: "Outline Darwin's theory of evolution by natural selection.", model: "Organisms produce more offspring than can survive; individuals vary; variations are heritable; those with favorable traits for the environment survive and reproduce more (survival of the fittest); over generations, populations change and new species can form.", grades:[11,12] }
      ]
    }
  },

  "Chemistry": {
    "Atomic Structure & Periodic Table": {
      objective: [
        { q: "The smallest particle of an element that can take part in a chemical reaction is the", options: ["proton","atom","molecule","ion"], answer: 1, grades:[10,11,12] },
        { q: "The number of protons in an atom is its", options: ["mass number","atomic number","neutron number","valency"], answer: 1, grades:[10,11,12] },
        { q: "An atom of sodium (Na, Z=11) has ___ electrons in its outermost shell.", options: ["1","2","7","8"], answer: 0, grades:[10,11,12] },
        { q: "Isotopes have the same", options: ["mass number","atomic number","neutrons","density"], answer: 1, grades:[10,11,12] },
        { q: "Group 1 elements are called", options: ["alkali metals","halogens","noble gases","transition metals"], answer: 0, grades:[10,11,12] },
        { q: "Which subatomic particle has no charge?", options: ["Proton","Electron","Neutron","Ion"], answer: 2, grades:[10,11,12] },
        { q: "The electronic configuration of oxygen (Z=8) is", options: ["2,6","2,4","2,8","6,2"], answer: 0, grades:[11,12] },
        { q: "Across a period, atomic size generally", options: ["increases","decreases","stays the same","fluctuates"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Define atomic number and mass number. Use ₁₁²³Na to illustrate.", model: "Atomic number = number of protons = 11. Mass number = protons + neutrons = 23 → neutrons = 12. Electrons in a neutral atom = 11.", grades:[10,11,12] },
        { q: "State and explain the trend in first ionization energy across Period 3.", model: "First ionization energy generally increases from Na to Ar because nuclear charge increases, atomic size decreases, and outer electrons are held more tightly. Minor dips occur (Mg→Al, P→S) due to sub-shell structure.", grades:[12] }
      ]
    },
    "Acids, Bases & Salts": {
      objective: [
        { q: "An acid turns litmus", options: ["blue","red","green","yellow"], answer: 1, grades:[10,11,12] },
        { q: "The pH of a neutral solution is", options: ["0","7","14","1"], answer: 1, grades:[10,11,12] },
        { q: "A base that is soluble in water is an", options: ["acid","alkali","oxide","salt"], answer: 1, grades:[10,11,12] },
        { q: "The reaction between an acid and a base is called", options: ["oxidation","neutralization","reduction","hydrolysis"], answer: 1, grades:[10,11,12] },
        { q: "Sulfuric acid is", options: ["HCl","H₂SO₄","HNO₃","H₃PO₄"], answer: 1, grades:[10,11,12] },
        { q: "A Brønsted–Lowry acid is a", options: ["proton acceptor","proton donor","electron donor","electron acceptor"], answer: 1, grades:[11,12] },
        { q: "The conjugate base of H₂O is", options: ["H₃O⁺","OH⁻","O²⁻","H⁻"], answer: 1, grades:[12] },
        { q: "A normal salt is formed when", options: ["only some H⁺ of the acid is replaced","all H⁺ of the acid are replaced by a metal","a base reacts with a salt","a metal reacts with water"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Define acid, base, and salt. Give one example of each.", model: "Acid: a substance that releases H⁺ ions in water (e.g., HCl). Base: releases OH⁻ ions or accepts H⁺ (e.g., NaOH). Salt: compound formed when H⁺ of an acid is replaced by a metal or ammonium ion (e.g., NaCl).", grades:[10,11,12] },
        { q: "Describe, with an equation, the reaction of dilute HCl with (i) NaOH (ii) CaCO₃.", model: "(i) HCl + NaOH → NaCl + H₂O (neutralization). (ii) 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂ (effervescence of CO₂).", grades:[11,12] }
      ]
    },
    "Organic Chemistry": {
      objective: [
        { q: "Methane has the formula", options: ["CH₂","CH₃","CH₄","C₂H₆"], answer: 2, grades:[10,11,12] },
        { q: "Compounds of carbon and hydrogen only are called", options: ["alcohols","hydrocarbons","acids","ethers"], answer: 1, grades:[10,11,12] },
        { q: "The general formula of alkanes is", options: ["CₙH₂ₙ","CₙH₂ₙ₊₂","CₙH₂ₙ₋₂","CₙHₙ"], answer: 1, grades:[10,11,12] },
        { q: "Ethene is an example of", options: ["alkane","alkene","alkyne","alcohol"], answer: 1, grades:[10,11,12] },
        { q: "The functional group of alcohols is", options: ["−COOH","−OH","−CHO","−NH₂"], answer: 1, grades:[11,12] },
        { q: "Fermentation of glucose produces ethanol and", options: ["oxygen","carbon dioxide","water","methane"], answer: 1, grades:[11,12] },
        { q: "A compound with the same molecular formula but different structure is an", options: ["isomer","isotope","allotrope","polymer"], answer: 0, grades:[11,12] }
      ],
      theory: [
        { q: "Distinguish between saturated and unsaturated hydrocarbons, with examples.", model: "Saturated: only single C–C bonds (alkanes), e.g., methane CH₄. Unsaturated: contain double or triple C–C bonds (alkenes, alkynes), e.g., ethene C₂H₄, ethyne C₂H₂. Unsaturated undergo addition reactions; saturated undergo substitution.", grades:[11,12] },
        { q: "Describe the laboratory preparation of ethene from ethanol.", model: "Heat ethanol with excess concentrated H₂SO₄ at ~170°C. The acid dehydrates ethanol: C₂H₅OH → C₂H₄ + H₂O. Ethene is collected over water. Safety: heat gently; acid is corrosive.", grades:[12] }
      ]
    }
  },

  "Physics": {
    "Mechanics": {
      objective: [
        { q: "The SI unit of force is the", options: ["joule","newton","pascal","watt"], answer: 1, grades:[10,11,12] },
        { q: "Acceleration due to gravity on earth is approximately", options: ["9.8 m/s","9.8 m/s²","98 m/s²","0.98 m/s²"], answer: 1, grades:[10,11,12] },
        { q: "Work is measured in", options: ["newtons","joules","watts","pascals"], answer: 1, grades:[10,11,12] },
        { q: "Momentum = mass ×", options: ["acceleration","velocity","force","time"], answer: 1, grades:[10,11,12] },
        { q: "Newton's first law is also called the law of", options: ["action","inertia","gravitation","conservation"], answer: 1, grades:[10,11,12] },
        { q: "A body of mass 2 kg moving at 5 m/s has momentum", options: ["5 kgm/s","10 kgm/s","7 kgm/s","2.5 kgm/s"], answer: 1, grades:[10,11,12] },
        { q: "Power is the rate of", options: ["doing work","applying force","moving","accelerating"], answer: 0, grades:[11,12] },
        { q: "A stone falls freely from rest. After 2 s its velocity is (g=10)", options: ["5 m/s","10 m/s","20 m/s","40 m/s"], answer: 2, grades:[11,12] }
      ],
      theory: [
        { q: "State Newton's three laws of motion.", model: "1) A body remains at rest or in uniform motion unless acted on by an external force. 2) The resultant force on a body equals the rate of change of its momentum (F=ma). 3) For every action there is an equal and opposite reaction.", grades:[11,12] },
        { q: "A car of mass 1000 kg accelerates from 0 to 20 m/s in 10 s. Calculate the force applied.", model: "Acceleration a = (20−0)/10 = 2 m/s². Force F = ma = 1000 × 2 = 2000 N.", grades:[10,11,12] }
      ]
    },
    "Electricity & Magnetism": {
      objective: [
        { q: "The SI unit of electric current is the", options: ["volt","ampere","ohm","coulomb"], answer: 1, grades:[10,11,12] },
        { q: "Ohm's law states: V =", options: ["IR","I/R","I+R","R/I"], answer: 0, grades:[10,11,12] },
        { q: "The device that measures current is", options: ["voltmeter","ammeter","ohmmeter","galvanometer"], answer: 1, grades:[10,11,12] },
        { q: "Two 4 Ω resistors in parallel give", options: ["2 Ω","4 Ω","8 Ω","16 Ω"], answer: 0, grades:[11,12] },
        { q: "A current of 2 A flows through a 5 Ω resistor. The voltage is", options: ["2.5 V","10 V","3 V","7 V"], answer: 1, grades:[10,11,12] },
        { q: "Like magnetic poles", options: ["attract","repel","do nothing","rotate"], answer: 1, grades:[10,11,12] },
        { q: "The unit of resistance is the", options: ["ampere","volt","ohm","farad"], answer: 2, grades:[10,11,12] },
        { q: "Power in a resistor = I² × ___", options: ["V","R","T","Q"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Three resistors of 2 Ω, 3 Ω and 6 Ω are connected in parallel. Find the equivalent resistance.", model: "1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1. R = 1 Ω.", grades:[11,12] },
        { q: "Describe the working principle of a simple DC electric motor.", model: "A current-carrying rectangular coil placed in a magnetic field experiences forces on its sides (F = BIL), producing a couple that rotates the coil. A split-ring commutator reverses the current direction each half-turn, maintaining continuous rotation. Brushes transfer current from the external supply to the rotating commutator.", grades:[12] }
      ]
    },
    "Waves & Optics": {
      objective: [
        { q: "The speed of light in vacuum is approximately", options: ["3×10⁸ m/s","3×10⁶ m/s","3×10⁴ m/s","3×10² m/s"], answer: 0, grades:[10,11,12] },
        { q: "Sound waves are", options: ["transverse","longitudinal","electromagnetic","stationary only"], answer: 1, grades:[10,11,12] },
        { q: "The frequency of a wave is measured in", options: ["meters","seconds","hertz","newtons"], answer: 2, grades:[10,11,12] },
        { q: "A plane mirror forms an image that is", options: ["real and inverted","virtual and upright","real and upright","virtual and inverted"], answer: 1, grades:[10,11,12] },
        { q: "Refraction occurs because light", options: ["changes color","changes speed in different media","loses energy","bounces back"], answer: 1, grades:[11,12] },
        { q: "The bending of light around obstacles is called", options: ["reflection","refraction","diffraction","dispersion"], answer: 2, grades:[11,12] },
        { q: "Wavelength × frequency =", options: ["amplitude","speed","period","phase"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "Distinguish between reflection and refraction of light, stating the laws.", model: "Reflection: bouncing back from a surface; laws — incident ray, reflected ray and normal are in one plane; angle of incidence = angle of reflection. Refraction: bending as light passes between media; laws — incident ray, refracted ray and normal lie in one plane; sin i / sin r = constant (Snell's law).", grades:[11,12] },
        { q: "A wave has a frequency of 50 Hz and a wavelength of 6 m. Calculate its speed.", model: "v = fλ = 50 × 6 = 300 m/s.", grades:[10,11,12] }
      ]
    }
  },

  "Economics": {
    "Demand & Supply": {
      objective: [
        { q: "As price rises, quantity demanded usually", options: ["rises","falls","stays the same","doubles"], answer: 1, grades:[10,11,12] },
        { q: "The point where demand equals supply is", options: ["shortage","surplus","equilibrium","elasticity"], answer: 2, grades:[10,11,12] },
        { q: "A good whose demand rises when income rises is a", options: ["normal good","inferior good","Giffen good","free good"], answer: 0, grades:[11,12] },
        { q: "Substitutes and complements are examples of", options: ["related goods","factors of production","market failures","public goods"], answer: 0, grades:[11,12] },
        { q: "Price elasticity of demand measures", options: ["responsiveness of quantity demanded to price","consumer income","production cost","market size"], answer: 0, grades:[11,12] },
        { q: "A fall in supply, demand unchanged, leads to", options: ["lower price","higher price","same price","zero price"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "State and explain the law of demand. Give two exceptions.", model: "Law of demand: ceteris paribus, as price falls, quantity demanded rises, and vice versa. Exceptions: Giffen goods (inferior staples, demand rises with price due to income effect); Veblen/ostentatious goods (prestige goods whose demand rises with price).", grades:[11,12] },
        { q: "Explain, with a diagram, how equilibrium price is determined in a market.", model: "Draw demand curve (downward) and supply curve (upward) on price–quantity axes. They intersect at equilibrium: price Pe and quantity Qe. Above Pe, surplus pushes price down. Below Pe, shortage pushes price up. Market clears at Pe.", grades:[11,12] }
      ]
    },
    "Money, Banking & Public Finance": {
      objective: [
        { q: "The primary function of money is as a", options: ["commodity","medium of exchange","unit of beauty","factor of production"], answer: 1, grades:[10,11,12] },
        { q: "A central bank's main role is to", options: ["accept savings from individuals","regulate the money supply and banks","sell goods","insure cars"], answer: 1, grades:[11,12] },
        { q: "A direct tax is imposed on", options: ["goods","income or wealth","imports","exports"], answer: 1, grades:[11,12] },
        { q: "Inflation is a sustained rise in", options: ["employment","general price level","interest rates only","exports"], answer: 1, grades:[10,11,12] },
        { q: "The document that sets out a government's income and expenditure is the", options: ["census","budget","constitution","gazette"], answer: 1, grades:[10,11,12] },
        { q: "VAT is an example of", options: ["direct tax","indirect tax","subsidy","grant"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Outline the functions of a Central Bank.", model: "1) Issuing currency. 2) Banker to the government. 3) Banker to commercial banks. 4) Lender of last resort. 5) Regulator of the financial system. 6) Manager of foreign reserves and exchange rate. 7) Implementing monetary policy to control inflation and money supply.", grades:[11,12] },
        { q: "Distinguish between direct and indirect taxes with two examples each.", model: "Direct taxes are levied on income or wealth of individuals/firms and paid directly to government (e.g., personal income tax, company tax). Indirect taxes are levied on goods and services, passed on to consumers via prices (e.g., VAT, customs duty).", grades:[11,12] }
      ]
    }
  },

  "Government": {
    "Political Ideologies & Systems": {
      objective: [
        { q: "A system where power is held by the people is", options: ["monarchy","democracy","oligarchy","theocracy"], answer: 1, grades:[10,11,12] },
        { q: "Separation of powers divides government into", options: ["two arms","three arms","four arms","five arms"], answer: 1, grades:[10,11,12] },
        { q: "A system with hereditary rulers is a", options: ["republic","monarchy","dictatorship","federation"], answer: 1, grades:[10,11,12] },
        { q: "An ideology that emphasizes state ownership of production is", options: ["capitalism","socialism","liberalism","conservatism"], answer: 1, grades:[11,12] },
        { q: "A written constitution is one that is", options: ["customary","codified in a single document","unwritten","secret"], answer: 1, grades:[11,12] },
        { q: "Rule of law means", options: ["the ruler makes the law","all are equal before the law","law does not apply to leaders","laws change daily"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "Distinguish between a federal and a unitary system of government.", model: "Federal: power is constitutionally divided between a central government and regional/state units (e.g., Nigeria, USA). Unitary: power is concentrated at the center; local units exercise only delegated powers (e.g., France, Ghana pre-1992). Federal systems handle diversity; unitary ones centralize decisions.", grades:[11,12] },
        { q: "State five features of democracy.", model: "1) Popular sovereignty. 2) Periodic free and fair elections. 3) Rule of law. 4) Fundamental human rights. 5) Political pluralism. 6) Separation of powers. 7) Independent judiciary. 8) Freedom of the press.", grades:[10,11,12] }
      ]
    },
    "Organs of Government": {
      objective: [
        { q: "The law-making body is the", options: ["executive","legislature","judiciary","press"], answer: 1, grades:[10,11,12] },
        { q: "The arm that interprets the law is the", options: ["executive","legislature","judiciary","cabinet"], answer: 2, grades:[10,11,12] },
        { q: "The President is the head of the", options: ["legislature","executive","judiciary","police"], answer: 1, grades:[10,11,12] },
        { q: "Nigeria's federal legislature is the", options: ["House of Lords","National Assembly","Parliament","Senate only"], answer: 1, grades:[11,12] },
        { q: "A check on the legislature by the executive is", options: ["impeachment","veto","judicial review","no-confidence vote"], answer: 1, grades:[11,12] },
        { q: "The head of the judiciary in Nigeria is the", options: ["Attorney-General","Chief Justice","Senate President","Speaker"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Discuss the functions of the legislature.", model: "1) Law-making. 2) Representation of constituents. 3) Oversight of the executive. 4) Approval of budget and public expenditure. 5) Ratification of treaties and major appointments. 6) Amendment of the constitution. 7) Serving as a forum for debate on national issues.", grades:[11,12] },
        { q: "Explain the doctrine of separation of powers.", model: "Proposed by Montesquieu: governmental powers should be divided among three distinct organs — legislature (makes laws), executive (implements laws), judiciary (interprets laws) — each independent, to prevent tyranny through checks and balances.", grades:[11,12] }
      ]
    }
  },

  "Geography": {
    "Map Reading & Physical Geography": {
      objective: [
        { q: "The line 0° latitude is called the", options: ["prime meridian","equator","tropic of cancer","arctic circle"], answer: 1, grades:[10,11,12] },
        { q: "A map scale of 1:50,000 means 1 cm represents", options: ["500 m","5 km","0.5 km","50 km"], answer: 2, grades:[10,11,12] },
        { q: "The imaginary line at 0° longitude is the", options: ["equator","prime meridian","tropic of capricorn","international date line"], answer: 1, grades:[10,11,12] },
        { q: "Contour lines show", options: ["rivers","roads","heights of land","forests"], answer: 2, grades:[10,11,12] },
        { q: "The largest ocean is the", options: ["Atlantic","Indian","Pacific","Arctic"], answer: 2, grades:[10,11,12] },
        { q: "The study of landforms is", options: ["meteorology","geomorphology","cartography","climatology"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Describe three agents of erosion and their effects.", model: "Water (rivers/rainfall): carves valleys, creates gullies, deposits sediment downstream. Wind: removes loose particles in arid areas, forms dunes and deflation hollows. Ice (glaciers): scours U-shaped valleys, transports debris, leaves moraines. Waves also erode coasts producing cliffs and beaches.", grades:[11,12] },
        { q: "Explain the differences between weather and climate.", model: "Weather: short-term state of the atmosphere at a place (temperature, rain, wind) over hours/days. Climate: long-term average weather of a region over at least 30 years. Weather changes rapidly; climate changes slowly.", grades:[10,11,12] }
      ]
    },
    "Population & Settlement": {
      objective: [
        { q: "A population growth rate measures change in", options: ["area","number of people","wealth","education"], answer: 1, grades:[10,11,12] },
        { q: "A place where many people live close together is a", options: ["rural area","urban area","desert","forest"], answer: 1, grades:[10,11,12] },
        { q: "Movement of people from rural to urban areas is", options: ["emigration","urbanization","migration from city","colonization"], answer: 1, grades:[10,11,12] },
        { q: "Birth rate minus death rate equals", options: ["migration","natural increase","population density","life expectancy"], answer: 1, grades:[11,12] },
        { q: "A population pyramid with a wide base shows a", options: ["young population","aging population","stable population","declining population"], answer: 0, grades:[11,12] }
      ],
      theory: [
        { q: "Discuss four causes of rural–urban migration in West Africa.", model: "1) Employment opportunities in cities. 2) Better educational facilities. 3) Improved healthcare and social amenities. 4) Desire for modern lifestyles. 5) Poor conditions in rural areas: lack of jobs, poor infrastructure, low crop yields, insecurity.", grades:[11,12] },
        { q: "Describe the factors that influence the location of settlements.", model: "Physical: water supply, relief (flat land), fertile soil, climate, natural defense. Human: trade routes, markets, transportation, security, industrial opportunities, religious/cultural reasons.", grades:[11,12] }
      ]
    }
  },

  "Literature in English": {
    "Prose": {
      objective: [
        { q: "The main character in a novel is the", options: ["antagonist","protagonist","narrator","author"], answer: 1, grades:[10,11,12] },
        { q: "A prose work of imagination is a", options: ["poem","novel","play","essay"], answer: 1, grades:[10,11,12] },
        { q: "Setting refers to", options: ["plot","time and place of action","dialogue","author"], answer: 1, grades:[10,11,12] },
        { q: "A first-person narrator uses", options: ["he/she","they","I/we","you"], answer: 2, grades:[10,11,12] },
        { q: "The central idea of a work is its", options: ["style","theme","character","setting"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "Discuss the major theme of any prose text you have studied.", model: "Identify theme clearly (e.g., power of tradition, gender injustice), provide specific references and examples from the text, analyze how characters/events develop the theme, and conclude with the text's message.", grades:[11,12] }
      ]
    },
    "Drama & Poetry": {
      objective: [
        { q: "A speech by a character alone on stage is a", options: ["dialogue","monologue","soliloquy","aside"], answer: 2, grades:[11,12] },
        { q: "The repetition of initial consonant sounds is", options: ["rhyme","alliteration","assonance","simile"], answer: 1, grades:[10,11,12] },
        { q: "A 14-line poem is a", options: ["ode","sonnet","ballad","epic"], answer: 1, grades:[11,12] },
        { q: "A comparison using 'like' or 'as' is a", options: ["metaphor","simile","personification","hyperbole"], answer: 1, grades:[10,11,12] },
        { q: "Tragedy typically ends in", options: ["marriage","celebration","misfortune/death","reconciliation"], answer: 2, grades:[10,11,12] }
      ],
      theory: [
        { q: "Distinguish between metaphor and simile with two examples each.", model: "Simile: direct comparison using 'like' or 'as' ('her voice is like music'; 'brave as a lion'). Metaphor: implicit comparison without 'like/as' ('her voice is music'; 'he is a lion in battle'). Simile is explicit; metaphor is more compressed and imaginative.", grades:[10,11,12] }
      ]
    }
  },

  "Christian Religious Studies": {
    "Old Testament": {
      objective: [
        { q: "The first book of the Bible is", options: ["Exodus","Genesis","Psalms","Matthew"], answer: 1, grades:[10,11,12] },
        { q: "Who led the Israelites out of Egypt?", options: ["Abraham","David","Moses","Solomon"], answer: 2, grades:[10,11,12] },
        { q: "The Ten Commandments were given at Mount", options: ["Zion","Sinai","Carmel","Horeb"], answer: 1, grades:[10,11,12] },
        { q: "Who was the son of Abraham and Sarah?", options: ["Ishmael","Isaac","Jacob","Joseph"], answer: 1, grades:[10,11,12] },
        { q: "The first king of Israel was", options: ["Saul","David","Solomon","Samuel"], answer: 0, grades:[10,11,12] }
      ],
      theory: [
        { q: "Narrate the call of Abraham and the covenant God made with him.", model: "God called Abram in Genesis 12 to leave Haran for a land He would show him. Covenant: make him into a great nation, bless him, make his name great, and bless all families of the earth through him. Circumcision later became its sign (Gen 17).", grades:[11,12] }
      ]
    },
    "New Testament & Christian Living": {
      objective: [
        { q: "Jesus was born in", options: ["Nazareth","Jerusalem","Bethlehem","Capernaum"], answer: 2, grades:[10,11,12] },
        { q: "The four Gospels are Matthew, Mark, Luke and", options: ["Acts","John","Romans","James"], answer: 1, grades:[10,11,12] },
        { q: "Jesus' first miracle was at", options: ["Jerusalem","Cana","Bethany","Nazareth"], answer: 1, grades:[11,12] },
        { q: "The Holy Spirit descended on the disciples at", options: ["Christmas","Pentecost","Easter","Passover"], answer: 1, grades:[11,12] },
        { q: "The greatest commandment, per Jesus, is to love", options: ["your country","God and neighbor","your friends only","strangers only"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "Discuss the Sermon on the Mount and its relevance to Christian living.", model: "Matt 5–7. Contains the Beatitudes, teachings on anger, adultery, oaths, retaliation, love for enemies, almsgiving, prayer (Lord's Prayer), fasting, treasures in heaven, judging others, the Golden Rule, and the two builders. Relevance: calls Christians to inward righteousness, humility, love, and reliance on God.", grades:[11,12] }
      ]
    }
  },

  "Commerce": {
    "Trade & Aids to Trade": {
      objective: [
        { q: "Buying and selling of goods within a country is", options: ["import trade","export trade","home trade","entrepot"], answer: 2, grades:[10,11,12] },
        { q: "Banking, insurance and advertising are", options: ["home trade","aids to trade","exports","subsidies"], answer: 1, grades:[10,11,12] },
        { q: "A document requesting goods from a supplier is a(n)", options: ["invoice","order","receipt","quotation"], answer: 1, grades:[10,11,12] },
        { q: "Wholesale trade is between", options: ["consumer and retailer","manufacturer and wholesaler/retailer","retailer and consumer","exporter and importer only"], answer: 1, grades:[11,12] },
        { q: "An advertisement is most effective when it", options: ["is long","targets the right audience","uses big words","is free"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "Distinguish between a wholesaler and a retailer.", model: "Wholesaler: buys in bulk from manufacturers and sells in smaller quantities to retailers; handles fewer product lines but larger volumes; usually does not sell to final consumers. Retailer: buys smaller quantities from wholesalers and sells directly to final consumers; deals in variety; provides customer service.", grades:[10,11,12] }
      ]
    },
    "Business Organizations": {
      objective: [
        { q: "A business owned by one person is a", options: ["partnership","sole proprietorship","company","cooperative"], answer: 1, grades:[10,11,12] },
        { q: "A limited liability company's liability is limited to", options: ["the business's debts","shareholders' capital contributions","the director's salary","zero"], answer: 1, grades:[11,12] },
        { q: "Shares sold to the general public are those of a", options: ["sole trader","private company","public limited company","partnership"], answer: 2, grades:[11,12] },
        { q: "A group of people voluntarily coming together to meet common economic needs is a", options: ["partnership","cooperative","corporation","trust"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Compare sole proprietorship and partnership.", model: "Sole proprietorship: one owner, simple to form, unlimited liability, full profit and decision-making, limited capital and skills. Partnership: 2–20 owners, shared capital and skills, shared profits and liability (usually unlimited for general partners), risk of disagreement. Both are unincorporated; companies differ by being separate legal entities.", grades:[11,12] }
      ]
    }
  },

  "Financial Accounting": {
    "Double Entry & Ledger": {
      objective: [
        { q: "Every transaction affects at least", options: ["one account","two accounts","three accounts","four accounts"], answer: 1, grades:[10,11,12] },
        { q: "In double entry, debit the ___ and credit the giver.", options: ["owner","receiver","lender","customer"], answer: 1, grades:[10,11,12] },
        { q: "A trial balance checks the arithmetical accuracy of the", options: ["sales","ledgers","cash","bank"], answer: 1, grades:[10,11,12] },
        { q: "Goods returned by customer are recorded as", options: ["sales","returns inwards","purchases","returns outwards"], answer: 1, grades:[11,12] },
        { q: "An asset is something the business", options: ["owes","owns","sells only","gives away"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "State the golden rules of accounting for personal, real and nominal accounts.", model: "Personal: Debit the receiver, credit the giver. Real (assets): Debit what comes in, credit what goes out. Nominal (expenses/incomes): Debit all expenses and losses, credit all incomes and gains.", grades:[11,12] }
      ]
    },
    "Final Accounts": {
      objective: [
        { q: "Gross profit = Sales −", options: ["Expenses","Cost of sales","Net profit","Purchases only"], answer: 1, grades:[11,12] },
        { q: "Net profit = Gross profit −", options: ["Sales","Expenses","Cost of sales","Opening stock"], answer: 1, grades:[11,12] },
        { q: "The balance sheet shows", options: ["income and expenditure","assets, liabilities and capital","bank transactions only","only assets"], answer: 1, grades:[11,12] },
        { q: "Depreciation is a reduction in the value of a", options: ["current asset","fixed asset","liability","capital"], answer: 1, grades:[11,12] },
        { q: "Working capital = Current assets −", options: ["Fixed assets","Current liabilities","Capital","Net profit"], answer: 1, grades:[11,12] }
      ],
      theory: [
        { q: "Given: Sales 100,000; Purchases 60,000; Opening stock 10,000; Closing stock 15,000; Expenses 12,000. Compute gross and net profit.", model: "Cost of sales = 10,000 + 60,000 − 15,000 = 55,000. Gross profit = 100,000 − 55,000 = 45,000. Net profit = 45,000 − 12,000 = 33,000.", grades:[11,12] }
      ]
    }
  },

  "Agricultural Science": {
    "Crop Production": {
      objective: [
        { q: "Rotation of crops helps to", options: ["increase weeds","maintain soil fertility","reduce rainfall","harden the soil"], answer: 1, grades:[10,11,12] },
        { q: "A leguminous crop fixes", options: ["oxygen","nitrogen","carbon","sulphur"], answer: 1, grades:[10,11,12] },
        { q: "Planting on ridges helps to", options: ["promote flooding","improve drainage","reduce tillage","harvest faster"], answer: 1, grades:[10,11,12] },
        { q: "An example of a cash crop in West Africa is", options: ["yam","maize","cocoa","beans"], answer: 2, grades:[10,11,12] },
        { q: "NPK fertilizer supplies", options: ["only nitrogen","nitrogen, phosphorus, potassium","only potassium","iron and zinc"], answer: 1, grades:[10,11,12] }
      ],
      theory: [
        { q: "Describe the process of yam cultivation from land preparation to harvest.", model: "Site selection (well-drained loamy soil); land clearing and tillage into heaps/mounds or ridges; seed yam/setts selection (healthy, disease-free, ~200–400 g); planting at onset of rains; staking and mulching; weeding 2–3 times; fertilizer application if needed; pest/disease control; harvesting 8–10 months after planting when vines yellow; curing and storage in barns.", grades:[11,12] }
      ]
    },
    "Animal Husbandry": {
      objective: [
        { q: "An example of monogastric livestock is the", options: ["cow","goat","pig","sheep"], answer: 2, grades:[10,11,12] },
        { q: "Incubation period of chicken eggs is about", options: ["7 days","14 days","21 days","28 days"], answer: 2, grades:[10,11,12] },
        { q: "Newcastle disease affects", options: ["cattle","poultry","pigs","fish"], answer: 1, grades:[11,12] },
        { q: "A male goat is called a", options: ["buck","ram","jack","bull"], answer: 0, grades:[11,12] },
        { q: "Milk production is called", options: ["lactation","incubation","gestation","fermentation"], answer: 0, grades:[10,11,12] }
      ],
      theory: [
        { q: "State five principles of good animal husbandry.", model: "1) Proper housing: clean, ventilated, secure. 2) Balanced nutrition and clean water. 3) Disease prevention: vaccination, quarantine, sanitation. 4) Good breeding practices and selection. 5) Record keeping for performance and cost control. 6) Humane handling and stress reduction.", grades:[11,12] }
      ]
    }
  },

  "Further Mathematics": {
    "Sets & Logic": {
      objective: [
        { q: "If A={1,2,3} and B={2,3,4}, A∩B =", options: ["{1}","{2,3}","{4}","{1,2,3,4}"], answer: 1, grades:[11,12] },
        { q: "A ∪ ∅ =", options: ["∅","A","universal set","undefined"], answer: 1, grades:[11,12] },
        { q: "Number of subsets of a set with 4 elements is", options: ["8","12","16","24"], answer: 2, grades:[11,12] },
        { q: "The contrapositive of 'If p then q' is", options: ["If q then p","If not q then not p","If not p then not q","p and q"], answer: 1, grades:[12] }
      ],
      theory: [
        { q: "In a class of 40, 25 study Maths, 20 study Physics and 10 study both. How many study neither?", model: "Using inclusion-exclusion: n(M∪P) = 25 + 20 − 10 = 35. Neither = 40 − 35 = 5.", grades:[11,12] }
      ]
    },
    "Calculus": {
      objective: [
        { q: "d/dx(x³) =", options: ["x²","3x²","3x","x⁴/4"], answer: 1, grades:[11,12] },
        { q: "∫ x² dx =", options: ["x³","x³/3 + C","2x","x² + C"], answer: 1, grades:[11,12] },
        { q: "d/dx(sin x) =", options: ["cos x","−cos x","−sin x","tan x"], answer: 0, grades:[12] },
        { q: "The derivative of a constant is", options: ["0","1","the constant","undefined"], answer: 0, grades:[11,12] }
      ],
      theory: [
        { q: "Find the equation of the tangent to y = x² at x = 2.", model: "dy/dx = 2x → at x=2, slope = 4. Point: (2, 4). Equation: y − 4 = 4(x − 2) → y = 4x − 4.", grades:[12] }
      ]
    }
  }
};

// Grade-filter helper
function questionsFor(subject, topic, type, grade) {
  const arr = (QUESTIONS[subject]?.[topic]?.[type]) || [];
  return arr.filter(q => !q.grades || q.grades.includes(Number(grade)));
}

// Canonical WAEC subject list (64) — mirrors /subjects/*.txt files.
// Subjects without a QUESTIONS entry still show in the dropdown; their
// topic list is empty until questions are seeded for them.
const SUBJECTS = [
  "Agricultural Science",
  "Animal Husbandry",
  "Arabic",
  "Auto Mechanics",
  "Basic Electronics",
  "Biology",
  "Book-Keeping",
  "Building Construction",
  "Business Management",
  "Catering Craft Practice",
  "Chemistry",
  "Christian Religious Studies",
  "Civic Education",
  "Clothing and Textiles",
  "Commerce",
  "Computer Studies",
  "Cosmetology",
  "Dagaare",
  "Dagbani",
  "Data Processing",
  "Economics",
  "Electrical Installation",
  "English Language",
  "Ewe",
  "Fante",
  "Financial Accounting",
  "Fisheries",
  "Food and Nutrition",
  "French",
  "Further Mathematics",
  "Ga",
  "Garment Making",
  "Geography",
  "Gonja",
  "Government",
  "Hausa",
  "Health Education",
  "History",
  "Home Management",
  "Igbo",
  "Insurance",
  "Islamic Religious Studies",
  "Kasem",
  "Leather Goods Manufacturing",
  "Literature in English",
  "Marketing",
  "Mathematics",
  "Metal Work",
  "Music",
  "Nzema",
  "Office Practice",
  "Painting and Decorating",
  "Physical Education",
  "Physics",
  "Salesmanship",
  "Shorthand",
  "Store Management",
  "Technical Drawing",
  "Tourism",
  "Twi (Akuapem)",
  "Twi (Asante)",
  "Visual Art",
  "Woodwork",
  "Yoruba"
];

// Canonical WAEC topic lists per subject (based on WAEC SSCE syllabi).
// Shown in the topic dropdown. Subjects whose QUESTIONS already carry
// populated topics (e.g. Mathematics) will have those real topics
// merged in first, with any remaining canonical topics appended after.
const TOPICS = {
  "Agricultural Science": ["Agricultural Ecology","Crop Production","Animal Production","Soil Science","Farm Mechanization","Agricultural Economics","Agricultural Extension"],
  "Animal Husbandry": ["Anatomy & Physiology of Farm Animals","Animal Nutrition","Reproduction & Breeding","Diseases & Parasites","Livestock Management","Animal Products & Marketing"],
  "Arabic": ["Grammar (Nahw)","Morphology (Sarf)","Comprehension","Composition","Arabic Literature","Islamic-Arabic Texts"],
  "Auto Mechanics": ["Engine Systems","Transmission & Drivetrain","Brakes & Suspension","Electrical Systems","Fuel Systems","Vehicle Maintenance","Workshop Practice"],
  "Basic Electronics": ["DC Circuits","AC Circuits","Semiconductors","Diodes & Transistors","Amplifiers","Digital Electronics","Measurement & Instrumentation"],
  "Biology": ["Cell Biology","Nutrition","Transport","Respiration","Excretion","Coordination","Reproduction","Ecology","Genetics","Evolution","Practical Biology"],
  "Book-Keeping": ["Principles of Book-Keeping","Source Documents","Ledger Accounts","Trial Balance","Cash Book","Final Accounts","Errors & Corrections"],
  "Building Construction": ["Building Materials","Foundations","Walls & Partitions","Roofing","Plumbing & Services","Drawing & Specifications","Site Management"],
  "Business Management": ["Introduction to Business","Functions of Management","Organization Structure","Human Resources","Marketing","Business Finance","Business Ethics"],
  "Catering Craft Practice": ["Kitchen Hygiene & Safety","Food Preparation","Menu Planning","Service Techniques","Costing & Portion Control","Beverages"],
  "Chemistry": ["Atomic Structure","Periodic Table","Chemical Bonding","Stoichiometry","Acids, Bases & Salts","Electrochemistry","Organic Chemistry","Qualitative Analysis","Quantitative Analysis","Chemical Kinetics"],
  "Christian Religious Studies": ["Old Testament","New Testament","Themes in the Bible","Christian Ethics","Church History","Christian Life"],
  "Civic Education": ["Citizenship","Human Rights","Democracy","Rule of Law","Political Participation","Civil Society","National Values"],
  "Clothing and Textiles": ["Textile Fibres & Fabrics","Pattern Drafting","Sewing Techniques","Garment Construction","Care of Clothing","Design Principles"],
  "Commerce": ["Trade","Aids to Trade","Business Organizations","Banking","Insurance","Transport","Advertising","Warehousing"],
  "Computer Studies": ["Computer Fundamentals","Hardware","Software","Operating Systems","Networks & Internet","Word Processing","Spreadsheets","Databases","Programming Basics"],
  "Cosmetology": ["Skin Care","Hair Care","Nail Care","Make-up","Beauty Salon Management","Hygiene & Safety"],
  "Dagaare": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Dagbani": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Data Processing": ["Data & Information","Computer Hardware","Software","Data Models","Database Management","Spreadsheet & Word Processing","Internet & Networking"],
  "Economics": ["Basic Concepts","Production","Demand & Supply","Market Structures","Money & Banking","Public Finance","International Trade","Economic Development","National Income"],
  "Electrical Installation": ["Electrical Safety","Wiring Systems","Cables & Conduits","Lighting Circuits","Power Circuits","Earthing & Protection","Installation Drawings"],
  "English Language": ["Comprehension","Grammar & Structure","Vocabulary","Summary","Essay Writing","Oral English"],
  "Ewe": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Fante": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Financial Accounting": ["Source Documents","Books of Original Entry","Ledger & Trial Balance","Final Accounts","Manufacturing Accounts","Partnership Accounts","Company Accounts"],
  "Fisheries": ["Types of Fisheries","Pond Construction","Fish Species","Fish Feeding & Breeding","Fish Diseases","Fish Preservation","Fisheries Management"],
  "Food and Nutrition": ["Nutrients","Food Groups","Meal Planning","Food Preparation","Food Preservation","Food Hygiene","Family Nutrition"],
  "French": ["Compréhension","Grammaire","Vocabulaire","Composition","Culture Francophone","Conversation"],
  "Further Mathematics": ["Sets & Logic","Algebra","Trigonometry","Calculus","Coordinate Geometry","Vectors","Mechanics","Statistics & Probability"],
  "Ga": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Garment Making": ["Pattern Drafting","Cutting Techniques","Sewing Machines","Stitches & Seams","Garment Finishing","Costing"],
  "Geography": ["Map Reading","Physical Geography","Human Geography","Economic Geography","Regional Geography (Africa)","Practical Geography"],
  "Gonja": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Government": ["Basic Concepts","Nigerian Government & Politics","Public Administration","Political Parties","International Organizations","West African Politics","Constitutional Development"],
  "Hausa": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Health Education": ["Personal Hygiene","Nutrition & Health","Communicable Diseases","Non-communicable Diseases","First Aid","Community Health","Drug Abuse"],
  "History": ["West African Empires","Colonial Era","Nationalism & Independence","Post-Independence Nigeria","West African Relations","World History Themes"],
  "Home Management": ["Family Living","Home Economics","Consumer Education","Housing & Furnishing","Home Hygiene","Resource Management"],
  "Igbo": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Insurance": ["Principles of Insurance","Types of Insurance","Insurance Contracts","Underwriting","Claims","Reinsurance","Insurance Industry"],
  "Islamic Religious Studies": ["Qur'an","Hadith","Tawhid","Fiqh (Worship)","Sirah (Prophet's Life)","Islamic History","Islamic Ethics"],
  "Kasem": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Leather Goods Manufacturing": ["Leather Types & Properties","Tools & Equipment","Pattern Making","Cutting & Sewing","Finishing","Quality Control"],
  "Literature in English": ["Prose","Poetry","Drama","African Literature","Non-African Literature","Literary Devices"],
  "Marketing": ["Marketing Concepts","Market Research","Consumer Behaviour","Product & Pricing","Promotion & Advertising","Distribution Channels","Sales Management"],
  "Mathematics": ["Number & Numeration","Algebra","Geometry & Trigonometry","Statistics & Probability","Mensuration","Calculus"],
  "Metal Work": ["Metal Types & Properties","Hand Tools","Machine Tools","Welding & Soldering","Sheet Metal Work","Forging","Workshop Safety"],
  "Music": ["Music Theory","Notation & Rhythm","African Music","Western Music","Performance","Music Composition"],
  "Nzema": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Office Practice": ["Office Organization","Filing & Indexing","Correspondence","Telephone Techniques","Office Equipment","Reception Duties","Records Management"],
  "Painting and Decorating": ["Paints & Varnishes","Surface Preparation","Painting Techniques","Decorating Tools","Colour Theory","Safety Practices"],
  "Physical Education": ["Athletics","Games & Sports","Gymnastics","Anatomy & Physiology","Fitness & Health","Sports Administration"],
  "Physics": ["Mechanics","Heat","Waves","Light","Electricity","Magnetism","Electronics","Atomic & Nuclear Physics","Practical Physics"],
  "Salesmanship": ["Principles of Salesmanship","Sales Techniques","Customer Relations","Sales Promotion","Sales Management","Consumer Psychology"],
  "Shorthand": ["Shorthand Theory","Outlines & Phrasing","Speed Building","Transcription","Office Dictation"],
  "Store Management": ["Storage Systems","Stock Control","Store Records","Receipts & Issues","Store Security","Inventory Management"],
  "Technical Drawing": ["Drawing Instruments","Geometrical Constructions","Orthographic Projection","Isometric Drawing","Sectional Views","Dimensioning","Development of Surfaces"],
  "Tourism": ["Introduction to Tourism","Tourist Attractions","Travel & Hospitality","Tour Operations","Tourism Marketing","Sustainable Tourism"],
  "Twi (Akuapem)": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Twi (Asante)": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"],
  "Visual Art": ["Drawing & Painting","Sculpture","Graphic Design","Art History","Colour Theory","Craft"],
  "Woodwork": ["Wood Types & Properties","Hand Tools","Machine Tools","Joints & Joinery","Furniture Construction","Finishing Techniques","Workshop Safety"],
  "Yoruba": ["Oral Literature","Grammar","Comprehension","Composition","Culture & Tradition"]
};

// Export catalogue for UI — every subject is listed with its topics.
// Real (seeded) topics from QUESTIONS come first; canonical topics from
// TOPICS that aren't yet seeded are appended so users can still see the
// full syllabus scope.
function catalogue() {
  const out = {};
  for (const subj of SUBJECTS) {
    const seeded = QUESTIONS[subj] ? Object.keys(QUESTIONS[subj]) : [];
    const canonical = TOPICS[subj] || [];
    const merged = seeded.slice();
    for (const t of canonical) if (!merged.includes(t)) merged.push(t);
    out[subj] = merged;
  }
  return out;
}

window.QUESTIONS = QUESTIONS;
window.SUBJECTS = SUBJECTS;
window.TOPICS = TOPICS;
window.questionsFor = questionsFor;
window.catalogue = catalogue;
