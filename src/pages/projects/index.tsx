import React from 'react';
import HomePageProjects from '../../components/HomePageProjects';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';

function Projects() {
  return (
    <Layout title="notJust Development Projects">
      <MaxWidthWrapper>
        {/* Projects */}
        <div className="mb-5">
          <HomePageProjects />
        </div>
      </MaxWidthWrapper>
    </Layout>
  );
}

export default Projects;
