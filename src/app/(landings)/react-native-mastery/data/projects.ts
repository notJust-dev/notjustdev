export type Project = {
  title: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: 'Digital Business Card',
    description:
      'Build your first app and learn the React Native & Expo Fundamentals',
    image: '/images/react-native-mastery/projects/business-card.avif',
  },
  {
    title: 'Quiz App',
    description:
      'Master data management with Props, State, Contexts by building a fun Quiz app',
    image: '/images/react-native-mastery/projects/quiz-app.avif',
  },
  {
    title: 'Camera App',
    description: 'Use platform APIs and build a digital photo-booth app',
    image: '/images/react-native-mastery/projects/camera-app.avif',
  },
  {
    title: 'Multi-Step Forms',
    description:
      'Manage complex multi-step Forms with data validation',
    image: '/images/react-native-mastery/projects/multi-step-forms.avif',
  },
  {
    title: 'Fitness App',
    description:
      'Build a Local First app with Global State Management',
    image: '/images/react-native-mastery/projects/fitness-app.avif',
  },
  {
    title: 'Game',
    description:
      'Get started with Reanimated and Gesture Handling by building a fun game',
    image: '/images/react-native-mastery/projects/game.avif',
  },
];

export const capstoneProject = {
  title: 'Ultimate Social Media',
  description:
    'Use everything you learned to build a complex social media app',
  features: [
    'Remote Data Fetching with TanStack Query',
    'Advance Expo Router for Web and Mobile',
    'Push Notifications',
  ],
};
