import React, { useState } from 'react';

const CommunitySupport = ({ communityPosts }) => {
  const [activeSection, setActiveSection] = useState('discussions');

  const tipsAndTricks = [
    {
      id: 1,
      title: "Check Tire Pressure Monthly",
      description: "Maintain optimal tire pressure (32-35 PSI) for better fuel efficiency and safety. Check when tires are cold for accurate readings.",
      icon: "🛞",
      category: "Maintenance"
    },
    {
      id: 2,
      title: "Regular Oil Changes",
      description: "Change engine oil every 5,000-7,500 km or as recommended by your manufacturer. Use the correct grade for your vehicle.",
      icon: "🛢️",
      category: "Engine Care"
    },
    {
      id: 3,
      title: "Battery Maintenance",
      description: "Clean battery terminals regularly. Check voltage monthly. Replace every 3-4 years. Keep battery secured and dry.",
      icon: "🔋",
      category: "Electrical"
    },
    {
      id: 4,
      title: "Monitor Engine Temperature",
      description: "Never let engine overheat. If temperature gauge rises, pull over immediately. Check coolant level regularly.",
      icon: "🌡️",
      category: "Engine Care"
    },
    {
      id: 5,
      title: "Brake Inspection",
      description: "Listen for squeaking or grinding sounds. Check brake fluid level monthly. Replace brake pads when worn.",
      icon: "🛑",
      category: "Safety"
    },
    {
      id: 6,
      title: "Air Filter Replacement",
      description: "Replace air filter every 15,000-30,000 km. A clean filter improves fuel efficiency and engine performance.",
      icon: "💨",
      category: "Maintenance"
    },
    {
      id: 7,
      title: "Belt and Hose Check",
      description: "Inspect belts for cracks and hoses for leaks. Replace if damaged. Check tension regularly.",
      icon: "🔧",
      category: "Engine Care"
    },
    {
      id: 8,
      title: "Keep It Clean",
      description: "Regular washing prevents rust. Clean interior to maintain resale value. Wax exterior every 3-4 months.",
      icon: "✨",
      category: "Maintenance"
    }
  ];

  const diyGuides = [
    {
      id: 1,
      title: "How to Change Engine Oil",
      steps: ["Warm up engine", "Drain old oil", "Replace filter", "Add new oil", "Check level"],
      difficulty: "Easy",
      time: "30 min"
    },
    {
      id: 2,
      title: "Replace Air Filter",
      steps: ["Open air filter box", "Remove old filter", "Clean housing", "Install new filter", "Close box"],
      difficulty: "Easy",
      time: "10 min"
    },
    {
      id: 3,
      title: "Check Battery Voltage",
      steps: ["Turn off engine", "Set multimeter to 20V DC", "Connect to terminals", "Read voltage (12.6V ideal)"],
      difficulty: "Easy",
      time: "5 min"
    },
    {
      id: 4,
      title: "Replace Wiper Blades",
      steps: ["Lift wiper arm", "Press release tab", "Remove old blade", "Install new blade", "Test wipers"],
      difficulty: "Easy",
      time: "15 min"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Community Support</h2>
        <p className="text-white/90">Connect with other vehicle owners and get help</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2 bg-white/10 backdrop-blur-lg rounded-lg p-1">
        <button
          onClick={() => setActiveSection('discussions')}
          className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
            activeSection === 'discussions'
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-white hover:bg-white/20'
          }`}
        >
          💬 Discussions
        </button>
        <button
          onClick={() => setActiveSection('tips')}
          className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
            activeSection === 'tips'
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-white hover:bg-white/20'
          }`}
        >
          💡 Tips & Tricks
        </button>
        <button
          onClick={() => setActiveSection('diy')}
          className={`flex-1 px-4 py-2 rounded-md font-medium transition-all ${
            activeSection === 'diy'
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-white hover:bg-white/20'
          }`}
        >
          🔧 DIY Guides
        </button>
      </div>

      {/* Discussions Section */}
      {activeSection === 'discussions' && (
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Recent Discussions</h3>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              + New Post
            </button>
          </div>

          <div className="space-y-4">
            {communityPosts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {post.user.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-900">{post.user}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">{post.time}</span>
                    </div>
                    <h4 className="text-gray-900 font-medium mb-2">{post.title}</h4>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm font-medium">{post.replies} replies</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tips & Tricks Section */}
      {activeSection === 'tips' && (
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Essential Tips & Tricks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tipsAndTricks.map((tip) => (
              <div
                key={tip.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-200 cursor-pointer hover:border-blue-400 bg-gradient-to-br from-white to-blue-50"
              >
                <div className="flex items-start space-x-3">
                  <div className="text-3xl">{tip.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{tip.title}</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                        {tip.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DIY Guides Section */}
      {activeSection === 'diy' && (
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔧 DIY Maintenance Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diyGuides.map((guide) => (
              <div
                key={guide.id}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all duration-200 cursor-pointer hover:border-green-400 bg-gradient-to-br from-white to-green-50"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 text-lg">{guide.title}</h4>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                    {guide.difficulty}
                  </span>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-2">⏱️ Time: {guide.time}</p>
                  <div className="space-y-1">
                    {guide.steps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                        <span className="text-blue-600 font-bold">{index + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full mt-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200">
                  View Full Guide
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunitySupport;

