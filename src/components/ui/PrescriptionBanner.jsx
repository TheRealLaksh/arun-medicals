import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PrescriptionBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, details, uploading, success
  
  // New state variables for user details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
      setUploadStatus("idle");
    }
  };

  const handleContinue = () => {
    if (!selectedImage) return;
    setUploadStatus("details");
  };

  const handleUpload = (e) => {
    e.preventDefault(); // Prevent form submission
    if (!name || !phone || !address) return;

    setUploadStatus("uploading");
    
    // Simulate network delay
    setTimeout(() => {
      setUploadStatus("success");
    }, 2000);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSelectedImage(null);
      setUploadStatus("idle");
      // Reset form fields
      setName("");
      setPhone("");
      setAddress("");
    }, 300); // Wait for animation to finish before resetting
  };

  return (
    <>
      {/* BANNER ON HOME PAGE */}
      <div className="mx-4 my-6 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-2xl" />
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="w-2/3">
            <h3 className="font-extrabold text-lg mb-1">Got a Prescription?</h3>
            <p className="text-xs text-blue-100 mb-4 leading-relaxed">
              Don't want to search? Just upload a photo of your doctor's slip and we'll process the order.
            </p>
            <button 
              onClick={() => setIsOpen(true)}
              className="bg-white text-primary font-bold text-xs px-5 py-2.5 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              📷 Upload Now
            </button>
          </div>
          <div className="w-1/3 flex justify-end">
            <div className="text-6xl animate-bounce drop-shadow-lg">📄</div>
          </div>
        </div>
      </div>

      {/* UPLOAD MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-0">
            <motion.div 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[var(--bg-color)] w-full max-w-md rounded-3xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto overscroll-contain"
            >
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-gray-500 font-bold z-10"
              >
                ✕
              </button>

              <h2 className="text-xl font-extrabold mb-1 mt-2">Upload Prescription</h2>
              <p className="text-sm text-gray-500 mb-6">
                {uploadStatus === "details" 
                  ? "Where should we deliver your medicines?" 
                  : "Our pharmacists will read it and prepare your cart."}
              </p>

              {/* Upload Area / Image Preview */}
              {!selectedImage ? (
                <div 
                  onClick={() => fileInputRef.current.click()}
                  className="border-2 border-dashed border-primary/40 bg-primary/5 rounded-2xl p-8 text-center cursor-pointer hover:bg-primary/10 transition-colors"
                >
                  <div className="text-4xl mb-3">📸</div>
                  <p className="font-bold text-primary text-sm mb-1">Tap to open Camera/Gallery</p>
                  <p className="text-xs text-gray-400">JPG, PNG, PDF up to 10MB</p>
                </div>
              ) : (
                <div className={`relative rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 transition-all duration-300 ${uploadStatus === "details" ? "h-24" : "h-48"}`}>
                  <img src={selectedImage} alt="Prescription preview" className="w-full h-full object-contain" />
                  {uploadStatus === "idle" && (
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-2 right-2 bg-rose-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-md"
                    >
                      Retake
                    </button>
                  )}
                </div>
              )}

              {/* Hidden File Input */}
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                className="hidden" 
              />

              {/* Actions & Form */}
              <div className="mt-6">
                {uploadStatus === "idle" && selectedImage && (
                  <button 
                    onClick={handleContinue}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-bold uppercase tracking-widest shadow-lg shadow-primary/30 transition-transform active:scale-95"
                  >
                    Continue
                  </button>
                )}

                {/* New Details Form */}
                {uploadStatus === "details" && (
                  <motion.form 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleUpload}
                    className="flex flex-col gap-3"
                  >
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[var(--text-color)] focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[var(--text-color)] focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                    <textarea 
                      placeholder="Full Delivery Address" 
                      required
                      rows="3"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[var(--text-color)] focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    ></textarea>
                    
                    <button 
                      type="submit"
                      className="w-full bg-primary text-white py-4 mt-2 rounded-2xl font-bold uppercase tracking-widest shadow-lg shadow-primary/30 transition-transform active:scale-95"
                    >
                      Submit Prescription
                    </button>
                    
                    <button 
                      type="button"
                      onClick={() => setUploadStatus("idle")}
                      className="w-full text-gray-500 dark:text-gray-400 py-2 text-sm font-bold mt-1"
                    >
                      Back to Image
                    </button>
                  </motion.form>
                )}

                {uploadStatus === "uploading" && (
                  <div className="flex flex-col items-center py-8">
                    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-sm font-bold text-primary animate-pulse">Sending to Pharmacist...</p>
                  </div>
                )}

                {uploadStatus === "success" && (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-4"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-3">✓</div>
                    <p className="font-extrabold text-lg text-emerald-600 mb-1">Prescription Received!</p>
                    <p className="text-sm text-gray-500 font-medium">We'll call {phone} shortly to confirm the medicines and deliver to your address.</p>
                    <button 
                      onClick={closeModal}
                      className="mt-6 w-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-white py-3.5 rounded-xl font-bold transition-transform active:scale-95"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}