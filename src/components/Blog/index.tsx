import React from 'react';

import SectionHeader from '@/components/layout/SectionHeader';
import { getPosts } from '@/sanity/sanity-utils';
// eslint-disable-next-line import/extensions
import { Blog } from '@/types/blog';

import BlogItem from './BlogItem';

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Blog = async () => {
  let posts = await getPosts();
  // Filter posts to include only those with author 'content'
  posts = posts.filter(
    (post: { author: { name: string } }) => post.author.name !== 'content',
  );

  return (
    <section className="lg:py-25 xl:py-30 py-20">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `ACTUS & BLOG`,
              subtitle: `Nos dernières actualités`,
              description: `A la fois à travers vos questions et notre propre expérience en tant qu'anciens étudiants, 
              parents et locataires, nous savons que les questions sont nombreuses. Voici quelques réponses.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="max-w-c-1280 mt-15 mx-auto px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="gap-7.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {posts
            .slice(0, 3)
            .map((blog: Blog, key: React.Key | null | undefined) => (
              <BlogItem blog={blog} key={key} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
