import { Metadata } from 'next';
import PurchaseEvent from '../PurchaseEvent';
import ThankYouPage from '../components/ThankYouPage';

export const metadata: Metadata = {
  title: 'Thank you for joining React Native Mastery!',
  description:
    "You've successfully enrolled in React Native Mastery. Check your email for next steps.",
};

export default function ThankYouBasic() {
  return (
    <>
      <PurchaseEvent value={349} itemId="prod_RA926pX22oQo9e" itemName="RNM Basic" />
      <ThankYouPage />
    </>
  );
}
