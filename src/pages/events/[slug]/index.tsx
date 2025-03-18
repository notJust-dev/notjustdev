import React from 'react';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import Layout from '../../../components/Layout/Layout';
import MaxWidthWrapper from '../../../components/MaxWidthWrapper';
import StaticCodeSnippet from '../../../components/StaticCodeSnippet';
import InlineCodeSnippet from '../../../components/InlineCodeSnippet';
import MDXImage from '../../../components/MDXImage';
import AuthorDetails from '../../../components/AuthorDetails';

import * as sharedComponents from '../../../components/shared';
import { getAllEvents, getEventBySLug } from '../../../lib/events';
import { MdOutlineDateRange } from 'react-icons/md';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import Link from 'next/link';
import Button from '../../../components/Button';

dayjs.extend(LocalizedFormat);

const components = {
  pre: StaticCodeSnippet,
  code: InlineCodeSnippet,
  img: MDXImage,
  ...sharedComponents,
};

interface Props {
  event: EventWithContent | null;
}

function EventPage({ event }: Props) {
  if (!event) {
    return (
      <MaxWidthWrapper>
        <h3>Event not found!</h3>
      </MaxWidthWrapper>
    );
  }

  return (
    <Layout
      title={event.title}
      description={event.description}
      image={event.image}
      pageType="article"
    >
      <MaxWidthWrapper>
        {event.image && (
          <div className="relative w-full aspect-w-16 aspect-h-9">
            <Image
              src={event.image}
              alt={event.title}
              width={1280}
              height={720}
              priority
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        )}
        <h1 className="text-5xl my-10">{event.title}</h1>

        <hr className="my-4 border-gray-700" />
        <div className="flex">
          <p className="flex items-center">
            <MdOutlineDateRange size={24} className="mr-2" color="#c5c5c5" />
            {dayjs(event.date).format('ll LT')}
          </p>
          {event.isPro && (
            <>
              <span className="mx-3">·</span>
              <Link
                href={`/club`}
                className={`bg-primary text-gray-900  pl-2 pr-3 py-1  rounded text-xs font-bold font-mono`}
              >
                <span className="opacity-60 mr-1 font-normal">#</span>
                pro
              </Link>
            </>
          )}
        </div>
        <hr className="my-4 border-gray-700" />

        <div className="flex flex-row">
          <article className="flex-1">
            <div className="mdx-post">
              <MDXRemote {...event.content} components={components} />
            </div>
          </article>
        </div>

        {event.ctaUrl && (
          <Button
            text={event.cta || 'Read more'}
            href={event.ctaUrl}
            target="_blank"
          />
        )}

        {event.authors.length ? (
          <AuthorDetails sectionTitle="Speaker" author={event.authors[0]} />
        ) : null}

        {/* Displaying multiple authors (Needs a bit of style adjustment) */}
        {/* {post.authors.map((author) => (
          <AuthorDetails key={author.id} author={author} />
        ))} */}

        {/* <h3 className="text-2xl mt-10">Read next</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          {recommendedPosts?.map((recommendedPost) => (
            <BlogCard post={recommendedPost} key={recommendedPost.slug} />
          ))}
        </div> */}
      </MaxWidthWrapper>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  //   return {
  //     paths: [],
  //     fallback: 'blocking',
  //   };
  // }

  const events = await getAllEvents({});
  const paths = events.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params,
}: GetStaticPropsContext) => {
  const event = await getEventBySLug(params?.slug as string);

  return {
    props: {
      event,
    },
    revalidate: 10,
  };
};

export default EventPage;
