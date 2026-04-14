export const categories = [
  "Tablets", "Capsules", "Syrups", "Injections", 
  "Ointments & Creams", "Baby Care", "Personal Care", 
  "Health Supplements", "Medical Devices", "Ayurvedic"
];

export const medicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    price: 30,
    discount: 10,
    category: "Tablets",
    images: ["https://placehold.co/150x150/png"],
    description: "Used for pain relief and fever.",
    uses: "Fever, Headache",
    dosage: "1 tablet twice a day after meals",
    sideEffects: "Nausea, skin rash",
    stock: 50,
    prescriptionRequired: false,
    popular: true
  },
  {
    id: 2,
    name: "Cough Syrup 100ml",
    price: 120,
    discount: 15,
    category: "Syrups",
    images: ["https://placehold.co/150x150/png"],
    description: "Dry cough relief syrup.",
    uses: "Cough, Cold",
    dosage: "2 teaspoons twice a day",
    sideEffects: "Drowsiness",
    stock: 3, 
    prescriptionRequired: false,
    popular: false
  },
  {
    id: 3,
    name: "Vitamin C Tablets",
    price: 150,
    discount: 0,
    category: "Health Supplements",
    images: ["https://placehold.co/150x150/png"],
    description: "Immunity booster Vitamin C chewable tablets.",
    uses: "Low immunity, Vitamin C deficiency",
    dosage: "1 tablet daily",
    sideEffects: "Stomach upset if taken empty stomach",
    stock: 20,
    prescriptionRequired: false,
    popular: true
  }
];