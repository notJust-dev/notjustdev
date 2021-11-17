import React from 'react';
import Button from '../Button';
import MaxWidthWrapper from '../MaxWidthWrapper';
import CourseCard from '../ProjectCard';

interface Props {
  courses: CourseMeta[];
}

export default function HomePageProjects({courses}: Props) {
  return (
    <div className="relative py-10">
      <MaxWidthWrapper>
        <section className="flex flex-col items-center">
          <h1>Project Based Tutorials</h1>
          <p className="text-gray-500 text-center">
            &quot;You don&apos;t learn to walk by following rules. You learn by
            doing, and by falling over.&quot; ― Richard Branson
          </p>

          <div className="my-5">
            {courses.map((course, index) => (
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
  );
}
