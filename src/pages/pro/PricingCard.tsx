import Button from '../../components/Button';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import { PRO_MEMBERSHIP_CHECKOUT_URL } from '../../lib/config';

export default function PricingCard() {
  return (
    <MaxWidthWrapper maxWidth={550} noPadding className='my-10 md:ml-5'>
      <div className='bg-custom-blue-500 p-5 md:p-10 rounded-lg'>
        <div className='flex'>
          <div className='flex-1'>
            <h3 className='text-3xl font-bold'>PRO Membership</h3>
            <p className='text-slate-400'>The community you need to achieve your full potential as a mobile developer.</p>
          </div>
          <div className='mx-5'>
            <p className='text-xl font-bold line-through text-slate-300'>$24</p>
            <p className='text-5xl font-extrabold text-green-500'>$12</p>
            <p className='text-slate-400'>per month</p>
          </div>
        </div>
        <Button
          href={PRO_MEMBERSHIP_CHECKOUT_URL}
          text="Join PRO"
          className="my-5 font-bold w-full"
        />
        <div>
          <p className='text-lg text-center font-bold'>Launch bonuses <span className='text-slate-400 font-normal'>(only during August)</span></p>
          
          <div className='grid gap-3 mt-5'>
            {[
              'Weekly Pro Calls with Vadim Savin', 
              'A chance to present a project during the Demo Day', 
              '50% Discount (forever)',
              'Grandfathered price'].map(benefit => (
              <p className='flex text-slate-300' key={benefit}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#23C55E" className="w-6 h-6 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='flex-1'>
                  {benefit}

                </span>
              </p>
            ))}
          </div>
          

        </div>
      </div>
    </MaxWidthWrapper>
  )
}