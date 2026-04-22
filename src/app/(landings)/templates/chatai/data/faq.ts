export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: 'What exactly do I get after purchase?',
    answer:
      'You get access to the private GitHub repository containing the full Expo source, Supabase schema and migrations, the streaming edge function, EAS workflows, and the complete documentation. Clone it, drop in your API keys, and you are ready to build.',
  },
  {
    question: 'What is the license?',
    answer:
      'The notJust Developer License: one developer seat, unlimited commercial apps built on top of the template, lifetime updates. You cannot resell, redistribute, or open-source the template itself. Multiple developers on a team each need a license.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Because ChatAI is delivered instantly as source code, all sales are final. Once the repository is in your hands, there is no way to take it back. This is the same reason other digital code products are non-refundable. That said, we want you to buy with confidence: read the full feature list above, and if you are unsure whether the template fits your project, email us at support@notjust.dev before purchasing and we will answer any question you have about the code, stack, or license.',
  },
  {
    question: 'Do I need Supabase and OpenAI accounts?',
    answer:
      'Yes. Both have generous free tiers and the setup docs walk you through creating the accounts, wiring the keys, and running the local Supabase stack. You can also swap the AI provider to Anthropic, Gemini, or your own endpoint.',
  },
  {
    question: 'Is this production-ready or a demo?',
    answer:
      'Production-ready. It ships with Sentry crash reporting, PostHog analytics, RevenueCat paywalls, row-level security on every table, signed iOS and Android builds via EAS, and OTA updates for JavaScript-only changes.',
  },
  {
    question: 'Can I publish apps built with this to the App Store and Play Store?',
    answer:
      'Yes, and the EAS workflows are already configured to auto-submit to both stores on every push to main. The deployment guide walks through App Store Connect and Google Play Console setup step by step.',
  },
  {
    question: 'Can I use it with Cursor, Claude Code, or Copilot?',
    answer:
      'Absolutely. The template was written with AI pair-programming in mind. Every folder (src/app, src/services, supabase) has its own AGENTS.md describing the conventions, data flow, and guardrails, and the repo root includes tuned configs for Claude Code, Cursor, Windsurf, Copilot, and Aider. That means when you prompt your editor to add a new screen or swap the AI provider, it works from the same patterns you do, not a generic React Native boilerplate it guessed at.',
  },
  {
    question: 'Do you ship updates?',
    answer:
      'Yes. Lifetime updates are included: bug fixes, new features, and SDK upgrades land in the repo and you pull them in whenever you are ready.',
  },
  {
    question: 'What support is included?',
    answer:
      'Email support at support@notjust.dev for template-specific issues. For general Expo, React Native, or Supabase questions, the community resources are your best bet.',
  },
];
