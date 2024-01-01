import { Meta } from '@/components/layout/Meta';

import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Reassurance } from './Reassurance';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Reassurance />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
