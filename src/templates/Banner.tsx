import Link from 'next/link';

import { CTABanner } from '@/components/cta/CTABanner';
import { Section } from '@/components/layout/Section';

import { Button } from '../button/Button';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
