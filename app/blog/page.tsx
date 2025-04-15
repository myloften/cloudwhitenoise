import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Science Behind White Noise and How It Helps You Focus',
    content: 'White noise works by masking disruptive sounds in your environment. It creates a constant, soothing background that helps your brain filter out sudden noises that might break your concentration. Research shows that white noise can improve cognitive performance and memory retention during tasks requiring sustained attention.',
    date: '2024-03-25',
    readTime: '5 min read',
    category: 'Science'
  },
  {
    id: 2,
    title: 'Natural Sounds vs. Synthetic White Noise: Which Is Better for Sleep?',
    content: 'Both natural and synthetic sounds have their benefits. Natural sounds like rainfall or ocean waves can reduce stress and promote relaxation due to their familiar, rhythmic patterns. Synthetic white noise, on the other hand, provides consistent sound masking and may be more effective at blocking out irregular environmental noises.',
    date: '2024-03-24',
    readTime: '6 min read',
    category: 'Sleep'
  },
  {
    id: 3,
    title: 'Creating the Perfect Sound Mix for Different Activities',
    content: 'For focused work, try combining soft rainfall with distant thunder. When studying, mix gentle stream sounds with forest ambience. For relaxation, blend ocean waves with light wind sounds. The key is to keep volumes balanced and adjust based on your environment and personal preference.',
    date: '2024-03-23',
    readTime: '4 min read',
    category: 'Tips'
  },
  {
    id: 4,
    title: 'How Ambient Sounds Can Boost Your Meditation Practice',
    content: 'Ambient sounds can enhance meditation by providing a consistent audio anchor for your attention. They help create a stable background that makes it easier to maintain focus and achieve deeper states of mindfulness. Natural sounds like flowing water or gentle wind can also help create a more immersive meditation experience.',
    date: '2024-03-22',
    readTime: '7 min read',
    category: 'Meditation'
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-lg mb-8">
        Explore our articles about white noise, relaxation techniques, productivity tips, and the science of sound therapy.
      </p>
      
      <div className="space-y-8">
        {blogPosts.map(post => (
          <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-semibold mb-3">
              {post.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {post.content}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
} 