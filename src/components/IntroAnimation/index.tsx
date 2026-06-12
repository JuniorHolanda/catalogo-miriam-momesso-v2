'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '@/Lotties/vinheta-miriam-momesso.json'
import { SWrapper } from './IntroAnimation.styles';

export default function IntroAnimation() {

  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem('introPlayed');

    if (!alreadyPlayed) {
      setShowIntro(true);
    }
  }, []);

  function handleComplete() {
    sessionStorage.setItem('introPlayed', 'true');
    setShowIntro(false);
  }

  if (!showIntro) return null;
  return (
    <SWrapper>
      <Lottie
        animationData={animationData}
        loop={false}
        onComplete={handleComplete}
        style={{
          width: '350px',
          height: '350px'
        }}
      />
    </SWrapper>

  );
};