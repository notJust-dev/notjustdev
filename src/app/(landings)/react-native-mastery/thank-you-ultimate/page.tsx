import { Metadata } from 'next';
import PurchaseEvent from '../PurchaseEvent';
import ThankYouPage from '../ThankYouPage';

export const metadata: Metadata = {
  title: 'Thank you for joining React Native Mastery!',
  description:
    "You've successfully enrolled in React Native Mastery. Check your email for next steps.",
};

export default function ThankYouUltimate() {
  return (
    <>
      <PurchaseEvent value={499} itemId="prod_RA94jWDW1koWq9" itemName="RNM Ultiamte" />
      <ThankYouPage />
    </>
  );
}
