import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Common/Breadcrumb";

const BlogGrid = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Construction Materials for Modern Buildings",
      excerpt: "Discover the most essential construction materials for contemporary building projects...",
      image: "/images/blog/blog-01.jpg",
      date: "Jan 15, 2025",
      category: "Materials",
    },
    {
      id: 2,
      title: "Safety Guidelines for Construction Sites",
      excerpt: "Essential safety measures every construction worker should follow...",
      image: "/images/blog/blog-02.jpg",
      date: "Jan 12, 2025",
      category: "Safety",
    },
    {
      id: 3,
      title: "Sustainable Building Practices",
      excerpt: "How to implement eco-friendly construction methods...",
      image: "/images/blog/blog-03.jpg",
      date: "Jan 10, 2025",
      category: "Sustainability",
    },
  ];

  return (
    <>
      <Breadcrumb title="Blog Grid" pages={["blogs", "blog-grid"]} />
      
      <section className="py-17.5">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="overflow-hidden rounded-lg relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="mt-4">
                  <div className="mb-2 flex items-center gap-4 text-sm text-gray-5">
                    <span>{post.date}</span>
                    <span>{post.category}</span>
                  </div>
                  
                  <h3 className="mb-3 font-semibold text-lg text-dark transition-colors group-hover:text-blue-500">
                    <a href={`/blogs/${post.id}`}>{post.title}</a>
                  </h3>
                  
                  <p className="text-gray-5 mb-4">{post.excerpt}</p>
                  
                  <a
                    href={`/blogs/${post.id}`}
                    className="inline-flex items-center text-blue-500 hover:text-blue-600"
                  >
                    Read More
                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex space-x-2">
              <button className="rounded px-3 py-2 text-gray-5 hover:bg-gray-1">Previous</button>
              <button className="rounded bg-blue-500 px-3 py-2 text-white">1</button>
              <button className="rounded px-3 py-2 text-gray-5 hover:bg-gray-1">2</button>
              <button className="rounded px-3 py-2 text-gray-5 hover:bg-gray-1">3</button>
              <button className="rounded px-3 py-2 text-gray-5 hover:bg-gray-1">Next</button>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGrid;
