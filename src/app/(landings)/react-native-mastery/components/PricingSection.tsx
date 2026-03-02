import Image from 'next/image';
import styles from '../rnm.module.css';
import { pricingTiers, type PricingTier } from '../data/pricing';

function PricingCard({ tier }: { tier: PricingTier }) {
  const cardClass =
    tier.variant === 'basic'
      ? styles.pricingCardBasic
      : tier.variant === 'pro'
        ? styles.pricingCardPro
        : styles.pricingCardUltimate;

  const innerClass =
    tier.variant === 'basic'
      ? styles.pricingCardInnerBasic
      : tier.variant === 'pro'
        ? styles.pricingCardInnerPro
        : styles.pricingCardInnerUltimate;

  const buttonClass =
    tier.variant === 'pro'
      ? styles.pricingEnrollButtonPro
      : styles.pricingEnrollButton;

  return (
    <div className={cardClass}>
      <div className={innerClass}>
        {/* Badge for Pro */}
        {tier.variant === 'pro' && (
          <Image
            src="/images/react-native-mastery/pricing-pro-badge.avif"
            alt=""
            width={80}
            height={80}
            className={styles.pricingBadge}
          />
        )}

        {/* Trophy for Ultimate/Bootcamp */}
        {tier.variant === 'ultimate' && (
          <div className={styles.pricingTrophyContainer}>
            <Image
              src="/images/react-native-mastery/pricing-trophy.avif"
              alt=""
              width={100}
              height={100}
              className={styles.pricingTrophy}
            />
            <Image
              src="/images/react-native-mastery/star1.avif"
              alt=""
              width={28}
              height={28}
              className={styles.pricingStar1}
            />
            <Image
              src="/images/react-native-mastery/star2.avif"
              alt=""
              width={20}
              height={20}
              className={styles.pricingStar2}
            />
            <Image
              src="/images/react-native-mastery/star3.avif"
              alt=""
              width={24}
              height={24}
              className={styles.pricingStar3}
            />
          </div>
        )}

        <div className={styles.pricingCardHeader}>
          <p className={styles.pricingCardName}>{tier.name}</p>
          <p className={styles.pricingCardDescription}>{tier.description}</p>
        </div>

        <div className={styles.pricingPriceRow}>
          <p className={styles.pricingPrice}>€ {tier.priceEUR}</p>
        </div>

        <a
          href={tier.stripeLink}
          className={`${buttonClass} stripe-link`}
          target="_blank"
          rel="noreferrer"
        >
          Enroll now
        </a>

        {tier.splitLink && (
          <a
            href={tier.splitLink}
            className={styles.pricingSplitLink}
            target="_blank"
            rel="noreferrer"
          >
            {tier.splitLabel}
          </a>
        )}

        <div className={styles.pricingFeatures}>
          {tier.features.map((feature) => (
            <div key={feature} className={styles.pricingFeature}>
              <Image
                src="/images/react-native-mastery/decorative/checkmark.svg"
                alt=""
                width={20}
                height={20}
                aria-hidden
              />
              <p className={styles.pricingFeatureText}>{feature}</p>
            </div>
          ))}
        </div>

        <div className={styles.pricingModules}>
          <p className={styles.pricingModulesTitle}>
            {tier.variant === 'basic' ? '4 Modules' : 'All Modules'}
          </p>
          {tier.modules.map((mod, i) => (
            <div key={mod.name} className={styles.pricingModule}>
              <p className={styles.pricingModuleName}>
                <span className={styles.pricingModuleNumber}>{i + 1}.</span>
                {mod.name}
                {mod.label ? ` - ${mod.label}` : ''}
              </p>
            </div>
          ))}
        </div>

        {tier.bonusLessons && (
          <>
            <div className={styles.pricingModules}>
              <p className={styles.pricingBonusTitle}>Bonus Lessons</p>
              {tier.bonusLessons.map((lesson) => (
                <div key={lesson} className={styles.pricingModule}>
                  <p className={styles.pricingModuleName}>{lesson}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {tier.bootcampReadMore && (
          <a
            href={tier.bootcampReadMore}
            className={styles.pricingReadMore}
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>
        )}

        {tier.bootcampNote && (
          <p className={styles.pricingBootcampNote}>{tier.bootcampNote}</p>
        )}
      </div>
    </div>
  );
}

function GuaranteeBlock() {
  return (
    <div className={styles.guaranteeSection}>
      <h3 className={styles.guaranteeHeading}>
        Our 30-Day Money-Back Guarantee
      </h3>
      <p className={styles.guaranteeText}>We want you to love this course.</p>
      <p className={styles.guaranteeText}>
        If you don&apos;t feel it&apos;s helping you become a better React
        Native developer, email us within 30 days of purchase — and we&apos;ll
        give you a full refund. No hassle. No questions asked.
      </p>
    </div>
  );
}

function TeamLicensingBlock() {
  return (
    <div className={styles.teamSection}>
      <Image
        src="/images/react-native-mastery/team-licensing.avif"
        alt="Team licensing"
        width={200}
        height={200}
        className={styles.teamImage}
      />
      <div className={styles.teamContent}>
        <h3 className={styles.teamHeading}>Level up your team&apos;s skills!</h3>
        <p className={styles.teamText}>
          Invest in your team and train multiple developers from your
          organisation. Get a special discount when buying 4 or more licenses.
        </p>
        <a
          href="mailto:vadim@notjust.dev?subject=Team%20licence%20for%20React%20Native%20Mastery"
          className={styles.gradientButton}
          style={{ padding: '16px 40px', fontSize: '16px' }}
        >
          Request
        </a>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="Pricing" className={styles.pricingSection}>
      {/* Regular pricing */}
      <div className={styles.pricingContainer}>
        <div className={styles.sectionTitleContainer}>
          <p className="text-pill w-fit">Pricing</p>
          <h2 className={styles.sectionTitle}>
            It&apos;s time for React Native Mastery
          </h2>
        </div>

        <div className={styles.pricingCards}>
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        <GuaranteeBlock />
        <TeamLicensingBlock />
      </div>


      <Image
        src="/images/react-native-mastery/decorative/layer2.svg"
        alt=""
        width={400}
        height={400}
        className={styles.decorativeLayer}
        style={{ bottom: 0, left: 0, right: 0 }}
        aria-hidden
      />
    </section>
  );
}
