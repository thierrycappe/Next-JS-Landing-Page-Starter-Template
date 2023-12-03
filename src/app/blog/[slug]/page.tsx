import { PortableText } from '@portabletext/react';
import type { Metadata } from 'next';
import Image from 'next/image';

import RelatedPost from '@/components/Blog/RelatedPost';
import { getPost, imageBuilder } from '@/sanity/sanity-utils';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);

  if (slug) {
    return {
      metadataBase: new URL('https://localyon.com'),
      title: `${post?.title} | localyon.com`,
      description: post?.metadata,
      alternates: {
        canonical: `/blog/${post?.slug.current}`,
        languages: {
          'x-default': `/blog/${post?.slug.current}`,
        },
      },
      robots: { index: true, follow: true },
      icons: {
        icon: [
          { url: '/images/favicon-32x32.png' },
          new URL('/images/favicon-32x32.png', 'https://localyon.com'),
        ],
        shortcut: ['/images/favicon-32x32.png'],
        apple: [
          { url: '/images/apple-touch-icon.png' },
          {
            url: '/images/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      openGraph: {
        title: `${post?.title} | localyon.com`,
        description: post?.metadata,
        url: `https://localyon.com/content/${post?.slug.current}`,
        siteName: 'localyon.com',
        images: [
          {
            url: 'https://localyon.com/images/og.png',
            width: 531,
            height: 600,
            alt: 'logo localyon.com',
          },
          {
            url: 'https://localyon.com/images/ogx2.png',
            width: 1062,
            height: 1200,
            alt: 'Grand logo localyon.com',
          },
        ],
        locale: 'fr_FR',
        type: 'website',
      },
    };
  }
  return {
    title: 'Not Found',
    description: 'No blog article has been found',
  };
}

const SingleBlogPage = async ({ params }: Props) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <>
      <section className="pt-35 lg:pt-45 xl:pt-50 lg:pb-25 xl:pb-30 pb-20">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="gap-7.5 xl:gap-12.5 flex flex-col-reverse lg:flex-row">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top shadow-solid-13 dark:bg-blacksection border-stroke dark:border-strokedark mb-10 rounded-md border bg-white p-9">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="/blog">Blog</a>
                  </li>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="/docs">Documents</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top shadow-solid-13 dark:bg-blacksection border-stroke dark:border-strokedark p-7.5 rounded-md border bg-white md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  {post.mainImage && (
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={imageBuilder(post?.mainImage).url()}
                        alt={post.title}
                        fill
                        className="rounded-md object-cover object-center"
                      />
                    </div>
                  )}
                </div>

                <h1 className="2xl:text-sectiontitle2 mb-5 mt-11 text-3xl font-semibold text-black dark:text-white">
                  {post.title}
                </h1>

                <ul className="2xl:gap-7.5 mb-9 flex flex-wrap gap-5">
                  <li>
                    <span className="text-black dark:text-white">
                      Rédacteur:{' '}
                    </span>{' '}
                    {post?.author?.name}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Publié le:{' '}
                    </span>{' '}
                    {new Date(post?.publishedAt)
                      .toDateString()
                      .split(' ')
                      .slice(1)
                      .join(' ')}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Catégorie:{' '}
                    </span>{' '}
                    {post?.tags ? post?.tags[0] : 'Not added'}
                  </li>
                </ul>

                <div className="blog-details">
                  <PortableText value={post?.body} />
                </div>

                {/* <SharePost /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
