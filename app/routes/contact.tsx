import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useState } from "react";
import {
  json,
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  return json({
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    FORMSPREE_KEY: process.env.FORMSPREE_KEY,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  // Handle form submission to Formspree
  const response = await fetch(
    `https://formspree.io/f/${process.env.FORMSPREE_KEY}`,
    {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }
  );

  const result = await response.json();

  if (!response.ok) {
    return json({ error: "Failed to send message" }, { status: 400 });
  }

  return json({ success: true });
}

function ContactForm({ formspreeKey }: { formspreeKey: string }) {
  const [state, handleSubmit] = useForm(formspreeKey);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log("reCAPTCHA not yet available");
      return;
    }

    const token = await executeRecaptcha("contact_form");
    handleSubmit({
      ...formData,
      "g-recaptcha-response": token,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="text-4xl mb-4 block"
        >
          ✨
        </motion.span>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-green-600">
          Thank you for reaching out. I'll get back to you soon!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleFormSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <motion.label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Name
        </motion.label>
        <motion.input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                   hover:border-blue-300 placeholder:text-gray-400 text-gray-800"
          placeholder="Your name"
          whileFocus={{ scale: 1.01 }}
        />
      </div>

      <div>
        <motion.label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Email
        </motion.label>
        <motion.input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                   hover:border-blue-300 placeholder:text-gray-400 text-gray-800"
          placeholder="your@email.com"
          whileFocus={{ scale: 1.01 }}
        />
      </div>

      <div>
        <motion.label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Message
        </motion.label>
        <motion.textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                   hover:border-blue-300 placeholder:text-gray-400 text-gray-800 resize-none"
          placeholder="Tell me about your project..."
          whileFocus={{ scale: 1.01 }}
        />
      </div>

      <motion.button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg 
                 font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 
                 disabled:from-blue-400 disabled:to-blue-400 disabled:cursor-not-allowed
                 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {state.submitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
            Sending...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Send Message
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              📤
            </motion.span>
          </span>
        )}
      </motion.button>

      {state.errors?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-600 text-sm mt-2 bg-red-50 p-3 rounded-lg"
        >
          Something went wrong. Please try again.
        </motion.div>
      )}
    </motion.form>
  );
}

export default function Contact() {
  const { RECAPTCHA_SITE_KEY, FORMSPREE_KEY } = useLoaderData<typeof loader>();

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
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
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>
              <ContactForm formspreeKey={FORMSPREE_KEY} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </GoogleReCaptchaProvider>
  );
}
