export type CurriculumTab = {
  name: string;
  topics: string[];
};

export const curriculumTabs: CurriculumTab[] = [
  {
    name: 'React Fundamentals',
    topics: [
      'JSX',
      'Custom components',
      'Props',
      'State',
      'Hooks',
      'Context APIs',
      'Component lifecycle',
    ],
  },
  {
    name: 'React Native Fundamentals',
    topics: [
      'Native Views',
      'Forms and Inputs',
      'The New Architecture',
      'Debugging',
      'React Native Styling',
      'Flexbox',
    ],
  },
  {
    name: 'Expo',
    topics: [
      'Expo Development workflow',
      'Expo Go',
      'Continuous Native Generation',
      'Custom Dev Client',
      'Expo libraries',
    ],
  },
  {
    name: 'Expo Router',
    topics: [
      'React Navigation fundamentals',
      'File based navigation',
      'Dynamic Routes',
      'WEB',
      'Layouts',
      'Deep links',
      'Tabs, Stack, Drawer Navigators',
    ],
  },
  {
    name: 'Platform APIs',
    topics: [
      'Camera',
      'Permissions',
      'Deep Linking',
      'Notifications',
      'File System',
      'Media Library',
    ],
  },
  {
    name: 'Data',
    topics: [
      'Zustand',
      'Fetch API',
      'Local-first architecture',
      'TanStack Query',
      'Persistance',
      'Global State Management',
    ],
  },
  {
    name: 'Development Workflow',
    topics: [
      'Environment setup',
      'Project Structure',
      'Git workflow',
      'Best practices',
      'Env variables',
    ],
  },
  {
    name: 'Libraries',
    topics: [
      'Vector Icons',
      'Expo AV',
      'React Native Gesture Handler',
      'React Native Reanimated',
      'Async Storage',
      'React Hook Form',
    ],
  },
];
