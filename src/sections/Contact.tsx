import { motion } from "framer-motion";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { config } from "../config";

function ContactForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Form</h2>
      <p className="text-gray-600">
        Contact form is temporarily unavailable. Please email me directly at{" "}
        <a
          href="mailto:matas0412@gmail.com"
          className="text-blue-600 hover:text-blue-800"
        >
          matas0412@gmail.com
        </a>
      </p>
    </div>
  );
}

export default function Contact() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={config.recaptchaKey}>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto px-6 py-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Let's Connect! 🤝
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Prefer to email directly? You can reach me at:
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:matas0412@gmail.com"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="text-2xl mr-3">📧</span>
                  matas0412@gmail.com
                </a>
                <a
                  href="https://github.com/tmatijev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="text-2xl mr-3">👨‍💻</span>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/tmatijev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="text-2xl mr-3">💼</span>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </GoogleReCaptchaProvider>
  );
}
