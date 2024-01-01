'use client';

import React from 'react';

import { Background } from '@/background/Background';
import { Section } from '@/components/layout/Section';

import featuresData from '../components/reassurance/featuresData';
import SingleFeature from '../components/reassurance/SingleFeature';

const Reassurance = () => {
  return (
    <>
      <Background color="bg-gray-100">
        {/* <!-- ===== Features Start ===== --> */}
        <Section yPadding="py-6">
          <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
            <div className="gap-7.5 xl:gap-12.5 mb-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
              {/* <!-- Features item Start --> */}

              {featuresData.map((feature, key) => (
                <SingleFeature feature={feature} key={key} />
              ))}
              {/* <!-- Features item End --> */}
            </div>
          </div>
        </Section>

        {/* <!-- ===== Features End ===== --> */}
      </Background>
    </>
  );
};

export { Reassurance };
