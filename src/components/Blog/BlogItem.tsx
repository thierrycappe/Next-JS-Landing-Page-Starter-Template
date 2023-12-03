'use client';

import Image from 'next/image';
import Link from 'next/link';

import { imageBuilder } from '@/sanity/sanity-utils';
import type { Blog } from '@/types/blog';

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug } = blog;

  return (
    <>
      <Link
        href={`/blog/${slug.current}`}
        className="relative block aspect-[368/239]"
        legacyBehavior
      >
        {mainImage ? (
          <Image
            src={mainImage ? imageBuilder(mainImage).url() : ''}
            alt={title}
            height={239}
            width={368}
          />
        ) : (
          'No image'
        )}
      </Link>

      <div className="px-4">
        <h4 className="hover:text-primary dark:hover:text-primary mt-7.5 mb-3.5 text-lg font-medium text-black dark:text-white xl:text-lg">
          <Link href={`/blog/${slug.current}`} legacyBehavior>
            <div> {`${title.slice(0, 60)}...`}</div>
          </Link>
        </h4>
        <p>{metadata ? `${metadata.slice(0, 150)}...` : ''}</p>
      </div>
    </>
  );
};

export default BlogItem;
