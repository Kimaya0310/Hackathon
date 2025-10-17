import React from 'react';

const CommunitySupport = ({ communityPosts }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Community Support</h2>
        <p className="text-white/80">Connect with other vehicle owners and get help</p>
      </div>

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
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 cursor-pointer"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-200">
          <div className="text-5xl mb-3">💡</div>
          <h3 className="text-white font-bold text-xl mb-2">Tips & Tricks</h3>
          <p className="text-white/90 text-base">
            Learn maintenance tips from experienced drivers and automotive experts
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-200">
          <div className="text-5xl mb-3">🔧</div>
          <h3 className="text-white font-bold text-xl mb-2">DIY Guides</h3>
          <p className="text-white/90 text-base">
            Step-by-step guides for common vehicle maintenance tasks
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;

