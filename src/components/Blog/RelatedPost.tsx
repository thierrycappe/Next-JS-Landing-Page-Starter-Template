import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { getPosts, imageBuilder } from '@/sanity/sanity-utils';

const RelatedPost = async () => {
  let posts = await getPosts();
  // Filter out posts where the author is not 'content'
  posts = posts.filter((post: { author: string }) => post.author !== 'content');

  return (
    <>
      <div className="animate_top shadow-solid-13 dark:bg-blacksection border-stroke dark:border-strokedark rounded-md border bg-white p-9">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Sur le même thème
        </h4>

        <div>
          {posts.slice(0, 3).map(
            (
              post: {
                mainImage: SanityImageSource;
                slug: {
                  current: any;
                };
                title: string | any[];
              },
              key: React.Key | null | undefined,
            ) => (
              <div
                className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
                key={key}
              >
                <div className="max-w-45 w-45 h-18 relative">
                  {post.mainImage ? (
                    <Image
                      height={18}
                      width={45}
                      src={imageBuilder(post.mainImage).url()}
                      alt="Blog - localyon.com | Location d'appartements meublés à Lyon"
                    />
                  ) : (
                    'No image'
                  )}
                </div>
                <h5 className="text-md hover:text-primary dark:hover:text-primary font-medium text-black transition-all duration-300 dark:text-white">
                  <Link href={`/blog/${post.slug.current}`} legacyBehavior>
                    <p>{post.title.slice(0, 40)}...</p>
                  </Link>
                </h5>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
