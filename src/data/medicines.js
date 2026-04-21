export const categories = [
  "Tablets & Capsules", 
  "Syrups & Drops", 
  "Health Supplements", 
  "First Aid", 
  "Ayurvedic", 
  "Personal Care",
  "Medical Devices", // NEW
  "Baby Care"        // NEW
];

export const medicines = [
  // ==========================================
  // Tablets & Capsules
  // ==========================================
  {
    id: 1, name: "Paracetamol", category: "Tablets & Capsules",
    images: ["https://placehold.co/400x400/png?text=Paracetamol", "https://placehold.co/400x400/png?text=Back+View"],
    description: "Effective pain relief and fever reducer. Acts quickly to provide comfort.",
    uses: "Fever, Headache, Body ache", dosageInstructions: "1 tablet every 6 hours after meals", sideEffects: "Nausea, mild skin rash",
    prescriptionRequired: false, tags: ["Popular", "Essential"],
    variants: [
      { variantId: "1-500", dosage: "500mg", price: 30, discount: 10, stock: 50 },
      { variantId: "1-650", dosage: "650mg", price: 45, discount: 5, stock: 200 }
    ]
  },
  {
    id: 2, name: "Azithromycin", category: "Tablets & Capsules",
    images: ["https://placehold.co/400x400/png?text=Azithromycin"],
    description: "Broad-spectrum antibiotic used to treat various bacterial infections.",
    uses: "Throat infection, Respiratory infections", dosageInstructions: "1 tablet daily for 3-5 days", sideEffects: "Diarrhea, stomach upset",
    prescriptionRequired: true, tags: [],
    variants: [
      { variantId: "2-250", dosage: "250mg", price: 60, discount: 0, stock: 40 },
      { variantId: "2-500", dosage: "500mg", price: 110, discount: 15, stock: 12 }
    ]
  },
  {
    id: 3, name: "Pantoprazole", category: "Tablets & Capsules",
    images: ["https://placehold.co/400x400/png?text=Pantoprazole"],
    description: "Reduces the amount of acid produced in the stomach.",
    uses: "Acidity, Heartburn, GERD", dosageInstructions: "1 tablet before breakfast", sideEffects: "Headache, dizziness",
    prescriptionRequired: true, tags: ["Popular"],
    variants: [
      { variantId: "3-20", dosage: "20mg", price: 55, discount: 0, stock: 30 },
      { variantId: "3-40", dosage: "40mg", price: 85, discount: 5, stock: 100 }
    ]
  },
  {
    id: 4, name: "Cetirizine", category: "Tablets & Capsules",
    images: ["https://placehold.co/400x400/png?text=Cetirizine"],
    description: "Antihistamine used to relieve allergy symptoms.",
    uses: "Allergies, Runny nose, Sneezing", dosageInstructions: "1 tablet at bedtime", sideEffects: "Drowsiness, dry mouth",
    prescriptionRequired: false, tags: ["Essential"],
    variants: [
      { variantId: "4-10", dosage: "10mg", price: 20, discount: 0, stock: 80 }
    ]
  },
  {
    id: 5, name: "Amoxicillin", category: "Tablets & Capsules",
    images: ["https://placehold.co/400x400/png?text=Amoxicillin"],
    description: "Penicillin antibiotic for bacterial infections.",
    uses: "Ear, nose, and throat infections", dosageInstructions: "1 capsule every 8 hours", sideEffects: "Nausea, rash",
    prescriptionRequired: true, tags: ["Limited Stock"],
    variants: [
      { variantId: "5-250", dosage: "250mg", price: 60, discount: 10, stock: 4 },
      { variantId: "5-500", dosage: "500mg", price: 105, discount: 15, stock: 15 }
    ]
  },

  // ==========================================
  // Syrups & Drops
  // ==========================================
  {
    id: 6, name: "Cough Syrup", category: "Syrups & Drops",
    images: ["https://placehold.co/400x400/png?text=Cough+Syrup"],
    description: "Relief from dry cough and throat irritation.",
    uses: "Dry Cough, Cold", dosageInstructions: "2 teaspoons twice a day", sideEffects: "Drowsiness",
    prescriptionRequired: false, tags: ["Limited Stock"],
    variants: [
      { variantId: "6-100", dosage: "100ml", price: 120, discount: 15, stock: 3 },
      { variantId: "6-200", dosage: "200ml", price: 210, discount: 20, stock: 10 }
    ]
  },
  {
    id: 7, name: "Digestive Enzyme Syrup", category: "Syrups & Drops",
    images: ["https://placehold.co/400x400/png?text=Digestion+Syrup"],
    description: "Aids in digestion and provides relief from bloating.",
    uses: "Indigestion, Gas", dosageInstructions: "1 teaspoon after meals", sideEffects: "None",
    prescriptionRequired: false, tags: ["Popular"],
    variants: [
      { variantId: "7-200", dosage: "200ml", price: 150, discount: 20, stock: 40 }
    ]
  },
  {
    id: 8, name: "Refresh Eye Drops", category: "Syrups & Drops",
    images: ["https://placehold.co/400x400/png?text=Eye+Drops"],
    description: "Lubricating eye drops for dry and irritated eyes.",
    uses: "Dry eyes, Eye strain", dosageInstructions: "1-2 drops as needed", sideEffects: "Temporary blurred vision",
    prescriptionRequired: false, tags: [],
    variants: [
      { variantId: "8-10", dosage: "10ml", price: 145, discount: 5, stock: 25 }
    ]
  },
  {
    id: 9, name: "Paracetamol Pediatric Syrup", category: "Syrups & Drops",
    images: ["https://placehold.co/400x400/png?text=Kids+Fever+Syrup"],
    description: "Fever and pain relief specially formulated for children.",
    uses: "Fever in kids", dosageInstructions: "As directed by pediatrician", sideEffects: "Upset stomach",
    prescriptionRequired: false, tags: ["Essential"],
    variants: [
      { variantId: "9-60", dosage: "60ml", price: 45, discount: 0, stock: 50 }
    ]
  },

  // ==========================================
  // Health Supplements
  // ==========================================
  {
    id: 11, name: "Vitamin C Chewable", category: "Health Supplements",
    images: ["https://placehold.co/400x400/png?text=Vitamin+C"],
    description: "Immunity booster Vitamin C chewable tablets with orange flavor.",
    uses: "Low immunity, Vitamin C deficiency", dosageInstructions: "1 tablet daily", sideEffects: "Stomach upset if taken empty stomach",
    prescriptionRequired: false, tags: ["Popular", "Immunity"],
    variants: [
      { variantId: "11-500-30", dosage: "500mg (30 Tabs)", price: 150, discount: 25, stock: 200 },
      { variantId: "11-500-60", dosage: "500mg (60 Tabs)", price: 280, discount: 30, stock: 150 }
    ]
  },
  {
    id: 12, name: "Omega 3 Fish Oil", category: "Health Supplements",
    images: ["https://placehold.co/400x400/png?text=Omega+3"],
    description: "High-quality fish oil for heart, brain, and joint health.",
    uses: "Heart health, Joint support", dosageInstructions: "1 capsule daily with meal", sideEffects: "Fishy burps",
    prescriptionRequired: false, tags: ["Premium"],
    variants: [
      { variantId: "12-60", dosage: "60 Capsules", price: 899, discount: 40, stock: 30 },
      { variantId: "12-120", dosage: "120 Capsules", price: 1599, discount: 45, stock: 15 }
    ]
  },
  {
    id: 15, name: "Whey Protein Isolate", category: "Health Supplements",
    images: ["https://placehold.co/400x400/png?text=Whey+Protein"],
    description: "High-quality protein powder for fast muscle recovery.",
    uses: "Muscle building, Recovery", dosageInstructions: "1 scoop post-workout", sideEffects: "Bloating if lactose intolerant",
    prescriptionRequired: false, tags: ["Premium"],
    variants: [
      { variantId: "15-1", dosage: "1kg Tub", price: 2500, discount: 30, stock: 5 },
      { variantId: "15-2", dosage: "2kg Tub", price: 4600, discount: 35, stock: 2 }
    ]
  },

  // ==========================================
  // First Aid
  // ==========================================
  {
    id: 16, name: "Povidone Iodine Ointment", category: "First Aid",
    images: ["https://placehold.co/400x400/png?text=Iodine+Ointment"],
    description: "Antiseptic ointment for minor cuts and wounds.",
    uses: "Wounds, Cuts, Scrapes", dosageInstructions: "Apply thin layer locally", sideEffects: "Skin irritation",
    prescriptionRequired: false, tags: ["Essential"],
    variants: [
      { variantId: "16-15", dosage: "15g Tube", price: 70, discount: 0, stock: 40 },
      { variantId: "16-20", dosage: "20g Tube", price: 90, discount: 0, stock: 120 }
    ]
  },
  {
    id: 19, name: "Antiseptic Liquid", category: "First Aid",
    images: ["https://placehold.co/400x400/png?text=Antiseptic+Liquid"],
    description: "Multipurpose antiseptic liquid for first aid and personal hygiene.",
    uses: "Wound cleaning, Disinfection", dosageInstructions: "Dilute in water before use", sideEffects: "Skin irritation if undiluted",
    prescriptionRequired: false, tags: ["Essential"],
    variants: [
      { variantId: "19-125", dosage: "125ml", price: 75, discount: 5, stock: 60 },
      { variantId: "19-250", dosage: "250ml", price: 130, discount: 10, stock: 80 },
      { variantId: "19-500", dosage: "500ml", price: 240, discount: 15, stock: 25 }
    ]
  },

  // ==========================================
  // Ayurvedic
  // ==========================================
  {
    id: 21, name: "Ashwagandha Extract", category: "Ayurvedic",
    images: ["https://placehold.co/400x400/png?text=Ashwagandha"],
    description: "Traditional herb for stress relief and vitality.",
    uses: "Stress, Immunity, Energy", dosageInstructions: "1 capsule twice daily", sideEffects: "Mild stomach upset",
    prescriptionRequired: false, tags: ["Popular"],
    variants: [
      { variantId: "21-60", dosage: "60 Capsules", price: 350, discount: 25, stock: 60 }
    ]
  },
  {
    id: 22, name: "Chyawanprash", category: "Ayurvedic",
    images: ["https://placehold.co/400x400/png?text=Chyawanprash"],
    description: "Ayurvedic immunity boosting blend packed with Vitamin C and herbs.",
    uses: "Immunity, General health", dosageInstructions: "1-2 teaspoons daily", sideEffects: "None",
    prescriptionRequired: false, tags: ["Popular"],
    variants: [
      { variantId: "22-500", dosage: "500g Jar", price: 190, discount: 10, stock: 45 },
      { variantId: "22-1000", dosage: "1kg Jar", price: 320, discount: 15, stock: 80 }
    ]
  },

  // ==========================================
  // Personal Care (NEW ADDITIONS)
  // ==========================================
  {
    id: 26, name: "Anti-Dandruff Shampoo", category: "Personal Care",
    images: ["https://placehold.co/400x400/png?text=Shampoo"],
    description: "Clinically proven shampoo to reduce dandruff and soothe itchy scalp.",
    uses: "Dandruff, Scalp care", dosageInstructions: "Apply to wet hair, massage, and rinse", sideEffects: "Eye irritation if contact occurs",
    prescriptionRequired: false, tags: ["Popular"],
    variants: [
      { variantId: "26-200", dosage: "200ml", price: 299, discount: 15, stock: 50 },
      { variantId: "26-400", dosage: "400ml", price: 550, discount: 20, stock: 35 }
    ]
  },
  {
    id: 27, name: "Deep Moisture Lotion", category: "Personal Care",
    images: ["https://placehold.co/400x400/png?text=Body+Lotion"],
    description: "24-hour hydration body lotion for dry and sensitive skin.",
    uses: "Dry skin, Winter care", dosageInstructions: "Apply generously after bathing", sideEffects: "None",
    prescriptionRequired: false, tags: ["Winter Essential"],
    variants: [
      { variantId: "27-250", dosage: "250ml", price: 250, discount: 10, stock: 60 },
      { variantId: "27-400", dosage: "400ml", price: 399, discount: 15, stock: 40 }
    ]
  },

  // ==========================================
  // Medical Devices (NEW ADDITIONS)
  // ==========================================
  {
    id: 28, name: "Digital Thermometer", category: "Medical Devices",
    images: ["https://placehold.co/400x400/png?text=Thermometer"],
    description: "Fast, accurate, and easy-to-read digital thermometer with beeper.",
    uses: "Fever measurement", dosageInstructions: "Place under tongue or armpit", sideEffects: "None",
    prescriptionRequired: false, tags: ["Essential"],
    variants: [
      { variantId: "28-1", dosage: "1 Unit", price: 250, discount: 10, stock: 30 }
    ]
  },
  {
    id: 29, name: "Automatic BP Monitor", category: "Medical Devices",
    images: ["https://placehold.co/400x400/png?text=BP+Machine"],
    description: "Clinically validated upper arm blood pressure monitor.",
    uses: "Blood pressure tracking", dosageInstructions: "Follow manual instructions", sideEffects: "None",
    prescriptionRequired: false, tags: ["Premium"],
    variants: [
      { variantId: "29-1", dosage: "1 Unit", price: 2499, discount: 25, stock: 8 }
    ]
  },
  {
    id: 30, name: "Fingertip Pulse Oximeter", category: "Medical Devices",
    images: ["https://placehold.co/400x400/png?text=Oximeter"],
    description: "Measures blood oxygen saturation (SpO2) and pulse rate.",
    uses: "Oxygen monitoring", dosageInstructions: "Clip onto finger", sideEffects: "None",
    prescriptionRequired: false, tags: [],
    variants: [
      { variantId: "30-1", dosage: "1 Unit", price: 999, discount: 40, stock: 15 }
    ]
  },

  // ==========================================
  // Baby Care (NEW ADDITIONS)
  // ==========================================
  {
    id: 31, name: "Premium Baby Diapers", category: "Baby Care",
    images: ["https://placehold.co/400x400/png?text=Baby+Diapers"],
    description: "Ultra-soft, highly absorbent diaper pants for up to 12 hours of protection.",
    uses: "Baby hygiene", dosageInstructions: "Change when wet or soiled", sideEffects: "Diaper rash if left too long",
    prescriptionRequired: false, tags: ["Popular"],
    variants: [
      { variantId: "31-S", dosage: "Small (Pack of 42)", price: 499, discount: 20, stock: 25 },
      { variantId: "31-M", dosage: "Medium (Pack of 38)", price: 499, discount: 20, stock: 40 },
      { variantId: "31-L", dosage: "Large (Pack of 34)", price: 499, discount: 20, stock: 30 }
    ]
  },
  {
    id: 32, name: "Gentle Baby Wipes", category: "Baby Care",
    images: ["https://placehold.co/400x400/png?text=Baby+Wipes"],
    description: "Aloe vera infused, alcohol-free wet wipes for delicate baby skin.",
    uses: "Cleaning, Refreshing", dosageInstructions: "Use as needed", sideEffects: "None",
    prescriptionRequired: false, tags: ["Essential"],
    variants: [
      { variantId: "32-72", dosage: "Pack of 72", price: 150, discount: 10, stock: 100 },
      { variantId: "32-144", dosage: "Twin Pack (144)", price: 280, discount: 15, stock: 50 }
    ]
  }
];