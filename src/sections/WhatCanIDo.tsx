import { motion } from "framer-motion";
import { ServiceCard } from '../components/ServiceCard';

export default function WhatCanIDo() {
  const services = [
    {
      emoji: "🎨",
      title: "Build Your Dream Website",
      description: "I'll create a website that perfectly represents your business and impresses your visitors. Whether they're using phones, tablets, or computers, your site will look fantastic and work smoothly - just like the big brands!"
    },
    {
      emoji: "🚀",
      title: "Make Your Website Lightning Fast",
      description: "Is your website running slow? I'll turbocharge it! Just like I did for other companies, reducing their load times by up to 85%. Your visitors won't have to wait around - they'll get straight to what matters!"
    },
    {
      emoji: "✨",
      title: "Upgrade Your Current Website",
      description: "Got an existing website that's not performing? I'll transform it into something modern, fast, and effective. It's like giving your digital presence a complete makeover - your visitors will love the difference!"
    },
    {
      emoji: "🤖",
      title: "AI Is My Secret Superpower",
      description: "Thanks to modern AI, I'm like a Swiss Army knife of tech solutions! Even if something's not in my usual toolbox, I can team up with AI to figure it out. Think of it as having a whole team of experts in my pocket - we can tackle almost any digital challenge you throw at us! 🦾"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 px-6 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let Me Build Something Amazing For You! 🚀
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Not sure about all the technical stuff? No worries! Here's what I can
          build and do for you, explained in plain English - because great
          websites shouldn't be complicated to understand! 😊
        </p>
      </motion.div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              emoji={service.emoji}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Build Something Special? 🌟
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            You bring the ideas, and I'll bring them to life! Don't worry about
            the technical details - that's my job. Together, we can create
            something that helps your business grow and succeed online.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            Let's Start Building Together 🛠️
          </button>
        </motion.div>
      </div>
    </div>
  );
}
