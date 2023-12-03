import type { Metadata } from 'next';
import type { Key } from 'react';

import BlogItem from '@/components/Blog/BlogItem';
import { getPosts } from '@/sanity/sanity-utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://localyon.com'),
  title: "Blog - localyon.com | Location d'appartements meublés à Lyon",
  description:
    "Réservez votre appartement proche du campus de La Doua et de l'Insa dès maintenant",
  alternates: {
    canonical: '/blog',
    languages: {
      'x-default': '/blog',
    },
  },
};

const BlogPage = async () => {
  let posts = await getPosts();
  // Filter posts to include only those with author 'content'
  posts = posts.filter(
    (post: { author: { name: string } }) => post.author.name !== 'content',
  );

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}

      <section className="lg:py-25 xl:py-30 py-20">
        <h1>
          Nos articles pour vous aider dans la location immobilière de vos
          studios et appartements meublés
        </h1>
        <div className="max-w-c-1280 mt-15 mx-auto px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="gap-7.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {posts.length > 0 &&
              posts.map((post: any, key: Key | null | undefined) => (
                <BlogItem key={key} blog={post} />
              ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;

export const revalidate = 60; // revalidate this page every 60 seconds
