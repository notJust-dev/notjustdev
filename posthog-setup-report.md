<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into notJust.dev. Here's a summary of every change made:

- **`instrumentation-client.ts`** (new file, project root): Initializes `posthog-js` for the entire Next.js app using the recommended `instrumentation-client` pattern (Next.js 15.3+). Includes error tracking (`capture_exceptions: true`) and a reverse proxy API host (`/ingest`).
- **`next.config.mjs`**: Added three PostHog reverse proxy rewrites (`/ingest/static/*`, `/ingest/array/*`, `/ingest/*`) and `skipTrailingSlashRedirect: true` so PostHog events are routed through your own domain, improving reliability and reducing ad-blocker interference.
- **`.env.local`**: Added `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (values never hardcoded in source).
- **`src/app/(landings)/newsletter/form.tsx`**: Tracks `newsletter_subscription_started` (on form submit) and `newsletter_subscribed` (when server action returns success).
- **`src/app/(main)/links/page.tsx`**: Tracks `links_page_link_clicked` (with `link_text` and `href` properties) and `newsletter_modal_opened` when the newsletter modal is opened from the links page.
- **`src/app/(tools)/app-revenue-calculator/calcualtor.tsx`**: Tracks `calculator_category_changed` and `calculator_downloads_changed` as users interact with the revenue calculator.
- **`src/components/PostLinks/PostLinks.tsx`**: Added `'use client'` directive and tracks `post_github_link_clicked` (with `post_slug` and `url`) when users click the source code link on a post.
- **`src/components/ProjectCard.tsx`**: Added `'use client'` directive and tracks `project_card_clicked` (with `project_slug`, `project_title`, and `url`) when users click a project card.

| Event | Description | File |
|---|---|---|
| `newsletter_subscription_started` | User submitted the newsletter signup form | `src/app/(landings)/newsletter/form.tsx` |
| `newsletter_subscribed` | Server confirmed newsletter subscription success | `src/app/(landings)/newsletter/form.tsx` |
| `newsletter_modal_opened` | User opened newsletter modal from links page | `src/app/(main)/links/page.tsx` |
| `links_page_link_clicked` | User clicked a link on the linktree-style links page | `src/app/(main)/links/page.tsx` |
| `calculator_category_changed` | User selected an app category in the revenue calculator | `src/app/(tools)/app-revenue-calculator/calcualtor.tsx` |
| `calculator_downloads_changed` | User changed downloads count in the revenue calculator | `src/app/(tools)/app-revenue-calculator/calcualtor.tsx` |
| `post_github_link_clicked` | User clicked the GitHub source code link on a post | `src/components/PostLinks/PostLinks.tsx` |
| `post_youtube_link_clicked` | User clicked the YouTube video link on a post | `src/components/PostLinks/PostLinks.tsx` |
| `project_card_clicked` | User clicked a project card to view project | `src/components/ProjectCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/395704/dashboard/1506275
- **Newsletter Subscription Funnel** (started → confirmed): https://us.posthog.com/project/395704/insights/jl9q3bAu
- **Newsletter Subscriptions Over Time** (daily trend): https://us.posthog.com/project/395704/insights/PcLfYVOn
- **Revenue Calculator Engagement**: https://us.posthog.com/project/395704/insights/UiTlV9Bh
- **Links Page — Top Clicked Links**: https://us.posthog.com/project/395704/insights/Itpkf7SM
- **Post External Link Clicks** (GitHub + YouTube, weekly): https://us.posthog.com/project/395704/insights/ttD6RhSp

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
