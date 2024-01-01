import Image from 'next/image';
import React from 'react';

import type { Feature } from '@/types/feature';

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <div className="grid-cols-3">
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-800">
          <Image
            src={icon}
            alt={title}
            height={66}
            width={66}
            priority={true}
          />
        </div>
        <h3 className="xl:text-itemtitle mt-7.5 mb-5 text-xl font-semibold text-black">
          {title}
        </h3>
      </div>
      <p className="text-left">{description}</p>
    </div>
  );
};

export default SingleFeature;
