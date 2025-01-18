import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/voyage-management.png',
    title: 'Voyage Management Advisory',
    description:
      'With decades of expertise in ship management, we ensure seamless vessel operations, meeting the highest safety and quality standards in the oil & gas industry.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Ship Inspections',
    description:
      'Leveraging our extensive shipping industry experience, we offer a cost-effective, all-inclusive service package that includes budget estimates tailored to owner needs.',
  },
  {
    imageUrl: '/grid-icons/marine-survey.png',
    title: 'Marine Survey',
    description:
      'Our marine survey services combine deep industry knowledge with precision, offering thorough vessel inspections, condition assessments, and expert recommendations.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Port Captaincy',
    description:
      'Our port captaincy services ensure seamless vessel operations in port, managing all logistical, operational, and regulatory aspects.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Chartering',
    description:
      'With 25+ years of experience, our global network and multilingual team excel in securing the right Offshore Vessels, Tankers, and Bulk Carriers for diverse projects.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Brokering',
    description:
      'Our shipping brokerage services connect you to trusted vessels worldwide, ensuring smooth transactions and strategic solutions.',
  },
  // {
  //   imageUrl: '/grid-icons/asset-7.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-8.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
  // {
  //   imageUrl: '/grid-icons/asset-9.svg',
  //   title: 'Lorem ipsum dolor sit amet.',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error dolorem ipsa dolore facere est consequuntur aut, eos doloribus voluptate?',
  // },
];

export default function Features() {
  return (
    <Container>
      <Content>
        <SectionTitle>Our Services</SectionTitle>
      </Content>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;
