import Image from 'next/image';
import type { ReactNode } from 'react';

import student from '@/public/assets/images/hero/smiling-student.jpg';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="flex flex-col items-center text-center md:flex-row md:text-left">
    <div className="shrink-0">
      <Image
        src={student}
        alt={'Etudiant souriant louant un appartement meublé à Lyon'}
        height={400}
        width={400}
        placeholder="blur"
        priority={true}
      />
    </div>

    <div className="mt-6 md:ml-12 md:mt-0">
      <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
        {props.title}
      </h1>
      <div className="mb-16 mt-4 text-2xl">{props.description}</div>
      {props.button}
    </div>
  </header>
);

export { HeroOneButton };
