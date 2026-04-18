export const categories = [
  "Tablets & Capsules", "Syrups & Drops", "Health Supplements", 
  "First Aid", "Ayurvedic", "Personal Care"
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
    images: ["https://placehold