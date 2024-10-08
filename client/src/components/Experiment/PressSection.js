import React from "react";
import { PressReleasePosts } from "../../InformationFiles/LandingPageInfo";
import { useNavigate } from "react-router-dom";
const PressSection = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleReadMoreClick = (post) => {
    navigate("/ReadmoreBlogs", { state: { post } }); // Navigates to the Readmore section with post data
  };
  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Press Release</h1>
          <a
            href="/all-press-releases"
            className="bg-gray text-sm text-gray-600 hover:underline"
          >
            SEE ALL
          </a>
        </div>

        <div className="flex space-x-4">
          {PressReleasePosts.map((post, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-50"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  {post.date} • {post.author}
                </p>
                <p className="text-gray-700 mb-4">{post.summary}</p>

                <div className="flex space-x-2 mb-3">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  className="text-blue-600 hover:underline mt-auto"
                  onClick={() => handleReadMoreClick(post)}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
