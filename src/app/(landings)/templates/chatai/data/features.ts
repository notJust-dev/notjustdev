export type Feature = {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

export const features: Feature[] = [
  {
    tagline: 'Multi-model',
    title: 'Let users pick the brain they want',
    description:
      'Ship with five OpenAI models out of the box: GPT-4o, GPT-4o mini, GPT-4.1, GPT-4.1 mini, and o3-mini. Swap in Anthropic, Gemini, or your own endpoint with a single file edit.',
    bullets: [
      'Model picker in the chat header',
      'Per-chat model memory',
      'Edge function abstracts the provider',
    ],
    image: '/images/templates/chatai/screenshots/model-picker.png',
    imageAlt: 'ChatAI model picker showing GPT-4o, GPT-4.1 and o3-mini',
  },
  {
    tagline: 'Streaming',
    title: 'Token-by-token responses that feel instant',
    description:
      'Server-sent events stream OpenAI completions from a Supabase edge function directly into the UI. Full GitHub-flavored markdown renders as it arrives: bullets, tables, blockquotes, and all.',
    bullets: [
      'SSE pipeline, not polling',
      'Graceful partial-response recovery',
      'Auto-scroll with keyboard awareness',
    ],
    image: '/images/templates/chatai/screenshots/streaming.png',
    imageAlt: 'ChatAI streaming a markdown-formatted response in real time',
  },
  {
    tagline: 'History',
    title: 'Conversations that never disappear',
    description:
      'Every chat is persisted in Postgres with row-level security. Swipeable drawer, infinite-scroll pagination, rename and delete: the boring parts of a chat app done right.',
    bullets: [
      'Drawer navigation with infinite scroll',
      'Rename / delete via context menu',
      'Pagination: 20 chats + 10 messages per page',
    ],
    image: '/images/templates/chatai/screenshots/chat-history.png',
    imageAlt: 'ChatAI drawer showing a long list of previous conversations',
  },
  {
    tagline: 'Markdown',
    title: 'Code blocks, lists, and tables, pixel-perfect',
    description:
      'A custom markdown renderer with syntax-highlighted code blocks, selectable copy buttons, and mobile-tuned typography. Your users get the ChatGPT reading experience, not a wall of text.',
    bullets: [
      'Prism-based syntax highlighting',
      'Native text selection on iOS and Android',
      'Tables, blockquotes, nested lists supported',
    ],
    image: '/images/templates/chatai/screenshots/markdown.png',
    imageAlt: 'ChatAI rendering a code block with syntax highlighting',
  },
];
