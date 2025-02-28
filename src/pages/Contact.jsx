import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Loading state
  const [loading, setLoading] = useState(true);

  // Form verileri
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Loading ekranını 1.5 saniye sonra gizle
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form gönderimini simüle et
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      // Başarılı gönderimden sonra formu sıfırla
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // 5 saniye sonra başarı mesajını temizle
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      {/* Loading Ekranı */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-24 h-24 border-t-4 border-l-4 border-purple-500 rounded-full"
          />
        </div>
      )}

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background canvas */}
        <div className="fixed top-0 left-0 w-full h-full bg-black z-[-2]"></div>

        {/* Contact Page Content */}
        <div className="container mx-auto pt-32 pb-20 px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-purple-400 to-blue-800"
            >
              İletişime Geçin
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Yeni fırsatlara ve işbirliklerine her zaman açığım. Formu
              kullanarak veya aşağıdaki platformlardan herhangi biri
              aracılığıyla benimle iletişime geçebilirsiniz.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl flex items-center space-x-3 border border-purple-500/30">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1 text-white">
                      Email
                    </h3>
                    <p className="text-xs text-gray-300">
                      mustafanahsan754@gmail.com
                    </p>
                  </div>
                </div>

                {/* Konum Card */}
                <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl flex items-center space-x-3 border border-purple-500/30">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1 text-white">
                      Konum
                    </h3>
                    <p className="text-xs text-gray-300">Istanbul, Türkiye</p>
                  </div>
                </div>

                {/* Telefon Card */}
                <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl flex items-center space-x-3 border border-purple-500/30">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1 text-white">
                      Telefon
                    </h3>
                    <p className="text-xs text-gray-300">+90 555 123 4567</p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={!loading ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0 }}
                className="mt-8"
              >
                <h3 className="text-sm font-semibold mb-3 text-white">
                  Benimle iletişime Geçin
                </h3>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="bg-purple-500/20 p-2 rounded-lg hover:bg-purple-500/40 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-purple-500/20 p-2 rounded-lg hover:bg-purple-500/40 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-purple-500/20 p-2 rounded-lg hover:bg-purple-500/40 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-purple-500/20 p-2 rounded-lg hover:bg-purple-500/40 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.628 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.209 8.741c.218 4.878-3.419 10.309-9.879 10.309-1.964 0-3.79-.574-5.33-1.56.272.033.547.05.823.05 1.616 0 3.104-.552 4.282-1.476-1.509-.027-2.783-1.026-3.222-2.396.211.04.428.062.647.062.314 0 .618-.042.905-.12-1.578-.317-2.766-1.711-2.766-3.381 0-.015 0-.029.001-.043.464.258.996.414 1.56.432-.927-.619-1.537-1.676-1.537-2.874 0-.632.169-1.223.466-1.732 1.7 2.088 4.247 3.461 7.115 3.605-.059-.254-.09-.518-.09-.786 0-1.904 1.542-3.448 3.448-3.448.992 0 1.888.419 2.517 1.09.784-.155 1.52-.442 2.188-.836-.257.798-.802 1.464-1.511 1.886.696-.083 1.358-.267 1.975-.539-.459.691-1.04 1.297-1.712 1.783z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
            {/* Right Section - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-purple-500/30"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">
                Mesaj Gönder
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 bg-green-500/20 border border-green-500 p-4 rounded-lg">
                  <p className="text-green-400">
                    Your message has been sent successfully! I'll get back to
                    you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 text-xs font-medium text-gray-300"
                    >
                      Adınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/70 border border-purple-500/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-xs font-medium text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/70 border border-purple-500/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-1 text-xs font-medium text-gray-300"
                  >
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/70 border border-purple-500/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-xs font-medium text-gray-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full bg-black/70 border border-purple-500/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-blue-700 transition-colors duration-300 flex items-center text-xs"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    "Gönder"
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
    </>
  );
};

export default Contact;
