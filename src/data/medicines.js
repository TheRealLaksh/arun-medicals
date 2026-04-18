export const categories = [
  "Tablets & Capsules", 
  "Syrups & Drops", 
  "Health Supplements", 
  "First Aid", 
  "Ayurvedic", 
  "Personal Care"
];

export const medicines = [
  // Tablets & Capsules
  {
    id: 1, name: "Paracetamol 500mg", price: 30, discount: 10, category: "Tablets & Capsules",
    images: ["https://placehold.co/400x400/png?text=Paracetamol", "https://placehold.co/400x400/png?text=Back+View"],
    description: "Effective pain relief and fever reducer. Acts quickly to provide comfort.",
    uses: "Fever, Headache, Body ache", dosage: "1 tablet every 6 hours after meals", sideEffects: "Nausea, mild skin rash",
    stock: 50, prescriptionRequired: false, tags: ["Popular", "Essential"]
  },
  {
    id: 2, name: "Azithromycin 500mg", price: 110, discount: 15, category: "Tablets & Capsules",
    images: ["https://placehold.co/400x400/png?text=Azithromycin"],
    description: "Broad-spectrum antibiotic used to treat various bacterial infections.",
    uses: "Throat infection, Respiratory infections", dosage: "1 tablet daily for 3 days", sideEffects: "Diarrhea, stomach upset",
    stock: 12, prescriptionRequired: true, tags: []
  },
  {
    id: 3, name: "Pantoprazole 40mg", price: 85, discount: 5, category: "Tablets & Capsules",
    images: ["https://placehold.co/400x400/png?text=Pantoprazole"],
    description: "Reduces the amount of acid produced in the stomach.",
    uses: "Acidity, Heartburn, GERD", dosage: "1 tablet before breakfast", sideEffects: "Headache, dizziness",
    stock: 100, prescriptionRequired: true, tags: ["Popular"]
  },
  {
    id: 4, name: "Cetirizine 10mg", price: 20, discount: 0, category: "Tablets & Capsules",
    images: ["https://placehold.co/400x400/png?text=Cetirizine"],
    description: "Antihistamine used to relieve allergy symptoms.",
    uses: "Allergies, Runny nose, Sneezing", dosage: "1 tablet at bedtime", sideEffects: "Drowsiness, dry mouth",
    stock: 80, prescriptionRequired: false, tags: ["Essential"]
  },
  {
    id: 5, name: "Amoxicillin 250mg", price: 60, discount: 10, category: "Tablets & Capsules",
    images: ["https://placehold.co/400x400/png?text=Amoxicillin"],
    description: "Penicillin antibiotic for bacterial infections.",
    uses: "Ear, nose, and throat infections", dosage: "1 capsule every 8 hours", sideEffects: "Nausea, rash",
    stock: 4, prescriptionRequired: true, tags: ["Limited Stock"]
  },

  // Syrups & Drops
  {
    id: 6, name: "Cough Syrup 100ml", price: 120, discount: 15, category: "Syrups & Drops",
    images: ["https://placehold.co/400x400/png?text=Cough+Syrup"],
    description: "Relief from dry cough and throat irritation.",
    uses: "Dry Cough, Cold", dosage: "2 teaspoons twice a day", sideEffects: "Drowsiness",
    stock: 3, prescriptionRequired: false, tags: ["Limited Stock"]
  },
  {
    id: 7, name: "Digestive Enzyme Syrup", price: 150, discount: 20, category: "Syrups & Drops",
    images: ["https://placehold.co/400x400/png?text=Digestion+Syrup"],
    description: "Aids in digestion and provides relief from bloating.",
    uses: "Indigestion, Gas", dosage: "1 teaspoon after meals", sideEffects: "None",
    stock: 40, prescriptionRequired: false, tags: ["Popular"]
  },
  {
    id: 8, name: "Refresh Eye Drops", price: 145, discount: 5, category: "Syrups & Drops",
    images: ["https://placehold.co/400x400/png?text=Eye+Drops"],
    description: "Lubricating eye drops for dry and irritated eyes.",
    uses: "Dry eyes, Eye strain", dosage: "1-2 drops as needed", sideEffects: "Temporary blurred vision",
    stock: 25, prescriptionRequired: false, tags: []
  },
  {
    id: 9, name: "Paracetamol Pediatric Syrup", price: 45, discount: 0, category: "Syrups & Drops",
    images: ["https://placehold.co/400x400/png?text=Kids+Fever+Syrup"],
    description: "Fever and pain relief specially formulated for children.",
    uses: "Fever in kids", dosage: "As directed by pediatrician", sideEffects: "Upset stomach",
    stock: 50, prescriptionRequired: false, tags: ["Essential"]
  },
  {
    id: 10, name: "Iron Tonic 200ml", price: 180, discount: 10, category: "Syrups & Drops",
    images: ["https://placehold.co/400x400/png?text=Iron+Tonic"],
    description: "Helps prevent and treat iron deficiency anemia.",
    uses: "Anemia, Weakness", dosage: "1 tablespoon daily", sideEffects: "Constipation, dark stools",
    stock: 15, prescriptionRequired: false, tags: []
  },

  // Health Supplements
  {
    id: 11, name: "Vitamin C 500mg Chewable", price: 150, discount: 25, category: "Health Supplements",
    images: ["https://placehold.co/400x400/png?text=Vitamin+C"],
    description: "Immunity booster Vitamin C chewable tablets with orange flavor.",
    uses: "Low immunity, Vitamin C deficiency", dosage: "1 tablet daily", sideEffects: "Stomach upset if taken empty stomach",
    stock: 200, prescriptionRequired: false, tags: ["Popular", "Immunity"]
  },
  {
    id: 12, name: "Omega 3 Fish Oil", price: 899, discount: 40, category: "Health Supplements",
    images: ["https://placehold.co/400x400/png?text=Omega+3"],
    description: "High-quality fish oil for heart, brain, and joint health.",
    uses: "Heart health, Joint support", dosage: "1 capsule daily with meal", sideEffects: "Fishy burps",
    stock: 30, prescriptionRequired: false, tags: ["Premium"]
  },
  {
    id: 13, name: "Multivitamin Men", price: 450, discount: 15, category: "Health Supplements",
    images: ["https://placehold.co/400x400/png?text=Multivitamin"],
    description: "Comprehensive daily multivitamin tailored for men's health.",
    uses: "Daily nutrition, Energy", dosage: "1 tablet daily after breakfast", sideEffects: "None",
    stock: 60, prescriptionRequired: false, tags: ["Popular"]
  },
  {
    id: 14, name: "Calcium + D3 Tablets", price: 220, discount: 10, category: "Health Supplements",
    images: ["https://placehold.co/400x400/png?text=Calcium+D3"],
    description: "Supports bone and teeth health.",
    uses: "Bone strength, Calcium deficiency", dosage: "1 tablet daily", sideEffects: "Constipation",
    stock: 45, prescriptionRequired: false, tags: []
  },
  {
    id: 15, name: "Whey Protein 1kg", price: 2500, discount: 30, category: "Health Supplements",
    images: ["https://placehold.co/400x400/png?text=Whey+Protein"],
    description: "High-quality protein powder for muscle recovery.",
    uses: "Muscle building, Recovery", dosage: "1 scoop post-workout", sideEffects: "Bloating if lactose intolerant",
    stock: 5, prescriptionRequired: false, tags: ["Limited Stock", "Premium"]
  },

  // First Aid
  {
    id: 16, name: "Povidone Iodine Ointment 20g", price: 90, discount: 0, category: "First Aid",
    images: ["https://placehold.co/400x400/png?text=Iodine+Ointment"],
    description: "Antiseptic ointment for minor cuts and wounds.",
    uses: "Wounds, Cuts, Scrapes", dosage: "Apply thin layer locally", sideEffects: "Skin irritation",
    stock: 120, prescriptionRequired: false, tags: ["Essential"]
  },
  {
    id: 17, name: "Cotton Roll 100g", price: 50, discount: 5, category: "First Aid",
    images: ["https://placehold.co/400x400/png?text=Cotton+Roll"],
    description: "Sterilized absorbent cotton roll.",
    uses: "Cleaning wounds", dosage: "As needed", sideEffects: "None",
    stock: 200, prescriptionRequired: false, tags: []
  },
  {
    id: 18, name: "Adhesive Bandages (Pack of 100)", price: 150, discount: 20, category: "First Aid",
    images: ["https://placehold.co/400x400/png?text=Bandages"],
    description: "Waterproof bandages for minor cuts.",
    uses: "Minor cuts", dosage: "Apply on clean wound", sideEffects: "None",
    stock: 50, prescriptionRequired: false, tags: ["Popular"]
  },
  {
    id: 19, name: "Antiseptic Liquid 250ml", price: 130, discount: 10, category: "First Aid",
    images: ["https://placehold.co/400x400/png?text=Antiseptic+Liquid"],
    description: "Multipurpose antiseptic liquid for first aid and personal hygiene.",
    uses: "Wound cleaning, Disinfection", dosage: "Dilute in water before use", sideEffects: "Skin irritation if undiluted",
    stock: 80, prescriptionRequired: false, tags: ["Essential"]
  },
  {
    id: 20, name: "Crepe Bandage 10cm", price: 180, discount: 0, category: "First Aid",
    images: ["https://placehold.co/400x400/png?text=Crepe+Bandage"],
    description: "Elastic bandage for sprains and strains.",
    uses: "Sprains, Joint support", dosage: "Wrap firmly around affected area", sideEffects: "None",
    stock: 40, prescriptionRequired: false, tags: []
  },

  // Ayurvedic
  {
    id: 21, name: "Ashwagandha Extract 60 Caps", price: 350, discount: 25, category: "Ayurvedic",
    images: ["https://placehold.co/400x400/png?text=Ashwagandha"],
    description: "Traditional herb for stress relief and vitality.",
    uses: "Stress, Immunity, Energy", dosage: "1 capsule twice daily", sideEffects: "Mild stomach upset",
    stock: 60, prescriptionRequired: false, tags: ["Popular"]
  },
  {
    id: 22, name: "Chyawanprash 1kg", price: 320, discount: 15, category: "Ayurvedic",
    images: ["https://placehold.co/400x400/png?text=Chyawanprash"],
    description: "Ayurvedic immunity boosting blend.",
    uses: "Immunity, General health", dosage: "1-2 teaspoons daily", sideEffects: "None",
    stock: 80, prescriptionRequired: false, tags: ["Popular"]
  },
  {
    id: 23, name: "Triphala Churna 100g", price: 95, discount: 5, category: "Ayurvedic",
    images: ["https://placehold.co/400x400/png?text=Triphala"],
    description: "Natural digestive and colon cleanser.",
    uses: "Constipation, Digestion", dosage: "1 tsp with warm water at night", sideEffects: "Loose motions if overused",
    stock: 45, prescriptionRequired: false, tags: []
  },
  {
    id: 24, name: "Neem Capsules 60s", price: 200, discount: 10, category: "Ayurvedic",
    images: ["https://placehold.co/400x400/png?text=Neem+Capsules"],
    description: "Blood purifier and acne treatment.",
    uses: "Skin health, Detox", dosage: "1 capsule daily", sideEffects: "None",
    stock: 30, prescriptionRequired: false, tags: []
  },
  {
    id: 25, name: "Brahmi Syrup 200ml", price: 160, discount: 15, category: "Ayurvedic",
    images: ["https://placehold.co/400x400/png?text=Brahmi+Syrup"],
    description: "Memory and cognitive enhancer.",
    uses: "Memory, Focus", dosage: "1-2 tsp twice daily", sideEffects: "None",
    stock: 20, prescriptionRequired: false, tags: []
  }
];