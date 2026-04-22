// WAEC Practice — Daily question bank
// Date: 2026-04-21  |  Batch: 500 fresh questions (10 priority subjects at zero count)
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

  /* ─────────── ANIMAL HUSBANDRY (50 new) ─────────── */
  add("Animal Husbandry", "Anatomy & Physiology of Farm Animals", { objective: [
    { q: "The stomach of a ruminant has how many compartments?", options:["2","3","4","5"], answer:2, grades:[10,11,12] },
    { q: "The compartment of the ruminant stomach where microbial fermentation mainly occurs is the", options:["abomasum","omasum","reticulum","rumen"], answer:3, grades:[11,12] },
    { q: "The true (glandular) stomach of a cow is the", options:["rumen","abomasum","omasum","reticulum"], answer:1, grades:[11,12] },
    { q: "The normal body temperature of a healthy cow is about", options:["37 °C","38.5 °C","40 °C","42 °C"], answer:1, grades:[11,12] },
    { q: "The red pigment in the blood that transports oxygen is", options:["myoglobin","haemoglobin","chlorophyll","melanin"], answer:1, grades:[10,11,12] }
  ]});
  add("Animal Husbandry", "Animal Nutrition", { objective: [
    { q: "A feed ingredient rich in protein for poultry is", options:["maize","soya bean meal","cassava","palm oil"], answer:1, grades:[10,11,12] },
    { q: "A roughage is characterised by", options:["low fibre, high energy","high fibre, low energy","high protein","high fat"], answer:1, grades:[11,12] },
    { q: "A deficiency of calcium in layers leads to", options:["feather pecking","soft-shelled eggs","leg paralysis","coccidiosis"], answer:1, grades:[11,12] },
    { q: "Molasses is added to livestock feed mainly to", options:["increase protein","improve palatability","prevent disease","add fibre"], answer:1, grades:[11,12] },
    { q: "Vitamin A deficiency in cattle leads to", options:["night blindness","scurvy","rickets","anaemia"], answer:0, grades:[11,12] }
  ]});
  add("Animal Husbandry", "Reproduction & Breeding", { objective: [
    { q: "The gestation period of a cow is approximately", options:["3 months","6 months","9 months","12 months"], answer:2, grades:[10,11,12] },
    { q: "Artificial insemination in cattle uses", options:["sperm from a bull","fertilised ova","embryo transfer","hormones only"], answer:0, grades:[11,12] },
    { q: "Crossing two pure breeds to produce a superior offspring is called", options:["inbreeding","line breeding","crossbreeding","selection"], answer:2, grades:[11,12] },
    { q: "Heat (oestrus) in a cow recurs every", options:["7 days","14 days","21 days","30 days"], answer:2, grades:[11,12] },
    { q: "A female pig that has farrowed is called a", options:["gilt","sow","boar","barrow"], answer:1, grades:[11,12] }
  ]});
  add("Animal Husbandry", "Diseases & Parasites", { objective: [
    { q: "A viral disease of poultry characterised by twisted necks is", options:["coccidiosis","Newcastle disease","fowl pox","bumble foot"], answer:1, grades:[11,12] },
    { q: "Foot-and-mouth disease mainly affects", options:["poultry","rabbits","cloven-hoofed animals","dogs"], answer:2, grades:[11,12] },
    { q: "Anaplasmosis in cattle is transmitted by", options:["ticks","snails","flies","mosquitoes"], answer:0, grades:[11,12] },
    { q: "Dipping cattle is mainly used to control", options:["worms","viruses","ectoparasites","foot rot"], answer:2, grades:[10,11,12] },
    { q: "A bacterial disease that causes abortion in cattle is", options:["brucellosis","anthrax","rinderpest","trypanosomiasis"], answer:0, grades:[12] }
  ]});
  add("Animal Husbandry", "Livestock Management", { objective: [
    { q: "The deep-litter system is commonly used for rearing", options:["pigs","poultry","goats","cattle"], answer:1, grades:[10,11,12] },
    { q: "Dehorning of cattle is done to", options:["increase milk","prevent injury","improve growth","control lice"], answer:1, grades:[11,12] },
    { q: "Weaning in pigs typically occurs at", options:["1 week","4–8 weeks","6 months","1 year"], answer:1, grades:[11,12] },
    { q: "A common cause of stress in intensively housed poultry is", options:["overcrowding","low temperature","adequate feed","natural light"], answer:0, grades:[11,12] },
    { q: "Castration of male animals is done to", options:["improve fertility","reduce aggression and improve meat","promote horn growth","increase milk yield"], answer:1, grades:[11,12] }
  ]});
  add("Animal Husbandry", "Animal Products & Marketing", { objective: [
    { q: "Pasteurisation of milk is carried out to", options:["improve taste","kill pathogens","add flavour","thicken milk"], answer:1, grades:[10,11,12] },
    { q: "A by-product of the dairy industry used as animal feed is", options:["whey","yoghurt","butter","cheese"], answer:0, grades:[11,12] },
    { q: "The yellow colour of egg yolk in hens is largely due to", options:["carotenoids in feed","age of the hen","sunlight","cross-breeding"], answer:0, grades:[11,12] },
    { q: "Smoking of fish is primarily a method of", options:["flavour improvement","preservation","colouring","packaging"], answer:1, grades:[10,11,12] },
    { q: "Cold storage preserves meat mainly by", options:["killing bacteria","slowing bacterial action","adding salt","drying"], answer:1, grades:[11,12] }
  ]});
  // Fill remaining slots to reach 50
  add("Animal Husbandry", "Anatomy & Physiology of Farm Animals", { objective: [
    { q: "Chewing of the cud in ruminants is called", options:["regurgitation","rumination","mastication","peristalsis"], answer:1, grades:[11,12] },
    { q: "The heart of a mammal has", options:["2 chambers","3 chambers","4 chambers","5 chambers"], answer:2, grades:[10,11,12] },
    { q: "Milk in cattle is produced in the", options:["oviduct","udder","ovary","placenta"], answer:1, grades:[10,11,12] },
    { q: "The skeleton of a bird is made light by", options:["thick bones","hollow bones","absence of bones","wax deposits"], answer:1, grades:[11,12] },
    { q: "Rabbits possess a large caecum because they are", options:["ruminants","hindgut fermenters","carnivores","monogastrics without fermentation"], answer:1, grades:[12] }
  ]});
  add("Animal Husbandry", "Livestock Management", { objective: [
    { q: "A suitable flooring material for a poultry deep litter house is", options:["wet sand","wood shavings","broken glass","metal sheets"], answer:1, grades:[10,11,12] },
    { q: "Vaccination of day-old chicks against Marek's disease is done at", options:["1 day","2 weeks","4 weeks","8 weeks"], answer:0, grades:[12] },
    { q: "Culling in poultry means", options:["feeding","removing poor producers","treating disease","vaccinating"], answer:1, grades:[11,12] },
    { q: "Debeaking of chickens is done to", options:["increase egg weight","prevent cannibalism","improve feather growth","reduce feed"], answer:1, grades:[11,12] },
    { q: "A brooder is used to provide ___ for chicks.", options:["water","warmth","medicine","darkness"], answer:1, grades:[10,11,12] }
  ]});
  add("Animal Husbandry", "Animal Nutrition", { objective: [
    { q: "A concentrate feed is high in", options:["fibre, low in energy","energy or protein, low in fibre","water","vitamins only"], answer:1, grades:[11,12] },
    { q: "Silage is produced by", options:["drying grass","anaerobic fermentation of green fodder","baking grains","roasting feeds"], answer:1, grades:[12] },
    { q: "Salt licks supply livestock with", options:["proteins","minerals","vitamins","fats"], answer:1, grades:[10,11,12] }
  ]});
  add("Animal Husbandry", "Diseases & Parasites", { objective: [
    { q: "Liver fluke infection in sheep is transmitted through", options:["ticks","water snails","mosquitoes","flies"], answer:1, grades:[12] },
    { q: "Coccidiosis in poultry is caused by a", options:["bacterium","virus","protozoan","fungus"], answer:2, grades:[11,12] }
  ]});
  add("Animal Husbandry", "Reproduction & Breeding", { theory: [
    { q: "State four advantages of artificial insemination (AI) in livestock production.", model: "(i) Permits use of superior sires over wide areas. (ii) Reduces risk of venereal disease transmission. (iii) Cheaper than maintaining a bull per farm. (iv) Allows use of semen from dead or distant bulls; also accurate record keeping and genetic improvement.", grades:[11,12] },
    { q: "Distinguish between inbreeding and outbreeding and state one disadvantage of each.", model: "Inbreeding: mating of closely related animals; disadvantage: increases expression of harmful recessive traits (inbreeding depression). Outbreeding: mating unrelated animals; disadvantage: can break up desirable gene combinations and heterozygote vigour may not be maintained in next generation.", grades:[12] }
  ]});
  add("Animal Husbandry", "Livestock Management", { theory: [
    { q: "Describe four routine management practices in a layer poultry farm.", model: "(i) Daily feeding and provision of clean water. (ii) Regular cleaning of drinkers, feeders and house. (iii) Collecting eggs 2–3 times daily and grading. (iv) Vaccination and deworming on schedule. (v) Culling of non-layers and sick birds. (vi) Record keeping of feed, eggs and mortality.", grades:[11,12] },
    { q: "List and explain four factors to consider when selecting a site for a livestock farm.", model: "Availability of water; good drainage/slope to avoid flooding; accessibility to markets and roads; nearness to feed sources; security and distance from residential areas; land size for expansion; climate suitable for chosen species.", grades:[11,12] },
    { q: "Mention any three records kept on a dairy farm and state the purpose of each.", model: "(i) Milk records — to monitor yield and cull poor producers. (ii) Breeding records — to track oestrus, service, calving dates. (iii) Health records — vaccinations and treatments. (iv) Feed records — costing and ration efficiency.", grades:[11,12] }
  ]});

  /* ─────────── AUTO MECHANICS (50 new) ─────────── */
  add("Auto Mechanics", "Engine Systems", { objective: [
    { q: "The four strokes in an internal combustion engine are intake, compression, power and", options:["stop","exhaust","start","idle"], answer:1, grades:[10,11,12] },
    { q: "The top dead centre (TDC) is the position at which the piston is", options:["at the bottom","at the top of the cylinder","halfway","outside the block"], answer:1, grades:[11,12] },
    { q: "A diesel engine ignites fuel by", options:["spark plug","compression heat","glow plug only","magneto"], answer:1, grades:[10,11,12] },
    { q: "The component that converts reciprocating motion to rotary motion in an engine is the", options:["camshaft","crankshaft","flywheel","piston"], answer:1, grades:[10,11,12] },
    { q: "The role of the flywheel is to", options:["ignite fuel","store rotational energy and smooth running","pump oil","cool the engine"], answer:1, grades:[11,12] },
    { q: "Engine valves are opened and closed by the", options:["crankshaft","camshaft","timing belt directly","flywheel"], answer:1, grades:[11,12] },
    { q: "Engine oil primarily provides", options:["cooling only","lubrication and cooling","combustion","compression"], answer:1, grades:[10,11,12] }
  ]});
  add("Auto Mechanics", "Transmission & Drivetrain", { objective: [
    { q: "The clutch in a manual vehicle is used to", options:["apply brakes","engage and disengage the engine from the gearbox","steer","signal"], answer:1, grades:[10,11,12] },
    { q: "The differential allows", options:["engine to start","both drive wheels to rotate at different speeds on a turn","fuel to atomise","clutch to disengage"], answer:1, grades:[11,12] },
    { q: "In a front-wheel drive vehicle, the driveshaft connects the transmission to the", options:["rear axle","front wheels","camshaft","fuel tank"], answer:1, grades:[11,12] },
    { q: "A gearbox provides different", options:["fuels","speed and torque ratios","spark plugs","valves"], answer:1, grades:[11,12] },
    { q: "An automatic gearbox uses ___ to transfer engine power.", options:["dry clutch","torque converter","chain only","rubber belt"], answer:1, grades:[12] }
  ]});
  add("Auto Mechanics", "Brakes & Suspension", { objective: [
    { q: "The hydraulic fluid used in a brake system is", options:["petrol","brake fluid","engine oil","coolant"], answer:1, grades:[10,11,12] },
    { q: "A disc brake consists mainly of a rotor and", options:["drum","caliper with pads","chain","spring"], answer:1, grades:[11,12] },
    { q: "Shock absorbers in a vehicle primarily", options:["brake the car","dampen spring oscillations","align wheels","steer the car"], answer:1, grades:[11,12] },
    { q: "The principal advantage of disc brakes over drum brakes is", options:["cheaper","better heat dissipation","lighter weight only","quieter"], answer:1, grades:[12] },
    { q: "Wheel alignment angles include camber, caster and", options:["toe","timing","gear ratio","duty cycle"], answer:0, grades:[11,12] }
  ]});
  add("Auto Mechanics", "Electrical Systems", { objective: [
    { q: "The battery in a petrol vehicle typically supplies", options:["110 V AC","12 V DC","24 V AC","240 V DC"], answer:1, grades:[10,11,12] },
    { q: "The alternator in a car", options:["stores fuel","generates electrical power while the engine runs","cools the engine","filters air"], answer:1, grades:[10,11,12] },
    { q: "A starter motor needs a large current supplied by the", options:["alternator","battery","ignition coil","fuel pump"], answer:1, grades:[11,12] },
    { q: "The device that steps up battery voltage for the spark plugs is the", options:["rectifier","ignition coil","distributor","solenoid"], answer:1, grades:[11,12] },
    { q: "A blown fuse should be replaced with one of", options:["higher rating","lower rating","same rating","any rating"], answer:2, grades:[10,11,12] }
  ]});
  add("Auto Mechanics", "Fuel Systems", { objective: [
    { q: "A carburettor mixes air with", options:["water","fuel","oil","refrigerant"], answer:1, grades:[10,11,12] },
    { q: "A fuel injector delivers fuel", options:["as a liquid stream","as a fine atomised spray","as a vapour only","as a solid"], answer:1, grades:[11,12] },
    { q: "The device that filters dirt from petrol before the engine is the", options:["oil filter","fuel filter","air filter","cabin filter"], answer:1, grades:[10,11,12] },
    { q: "Octane rating of petrol measures its", options:["volatility","resistance to knocking","sulphur content","viscosity"], answer:1, grades:[12] },
    { q: "Cetane number is a property of", options:["petrol","diesel","kerosene","LPG"], answer:1, grades:[12] }
  ]});
  add("Auto Mechanics", "Vehicle Maintenance", { objective: [
    { q: "Engine oil should normally be changed based on", options:["fuel level","manufacturer's schedule/mileage","tyre pressure","radio use"], answer:1, grades:[10,11,12] },
    { q: "The tool used to measure tyre pressure is the", options:["multimeter","tyre gauge","vernier caliper","torque wrench"], answer:1, grades:[10,11,12] },
    { q: "A hissing sound from the cooling system often indicates", options:["flat tyre","leak or boiling coolant","blown fuse","loose battery"], answer:1, grades:[11,12] },
    { q: "Regularly checking the ___ prevents engine overheating.", options:["fuel gauge","coolant level","clock","horn"], answer:1, grades:[10,11,12] },
    { q: "A torque wrench is used to", options:["loosen nuts","apply a specified tightening torque","measure current","measure voltage"], answer:1, grades:[11,12] }
  ]});
  add("Auto Mechanics", "Workshop Practice", { objective: [
    { q: "Before lifting a vehicle, the wheels on the opposite end should be", options:["removed","chocked","deflated","cleaned"], answer:1, grades:[11,12] },
    { q: "Safety footwear in a workshop should be", options:["sandals","steel-toe boots","plastic shoes","barefoot"], answer:1, grades:[10,11,12] },
    { q: "Petrol fires are best put out with a", options:["water extinguisher","foam/CO₂ extinguisher","sand only","wet cloth"], answer:1, grades:[11,12] },
    { q: "The tool used for cutting sheet metal is a", options:["tin snips","file","screwdriver","spanner"], answer:0, grades:[10,11,12] },
    { q: "Eye protection should be worn when", options:["driving","grinding or welding","filling fuel","washing car"], answer:1, grades:[10,11,12] }
  ]});
  add("Auto Mechanics", "Engine Systems", { objective: [
    { q: "A two-stroke engine completes a power cycle in", options:["one revolution","two revolutions","three revolutions","four revolutions"], answer:0, grades:[11,12] },
    { q: "The component that seals the gap between the piston and cylinder wall is the", options:["valve","piston ring","gasket","spark plug"], answer:1, grades:[11,12] },
    { q: "The head gasket seals the joint between the", options:["sump and block","cylinder head and block","intake and exhaust","wheel and axle"], answer:1, grades:[12] }
  ]});
  add("Auto Mechanics", "Electrical Systems", { objective: [
    { q: "The part of the ignition system that distributes high voltage to each cylinder is the", options:["coil","distributor","alternator","regulator"], answer:1, grades:[11,12] }
  ]});
  add("Auto Mechanics", "Vehicle Maintenance", { theory: [
    { q: "List four routine checks that should be performed before a long journey.", model: "(i) Check engine oil level and top up. (ii) Check coolant level and any leaks. (iii) Check tyre pressures and tread (including spare). (iv) Test lights, indicators and brakes. (v) Check fuel level and wipers/washer fluid.", grades:[10,11,12] },
    { q: "Explain the function of the cooling system in an internal combustion engine.", model: "Removes excess heat produced by combustion so that engine parts do not overheat; maintains an optimum operating temperature for efficient combustion and lubrication; prevents damage to pistons, rings and cylinder head by keeping metal temperatures within safe limits. Components: radiator, water pump, thermostat, coolant, fan, hoses.", grades:[11,12] }
  ]});
  add("Auto Mechanics", "Engine Systems", { theory: [
    { q: "Describe the four strokes of a four-stroke petrol engine.", model: "Intake: inlet valve opens; piston moves down drawing air/fuel mixture. Compression: both valves closed; piston moves up compressing mixture. Power: spark ignites mixture; expanding gases push piston down, producing work. Exhaust: exhaust valve opens; piston moves up expelling burnt gases. Cycle then repeats.", grades:[11,12] },
    { q: "State three differences between a petrol and a diesel engine.", model: "(i) Petrol uses spark ignition; diesel uses compression ignition. (ii) Petrol engines have lower compression ratios than diesel engines. (iii) Fuel is mixed with air before the cylinder in a carburetted petrol engine; diesel is injected into the cylinder directly. (iv) Diesel has higher thermal efficiency and torque; petrol engines typically run at higher RPM.", grades:[12] }
  ]});
  add("Auto Mechanics", "Brakes & Suspension", { theory: [
    { q: "Explain with a simple labelled description how a hydraulic braking system works.", model: "When the driver presses the brake pedal, force is transmitted to the master cylinder which pressurises brake fluid. The pressurised fluid is conveyed through brake lines to wheel cylinders or calipers at each wheel. This forces brake shoes/pads against the drum or disc, generating friction that slows the wheel. When the pedal is released, springs return the pads and fluid flows back.", grades:[11,12] }
  ]});

  /* ─────────── BASIC ELECTRONICS (50 new) ─────────── */
  add("Basic Electronics", "DC Circuits", { objective: [
    { q: "Ohm's law is expressed as", options:["V = IR","V = I/R","V = I²R","V = I + R"], answer:0, grades:[10,11,12] },
    { q: "The SI unit of electric current is the", options:["volt","ampere","ohm","watt"], answer:1, grades:[10,11,12] },
    { q: "Two resistors of 4 Ω and 6 Ω in series have a total resistance of", options:["2 Ω","10 Ω","24 Ω","2.4 Ω"], answer:1, grades:[10,11,12] },
    { q: "Two 6 Ω resistors in parallel have a total resistance of", options:["12 Ω","6 Ω","3 Ω","1 Ω"], answer:2, grades:[11,12] },
    { q: "Power dissipated by a resistor can be calculated using", options:["P = VI","P = V/I","P = I/V","P = V + I"], answer:0, grades:[11,12] },
    { q: "Kirchhoff's current law states that the algebraic sum of currents at a junction is", options:["1","zero","infinity","maximum"], answer:1, grades:[11,12] }
  ]});
  add("Basic Electronics", "AC Circuits", { objective: [
    { q: "The frequency of mains supply in West Africa is typically", options:["25 Hz","50 Hz","60 Hz","100 Hz"], answer:1, grades:[10,11,12] },
    { q: "The peak value of a sinusoidal voltage with RMS value 220 V is approximately", options:["220 V","311 V","440 V","156 V"], answer:1, grades:[12] },
    { q: "Capacitive reactance (X_C) is given by", options:["2πfC","1/(2πfC)","2πfL","1/(2πfL)"], answer:1, grades:[12] },
    { q: "The impedance of a purely resistive circuit equals the", options:["capacitance","inductance","resistance","reactance"], answer:2, grades:[11,12] },
    { q: "In a series RLC circuit at resonance", options:["X_L = X_C","X_L = 0","X_C = 0","R = 0"], answer:0, grades:[12] }
  ]});
  add("Basic Electronics", "Semiconductors", { objective: [
    { q: "A semiconductor has electrical conductivity between that of a conductor and a(n)", options:["another conductor","insulator","superconductor","metal"], answer:1, grades:[10,11,12] },
    { q: "The commonest semiconductor material in electronics is", options:["copper","silicon","carbon","iron"], answer:1, grades:[10,11,12] },
    { q: "Doping silicon with phosphorus produces a(n)", options:["p-type","n-type","intrinsic","metallic"], answer:1, grades:[11,12] },
    { q: "Holes act as the majority carriers in a", options:["n-type","p-type","intrinsic","pure copper"], answer:1, grades:[11,12] },
    { q: "The energy gap of pure silicon at room temperature is about", options:["0.1 eV","0.7 eV","1.1 eV","3.0 eV"], answer:2, grades:[12] }
  ]});
  add("Basic Electronics", "Diodes & Transistors", { objective: [
    { q: "A diode allows current to flow", options:["in both directions","only from anode to cathode","only when cold","at night only"], answer:1, grades:[10,11,12] },
    { q: "A forward-biased silicon diode has a voltage drop of about", options:["0.3 V","0.7 V","1.5 V","5 V"], answer:1, grades:[11,12] },
    { q: "A BJT has three terminals: emitter, base and", options:["source","drain","collector","gate"], answer:2, grades:[11,12] },
    { q: "In an NPN transistor in active mode, the base-emitter junction is", options:["reverse biased","forward biased","open","shorted"], answer:1, grades:[12] },
    { q: "A Zener diode is commonly used as a", options:["full-wave rectifier","voltage regulator","amplifier","oscillator"], answer:1, grades:[11,12] }
  ]});
  add("Basic Electronics", "Amplifiers", { objective: [
    { q: "The ratio of output to input signal of an amplifier is called", options:["gain","impedance","phase","frequency"], answer:0, grades:[11,12] },
    { q: "Negative feedback in an amplifier tends to", options:["increase distortion","improve linearity and bandwidth","reduce bandwidth","destabilise the amplifier"], answer:1, grades:[12] },
    { q: "Class A amplifiers conduct for ___ of the input cycle.", options:["90°","180°","270°","360°"], answer:3, grades:[12] },
    { q: "An ideal op-amp has", options:["zero input impedance","infinite input impedance","zero gain","infinite output impedance"], answer:1, grades:[12] },
    { q: "A common emitter amplifier has a phase shift of", options:["0°","90°","180°","270°"], answer:2, grades:[12] }
  ]});
  add("Basic Electronics", "Digital Electronics", { objective: [
    { q: "In binary, 1010 equals decimal", options:["8","9","10","11"], answer:2, grades:[10,11,12] },
    { q: "An AND gate outputs 1 only when", options:["any input is 1","all inputs are 1","all inputs are 0","inputs differ"], answer:1, grades:[10,11,12] },
    { q: "A NOT gate is also called an", options:["buffer","inverter","driver","mixer"], answer:1, grades:[10,11,12] },
    { q: "The Boolean expression for an OR gate with inputs A and B is", options:["A·B","A+B","Ā","A⊕B"], answer:1, grades:[11,12] },
    { q: "A flip-flop stores", options:["0 bit","1 bit","2 bits","8 bits"], answer:1, grades:[11,12] }
  ]});
  add("Basic Electronics", "Measurement & Instrumentation", { objective: [
    { q: "Current is measured using an", options:["ammeter","voltmeter","ohmmeter","wattmeter"], answer:0, grades:[10,11,12] },
    { q: "A voltmeter is connected in a circuit in", options:["series","parallel","neither","both"], answer:1, grades:[10,11,12] },
    { q: "An ideal ammeter has", options:["zero resistance","infinite resistance","infinite voltage","zero current"], answer:0, grades:[11,12] },
    { q: "An oscilloscope is used to display", options:["current only","resistance only","waveforms","power factor"], answer:2, grades:[11,12] },
    { q: "A multimeter can measure voltage, current and", options:["frequency only","resistance","phase","weight"], answer:1, grades:[10,11,12] }
  ]});
  add("Basic Electronics", "DC Circuits", { objective: [
    { q: "A 12 V battery pushes 3 A through a resistor. The resistance is", options:["4 Ω","9 Ω","15 Ω","36 Ω"], answer:0, grades:[10,11,12] },
    { q: "Electric charge (Q) equals", options:["V × R","I × t","V × I","R / t"], answer:1, grades:[11,12] },
    { q: "The unit of electrical energy on a household bill is", options:["ampere","volt","kilowatt-hour","watt"], answer:2, grades:[10,11,12] },
    { q: "Two 1 kΩ resistors in parallel have a total resistance of", options:["2 kΩ","1 kΩ","500 Ω","250 Ω"], answer:2, grades:[11,12] }
  ]});
  add("Basic Electronics", "Digital Electronics", { objective: [
    { q: "The binary number 1111 equals decimal", options:["15","16","14","8"], answer:0, grades:[10,11,12] },
    { q: "A NAND gate followed by a NOT gate behaves like", options:["OR","AND","NOR","XOR"], answer:1, grades:[11,12] }
  ]});
  add("Basic Electronics", "DC Circuits", { theory: [
    { q: "Three resistors of 2 Ω, 3 Ω and 6 Ω are connected in parallel across a 12 V battery. Find the total current drawn from the battery.", model: "1/R = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 → R = 1 Ω. I = V/R = 12/1 = 12 A.", grades:[11,12] },
    { q: "State Ohm's law and mention two conditions for it to hold.", model: "Ohm's law: the current through a conductor between two points is directly proportional to the voltage across those points, provided physical conditions remain constant (V = IR). Conditions: constant temperature; the conductor must be ohmic (metallic conductor); no change in other physical conditions like strain.", grades:[11,12] }
  ]});
  add("Basic Electronics", "Diodes & Transistors", { theory: [
    { q: "Draw the symbol of an NPN transistor and label its three terminals.", model: "Symbol: circle (or no circle) with a vertical base line; arrow on the emitter pointing outward (Not Pointing iN = NPN). Terminals: Base (B) — horizontal line into the base; Collector (C) — top terminal; Emitter (E) — bottom terminal with outward arrow.", grades:[11,12] },
    { q: "Explain briefly how a diode rectifier converts AC to DC (half-wave rectification).", model: "During the positive half-cycle the diode is forward biased and conducts, allowing current through the load — output follows input. During the negative half-cycle the diode is reverse biased and blocks current, so the output is zero. The result is a pulsating DC consisting of only the positive half of each cycle.", grades:[12] }
  ]});

  /* ─────────── BOOK-KEEPING (50 new) ─────────── */
  add("Book-Keeping", "Principles of Book-Keeping", { objective: [
    { q: "The fundamental book-keeping equation is", options:["Assets = Liabilities + Capital","Capital = Assets + Liabilities","Liabilities = Assets + Capital","Assets = Liabilities − Capital"], answer:0, grades:[10,11,12] },
    { q: "Double entry book-keeping means every transaction has", options:["one entry","two equal and opposite entries","three entries","no entries"], answer:1, grades:[10,11,12] },
    { q: "The owner's claim on the business is called", options:["liability","asset","capital","creditor"], answer:2, grades:[10,11,12] },
    { q: "An item of value owned by a business is a(n)", options:["liability","expense","asset","income"], answer:2, grades:[10,11,12] },
    { q: "Amounts owed by a business to others are", options:["assets","liabilities","capital","drawings"], answer:1, grades:[10,11,12] }
  ]});
  add("Book-Keeping", "Source Documents", { objective: [
    { q: "A document issued by a seller to a buyer listing goods sold on credit is a(n)", options:["receipt","invoice","cheque","voucher"], answer:1, grades:[10,11,12] },
    { q: "A credit note is issued for", options:["goods sold","goods returned by customer","cash sales","purchase of assets"], answer:1, grades:[11,12] },
    { q: "A debit note is issued by a buyer to a seller to", options:["acknowledge receipt","claim for overcharge or goods returned","pay wages","order goods"], answer:1, grades:[11,12] },
    { q: "A receipt is issued as evidence of", options:["goods ordered","payment received","goods sold on credit","stock taken"], answer:1, grades:[10,11,12] },
    { q: "A cheque is a", options:["bank statement","written order to a bank to pay a specified sum","price list","receipt book"], answer:1, grades:[10,11,12] }
  ]});
  add("Book-Keeping", "Ledger Accounts", { objective: [
    { q: "The ledger is a book that contains", options:["source documents","accounts","cheques","order forms"], answer:1, grades:[10,11,12] },
    { q: "The debit side of an account is always on the", options:["right","left","top","bottom"], answer:1, grades:[10,11,12] },
    { q: "A sale of goods on credit to K. Mensah is recorded by debiting", options:["K. Mensah","Sales","Cash","Purchases"], answer:0, grades:[11,12] },
    { q: "Cash received from a debtor is recorded by crediting the", options:["cash account","sales account","debtor's account","capital account"], answer:2, grades:[11,12] },
    { q: "Personal accounts are accounts of", options:["assets","expenses","persons and firms","incomes"], answer:2, grades:[11,12] }
  ]});
  add("Book-Keeping", "Trial Balance", { objective: [
    { q: "A trial balance is prepared to", options:["report profit","test arithmetic accuracy of the ledger","value stock","fix salaries"], answer:1, grades:[10,11,12] },
    { q: "Which of the following would cause a trial balance not to agree?", options:["Posting an equal amount to both sides","Omitting a transaction completely","Posting 100 as 10 on one side only","Compensating error"], answer:2, grades:[12] },
    { q: "Closing stock in a trial balance is usually", options:["shown in debit column","shown in credit column","shown as a note","not shown"], answer:2, grades:[12] },
    { q: "The totals of the debit and credit columns of a trial balance should be", options:["different","equal","ignored","in different currencies"], answer:1, grades:[10,11,12] },
    { q: "A compensating error is one that", options:["is never found","is automatically corrected by another error","causes profit overstatement","affects only cash"], answer:1, grades:[12] }
  ]});
  add("Book-Keeping", "Cash Book", { objective: [
    { q: "The cash book is both a book of original entry and a(n)", options:["ledger","statement","invoice","voucher"], answer:0, grades:[11,12] },
    { q: "A three-column cash book has cash, bank and", options:["capital","drawings","discount","stock"], answer:2, grades:[11,12] },
    { q: "Discount allowed to customers is recorded in the", options:["sales journal","cash book (discount column)","purchases book","general ledger only"], answer:1, grades:[11,12] },
    { q: "Petty cash is used mainly for", options:["buying fixed assets","small day-to-day expenses","paying wages","long-term loans"], answer:1, grades:[10,11,12] },
    { q: "The imprest system ensures that petty cash is", options:["topped up to a fixed amount after each period","never refilled","used for large items","stored in the bank"], answer:0, grades:[11,12] }
  ]});
  add("Book-Keeping", "Final Accounts", { objective: [
    { q: "Gross profit equals", options:["sales − purchases","sales − cost of goods sold","sales + closing stock","sales + expenses"], answer:1, grades:[11,12] },
    { q: "Net profit is transferred to", options:["trading account","profit and loss account","capital account","purchases"], answer:2, grades:[11,12] },
    { q: "Closing stock appears in the", options:["trading account (credit) and balance sheet (asset)","sales account only","capital account","profit and loss account only"], answer:0, grades:[12] },
    { q: "A current asset is one that can be converted to cash within", options:["5 years","1 year","10 years","a generation"], answer:1, grades:[11,12] },
    { q: "A long-term loan is classified as a", options:["current liability","fixed liability","fixed asset","current asset"], answer:1, grades:[11,12] }
  ]});
  add("Book-Keeping", "Errors & Corrections", { objective: [
    { q: "An error of principle occurs when", options:["an item is entered in the wrong class of account","amounts are simply transposed","the trial balance fails","stock is miscounted"], answer:0, grades:[12] },
    { q: "A suspense account is opened when the", options:["trial balance balances","trial balance fails to balance","business starts trading","stock is lost"], answer:1, grades:[12] },
    { q: "Journal entries to correct errors are called", options:["adjusting entries","correcting entries","closing entries","opening entries"], answer:1, grades:[11,12] },
    { q: "An error of commission is when", options:["an entry is posted to the wrong person's account of the same class","goods are not recorded","assets are lost","a transaction is doubled"], answer:0, grades:[12] },
    { q: "Transposition means that", options:["figures are interchanged (e.g., 74 as 47)","entry is omitted","asset is written off","discount is missed"], answer:0, grades:[11,12] }
  ]});
  add("Book-Keeping", "Principles of Book-Keeping", { objective: [
    { q: "Drawings reduce", options:["liabilities","capital","assets only","income only"], answer:1, grades:[11,12] },
    { q: "Purchases of goods for resale are classified as", options:["fixed assets","expenses","trading expenses","capital"], answer:2, grades:[11,12] },
    { q: "Office equipment purchased for use is a", options:["fixed asset","current asset","expense","liability"], answer:0, grades:[11,12] }
  ]});
  add("Book-Keeping", "Ledger Accounts", { objective: [
    { q: "Nominal accounts are accounts of", options:["persons","assets","incomes and expenses","liabilities"], answer:2, grades:[11,12] },
    { q: "A contra entry involves a transfer between", options:["cash and bank","sales and purchases","capital and drawings","stock and purchases"], answer:0, grades:[12] }
  ]});
  add("Book-Keeping", "Source Documents", { theory: [
    { q: "List any five source documents and state the purpose of each.", model: "Invoice — evidence of goods sold/bought on credit; Receipt — evidence of money received; Credit note — issued for goods returned by customer; Debit note — issued for undercharges or goods returned to supplier; Cheque — written order to a bank to pay a sum; Pay-in slip — deposit of cash/cheque into a bank; Voucher — authorises payment internally.", grades:[11,12] }
  ]});
  add("Book-Keeping", "Final Accounts", { theory: [
    { q: "From the following, prepare the trading account: Opening stock GH¢4,000; Purchases GH¢12,000; Sales GH¢20,000; Closing stock GH¢3,000.", model: "Cost of goods sold = Opening stock + Purchases − Closing stock = 4,000 + 12,000 − 3,000 = 13,000. Gross profit = Sales − COGS = 20,000 − 13,000 = GH¢7,000.", grades:[11,12] },
    { q: "Distinguish between capital expenditure and revenue expenditure with one example each.", model: "Capital expenditure — spent on acquiring or improving a fixed asset whose benefit lasts more than one accounting period (e.g., buying machinery). Revenue expenditure — spent on running the business and benefit lasts only the current period (e.g., payment of salaries). Capital expenditure appears on the balance sheet; revenue expenditure appears in the profit and loss account.", grades:[12] }
  ]});
  add("Book-Keeping", "Trial Balance", { theory: [
    { q: "State four errors that do NOT affect the agreement of a trial balance.", model: "(i) Error of omission — transaction completely omitted from the books. (ii) Error of principle — entry in wrong class of account. (iii) Error of commission — posted to a wrong account of the same class. (iv) Error of original entry — wrong amount entered in both sides. (v) Compensating errors — two or more errors that cancel out.", grades:[12] }
  ]});
  add("Book-Keeping", "Errors & Corrections", { theory: [
    { q: "Explain briefly the purpose of a suspense account.", model: "A suspense account is a temporary account used to make a disagreeing trial balance agree so that final accounts can be prepared. It holds the difference until errors are located. When the errors are found, correcting journal entries are made and the balance of the suspense account is cleared.", grades:[12] }
  ]});

  /* ─────────── BUSINESS MANAGEMENT (50 new) ─────────── */
  add("Business Management", "Introduction to Business", { objective: [
    { q: "A business exists primarily to", options:["donate to charity","provide goods and services for a profit","pay taxes","employ workers only"], answer:1, grades:[10,11,12] },
    { q: "A sole proprietorship is owned by", options:["one person","two people","many shareholders","the government"], answer:0, grades:[10,11,12] },
    { q: "A partnership is based on a", options:["memorandum of association","partnership deed","prospectus","license"], answer:1, grades:[11,12] },
    { q: "The limited liability principle protects", options:["creditors","shareholders from losing more than their investment","employees","suppliers"], answer:1, grades:[11,12] },
    { q: "The document that governs the internal administration of a company is the", options:["prospectus","memorandum of association","articles of association","share certificate"], answer:2, grades:[12] }
  ]});
  add("Business Management", "Functions of Management", { objective: [
    { q: "The five classical functions of management include planning, organising, staffing, directing and", options:["cleaning","controlling","typing","advertising"], answer:1, grades:[10,11,12] },
    { q: "Setting objectives and determining the means to achieve them is", options:["controlling","planning","staffing","directing"], answer:1, grades:[10,11,12] },
    { q: "Assigning duties and authority is part of", options:["planning","organising","leading","controlling"], answer:1, grades:[11,12] },
    { q: "Measuring performance against standards is", options:["leading","planning","controlling","directing"], answer:2, grades:[11,12] },
    { q: "Henri Fayol is associated with", options:["scientific management","administrative management","human relations","systems theory"], answer:1, grades:[12] }
  ]});
  add("Business Management", "Organization Structure", { objective: [
    { q: "A line organisation has a", options:["single chain of command","matrix structure","team only","no authority"], answer:0, grades:[11,12] },
    { q: "The principle that each subordinate should report to only one superior is", options:["span of control","unity of command","division of labour","authority"], answer:1, grades:[11,12] },
    { q: "Span of control refers to the", options:["size of business","number of subordinates reporting to one manager","total assets","number of branches"], answer:1, grades:[11,12] },
    { q: "Centralisation concentrates decision-making at", options:["the top","the bottom","branch offices","the customers"], answer:0, grades:[11,12] },
    { q: "An organisation chart shows", options:["customers","formal relationships and reporting lines","sales figures","product prices"], answer:1, grades:[10,11,12] }
  ]});
  add("Business Management", "Human Resources", { objective: [
    { q: "The process of attracting suitable candidates is", options:["selection","recruitment","training","appraisal"], answer:1, grades:[10,11,12] },
    { q: "A job description outlines", options:["salary only","duties and responsibilities","performance ratings","personality traits"], answer:1, grades:[10,11,12] },
    { q: "Maslow's hierarchy of needs places self-actualisation at the", options:["bottom","middle","top","side"], answer:2, grades:[12] },
    { q: "A form of on-the-job training is", options:["seminar","coaching","distance learning","conference only"], answer:1, grades:[11,12] },
    { q: "The negotiation between employers and employees' unions is called", options:["recruitment","collective bargaining","selection","appraisal"], answer:1, grades:[11,12] }
  ]});
  add("Business Management", "Marketing", { objective: [
    { q: "The 4 Ps of marketing are product, price, promotion and", options:["profit","place","people","policy"], answer:1, grades:[10,11,12] },
    { q: "Market segmentation divides a market into", options:["countries","groups with similar needs","colours","prices"], answer:1, grades:[11,12] },
    { q: "Pricing a new product at a high initial price and lowering later is", options:["penetration pricing","skimming pricing","cost-plus pricing","loss leader"], answer:1, grades:[12] },
    { q: "A form of above-the-line promotion is", options:["sales force","mass media advertising","personal selling","direct mail"], answer:1, grades:[11,12] },
    { q: "A channel of distribution moves goods from", options:["customer to producer","producer to consumer","retailer to wholesaler only","government to firm"], answer:1, grades:[10,11,12] }
  ]});
  add("Business Management", "Business Finance", { objective: [
    { q: "Short-term finance is generally for a period of", options:["up to 1 year","1–5 years","over 10 years","never"], answer:0, grades:[11,12] },
    { q: "Shares issued to the public entitle the holder to a share of", options:["losses only","profits (dividends) and voting","fixed interest","nothing"], answer:1, grades:[11,12] },
    { q: "A debenture is a", options:["share","long-term debt instrument","short-term loan from bank","tax receipt"], answer:1, grades:[12] },
    { q: "Retained earnings are", options:["profits kept in the business","dividends paid","paid to creditors","paid as tax"], answer:0, grades:[11,12] },
    { q: "Working capital is calculated as", options:["Current assets − Current liabilities","Fixed assets − Depreciation","Sales − Purchases","Capital − Drawings"], answer:0, grades:[11,12] }
  ]});
  add("Business Management", "Business Ethics", { objective: [
    { q: "A code of ethics is", options:["a price list","a set of standards of right and wrong for the organisation","a legal tax code","a factory manual only"], answer:1, grades:[11,12] },
    { q: "Corporate Social Responsibility (CSR) refers to a firm's", options:["profit maximisation","responsibilities to society and stakeholders","accounting system","advertising only"], answer:1, grades:[11,12] },
    { q: "Whistle-blowing is", options:["reporting unethical acts in the organisation","signalling in traffic","advertising","selling"], answer:0, grades:[12] },
    { q: "A bribe is considered", options:["normal commission","unethical and usually illegal","a tax","a discount"], answer:1, grades:[10,11,12] },
    { q: "Stakeholders include customers, employees, shareholders and the", options:["competitors only","community","sun","weather"], answer:1, grades:[11,12] }
  ]});
  add("Business Management", "Introduction to Business", { objective: [
    { q: "A public limited company (PLC) can sell its shares to the", options:["family only","general public","its employees only","government only"], answer:1, grades:[11,12] },
    { q: "A cooperative society is owned and operated by its", options:["government","members for their mutual benefit","foreign investors","board only"], answer:1, grades:[11,12] },
    { q: "The profit motive is least strong in", options:["sole trader","partnership","public corporation","PLC"], answer:2, grades:[12] }
  ]});
  add("Business Management", "Human Resources", { objective: [
    { q: "Performance appraisal aims primarily at", options:["punishing staff","evaluating employees' work and developing them","cutting jobs","avoiding taxes"], answer:1, grades:[11,12] },
    { q: "Fringe benefits include", options:["basic salary only","health insurance and housing allowances","taxes","fines"], answer:1, grades:[10,11,12] }
  ]});
  add("Business Management", "Functions of Management", { theory: [
    { q: "Explain the five main functions of management with a brief description of each.", model: "Planning — setting objectives and deciding how to achieve them. Organising — arranging resources and tasks so objectives can be met. Staffing — recruiting, training and compensating people. Directing/Leading — motivating and guiding employees. Controlling — measuring performance against plan and taking corrective action. These are continuous and interrelated.", grades:[11,12] },
    { q: "Distinguish between strategic planning and operational planning.", model: "Strategic planning — long-term (3–5 years), covers the whole organisation, done by top management, focuses on broad objectives. Operational planning — short-term (up to 1 year), covers specific units, done by middle/lower management, focuses on day-to-day activities that implement the strategic plan.", grades:[12] }
  ]});
  add("Business Management", "Human Resources", { theory: [
    { q: "Discuss four methods an organisation can use to motivate its employees.", model: "(i) Financial incentives — fair salary, bonuses, profit-sharing. (ii) Promotion and career development — training, clear progression. (iii) Job enrichment — giving workers meaningful, varied tasks with autonomy. (iv) Recognition and appreciation — awards, praise, employee-of-the-month. (v) Good working environment and fringe benefits — health, welfare, safety.", grades:[11,12] }
  ]});
  add("Business Management", "Marketing", { theory: [
    { q: "Define the marketing mix and explain each of the four Ps.", model: "Marketing mix — set of controllable marketing tools a firm blends to produce the response it wants. Product: the good/service and its features. Price: amount charged, pricing strategies (skimming, penetration). Place: distribution channels and outlets to reach the customer. Promotion: advertising, personal selling, sales promotion and publicity used to inform and persuade.", grades:[11,12] }
  ]});
  add("Business Management", "Business Ethics", { theory: [
    { q: "State four benefits of corporate social responsibility (CSR) to a business.", model: "(i) Improved brand image and customer loyalty. (ii) Better relations with the community and government. (iii) Attracts and retains skilled employees who want to work for ethical firms. (iv) Reduces risk of scandals, fines, and boycotts. (v) May provide tax and regulatory advantages.", grades:[11,12] }
  ]});

  /* ─────────── DATA PROCESSING (50 new) ─────────── */
  add("Data Processing", "Data & Information", { objective: [
    { q: "Data that has been processed and given meaning is called", options:["information","raw data","noise","garbage"], answer:0, grades:[10,11,12] },
    { q: "The process of arranging data in a particular order is", options:["editing","sorting","coding","verifying"], answer:1, grades:[10,11,12] },
    { q: "An example of quantitative data is", options:["colour","height in cm","religion","language"], answer:1, grades:[10,11,12] },
    { q: "Data collected first-hand is called", options:["secondary data","primary data","processed data","final data"], answer:1, grades:[10,11,12] },
    { q: "A good source of secondary data is", options:["interview","questionnaire","published report","observation"], answer:2, grades:[11,12] }
  ]});
  add("Data Processing", "Computer Hardware", { objective: [
    { q: "The CPU stands for", options:["Central Process Unit","Central Processing Unit","Computer Power Unit","Control Point Unit"], answer:1, grades:[10,11,12] },
    { q: "An input device among the following is the", options:["monitor","keyboard","printer","speaker"], answer:1, grades:[10,11,12] },
    { q: "RAM is a type of", options:["permanent storage","volatile main memory","input device","software"], answer:1, grades:[11,12] },
    { q: "ROM means", options:["Random Only Memory","Read Only Memory","Read Open Machine","Real Operating Memory"], answer:1, grades:[10,11,12] },
    { q: "A device used to output hardcopy is a", options:["speaker","printer","microphone","scanner"], answer:1, grades:[10,11,12] }
  ]});
  add("Data Processing", "Software", { objective: [
    { q: "System software controls the", options:["users","computer's hardware and provides a platform","internet only","documents only"], answer:1, grades:[10,11,12] },
    { q: "An example of application software is", options:["Windows","MS Word","Linux kernel","BIOS"], answer:1, grades:[10,11,12] },
    { q: "An operating system is an example of", options:["application software","system software","firmware only","utility only"], answer:1, grades:[10,11,12] },
    { q: "A utility program is used to", options:["run games","perform maintenance tasks","design websites only","play music only"], answer:1, grades:[11,12] },
    { q: "Open source software is", options:["free of any use","software whose source code is openly available","only Microsoft software","hardware"], answer:1, grades:[11,12] }
  ]});
  add("Data Processing", "Data Models", { objective: [
    { q: "In a relational database, data is stored in", options:["trees","tables","stacks","queues"], answer:1, grades:[11,12] },
    { q: "A unique identifier for each record is the", options:["foreign key","primary key","candidate view","alias"], answer:1, grades:[11,12] },
    { q: "A collection of related fields forms a", options:["record","byte","sector","cluster"], answer:0, grades:[11,12] },
    { q: "Data redundancy refers to", options:["loss of data","duplication of data","encryption","backup"], answer:1, grades:[12] },
    { q: "Normalisation in databases reduces", options:["performance","data redundancy and improves integrity","storage security","queries"], answer:1, grades:[12] }
  ]});
  add("Data Processing", "Database Management", { objective: [
    { q: "A DBMS is a", options:["hardware device","software for managing databases","internet service","network cable"], answer:1, grades:[10,11,12] },
    { q: "SQL stands for", options:["Structured Query Language","Simple Question Line","System Query List","Simple Quality Language"], answer:0, grades:[11,12] },
    { q: "The SQL keyword to retrieve records is", options:["INSERT","UPDATE","SELECT","DELETE"], answer:2, grades:[11,12] },
    { q: "A field that references the primary key of another table is a", options:["primary key","foreign key","super key","compound key"], answer:1, grades:[12] },
    { q: "An entity in a database usually becomes a", options:["row","table","field","query"], answer:1, grades:[12] }
  ]});
  add("Data Processing", "Spreadsheet & Word Processing", { objective: [
    { q: "A spreadsheet arranges data in", options:["paragraphs","rows and columns","objects","lists"], answer:1, grades:[10,11,12] },
    { q: "The intersection of a row and column in a spreadsheet is a", options:["field","record","cell","sheet"], answer:2, grades:[10,11,12] },
    { q: "The formula to add A1 through A10 in Excel is", options:["=ADD(A1:A10)","=SUM(A1:A10)","=TOTAL(A1:A10)","=PLUS(A1:A10)"], answer:1, grades:[10,11,12] },
    { q: "The feature in a word processor that finds spelling mistakes is", options:["mail merge","spell check","thesaurus","track changes"], answer:1, grades:[10,11,12] },
    { q: "Mail merge combines a document template with a", options:["spreadsheet formula","data source of recipients","presentation","photograph"], answer:1, grades:[11,12] }
  ]});
  add("Data Processing", "Internet & Networking", { objective: [
    { q: "The Internet is a network of", options:["computers connected globally","offices in Lagos","a single PC","TV stations"], answer:0, grades:[10,11,12] },
    { q: "A LAN typically covers a", options:["small geographical area","whole country","whole world","continent"], answer:0, grades:[10,11,12] },
    { q: "An email address always contains the symbol", options:["&","@","#","%"], answer:1, grades:[10,11,12] },
    { q: "A device that connects two different networks is a", options:["hub","switch","router","printer"], answer:2, grades:[11,12] },
    { q: "URL stands for", options:["Uniform Resource Locator","United Region Link","Universal Ring List","User Runtime Line"], answer:0, grades:[11,12] }
  ]});
  add("Data Processing", "Data & Information", { objective: [
    { q: "The quality of information is judged by", options:["only size","accuracy, timeliness and relevance","font and colour","length"], answer:1, grades:[11,12] },
    { q: "Data captured using a barcode reader at a supermarket is typically", options:["unreliable","fast and reliable","manual","slow"], answer:1, grades:[11,12] }
  ]});
  add("Data Processing", "Computer Hardware", { objective: [
    { q: "The unit that performs arithmetic and logic operations is the", options:["control unit","ALU","RAM","cache only"], answer:1, grades:[11,12] },
    { q: "A solid-state drive (SSD) is a type of", options:["input device","secondary storage","cache memory","modem"], answer:1, grades:[11,12] },
    { q: "1 kilobyte equals", options:["100 bytes","1,024 bytes","1,000,000 bytes","10 bytes"], answer:1, grades:[11,12] }
  ]});
  add("Data Processing", "Software", { objective: [
    { q: "A device driver is an example of", options:["application software","system software","firmware only","malware"], answer:1, grades:[11,12] }
  ]});
  add("Data Processing", "Data & Information", { theory: [
    { q: "Define data and information, and state two differences between them.", model: "Data: raw, unprocessed facts, figures or symbols (e.g., 45, red, 12/3/2024). Information: data that has been processed to make it meaningful for decision-making (e.g., 'Average score is 45'). Differences: (i) Data is input while information is output of processing. (ii) Data on its own is often not useful, but information supports decisions. (iii) Information requires context; data does not.", grades:[10,11,12] }
  ]});
  add("Data Processing", "Database Management", { theory: [
    { q: "State any four advantages of using a Database Management System (DBMS).", model: "(i) Reduces data redundancy through centralisation. (ii) Improves data integrity and consistency. (iii) Provides security through access controls. (iv) Supports multiple concurrent users. (v) Backup and recovery facilities. (vi) Easier query and reporting via standard languages like SQL.", grades:[11,12] },
    { q: "Explain the difference between primary key and foreign key.", model: "Primary key: a column (or combination) that uniquely identifies each record in a table; cannot be null. Foreign key: a column in one table that references the primary key of another table, used to establish a link between the two tables, allowing relational joins.", grades:[12] }
  ]});
  add("Data Processing", "Internet & Networking", { theory: [
    { q: "Distinguish between a LAN and a WAN.", model: "LAN (Local Area Network): connects computers within a small area such as an office or school; high speed; owned by one organisation. WAN (Wide Area Network): covers a wide geographical area, even countries (e.g., the Internet); typically slower per link; uses leased or public communication links; usually shared ownership.", grades:[11,12] },
    { q: "List four ways of protecting data on a computer network.", model: "(i) Use strong passwords and multi-factor authentication. (ii) Install and update anti-virus and firewall. (iii) Encrypt sensitive data in storage and transit. (iv) Regular backups. (v) Apply software updates/patches. (vi) Control user access rights.", grades:[12] }
  ]});

  /* ─────────── FOOD AND NUTRITION (50 new) ─────────── */
  add("Food and Nutrition", "Nutrients", { objective: [
    { q: "A nutrient needed in large quantities for energy is", options:["vitamin A","carbohydrate","zinc","sodium"], answer:1, grades:[10,11,12] },
    { q: "Proteins are made up of", options:["fatty acids","amino acids","monosaccharides","vitamins"], answer:1, grades:[10,11,12] },
    { q: "Vitamin D is essential for absorption of", options:["iron","calcium","sodium","vitamin A"], answer:1, grades:[11,12] },
    { q: "A mineral needed for the formation of haemoglobin is", options:["calcium","iron","iodine","zinc"], answer:1, grades:[10,11,12] },
    { q: "Roughage in the diet helps in", options:["energy production","prevention of constipation","building bones","vision"], answer:1, grades:[10,11,12] }
  ]});
  add("Food and Nutrition", "Food Groups", { objective: [
    { q: "Rice, yam and cassava are classified as", options:["body-building foods","energy foods","protective foods","vitamin foods"], answer:1, grades:[10,11,12] },
    { q: "Meat, fish and beans are", options:["energy foods","body-building foods","fats and oils","roughage"], answer:1, grades:[10,11,12] },
    { q: "Vegetables and fruits are mainly", options:["energy foods","body-building","protective foods rich in vitamins","fats"], answer:2, grades:[10,11,12] },
    { q: "A complete protein source is", options:["beans only","maize","milk","cassava"], answer:2, grades:[11,12] },
    { q: "Kwashiorkor is caused by a deficiency of", options:["energy foods","protein","vitamin C","water"], answer:1, grades:[11,12] }
  ]});
  add("Food and Nutrition", "Meal Planning", { objective: [
    { q: "A balanced diet contains", options:["only protein","all nutrients in correct proportions","only carbohydrates","only water"], answer:1, grades:[10,11,12] },
    { q: "When planning meals for a family, you should consider", options:["the cook's mood","age, health, budget and preferences","weather only","utensils only"], answer:1, grades:[10,11,12] },
    { q: "A pregnant woman needs extra", options:["sugar","iron, folate and protein","salt only","starch only"], answer:1, grades:[11,12] },
    { q: "Breakfast is important because it", options:["replaces supper","provides energy after overnight fasting","keeps away ghosts","increases weight always"], answer:1, grades:[10,11,12] },
    { q: "A good meal plan should be varied, nutritious and", options:["expensive","affordable","monotonous","fried only"], answer:1, grades:[10,11,12] }
  ]});
  add("Food and Nutrition", "Food Preparation", { objective: [
    { q: "Boiling is cooking in water at", options:["37 °C","50 °C","100 °C","250 °C"], answer:2, grades:[10,11,12] },
    { q: "Frying uses", options:["hot water","hot oil/fat","steam","dry heat only in oven"], answer:1, grades:[10,11,12] },
    { q: "Steaming is a cooking method that uses", options:["boiling water directly","vapour from boiling water","microwave radiation","open flame"], answer:1, grades:[11,12] },
    { q: "Baking is done in a", options:["frying pan","pot of water","hot oven","steamer"], answer:2, grades:[10,11,12] },
    { q: "The loss of water-soluble vitamins is highest when food is", options:["steamed","boiled and water discarded","grilled","served raw"], answer:1, grades:[11,12] }
  ]});
  add("Food and Nutrition", "Food Preservation", { objective: [
    { q: "Drying preserves food by", options:["adding water","removing water so microbes cannot grow","adding acid only","freezing"], answer:1, grades:[10,11,12] },
    { q: "Salting is commonly used to preserve", options:["bread","fresh milk","fish and meat","tea"], answer:2, grades:[10,11,12] },
    { q: "Refrigeration preserves food by", options:["killing all microbes","slowing microbial and enzymatic activity","adding sugar","fermentation"], answer:1, grades:[11,12] },
    { q: "Canning involves heating food in a sealed container to", options:["raise its nutrient content","destroy microbes and seal","increase its colour","dry it"], answer:1, grades:[11,12] },
    { q: "Smoking fish preserves it by", options:["increasing moisture","adding chemicals from smoke and drying","freezing","boiling"], answer:1, grades:[10,11,12] }
  ]});
  add("Food and Nutrition", "Food Hygiene", { objective: [
    { q: "Before handling food, one should", options:["chew gum","wash hands with soap and water","apply perfume","brush hair"], answer:1, grades:[10,11,12] },
    { q: "Typhoid fever is spread mainly through", options:["air","contaminated food and water","light","cold weather"], answer:1, grades:[11,12] },
    { q: "Pests in a kitchen should be", options:["fed","controlled and eliminated","tolerated","painted"], answer:1, grades:[10,11,12] },
    { q: "Cooked food should not be stored in", options:["covered clean containers","uncovered warm conditions","a refrigerator","a food flask"], answer:1, grades:[10,11,12] },
    { q: "HACCP stands for Hazard Analysis and Critical", options:["Cooking Points","Control Points","Closing Points","Counting Points"], answer:1, grades:[12] }
  ]});
  add("Food and Nutrition", "Family Nutrition", { objective: [
    { q: "A weanling baby is one who", options:["is newly born","is being introduced to foods besides breast milk","is elderly","is a teenager"], answer:1, grades:[11,12] },
    { q: "An adolescent girl needs extra ___ due to menstruation.", options:["vitamin A","iron","sodium","calcium only"], answer:1, grades:[11,12] },
    { q: "Elderly people often need diets that are", options:["high in saturated fats","easy to chew and digest, moderate energy","low in all nutrients","high in sugar"], answer:1, grades:[11,12] },
    { q: "Exclusive breastfeeding is recommended for the first", options:["2 weeks","2 months","6 months","2 years"], answer:2, grades:[10,11,12] },
    { q: "A staple food in most of West Africa is", options:["milk","cassava/yam/rice","beef","cheese"], answer:1, grades:[10,11,12] }
  ]});
  add("Food and Nutrition", "Nutrients", { objective: [
    { q: "Vitamin C is found mainly in", options:["cereals","citrus fruits and green vegetables","red meat","oils"], answer:1, grades:[10,11,12] },
    { q: "A severe deficiency of vitamin B1 (thiamine) causes", options:["rickets","beri-beri","scurvy","anaemia"], answer:1, grades:[11,12] },
    { q: "Calcium is needed primarily for", options:["vision","strong bones and teeth","hair colour","blood clotting only"], answer:1, grades:[10,11,12] }
  ]});
  add("Food and Nutrition", "Food Preparation", { objective: [
    { q: "Pressure cooking reduces cooking time because it", options:["lowers temperature","raises boiling point under pressure","adds salt","removes moisture"], answer:1, grades:[12] }
  ]});
  add("Food and Nutrition", "Meal Planning", { theory: [
    { q: "Plan a day's meals for a family of four (father, mother and two teenage children) on a modest budget.", model: "Breakfast: boiled yam with palm oil stew and boiled eggs; tea or local pap. Snack: banana and groundnuts. Lunch: jollof rice with vegetables, fried fish and salad. Snack: orange. Supper: light soup with plantain fufu, lean meat and garden egg. Rationale: provides all nutrients (carbs, protein, fat, vitamins, minerals, water); affordable local ingredients; varied cooking methods; portions adjusted by age and appetite.", grades:[11,12] }
  ]});
  add("Food and Nutrition", "Food Hygiene", { theory: [
    { q: "State four rules of personal hygiene that a food handler should observe.", model: "(i) Wash hands with soap before handling food and after using the toilet. (ii) Cover hair with a cap or headscarf and keep nails short and clean. (iii) Wear clean work clothes/apron and avoid coughing or sneezing over food. (iv) Do not handle food when suffering from communicable disease. (v) Avoid wearing jewellery while cooking.", grades:[10,11,12] }
  ]});
  add("Food and Nutrition", "Food Preservation", { theory: [
    { q: "Explain four reasons for preserving food.", model: "(i) To prevent spoilage so food lasts longer. (ii) To allow storage of seasonal/surplus produce for off-season use. (iii) To make food available in places where it is not produced. (iv) To add variety and value to food (e.g., smoked fish, tomato paste). (v) To save money by buying in bulk and preserving.", grades:[11,12] }
  ]});
  add("Food and Nutrition", "Family Nutrition", { theory: [
    { q: "Discuss four nutritional needs of a pregnant woman.", model: "(i) Extra protein — for growth of foetal tissue and the mother's body. (ii) Iron and folic acid — to increase maternal blood volume and prevent anaemia and neural tube defects. (iii) Calcium and vitamin D — for foetal bone development. (iv) Energy — additional kcal for foetal growth. (v) Adequate fluids and fibre — to reduce constipation. Advice: avoid alcohol and tobacco; take iron supplements as prescribed.", grades:[11,12] }
  ]});

  /* ─────────── HEALTH EDUCATION (50 new) ─────────── */
  add("Health Education", "Personal Hygiene", { objective: [
    { q: "Regular bathing helps to", options:["dry skin","remove sweat, dirt and germs from the skin","make one tall","whiten teeth"], answer:1, grades:[10,11,12] },
    { q: "To maintain oral hygiene, teeth should be brushed at least", options:["once a week","twice a day","only after sweets","once a month"], answer:1, grades:[10,11,12] },
    { q: "Dental caries (tooth decay) is caused by", options:["toothpaste","acid produced by bacteria on teeth","hard water","cold drinks"], answer:1, grades:[11,12] },
    { q: "Trimming finger nails short helps to", options:["prevent accumulation of germs","make nails hard","darken nails","grow hair"], answer:0, grades:[10,11,12] },
    { q: "Body odour is caused by", options:["clean skin","bacterial action on sweat","drinking water","sleeping"], answer:1, grades:[11,12] }
  ]});
  add("Health Education", "Nutrition & Health", { objective: [
    { q: "Anaemia is caused by a deficiency of", options:["calcium","iron","vitamin C only","iodine"], answer:1, grades:[10,11,12] },
    { q: "Goitre is caused by a deficiency of", options:["iron","iodine","vitamin K","sodium"], answer:1, grades:[11,12] },
    { q: "Marasmus is a form of severe malnutrition caused by lack of", options:["vitamin C","overall energy and protein","calcium","roughage"], answer:1, grades:[11,12] },
    { q: "Obesity is primarily associated with", options:["underfeeding","excess energy intake relative to expenditure","lack of water","lack of sleep only"], answer:1, grades:[11,12] },
    { q: "A balanced diet helps to prevent", options:["accidents","nutritional diseases","flooding","noise"], answer:1, grades:[10,11,12] }
  ]});
  add("Health Education", "Communicable Diseases", { objective: [
    { q: "Malaria is transmitted by", options:["tsetse fly","female Anopheles mosquito","housefly","rat"], answer:1, grades:[10,11,12] },
    { q: "Cholera is caused by", options:["virus","Vibrio cholerae bacterium","protozoan","fungus"], answer:1, grades:[11,12] },
    { q: "HIV/AIDS is spread mainly through", options:["handshakes","unprotected sex, blood and mother to child","mosquito bites","sharing food"], answer:1, grades:[10,11,12] },
    { q: "Tuberculosis mainly affects the", options:["liver","lungs","kidneys","skin"], answer:1, grades:[11,12] },
    { q: "An insect vector of yellow fever is", options:["Anopheles","Aedes aegypti","housefly","tick"], answer:1, grades:[12] }
  ]});
  add("Health Education", "Non-communicable Diseases", { objective: [
    { q: "Hypertension refers to", options:["low blood pressure","high blood pressure","low sugar","high temperature"], answer:1, grades:[10,11,12] },
    { q: "Type 2 diabetes is largely associated with", options:["infections","lifestyle and obesity","pregnancy only","weather"], answer:1, grades:[11,12] },
    { q: "A major risk factor for stroke is", options:["regular exercise","uncontrolled high blood pressure","drinking water","sleeping"], answer:1, grades:[12] },
    { q: "Sickle cell anaemia is a(n)", options:["communicable disease","inherited genetic disorder","parasitic disease","lifestyle disease only"], answer:1, grades:[11,12] },
    { q: "Cancer is characterised by", options:["viral infection only","uncontrolled growth of abnormal cells","low pulse","high pH"], answer:1, grades:[11,12] }
  ]});
  add("Health Education", "First Aid", { objective: [
    { q: "The first step in first aid is to", options:["give food","ensure the scene is safe and assess the victim","run away","take photographs"], answer:1, grades:[10,11,12] },
    { q: "For a minor burn, one should", options:["apply ice directly","run cool water over the area for several minutes","rub salt","cover with oil"], answer:1, grades:[11,12] },
    { q: "To stop severe bleeding from a wound, one should", options:["ignore it","apply firm direct pressure with a clean cloth","give aspirin","leave it open"], answer:1, grades:[10,11,12] },
    { q: "CPR stands for", options:["Cardiopulmonary Resuscitation","Cardiac Pain Relief","Complete Pulse Recovery","Constant Pulse Reading"], answer:0, grades:[11,12] },
    { q: "A fracture is confirmed by", options:["visual swelling only","X-ray examination","temperature","pulse"], answer:1, grades:[11,12] }
  ]});
  add("Health Education", "Community Health", { objective: [
    { q: "Immunisation protects against", options:["accidents","specific infectious diseases","malnutrition only","stress"], answer:1, grades:[10,11,12] },
    { q: "Safe disposal of human waste helps to prevent", options:["diabetes","diseases like cholera and typhoid","malaria only","accidents"], answer:1, grades:[11,12] },
    { q: "A common source of clean water in a village is a", options:["stagnant pond","protected borehole","open drain","swamp"], answer:1, grades:[10,11,12] },
    { q: "Health education in schools aims to", options:["give grades","promote healthy behaviours and attitudes","collect fees","reduce class size"], answer:1, grades:[10,11,12] },
    { q: "Environmental sanitation includes", options:["only sweeping","clearing refuse, drainage and controlling pests","painting walls","building houses"], answer:1, grades:[10,11,12] }
  ]});
  add("Health Education", "Drug Abuse", { objective: [
    { q: "Drug abuse means", options:["using drugs as prescribed","using drugs in a way harmful to health or in violation of the law","taking vitamins","taking water"], answer:1, grades:[11,12] },
    { q: "A commonly abused stimulant is", options:["paracetamol","cocaine","water","milk"], answer:1, grades:[11,12] },
    { q: "Long-term alcohol abuse may damage the", options:["skin only","liver and brain","nails","hair"], answer:1, grades:[11,12] },
    { q: "Smoking tobacco is strongly linked to", options:["improved lung function","lung cancer and heart disease","taller height","better memory"], answer:1, grades:[11,12] },
    { q: "A person addicted to a drug usually shows", options:["stable health","tolerance and withdrawal symptoms","improved work","longer life"], answer:1, grades:[12] }
  ]});
  add("Health Education", "Personal Hygiene", { objective: [
    { q: "Hand washing after using the toilet prevents the spread of", options:["fever only","fecal-oral diseases like diarrhoea and typhoid","allergies only","earache"], answer:1, grades:[10,11,12] },
    { q: "Using a separate towel and comb helps to prevent", options:["fever","skin and scalp infections","leg pain","yawning"], answer:1, grades:[10,11,12] }
  ]});
  add("Health Education", "Communicable Diseases", { objective: [
    { q: "ORS (Oral Rehydration Salts) is used mainly in the treatment of", options:["malaria","diarrhoea-related dehydration","chickenpox","tuberculosis"], answer:1, grades:[10,11,12] },
    { q: "The main way to prevent malaria is to", options:["avoid fruits","sleep under insecticide-treated nets and drain stagnant water","stop exercise","drink cold drinks"], answer:1, grades:[10,11,12] }
  ]});
  add("Health Education", "Community Health", { objective: [
    { q: "Primary health care emphasises", options:["high-tech surgery only","prevention and health promotion at community level","private clinics only","foreign health workers only"], answer:1, grades:[12] }
  ]});
  add("Health Education", "Communicable Diseases", { theory: [
    { q: "State four ways of preventing the spread of HIV/AIDS.", model: "(i) Abstinence before marriage and faithfulness within marriage. (ii) Use of condoms correctly for those sexually active. (iii) Avoid sharing sharp objects like razors and needles. (iv) Screen blood before transfusion. (v) Prevent mother-to-child transmission via antiretroviral treatment. (vi) Health education and awareness.", grades:[11,12] }
  ]});
  add("Health Education", "First Aid", { theory: [
    { q: "Describe the steps to follow when rendering first aid to a person who has fainted.", model: "(i) Ensure the scene is safe. (ii) Lay the person flat on their back with legs raised slightly to improve blood flow to the brain. (iii) Loosen tight clothing at the neck, chest and waist. (iv) Ensure fresh air supply — open windows or move outdoors. (v) Do not give food or drink while the person is unconscious. (vi) If they do not regain consciousness within a minute or have other injuries, call for medical help.", grades:[11,12] }
  ]});
  add("Health Education", "Drug Abuse", { theory: [
    { q: "Discuss four effects of drug abuse on society.", model: "(i) Increased crime rates — users may steal to finance addiction. (ii) Loss of productivity in the workforce and school dropouts. (iii) Higher burden on health systems treating drug-related disease and accidents. (iv) Family breakdown and domestic violence. (v) Spread of infectious diseases like HIV through shared needles.", grades:[12] }
  ]});
  add("Health Education", "Non-communicable Diseases", { theory: [
    { q: "Explain any four lifestyle measures that reduce the risk of non-communicable diseases.", model: "(i) Regular physical activity (at least 30 minutes most days). (ii) Balanced diet rich in fruits, vegetables and low in salt, sugar and saturated fats. (iii) Avoidance of tobacco and limiting alcohol intake. (iv) Maintaining a healthy body weight. (v) Regular medical check-ups for early detection (BP, blood sugar). (vi) Stress management and adequate sleep.", grades:[11,12] }
  ]});

  /* ─────────── ISLAMIC RELIGIOUS STUDIES (50 new) ─────────── */
  add("Islamic Religious Studies", "Qur'an", { objective: [
    { q: "The holy book of Islam is the", options:["Bible","Qur'an","Torah","Vedas"], answer:1, grades:[10,11,12] },
    { q: "The Qur'an was revealed over a period of approximately", options:["3 years","13 years","23 years","40 years"], answer:2, grades:[11,12] },
    { q: "The first surah of the Qur'an is", options:["Al-Baqarah","Al-Fatihah","Al-Ikhlas","An-Nas"], answer:1, grades:[10,11,12] },
    { q: "The Qur'an contains ___ surahs.", options:["99","114","120","77"], answer:1, grades:[11,12] },
    { q: "The night on which the Qur'an was first revealed is called", options:["Lailatul Miraj","Lailatul Qadr","Lailatul Bara'at","Lailatul Jumu'ah"], answer:1, grades:[11,12] }
  ]});
  add("Islamic Religious Studies", "Hadith", { objective: [
    { q: "Hadith refers to the", options:["revelations of God","sayings and actions of the Prophet Muhammad (SAW)","sayings of Angels","laws of kings"], answer:1, grades:[10,11,12] },
    { q: "One of the most authentic collections of Hadith is by", options:["Al-Bukhari","Ibn Sina","Al-Kindi","Al-Razi"], answer:0, grades:[11,12] },
    { q: "The narrator of a Hadith is called", options:["Qari","Rawi","Mufti","Qadi"], answer:1, grades:[12] },
    { q: "The chain of narrators of a Hadith is known as the", options:["Matn","Isnad","Sanad/Isnad","Surah"], answer:2, grades:[12] },
    { q: "A Hadith classified as Sahih is", options:["weak","authentic","fabricated","missing"], answer:1, grades:[11,12] }
  ]});
  add("Islamic Religious Studies", "Tawhid", { objective: [
    { q: "Tawhid is the belief in the", options:["Prophet only","Oneness of Allah","Angels only","Jinn"], answer:1, grades:[10,11,12] },
    { q: "Associating partners with Allah is called", options:["Shirk","Kufr","Bid'ah","Tawhid"], answer:0, grades:[10,11,12] },
    { q: "Iman al-Mufassal lists ___ articles of faith.", options:["5","6","7","10"], answer:1, grades:[11,12] },
    { q: "Belief in the Day of Judgement is called", options:["Yaumul Qiyamah (faith in it)","Tawhid","Zakat","Sawm"], answer:0, grades:[11,12] },
    { q: "The attribute of Allah meaning 'The Merciful' is", options:["Ar-Rahman","Al-Jabbar","Al-Qahhar","Al-Wahhab"], answer:0, grades:[10,11,12] }
  ]});
  add("Islamic Religious Studies", "Fiqh (Worship)", { objective: [
    { q: "The number of obligatory daily prayers is", options:["3","4","5","7"], answer:2, grades:[10,11,12] },
    { q: "Wudu is performed before", options:["eating only","salat","sleeping","travel only"], answer:1, grades:[10,11,12] },
    { q: "The month of fasting in Islam is", options:["Muharram","Rajab","Ramadan","Shawwal"], answer:2, grades:[10,11,12] },
    { q: "Zakat is generally levied at", options:["1%","2.5%","10%","25%"], answer:1, grades:[11,12] },
    { q: "The pilgrimage to Makkah is known as", options:["Hajj","Umrah","Tahajjud","Jumu'ah"], answer:0, grades:[10,11,12] }
  ]});
  add("Islamic Religious Studies", "Sirah (Prophet's Life)", { objective: [
    { q: "The Prophet Muhammad (SAW) was born in the city of", options:["Madinah","Makkah","Taif","Damascus"], answer:1, grades:[10,11,12] },
    { q: "The migration from Makkah to Madinah is called the", options:["Isra","Hijrah","Mi'raj","Fath"], answer:1, grades:[10,11,12] },
    { q: "The Prophet received his first revelation at", options:["Uhud","Cave of Hira","Badr","Tabuk"], answer:1, grades:[10,11,12] },
    { q: "The first Muslim woman was", options:["Aishah","Fatimah","Khadijah","Hafsah"], answer:2, grades:[11,12] },
    { q: "The Battle of Badr was fought in the year", options:["1 AH","2 AH","5 AH","10 AH"], answer:1, grades:[12] }
  ]});
  add("Islamic Religious Studies", "Islamic History", { objective: [
    { q: "The first Caliph of Islam was", options:["Abu Bakr (RA)","Umar (RA)","Uthman (RA)","Ali (RA)"], answer:0, grades:[10,11,12] },
    { q: "The Caliph known for expanding Islamic administration and the Hijri calendar was", options:["Abu Bakr","Umar ibn al-Khattab","Uthman ibn Affan","Ali ibn Abi Talib"], answer:1, grades:[11,12] },
    { q: "The Umayyad Caliphate's capital was", options:["Baghdad","Damascus","Cairo","Madinah"], answer:1, grades:[12] },
    { q: "The Abbasid Caliphate's capital was", options:["Baghdad","Cairo","Istanbul","Makkah"], answer:0, grades:[12] },
    { q: "Islam reached West Africa largely through", options:["sea travellers from Europe","trans-Saharan trade and scholars","soldiers from India","colonial officers"], answer:1, grades:[11,12] }
  ]});
  add("Islamic Religious Studies", "Islamic Ethics", { objective: [
    { q: "Truthfulness in Islam is called", options:["Amanah","Sidq","Taqwa","Khidmah"], answer:1, grades:[11,12] },
    { q: "Trustworthiness is known in Islam as", options:["Adl","Amanah","Shura","Ihsan"], answer:1, grades:[11,12] },
    { q: "Islam enjoins kindness to", options:["only Muslims","parents, neighbours and the needy","only family","only travellers"], answer:1, grades:[10,11,12] },
    { q: "The concept of doing what is excellent is known as", options:["Ihsan","Iman","Islam","Iqamah"], answer:0, grades:[12] },
    { q: "Consultation in Islamic governance is termed", options:["Shura","Zakat","Hajj","Wudu"], answer:0, grades:[12] }
  ]});
  add("Islamic Religious Studies", "Fiqh (Worship)", { objective: [
    { q: "The direction faced in salat is called", options:["Ka'bah","Qiblah","Mihrab","Adhan"], answer:1, grades:[10,11,12] },
    { q: "A person who is fasting is called", options:["Hajj","Sa'im","Imam","Hafidh"], answer:1, grades:[10,11,12] },
    { q: "Zakat al-Fitr is paid", options:["anytime in the year","at the end of Ramadan before Eid prayer","during Hajj only","at birth"], answer:1, grades:[11,12] }
  ]});
  add("Islamic Religious Studies", "Qur'an", { objective: [
    { q: "The longest surah in the Qur'an is", options:["Al-Fatihah","Al-Baqarah","Yaseen","Ar-Rahman"], answer:1, grades:[12] },
    { q: "Memorisation of the whole Qur'an earns one the title", options:["Mufti","Hafidh","Qadi","Imam"], answer:1, grades:[10,11,12] }
  ]});
  add("Islamic Religious Studies", "Islamic Ethics", { objective: [
    { q: "Islam prohibits which of the following?", options:["Honest trade","Riba (usury)","Seeking knowledge","Feeding the poor"], answer:1, grades:[11,12] }
  ]});
  add("Islamic Religious Studies", "Fiqh (Worship)", { theory: [
    { q: "Mention and briefly explain the Five Pillars of Islam.", model: "(i) Shahadah — declaration of faith that there is no god but Allah and Muhammad is His messenger. (ii) Salat — performing the five daily prayers. (iii) Zakat — giving alms at a set rate (usually 2.5%) from one's wealth to those entitled. (iv) Sawm — fasting from dawn to sunset in Ramadan. (v) Hajj — pilgrimage to Makkah once in a lifetime for those able.", grades:[11,12] }
  ]});
  add("Islamic Religious Studies", "Sirah (Prophet's Life)", { theory: [
    { q: "State four lessons Muslims can learn from the Hijrah.", model: "(i) Importance of patience and sacrifice in the cause of Allah. (ii) Muslims must seek safer grounds when oppressed. (iii) Reliance on Allah in all circumstances. (iv) Value of strong brotherhood, shown by the hospitality of the Ansar to the Muhajirun. (v) Planning and strategy are consistent with faith. (vi) Migration helped establish the first Muslim state in Madinah.", grades:[11,12] }
  ]});
  add("Islamic Religious Studies", "Tawhid", { theory: [
    { q: "Explain the concept of Tawhid and its importance to a Muslim.", model: "Tawhid: absolute belief in the Oneness of Allah in His Lordship (Rububiyyah), His right to be worshipped (Uluhiyyah) and His names and attributes (Asma wa Sifat). Importance: it is the foundation of faith; frees one from worship of anything besides Allah; promotes humility; gives peace of mind; grounds Islamic morality and the unity of the Muslim community.", grades:[12] }
  ]});
  add("Islamic Religious Studies", "Islamic Ethics", { theory: [
    { q: "Discuss the Islamic view of honesty in trade.", model: "Islam emphasises honesty and truthfulness in all dealings. The Prophet (SAW) said: 'The truthful and trustworthy merchant will be with the Prophets, the truthful and the martyrs.' Traders must give full measure, not hide defects, and keep promises. Cheating, hoarding, and usury (riba) are forbidden. Honest trade brings blessing (barakah) in both this life and the hereafter.", grades:[11,12] }
  ]});

  /* ─────────── MARKETING (50 new) ─────────── */
  add("Marketing", "Marketing Concepts", { objective: [
    { q: "Marketing is best defined as", options:["selling only","the process of creating, communicating and delivering value to customers","advertising only","packaging only"], answer:1, grades:[10,11,12] },
    { q: "A customer need is", options:["a desire for luxury","a state of felt deprivation","a sales target","a product list"], answer:1, grades:[11,12] },
    { q: "The marketing concept focuses on", options:["production","selling","customer satisfaction and profitability","advertising only"], answer:2, grades:[11,12] },
    { q: "A market consists of", options:["buyers with willingness and ability to purchase","only sellers","stores only","competitors only"], answer:0, grades:[10,11,12] },
    { q: "The production era emphasised", options:["customer needs","mass production and low cost","digital tools","relationships"], answer:1, grades:[12] }
  ]});
  add("Marketing", "Market Research", { objective: [
    { q: "Market research is the systematic gathering of", options:["random facts","data about consumers, competitors and the market","products","prices only"], answer:1, grades:[10,11,12] },
    { q: "A questionnaire is a tool of", options:["production","market research","pricing","packaging"], answer:1, grades:[10,11,12] },
    { q: "A focus group is an example of", options:["quantitative research","qualitative research","sampling error","survey error"], answer:1, grades:[11,12] },
    { q: "Secondary data is", options:["collected first-hand","already collected by others","made up","irrelevant"], answer:1, grades:[11,12] },
    { q: "A representative subset of a population used in research is a", options:["census","sample","result","report"], answer:1, grades:[11,12] }
  ]});
  add("Marketing", "Consumer Behaviour", { objective: [
    { q: "Consumer behaviour studies how individuals", options:["manage factories","select, buy and use goods and services","govern countries","pay taxes"], answer:1, grades:[11,12] },
    { q: "Maslow's hierarchy of needs places physiological needs at the", options:["top","middle","bottom","side"], answer:2, grades:[12] },
    { q: "A consumer's buying decision is influenced by cultural, social, personal and ___ factors.", options:["chemical","psychological","political","geological"], answer:1, grades:[12] },
    { q: "Reference groups influence consumers through", options:["accounting","social norms and opinions","taxes","exports"], answer:1, grades:[11,12] },
    { q: "Brand loyalty is shown when consumers", options:["switch frequently","repeatedly buy the same brand","avoid the brand","return products"], answer:1, grades:[11,12] }
  ]});
  add("Marketing", "Product & Pricing", { objective: [
    { q: "A new product that launches at a low price to gain market share quickly is using", options:["price skimming","penetration pricing","premium pricing","bundling"], answer:1, grades:[12] },
    { q: "The product life cycle stage with high growth and rising sales is", options:["introduction","growth","maturity","decline"], answer:1, grades:[11,12] },
    { q: "Packaging serves to", options:["raise taxes","protect, inform and promote the product","replace advertising only","reduce product life"], answer:1, grades:[10,11,12] },
    { q: "Cost-plus pricing sets price by adding a markup to", options:["competitor prices","cost of production","customer income","salaries"], answer:1, grades:[11,12] },
    { q: "Loss leader pricing means selling a product", options:["at a loss to attract customers who buy more","at a huge profit","at cost","only by auction"], answer:0, grades:[12] }
  ]});
  add("Marketing", "Promotion & Advertising", { objective: [
    { q: "Advertising is a form of", options:["production","mass paid, non-personal promotion","distribution","pricing"], answer:1, grades:[10,11,12] },
    { q: "Personal selling involves", options:["mass media ads only","face-to-face interaction between seller and buyer","billboards","flyers only"], answer:1, grades:[10,11,12] },
    { q: "A coupon is a tool of", options:["personal selling","sales promotion","public relations","advertising only"], answer:1, grades:[11,12] },
    { q: "Public relations mainly manages", options:["machines","the image and relationship of the firm with the public","salaries","inventory"], answer:1, grades:[11,12] },
    { q: "AIDA stands for Attention, Interest, ___ and Action.", options:["Desire","Demand","Direction","Determination"], answer:0, grades:[11,12] }
  ]});
  add("Marketing", "Distribution Channels", { objective: [
    { q: "A distribution channel moves goods from", options:["consumer to producer","producer to consumer","retailer to manufacturer only","market to factory"], answer:1, grades:[10,11,12] },
    { q: "A wholesaler typically buys from", options:["retailer","manufacturer","consumer","competitor"], answer:1, grades:[10,11,12] },
    { q: "Direct marketing involves", options:["no intermediaries","intermediaries only","only advertising","hiring sales reps only"], answer:0, grades:[11,12] },
    { q: "Selective distribution uses", options:["every possible outlet","a few selected outlets","none at all","one outlet only"], answer:1, grades:[12] },
    { q: "E-commerce is", options:["selling via electronic networks and internet","selling only in shops","selling by phone only","bartering"], answer:0, grades:[10,11,12] }
  ]});
  add("Marketing", "Sales Management", { objective: [
    { q: "A sales quota is a", options:["tax","target set for a salesperson or region","discount","slogan"], answer:1, grades:[11,12] },
    { q: "A key role of a sales manager is to", options:["bake bread","recruit, train, motivate and evaluate sales staff","audit books","launch products only"], answer:1, grades:[11,12] },
    { q: "A sales forecast estimates", options:["future expected sales","past costs","tax rates","currency exchange"], answer:0, grades:[11,12] },
    { q: "Prospecting in sales means", options:["mining minerals","finding potential customers","filing reports","cleaning offices"], answer:1, grades:[11,12] },
    { q: "After-sales service improves", options:["product cost only","customer satisfaction and repeat purchases","tax","inflation"], answer:1, grades:[10,11,12] }
  ]});
  add("Marketing", "Marketing Concepts", { objective: [
    { q: "Market segmentation based on age, gender and income is", options:["geographic","demographic","psychographic","behavioural"], answer:1, grades:[11,12] },
    { q: "Targeting is the process of", options:["creating products","selecting market segments to serve","pricing","distributing"], answer:1, grades:[11,12] },
    { q: "Positioning refers to", options:["shelf placement only","designing the firm's offering to occupy a distinctive place in consumers' minds","hiring staff","tax planning"], answer:1, grades:[12] }
  ]});
  add("Marketing", "Promotion & Advertising", { objective: [
    { q: "A brand name is a", options:["price tag","name, term or symbol that identifies a seller's product","factory number","legal court order"], answer:1, grades:[10,11,12] },
    { q: "A slogan is a", options:["short catchy phrase promoting a brand","tax","subsidy","song"], answer:0, grades:[10,11,12] }
  ]});
  add("Marketing", "Product & Pricing", { theory: [
    { q: "Explain the stages of the Product Life Cycle (PLC).", model: "(i) Introduction — product launched; sales grow slowly, high marketing cost, usually little profit. (ii) Growth — sales rise rapidly, profits increase, new competitors enter. (iii) Maturity — sales peak and stabilise; profits peak then level off; heavy competition. (iv) Decline — sales fall due to new products or changing tastes; firm may phase out, rejuvenate or withdraw the product.", grades:[11,12] }
  ]});
  add("Marketing", "Consumer Behaviour", { theory: [
    { q: "Discuss the steps involved in the consumer decision-making process.", model: "(i) Need recognition — becoming aware of a problem or desire. (ii) Information search — internal memory and external sources such as friends and ads. (iii) Evaluation of alternatives — comparing brands on criteria like price, quality. (iv) Purchase decision — choosing the preferred alternative. (v) Post-purchase behaviour — satisfaction or dissonance, affecting future loyalty and word of mouth.", grades:[11,12] }
  ]});
  add("Marketing", "Market Research", { theory: [
    { q: "Distinguish between primary and secondary data in market research with one example each.", model: "Primary data — collected first-hand for the specific research problem (e.g., survey of customers about a new juice flavour). Secondary data — already collected by others for different purposes, used by the researcher (e.g., government population census, industry reports). Primary is tailored but costly; secondary is cheap but may not fit the exact problem.", grades:[12] }
  ]});
  add("Marketing", "Distribution Channels", { theory: [
    { q: "State any four functions of a wholesaler in the distribution channel.", model: "(i) Breaks bulk — buys in large quantities from manufacturers and sells in smaller units to retailers. (ii) Storage — warehouses goods so manufacturers do not need large storage. (iii) Finance — often gives credit to retailers. (iv) Risk bearing — bears risk of changes in demand and damage. (v) Transportation and distribution to retailers. (vi) Provides market information to manufacturers.", grades:[11,12] }
  ]});

  /* ─── TOP-UPS to reach 50 per subject ─── */
  add("Auto Mechanics", "Vehicle Maintenance", { objective: [
    { q: "The period during which a worn-out vehicle's engine may be restored to near-original condition is called", options:["overhaul","break-in","start-up","warm-up"], answer:0, grades:[11,12] },
    { q: "A blue exhaust smoke usually indicates", options:["too rich fuel mixture","burning of engine oil in the combustion chamber","cold engine","faulty brake"], answer:1, grades:[12] },
    { q: "A scissor jack is mainly used for", options:["pumping fuel","lifting a vehicle to change a tyre","testing spark plugs","timing the engine"], answer:1, grades:[10,11,12] },
    { q: "Tyre rotation is done to", options:["change colour","promote even tyre wear","improve the radio","increase fuel use"], answer:1, grades:[11,12] }
  ]});
  add("Basic Electronics", "AC Circuits", { objective: [
    { q: "The reciprocal of impedance is called", options:["reactance","admittance","resistivity","conductance"], answer:1, grades:[12] },
    { q: "A transformer works on the principle of", options:["capacitance","electromagnetic induction","resistance","radiation"], answer:1, grades:[11,12] },
    { q: "A step-down transformer has", options:["more turns on the secondary","more turns on the primary","equal turns","no coils"], answer:1, grades:[11,12] },
    { q: "Root Mean Square (RMS) value of an AC signal is used because", options:["it is a minimum","it represents the effective DC equivalent","it is easier to measure","it is zero"], answer:1, grades:[12] }
  ]});
  add("Book-Keeping", "Cash Book", { objective: [
    { q: "A bank overdraft on the bank column of a cash book appears as a", options:["debit balance","credit balance","nil balance","suspense item"], answer:1, grades:[12] },
    { q: "Discount received from a supplier is recorded on the", options:["debit side (cash)","credit side (discount column)","trial balance only","memorandum only"], answer:1, grades:[12] },
    { q: "Petty cash book is usually kept on the ___ system.", options:["single entry","imprest","double entry only","barter"], answer:1, grades:[11,12] },
    { q: "A bank statement is prepared by the", options:["customer","bank","auditor","tax office"], answer:1, grades:[10,11,12] },
    { q: "A bank reconciliation statement reconciles the bank statement with the", options:["sales book","cash book bank column","petty cash","trial balance"], answer:1, grades:[11,12] }
  ]});
  add("Business Management", "Business Finance", { objective: [
    { q: "An overdraft is a form of", options:["long-term finance","short-term finance from a bank","equity","retained earnings"], answer:1, grades:[11,12] },
    { q: "Hire purchase allows a firm to", options:["buy assets by instalments with ownership on final payment","rent forever","give away goods","export freely"], answer:0, grades:[11,12] },
    { q: "Leasing differs from hire purchase in that", options:["ownership transfers to lessee at start","ownership remains with lessor","payments are one-off","no payment is required"], answer:1, grades:[12] },
    { q: "Equity capital is raised mainly through", options:["selling debentures","issuing shares to owners/shareholders","tax refunds","short-term loans"], answer:1, grades:[11,12] },
    { q: "A firm's liquidity refers to its ability to", options:["make long-term profits","meet short-term obligations","pay dividends only","maximise sales"], answer:1, grades:[11,12] }
  ]});
  add("Data Processing", "Software", { objective: [
    { q: "A computer virus is a type of", options:["hardware fault","malicious software","input device","network cable"], answer:1, grades:[11,12] },
    { q: "The program that translates high-level code to machine code all at once is a", options:["compiler","interpreter","assembler","loader"], answer:0, grades:[12] },
    { q: "An example of a web browser is", options:["Excel","Google Chrome","MS Paint","PowerPoint"], answer:1, grades:[10,11,12] },
    { q: "A pixel is the smallest unit of a", options:["document","digital image on screen","worksheet","database"], answer:1, grades:[11,12] }
  ]});
  add("Food and Nutrition", "Food Groups", { objective: [
    { q: "Palm oil, groundnut oil and butter are classified as", options:["proteins","carbohydrates","fats and oils","vitamins"], answer:2, grades:[10,11,12] },
    { q: "A rich source of vitamin A is", options:["carrots and pawpaw","white rice","sugar","salt"], answer:0, grades:[10,11,12] }
  ]});
  add("Food and Nutrition", "Meal Planning", { objective: [
    { q: "A packed lunch for a school child should be", options:["spicy and oily","balanced, easy to eat and hygienically packed","one item only","very hot"], answer:1, grades:[10,11,12] },
    { q: "A religious consideration when planning a meal is", options:["weather","food restrictions of the family","exam season","sports schedule"], answer:1, grades:[11,12] }
  ]});
  add("Food and Nutrition", "Food Hygiene", { objective: [
    { q: "Washing raw fruits before eating helps to remove", options:["vitamins","germs, dust and pesticide residues","fibre","taste"], answer:1, grades:[10,11,12] },
    { q: "Cutting boards for raw meat and vegetables should be", options:["the same","separate to avoid cross-contamination","always wooden","painted"], answer:1, grades:[11,12] },
    { q: "The 'danger zone' for food temperature is approximately", options:["0–4 °C","5–60 °C","−10 to 0 °C","100 °C"], answer:1, grades:[12] }
  ]});
  add("Health Education", "Nutrition & Health", { objective: [
    { q: "Night blindness is caused by deficiency of", options:["vitamin A","vitamin C","iron","protein"], answer:0, grades:[10,11,12] },
    { q: "Rickets in children is due to deficiency of", options:["vitamin D","iron","iodine","sodium"], answer:0, grades:[11,12] }
  ]});
  add("Health Education", "Personal Hygiene", { objective: [
    { q: "Changing underwear daily helps to prevent", options:["skin infections and body odour","malaria","tuberculosis","fractures"], answer:0, grades:[10,11,12] },
    { q: "During menstruation, a girl should", options:["avoid bathing","maintain good hygiene, change pads regularly","stay isolated","starve"], answer:1, grades:[10,11,12] }
  ]});
  add("Health Education", "First Aid", { objective: [
    { q: "A snake bite victim should be", options:["made to run","kept calm and still, bitten limb immobilised, and rushed to hospital","given alcohol","bled further"], answer:1, grades:[11,12] },
    { q: "For a suspected fracture, first aiders should", options:["force the bone straight","immobilise the limb with a splint and seek medical help","massage it","ignore it"], answer:1, grades:[11,12] }
  ]});
  add("Islamic Religious Studies", "Islamic History", { objective: [
    { q: "The Battle in which the Muslims were initially defeated on Mount Uhud was the", options:["Battle of Badr","Battle of Uhud","Battle of Khandaq","Battle of Hunayn"], answer:1, grades:[12] },
    { q: "The Treaty of Hudaybiyyah was signed in", options:["1 AH","4 AH","6 AH","10 AH"], answer:2, grades:[12] },
    { q: "The last Caliph of the Rightly-Guided Caliphs was", options:["Abu Bakr","Umar","Uthman","Ali"], answer:3, grades:[11,12] },
    { q: "The Al-Aqsa Mosque is located in", options:["Makkah","Madinah","Jerusalem","Istanbul"], answer:2, grades:[11,12] },
    { q: "The first muezzin (caller to prayer) of Islam was", options:["Abu Bakr","Bilal ibn Rabah","Ali","Uthman"], answer:1, grades:[11,12] }
  ]});
  add("Marketing", "Marketing Concepts", { objective: [
    { q: "A mission statement describes", options:["product prices only","the core purpose and reason for existence of a business","taxes","sales quotas"], answer:1, grades:[12] },
    { q: "SWOT analysis examines strengths, weaknesses, opportunities and", options:["taxes","threats","travel","tariffs"], answer:1, grades:[11,12] },
    { q: "A unique selling proposition (USP) is", options:["a slogan only","a distinctive benefit that differentiates a product from competitors","a receipt","a tariff"], answer:1, grades:[12] },
    { q: "Market share is a firm's", options:["total assets","portion of total industry sales","number of employees","export volume"], answer:1, grades:[11,12] }
  ]});
  add("Marketing", "Sales Management", { objective: [
    { q: "Territory management refers to", options:["political boundaries","dividing the market by geographic areas for sales assignment","tax zones","product zones only"], answer:1, grades:[12] },
    { q: "Commission-based pay motivates sales staff by tying income to", options:["attendance only","sales performance","tenure","age"], answer:1, grades:[11,12] }
  ]});

})();
