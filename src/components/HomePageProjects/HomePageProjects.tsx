import React from 'react';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';
import CourseCard from '../ProjectCard';

interface Props {
  freeCourses: CourseMeta[];
  proCourses: CourseMeta[];
}

export default function HomePageProjects({ freeCourses, proCourses }: Props) {
  return (
    <>
      <div className="relative py-10">
        <MaxWidthWrapper>
          <section className="flex flex-col items-center">
            <h1>Free Courses</h1>
            <p className="text-gray-500 text-center">
              &quot;You don&apos;t learn to walk by following rules. You learn
              by doing, and by falling over.&quot; ― Richard Branson
            </p>

            <div className="my-5">
              {freeCourses.map((course, index) => (
                <CourseCard
                  course={course}
                  key={course.slug}
                  mirrored={index % 2 === 1}
                />
              ))}
            </div>

            <Button text="See all projects" href="/projects" type="secondary" />
          </section>
        </MaxWidthWrapper>
      </div>
      <div className="relative py-10">
        <MaxWidthWrapper>
          <section className="flex flex-col items-center">
            <h1>Premium Courses</h1>
            <p className="text-gray-500 text-center">
              For determined developers that want to get to the next level as a{' '}
              <b>Full Stack Mobile Developer</b>
            </p>

            <div className="my-5">
              {proCourses.map((course, index) => (
                <CourseCard
                  course={course}
                  key={course.slug}
                  mirrored={index % 2 === 1}
                />
              ))}
            </div>

            {/* <Button text="See all projects" href="/projects" type="secondary" /> */}
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
}
