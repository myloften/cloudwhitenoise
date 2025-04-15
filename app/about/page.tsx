import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Cloud White Noise</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          Cloud White Noise is dedicated to helping people find peace, focus, and relaxation in their daily lives through carefully curated ambient sounds. Whether you're working, studying, meditating, or trying to get a good night's sleep, we're here to create the perfect acoustic environment for you.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Multiple Sound Categories
            <ul className="list-disc list-inside ml-6 mt-2 text-base">
              <li>Natural sounds (rain, ocean waves, forest ambience)</li>
              <li>Urban environments (café, keyboard typing, train)</li>
              <li>Meditation sounds (singing bowls, om chanting)</li>
              <li>Pure white noise</li>
            </ul>
          </li>
          <li>Advanced Audio Controls
            <ul className="list-disc list-inside ml-6 mt-2 text-base">
              <li>Individual volume control for each sound</li>
              <li>Mix multiple sounds together</li>
              <li>Timer function for auto-shutdown</li>
              <li>Preset sound combinations for different scenarios</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How It Helps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3">Focus & Productivity</h3>
            <p>Block out distracting noises and create an optimal environment for deep work and study sessions.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3">Sleep & Relaxation</h3>
            <p>Calm your mind and create a peaceful atmosphere conducive to better sleep and relaxation.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3">Stress Relief</h3>
            <p>Reduce anxiety and stress through soothing ambient sounds that help you stay centered and calm.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-3">Meditation</h3>
            <p>Enhance your meditation practice with peaceful background sounds that help maintain focus.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="text-lg">
          We are committed to providing a free, high-quality service that helps people worldwide achieve better focus, relaxation, and sleep. Our platform is continuously updated with new sounds and features based on user feedback and scientific research on sound therapy and productivity.
        </p>
      </section>
    </div>
  );
} 