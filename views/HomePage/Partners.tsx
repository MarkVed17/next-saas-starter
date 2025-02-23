import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const PARTNER_LOGOS = [
  'vps.svg',
  'lauritzen-bulkers.svg',
  'sgs.png',
  'tata-nyk-removebg-preview.png',
  'vedanta.svg',
  // 'logoipsum-logo-2.svg',
  // 'logoipsum-logo-3.svg',
  // 'logoipsum-logo-4.svg',
  // 'logoipsum-logo-5.svg',
  // 'logoipsum-logo-6.svg',
  // 'logoipsum-logo-7.svg',
];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>official clients</Title>
      {/* <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      > */}
      {/* <div>
        {PARTNER_LOGOS.map((logo) => (
          // <SwiperSlide key={logo}>
          <NextImage src={'/partners/' + logo} alt={normalizePartnerLogoName(logo)} width={100} height={80} />
          // </SwiperSlide>
        ))}
      </div> */}
      <LogosGrid>
        {PARTNER_LOGOS.map((logo) => (
          <LogoWrapper key={logo}>
            <NextImage src={'/partners/' + logo} alt={normalizePartnerLogoName(logo)} width={100} height={80} />
          </LogoWrapper>
        ))}
      </LogosGrid>

      {/* </Swiper> */}
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.svg', '');
}

const Title = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  line-height: 0;
  text-transform: uppercase;
  margin-bottom: 2rem;
  text-align: center;
  opacity: 0.8;

  ${media('<=desktop')} {
    line-height: 1.5;
  }
`;

const PartnersWrapper = styled(Container)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

const LogosGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 5rem;
`;

const LogoWrapper = styled.div`
  flex: 1 1 calc(20% - 20px);
  max-width: calc(20% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 16px;
`;
