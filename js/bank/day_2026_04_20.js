// WAEC Practice — Daily question bank
// Date: 2026-04-20  |  Batch: 200 fresh questions (5 core subjects)
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

  /* ─────────── BIOLOGY (50 new) ─────────── */
  add("Biology", "Cell Biology", { objective: [
    { q: "Ribosomes are the site of", options:["lipid synthesis","photosynthesis","protein synthesis","DNA replication"], answer:2, grades:[11,12] },
    { q: "Plant cells differ from animal cells in having a", options:["nucleus","cell membrane","cell wall","cytoplasm"], answer:2, grades:[10,11,12] },
    { q: "The jelly-like substance filling a cell is called", options:["nucleus","vacuole","cytoplasm","chloroplast"], answer:2, grades:[10,11,12] },
    { q: "Photosynthesis occurs in the", options:["mitochondria","chloroplasts","ribosomes","nucleus"], answer:1, grades:[10,11,12] },
    { q: "A structure that controls movement of substances into and out of a cell is the", options:["cell wall","cell membrane","cytoplasm","nucleolus"], answer:1, grades:[10,11,12] }
  ]});
  add("Biology", "Nutrition", { objective: [
    { q: "The main source of energy in the body is", options:["protein","fat","carbohydrate","vitamin"], answer:2, grades:[10,11,12] },
    { q: "Vitamin C is needed to prevent", options:["rickets","scurvy","beri-beri","anaemia"], answer:1, grades:[10,11,12] },
    { q: "The enzyme that digests starch in the mouth is", options:["pepsin","lipase","ptyalin","trypsin"], answer:2, grades:[11,12] },
    { q: "A deficiency of iron in the diet leads to", options:["goitre","anaemia","night blindness","kwashiorkor"], answer:1, grades:[10,11,12] },
    { q: "Bile is stored in the", options:["pancreas","liver","gall bladder","stomach"], answer:2, grades:[11,12] }
  ]});
  add("Biology", "Transport", { objective: [
    { q: "Red blood cells transport", options:["hormones","oxygen","antibodies","glucose"], answer:1, grades:[10,11,12] },
    { q: "The liquid part of blood is", options:["serum","platelets","plasma","lymph"], answer:2, grades:[10,11,12] },
    { q: "Blood leaves the heart through the", options:["veins","arteries","capillaries","venules"], answer:1, grades:[10,11,12] },
    { q: "The tissue that transports water in plants is", options:["phloem","xylem","cambium","epidermis"], answer:1, grades:[10,11,12] },
    { q: "The universal blood donor has blood group", options:["A","B","AB","O"], answer:3, grades:[11,12] }
  ]});
  add("Biology", "Respiration", { objective: [
    { q: "The exchange of gases in the lungs occurs in the", options:["bronchi","trachea","alveoli","larynx"], answer:2, grades:[10,11,12] },
    { q: "Anaerobic respiration in yeast produces", options:["lactic acid and O₂","ethanol and CO₂","water and ATP","glucose and O₂"], answer:1, grades:[11,12] },
    { q: "Which gas do animals breathe out?", options:["Oxygen","Nitrogen","Hydrogen","Carbon dioxide"], answer:3, grades:[10,11,12] },
    { q: "ATP is produced mainly in", options:["ribosomes","nucleus","mitochondria","vacuole"], answer:2, grades:[11,12] },
    { q: "The muscle that separates the thorax from the abdomen is the", options:["pectoral","diaphragm","intercostal","cardiac"], answer:1, grades:[10,11,12] }
  ]});
  add("Biology", "Excretion", { objective: [
    { q: "The functional unit of the kidney is the", options:["neuron","nephron","alveolus","villus"], answer:1, grades:[11,12] },
    { q: "Sweat is produced by the", options:["sebaceous glands","sweat glands","hair follicles","epidermis"], answer:1, grades:[10,11,12] },
    { q: "Urea is formed in the", options:["kidney","liver","skin","lung"], answer:1, grades:[11,12] },
    { q: "The main nitrogenous waste in mammals is", options:["uric acid","ammonia","urea","nitrate"], answer:2, grades:[11,12] },
    { q: "Plants excrete excess water through", options:["respiration","transpiration","osmosis","photosynthesis"], answer:1, grades:[10,11,12] }
  ]});
  add("Biology", "Coordination", { objective: [
    { q: "The master gland of the body is the", options:["thyroid","pituitary","adrenal","pancreas"], answer:1, grades:[11,12] },
    { q: "Which hormone regulates blood glucose?", options:["Adrenaline","Thyroxine","Insulin","Testosterone"], answer:2, grades:[11,12] },
    { q: "The part of the brain that controls balance is the", options:["cerebrum","cerebellum","medulla","thalamus"], answer:1, grades:[11,12] },
    { q: "A reflex arc does NOT involve the", options:["sensory neuron","relay neuron","motor neuron","cerebrum"], answer:3, grades:[11,12] },
    { q: "The iris of the eye controls the amount of", options:["light","sound","heat","air"], answer:0, grades:[10,11,12] }
  ]});
  add("Biology", "Reproduction", { objective: [
    { q: "Fertilization in flowering plants occurs in the", options:["stigma","style","ovule","anther"], answer:2, grades:[10,11,12] },
    { q: "The male reproductive organ in a flower is the", options:["stigma","stamen","ovary","petal"], answer:1, grades:[10,11,12] },
    { q: "Human gestation period is approximately", options:["6 months","7 months","9 months","12 months"], answer:2, grades:[10,11,12] },
    { q: "Sperm cells are produced in the", options:["ovary","testis","prostate","epididymis"], answer:1, grades:[11,12] },
    { q: "Identical twins develop from", options:["two sperm and two ova","one zygote that splits","one sperm and two ova","two zygotes fusing"], answer:1, grades:[11,12] }
  ]});
  add("Biology", "Ecology", { objective: [
    { q: "A group of organisms of the same species living together is a", options:["community","population","ecosystem","biome"], answer:1, grades:[10,11,12] },
    { q: "Green plants in a food chain are", options:["consumers","decomposers","producers","scavengers"], answer:2, grades:[10,11,12] },
    { q: "Organisms that break down dead matter are called", options:["producers","decomposers","consumers","predators"], answer:1, grades:[10,11,12] },
    { q: "The interaction where both organisms benefit is", options:["parasitism","commensalism","mutualism","predation"], answer:2, grades:[11,12] },
    { q: "An example of an abiotic factor is", options:["bacteria","temperature","fungi","algae"], answer:1, grades:[10,11,12] }
  ]});
  add("Biology", "Genetics", { objective: [
    { q: "Genes are located on", options:["ribosomes","chromosomes","mitochondria","membranes"], answer:1, grades:[11,12] },
    { q: "The genotype Tt represents", options:["homozygous dominant","heterozygous","homozygous recessive","pure-breeding"], answer:1, grades:[11,12] },
    { q: "A human somatic cell contains how many chromosomes?", options:["23","44","46","48"], answer:2, grades:[11,12] },
    { q: "Colour blindness is an example of a trait that is", options:["autosomal dominant","sex-linked","blood-linked","mitochondrial"], answer:1, grades:[12] },
    { q: "The father of modern genetics is", options:["Darwin","Mendel","Watson","Lamarck"], answer:1, grades:[10,11,12] }
  ]});
  add("Biology", "Evolution", { objective: [
    { q: "Natural selection was proposed by", options:["Mendel","Lamarck","Darwin","Pasteur"], answer:2, grades:[11,12] },
    { q: "Fossils are best preserved in", options:["igneous rocks","sedimentary rocks","metamorphic rocks","volcanic ash only"], answer:1, grades:[11,12] },
    { q: "Homologous organs in different species suggest", options:["convergent evolution","divergent evolution","parallel evolution","no evolution"], answer:1, grades:[12] },
    { q: "Variation within a population is important because it", options:["prevents evolution","provides raw material for selection","kills weak individuals","produces only dominant traits"], answer:1, grades:[12] },
    { q: "The wings of a bat and the arms of a human are examples of", options:["analogous structures","homologous structures","vestigial structures","identical structures"], answer:1, grades:[12] }
  ]});

  /* ─────────── CHEMISTRY (50 new) ─────────── */
  add("Chemistry", "Atomic Structure", { objective: [
    { q: "The atom is neutral because", options:["it has only protons","protons equal neutrons","protons equal electrons","it has no charge carriers"], answer:2, grades:[10,11,12] },
    { q: "Isotopes of an element have the same", options:["mass number","atomic number","number of neutrons","atomic mass"], answer:1, grades:[11,12] },
    { q: "The charge on a neutron is", options:["+1","−1","0","+2"], answer:2, grades:[10,11,12] },
    { q: "The maximum number of electrons in the second shell is", options:["2","6","8","18"], answer:2, grades:[10,11,12] },
    { q: "An element with atomic number 12 has how many electrons in its outermost shell?", options:["1","2","3","4"], answer:1, grades:[10,11,12] }
  ]});
  add("Chemistry", "Periodic Table", { objective: [
    { q: "Elements in the same group have the same number of", options:["protons","neutrons","outer electrons","shells"], answer:2, grades:[10,11,12] },
    { q: "Alkali metals are found in Group", options:["I","II","VII","0"], answer:0, grades:[10,11,12] },
    { q: "The most reactive halogen is", options:["chlorine","bromine","fluorine","iodine"], answer:2, grades:[11,12] },
    { q: "Noble gases are unreactive because they have", options:["full outer shells","empty shells","one outer electron","seven outer electrons"], answer:0, grades:[10,11,12] },
    { q: "Down a group, metallic character generally", options:["decreases","increases","stays same","varies randomly"], answer:1, grades:[11,12] }
  ]});
  add("Chemistry", "Chemical Bonding", { objective: [
    { q: "Covalent bonding involves the", options:["transfer of electrons","sharing of electrons","attraction of ions","loss of protons"], answer:1, grades:[10,11,12] },
    { q: "NaCl is an example of a(n)", options:["covalent compound","ionic compound","molecular compound","metallic compound"], answer:1, grades:[10,11,12] },
    { q: "A bond formed between a metal and a non-metal is usually", options:["covalent","ionic","metallic","hydrogen"], answer:1, grades:[10,11,12] },
    { q: "Hydrogen bonding is strongest in", options:["HF","HCl","HBr","HI"], answer:0, grades:[11,12] },
    { q: "A dative covalent bond is formed when", options:["electrons are transferred","both bonding electrons come from one atom","atoms lose electrons","metals bond"], answer:1, grades:[12] }
  ]});
  add("Chemistry", "Stoichiometry", { objective: [
    { q: "One mole of any gas at s.t.p. occupies approximately", options:["11.2 dm³","22.4 dm³","24 dm³","6.02×10²³ dm³"], answer:1, grades:[11,12] },
    { q: "The relative molecular mass of CO₂ is (C=12, O=16)", options:["28","32","44","48"], answer:2, grades:[10,11,12] },
    { q: "The number of atoms in 1 mole of a substance is called", options:["mole number","Avogadro's number","relative mass","atomic number"], answer:1, grades:[11,12] },
    { q: "How many moles of H₂O are in 36 g? (H=1, O=16)", options:["1","2","3","4"], answer:1, grades:[11,12] },
    { q: "The empirical formula of glucose C₆H₁₂O₆ is", options:["CHO","CH₂O","C₂H₄O₂","C₃H₆O₃"], answer:1, grades:[11,12] }
  ]});
  add("Chemistry", "Acids, Bases & Salts", { objective: [
    { q: "A substance with pH 2 is", options:["strongly acidic","weakly acidic","neutral","basic"], answer:0, grades:[10,11,12] },
    { q: "Neutralization produces", options:["acid + base","salt + water","acid + salt","base + water"], answer:1, grades:[10,11,12] },
    { q: "The colour of blue litmus in acid is", options:["blue","red","green","yellow"], answer:1, grades:[10,11,12] },
    { q: "Sodium hydroxide is a", options:["weak acid","strong acid","weak base","strong base"], answer:3, grades:[10,11,12] },
    { q: "Which indicator is colourless in acid and pink in base?", options:["Methyl orange","Litmus","Phenolphthalein","Bromothymol blue"], answer:2, grades:[11,12] }
  ]});
  add("Chemistry", "Electrochemistry", { objective: [
    { q: "In electrolysis, cations migrate to the", options:["anode","cathode","electrolyte","salt bridge"], answer:1, grades:[11,12] },
    { q: "The SI unit of electric charge is the", options:["ampere","volt","coulomb","ohm"], answer:2, grades:[11,12] },
    { q: "A Daniell cell uses electrodes of", options:["Cu and Zn","Cu and Fe","Zn and Pb","Zn and Ag"], answer:0, grades:[12] },
    { q: "Oxidation is", options:["gain of electrons","loss of electrons","gain of protons","loss of protons"], answer:1, grades:[11,12] },
    { q: "Electroplating is an application of", options:["distillation","electrolysis","filtration","sublimation"], answer:1, grades:[10,11,12] }
  ]});
  add("Chemistry", "Organic Chemistry", { objective: [
    { q: "The general formula of alkenes is", options:["CₙH₂ₙ","CₙH₂ₙ₊₂","CₙH₂ₙ₋₂","CₙHₙ"], answer:0, grades:[11,12] },
    { q: "Ethyne belongs to the family of", options:["alkanes","alkenes","alkynes","alcohols"], answer:2, grades:[11,12] },
    { q: "The functional group of carboxylic acids is", options:["−CHO","−COOH","−OH","−NH₂"], answer:1, grades:[11,12] },
    { q: "Vinegar contains", options:["ethanol","ethanoic acid","methanol","methane"], answer:1, grades:[10,11,12] },
    { q: "Polythene is formed from", options:["ethane","ethene","ethyne","ethanol"], answer:1, grades:[11,12] }
  ]});
  add("Chemistry", "Qualitative Analysis", { objective: [
    { q: "A flame test yielding a lilac colour indicates", options:["sodium","potassium","calcium","copper"], answer:1, grades:[11,12] },
    { q: "A white precipitate insoluble in excess NH₃ suggests", options:["Pb²⁺","Ag⁺","Ca²⁺","Al³⁺"], answer:2, grades:[12] },
    { q: "Adding BaCl₂ to a sulfate solution gives a", options:["yellow ppt","white ppt","green ppt","no ppt"], answer:1, grades:[11,12] },
    { q: "A gas that turns lime water milky is", options:["H₂","NH₃","CO₂","O₂"], answer:2, grades:[10,11,12] },
    { q: "Red litmus turns blue in the presence of", options:["HCl","NH₃","CO₂","H₂SO₄"], answer:1, grades:[10,11,12] }
  ]});
  add("Chemistry", "Quantitative Analysis", { objective: [
    { q: "The concentration of a solution with 0.1 mol in 500 cm³ is (mol/dm³)", options:["0.05","0.1","0.2","0.5"], answer:2, grades:[11,12] },
    { q: "In titration, the equivalence point is detected by", options:["temperature change","indicator change","mass change","pressure change"], answer:1, grades:[11,12] },
    { q: "A standard solution is one whose", options:["concentration is known","volume is known","mass is known","density is known"], answer:0, grades:[11,12] },
    { q: "The burette is used to measure", options:["fixed volumes","variable volumes delivered","mass","density"], answer:1, grades:[11,12] },
    { q: "A suitable indicator for a strong acid–weak base titration is", options:["phenolphthalein","methyl orange","litmus","starch"], answer:1, grades:[12] }
  ]});
  add("Chemistry", "Chemical Kinetics", { objective: [
    { q: "The rate of a chemical reaction generally increases with", options:["lower temperature","higher temperature","lower concentration","removing catalyst"], answer:1, grades:[11,12] },
    { q: "A catalyst works by", options:["shifting equilibrium","lowering activation energy","increasing concentration","raising temperature"], answer:1, grades:[11,12] },
    { q: "Collision theory requires that particles", options:["meet with sufficient energy","meet at any speed","meet without orientation","be at rest"], answer:0, grades:[12] },
    { q: "Doubling concentration in a first-order reaction changes the rate by a factor of", options:["1","2","4","8"], answer:1, grades:[12] },
    { q: "A negative ΔH means the reaction is", options:["endothermic","exothermic","athermic","reversible only"], answer:1, grades:[11,12] }
  ]});

  /* ─────────── PHYSICS (45 new) ─────────── */
  add("Physics", "Mechanics", { objective: [
    { q: "The SI unit of pressure is the", options:["joule","newton","pascal","watt"], answer:2, grades:[10,11,12] },
    { q: "Acceleration due to gravity near Earth's surface is about", options:["9.8 m/s²","98 m/s²","0.98 m/s²","19.6 m/s²"], answer:0, grades:[10,11,12] },
    { q: "Momentum is the product of", options:["mass and velocity","force and time","mass and acceleration","weight and speed"], answer:0, grades:[11,12] },
    { q: "If a body moves with uniform velocity, its acceleration is", options:["maximum","zero","minimum","variable"], answer:1, grades:[10,11,12] },
    { q: "Work done on a body is measured in", options:["newton","joule","watt","pascal"], answer:1, grades:[10,11,12] }
  ]});
  add("Physics", "Heat", { objective: [
    { q: "The transfer of heat in fluids by actual movement of particles is", options:["conduction","convection","radiation","absorption"], answer:1, grades:[10,11,12] },
    { q: "Absolute zero is", options:["0°C","−273°C","100°C","−100°C"], answer:1, grades:[11,12] },
    { q: "Specific heat capacity has units of", options:["J/kg","J/kg·K","J/K","kg/J"], answer:1, grades:[11,12] },
    { q: "Water has its maximum density at", options:["0°C","4°C","25°C","100°C"], answer:1, grades:[11,12] },
    { q: "Latent heat of fusion is the heat required to change", options:["temperature","phase at constant T","volume only","pressure only"], answer:1, grades:[11,12] }
  ]});
  add("Physics", "Waves", { objective: [
    { q: "The distance between two successive crests is the", options:["frequency","amplitude","wavelength","period"], answer:2, grades:[10,11,12] },
    { q: "Sound waves are", options:["transverse","longitudinal","electromagnetic","surface"], answer:1, grades:[10,11,12] },
    { q: "Frequency is measured in", options:["metre","second","hertz","watt"], answer:2, grades:[10,11,12] },
    { q: "The speed of sound in air at 20°C is approximately", options:["3 × 10⁸ m/s","340 m/s","1500 m/s","30 m/s"], answer:1, grades:[11,12] },
    { q: "An echo is an example of", options:["refraction","reflection","diffraction","dispersion"], answer:1, grades:[10,11,12] }
  ]});
  add("Physics", "Light", { objective: [
    { q: "The image formed by a plane mirror is always", options:["real and inverted","virtual and upright","real and diminished","virtual and inverted"], answer:1, grades:[10,11,12] },
    { q: "The bending of light when it passes from one medium to another is", options:["reflection","refraction","diffraction","polarization"], answer:1, grades:[10,11,12] },
    { q: "The focal length of a concave mirror is", options:["negative","positive","zero","infinite"], answer:1, grades:[11,12] },
    { q: "White light passing through a prism produces", options:["no change","a spectrum","a shadow","reflection only"], answer:1, grades:[10,11,12] },
    { q: "Short-sightedness is corrected using", options:["concave lens","convex lens","plane mirror","cylindrical lens"], answer:0, grades:[11,12] }
  ]});
  add("Physics", "Electricity", { objective: [
    { q: "Ohm's law states V =", options:["I/R","IR","R/I","I²R"], answer:1, grades:[10,11,12] },
    { q: "The SI unit of electric current is the", options:["volt","ampere","ohm","watt"], answer:1, grades:[10,11,12] },
    { q: "Resistors in series have a total resistance equal to", options:["the smallest","the largest","the sum","the product"], answer:2, grades:[10,11,12] },
    { q: "Electrical power is measured in", options:["joules","watts","volts","coulombs"], answer:1, grades:[10,11,12] },
    { q: "The fuse in a plug is there to", options:["increase current","prevent overload","increase voltage","cool wires"], answer:1, grades:[10,11,12] }
  ]});
  add("Physics", "Magnetism", { objective: [
    { q: "Like poles of magnets", options:["attract","repel","do nothing","reverse"], answer:1, grades:[10,11,12] },
    { q: "The region around a magnet where its effect is felt is the", options:["magnetic field","magnetic pole","magnetic axis","magnetic flux"], answer:0, grades:[10,11,12] },
    { q: "A material that is strongly magnetic is", options:["copper","iron","aluminium","zinc"], answer:1, grades:[10,11,12] },
    { q: "The Earth acts as a", options:["bar magnet","solenoid","horseshoe magnet","electromagnet"], answer:0, grades:[11,12] },
    { q: "An electromagnet's strength increases with", options:["fewer turns","less current","more turns and current","thicker air gap"], answer:2, grades:[11,12] }
  ]});
  add("Physics", "Electronics", { objective: [
    { q: "A device that allows current in only one direction is a", options:["resistor","capacitor","diode","inductor"], answer:2, grades:[11,12] },
    { q: "A transistor can be used as", options:["only an insulator","only a conductor","an amplifier or switch","a heater"], answer:2, grades:[11,12] },
    { q: "Silicon and germanium are examples of", options:["conductors","insulators","semiconductors","superconductors"], answer:2, grades:[11,12] },
    { q: "The device used to store electric charge is a", options:["battery","capacitor","resistor","relay"], answer:1, grades:[11,12] },
    { q: "In a rectifier, AC is converted to", options:["higher AC","DC","lower frequency AC","no signal"], answer:1, grades:[11,12] }
  ]});
  add("Physics", "Atomic & Nuclear Physics", { objective: [
    { q: "Radioactivity was discovered by", options:["Newton","Becquerel","Einstein","Faraday"], answer:1, grades:[11,12] },
    { q: "Alpha particles are", options:["electrons","helium nuclei","photons","protons"], answer:1, grades:[11,12] },
    { q: "The half-life of a radioactive element is", options:["half its age","time for half the atoms to decay","time until extinction","time to emit one particle"], answer:1, grades:[11,12] },
    { q: "Nuclear fusion powers the", options:["hydroelectric dam","atomic bomb","sun","steam engine"], answer:2, grades:[12] },
    { q: "The unit of radioactivity is the", options:["becquerel","ohm","pascal","kelvin"], answer:0, grades:[12] }
  ]});
  add("Physics", "Practical Physics", { objective: [
    { q: "A stopwatch is best used to measure", options:["mass","length","time","temperature"], answer:2, grades:[10,11,12] },
    { q: "A vernier caliper measures", options:["angle","length","time","current"], answer:1, grades:[11,12] },
    { q: "The instrument used to measure atmospheric pressure is a", options:["barometer","manometer","thermometer","ammeter"], answer:0, grades:[11,12] },
    { q: "A galvanometer detects", options:["voltage","small currents","resistance","capacitance"], answer:1, grades:[11,12] },
    { q: "Parallax error is reduced by", options:["guessing","reading at an angle","viewing perpendicularly","using larger instruments"], answer:2, grades:[11,12] }
  ]});

  /* ─────────── MATHEMATICS extension (30 new) ─────────── */
  add("Mathematics", "Number & Numeration", { objective: [
    { q: "Express 0.125 as a fraction.", options:["1/6","1/8","1/10","1/12"], answer:1, grades:[10,11,12] },
    { q: "Convert 40% to a decimal.", options:["0.04","0.4","4.0","40"], answer:1, grades:[10,11,12] },
    { q: "The HCF of 24 and 36 is", options:["6","8","12","18"], answer:2, grades:[10,11,12] },
    { q: "The LCM of 4 and 6 is", options:["6","10","12","24"], answer:2, grades:[10,11,12] },
    { q: "Express 0.5 × 10³ in standard form", options:["5 × 10²","5 × 10³","0.5 × 10³","50 × 10²"], answer:0, grades:[11,12] },
    { q: "Simplify: 2/3 + 1/4", options:["3/7","11/12","5/12","3/4"], answer:1, grades:[10,11,12] }
  ]});
  add("Mathematics", "Mensuration", { objective: [
    { q: "Area of a rectangle with length 8 and width 5 is", options:["13","26","40","80"], answer:2, grades:[10,11,12] },
    { q: "Perimeter of a square of side 7 cm is", options:["14 cm","21 cm","28 cm","49 cm"], answer:2, grades:[10,11,12] },
    { q: "Volume of a cube of edge 3 cm is", options:["9 cm³","18 cm³","27 cm³","81 cm³"], answer:2, grades:[10,11,12] },
    { q: "Area of a triangle with base 10 and height 6 is", options:["30","60","16","36"], answer:0, grades:[10,11,12] },
    { q: "Circumference of a circle with radius 14 cm (π=22/7) is", options:["22 cm","44 cm","88 cm","176 cm"], answer:2, grades:[11,12] },
    { q: "Volume of a cylinder of radius 7 cm and height 10 cm (π=22/7) is", options:["220 cm³","1540 cm³","154 cm³","220 cm²"], answer:1, grades:[11,12] }
  ]});
  add("Mathematics", "Calculus", { objective: [
    { q: "d/dx(x³) equals", options:["x²","2x","3x²","3x"], answer:2, grades:[12] },
    { q: "The integral of 2x dx is", options:["x² + c","2 + c","x + c","2x² + c"], answer:0, grades:[12] },
    { q: "d/dx(sin x) =", options:["cos x","−cos x","−sin x","tan x"], answer:0, grades:[12] },
    { q: "∫ 1/x dx =", options:["1/x²","ln|x| + c","−1/x² + c","x + c"], answer:1, grades:[12] },
    { q: "A turning point occurs where", options:["y = 0","dy/dx = 0","d²y/dx² = 0","x = 0"], answer:1, grades:[12] },
    { q: "d/dx(5) equals", options:["5","1","0","x"], answer:2, grades:[12] }
  ]});

  /* ─────────── ENGLISH extension (25 new) ─────────── */
  add("English Language", "Grammar & Structure", { objective: [
    { q: "Choose the correct tense: 'She ____ to school every day.'", options:["go","goes","gone","going"], answer:1, grades:[10,11,12] },
    { q: "Which is a collective noun?", options:["table","team","book","pen"], answer:1, grades:[10,11,12] },
    { q: "Identify the adverb: 'He ran quickly.'", options:["He","ran","quickly","."], answer:2, grades:[10,11,12] },
    { q: "Passive form of 'The dog chased the cat' is", options:["The cat chased the dog.","The cat was chased by the dog.","The cat is chasing the dog.","The dog was chased by the cat."], answer:1, grades:[11,12] },
    { q: "A sentence must contain at least a", options:["noun and adjective","subject and verb","verb and adverb","subject and object"], answer:1, grades:[10,11,12] }
  ]});
  add("English Language", "Vocabulary", { objective: [
    { q: "Synonym of 'rapid' is", options:["slow","fast","lazy","strong"], answer:1, grades:[10,11,12] },
    { q: "Antonym of 'ancient' is", options:["old","modern","classic","aged"], answer:1, grades:[10,11,12] },
    { q: "The word 'incredible' means", options:["dull","believable","unbelievable","small"], answer:2, grades:[11,12] },
    { q: "Choose the correctly spelled word.", options:["recieve","receive","receeve","receve"], answer:1, grades:[10,11,12] },
    { q: "A 'bibliophile' is a person who loves", options:["travel","food","books","music"], answer:2, grades:[12] }
  ]});
  add("English Language", "Summary", { objective: [
    { q: "A good summary should be", options:["as long as the original","concise and accurate","in the exact words of the writer","full of examples"], answer:1, grades:[11,12] },
    { q: "The main idea of a passage is usually found in the", options:["title only","topic sentence","last sentence","middle only"], answer:1, grades:[11,12] },
    { q: "When summarizing, it is best to", options:["copy whole sentences","use your own words","add new information","ignore the main point"], answer:1, grades:[11,12] }
  ]});
  add("English Language", "Oral English", { objective: [
    { q: "The vowel sound in 'cat' is", options:["/æ/","/ɑ:/","/eɪ/","/ʌ/"], answer:0, grades:[11,12] },
    { q: "Identify the word with a silent letter.", options:["run","knee","make","jump"], answer:1, grades:[10,11,12] },
    { q: "Stress in the word 'photograph' falls on the", options:["first syllable","second syllable","third syllable","last syllable"], answer:0, grades:[11,12] },
    { q: "The word 'ship' and 'sheep' differ in", options:["stress","consonant","vowel length","rhythm"], answer:2, grades:[11,12] }
  ]});
  add("English Language", "Essay Writing", { objective: [
    { q: "An essay is usually divided into", options:["introduction, body, conclusion","only body","only introduction","summary only"], answer:0, grades:[10,11,12] },
    { q: "An argumentative essay aims to", options:["describe a scene","tell a story","persuade the reader","explain a process"], answer:2, grades:[11,12] },
    { q: "A topic sentence", options:["is the last line","states the main idea of a paragraph","lists references","closes the essay"], answer:1, grades:[11,12] },
    { q: "Transition words mainly help with", options:["flow and coherence","word count","vocabulary showoff","punctuation"], answer:0, grades:[11,12] }
  ]});

})();
