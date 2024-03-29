import React from 'react';
import Layout from '../../components/Layout/Layout';

import TestimonialsAll from '../../components/Testimonials/TestimonialsAll';

const Testimonials = () => (
  <Layout
    title="notJust Testimonials"
    description="See how beginners and web developers thrive with notjust.dev. Discover real stories of mastering mobile development with React Native & Expo."
    hideNewsletterForm
    isLandingPage
  >
    <TestimonialsAll />
  </Layout>
);

export default Testimonials;
