import Link from 'next/link';

import { Background } from '@/background/Background';
import { Button } from '@/button/Button';
import { HeroOneButton } from '@/components/hero/HeroOneButton';
import { Section } from '@/components/layout/Section';
import { NavbarTwoColumns } from '@/components/navigation/NavbarTwoColumns';

import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/#features">Appartements</Link>
        </li>
        <li>
          <Link href="/#localisation">Localisation</Link>
        </li>
        <li>
          <Link href="/#pricing">Tarifs</Link>
        </li>
        <li>
          <Link href="/#faq">FAQ</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </NavbarTwoColumns>
    </Section>
    <HeroOneButton
      title={
        <>
          {'Votre appartement meublé\n'}
          <span className="text-primary-500">
            En résidence étudiante à Lyon
          </span>
        </>
      }
      description="Votre studio meublé vous attend sur le campus INSA / La Doua."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button xl>Choisissez votre appartement</Button>
        </Link>
      }
    />
  </Background>
);

export { Hero };
