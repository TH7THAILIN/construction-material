import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Common/Breadcrumb";

const BlogGridWithSidebar = () => {
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
  ];

  const categories = [
    { name: "Materials", count: 12 },
    { name: "Safety", count: 8 },
    { name: "Tools", count: 15 },
    { name: "Tips", count: 6 },
  ];

  return (
    <>
      <Breadcrumb title="Blog Grid With Sidebar" pages={["blogs", "blog-grid-with-sidebar"]} />
      
      <section className="py-17.5">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border border-gray-3 bg-white p-6 mb-6">
                <h3 className="font-semibold text-lg text-dark mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex justify-between items-center py-2 text-gray-5 hover:text-blue-500">
                        <span>{category.name}</span>
                        <span className="text-sm">({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-gray-3 bg-white p-6">
                <h3 className="font-semibold text-lg text-dark mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-dark leading-tight mb-1">
                          <a href={`/blogs/${post.id}`} className="hover:text-blue-500">
                            {post.title.substring(0, 50)}...
                          </a>
                        </h4>
                        <p className="text-xs text-gray-5">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="group">
                    <div className="overflow-hidden rounded-lg relative h-48 mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
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
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridWithSidebar;
