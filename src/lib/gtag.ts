import { GA_TRACKING_ID } from './config';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  try {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID as string, {
        page_path: url,
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error from the trackerPageView => ', error);
  }
};

interface EventProps {
  action: string;
  category: string;
  label: string;
  value: string;
}
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventProps) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
