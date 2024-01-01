import { VerticalFeatureRow } from '@/components/feature/VerticalFeatureRow';
import { Section } from '@/components/layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Appartement T2 ou studio meublé"
    description="Nos appartements sont meublés et équipés pour votre confort."
  >
    <VerticalFeatureRow
      title="Grand studio meublé 24m2"
      description={
        "Totalement rénové, très bien équipé avec un coin cuisine séparé, ce grand studio meublé est très calme, idéal pour étudier. Ce studio que nous proposons est aménagé de manière pratique et douillette, avec des murs revêtus d'une peinture blanche éclatante. Vous y trouverez du mobilier ainsi que des équipements flambant neufs. Pour votre commodité, un micro-ondes et un assortiment complet de vaisselle sont inclus. De plus, de spacieux espaces de stockage sont à votre disposition.."
      }
      image="/assets/images/features/grand-studio.jpg"
      imageAlt="grand studio meublé 24m2"
    />
    <VerticalFeatureRow
      title="Studio meublé 20m2"
      description={
        "Tous nos studios sont meublés de façon fonctionnelle et confortable, ils sont peints en blanc et l'ensemble de l'ameublement et de l'équipement est neuf. Ils sont équipés d'un four micro-ondes et d'un nécessaire complet de vaisselle. Ils disposent également de grands rangements.."
      }
      image="/assets/images/features/studio.jpg"
      imageAlt="Studio meublé 20m2"
      reverse
    />
    <VerticalFeatureRow
      title="Appartement 2 pièces 43m2"
      description={
        "Nos appartements T2 sont meublés de façon fonctionnelle et confortable, ils sont peints en blanc et l'ensemble de l'ameublement et de l'équipement est neuf. Ils sont équipés d'un four micro-ondes et d'un nécessaire complet de vaisselle. Ils disposent également de grands rangements. Confortables pour deux étudiants, ils sont composés d'une chambre et d'un coin salon équipé d'un canapé-lit. espaces de stockage sont à votre disposition."
      }
      image="/assets/images/features/t2.jpg"
      imageAlt="TAppartement 2 pièces 43m2"
    />
  </Section>
);

export { VerticalFeatures };
