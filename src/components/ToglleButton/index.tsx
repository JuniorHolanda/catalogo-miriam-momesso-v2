'use client';

import animationData from '@/Lotties/togle-button.json';
import { SWrapper } from './toggleButton.styles';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useEffect, useRef } from 'react';
import { useThemeContext } from '@/contexts/ThemeContext';

export default function ToggleButton() {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleClick = () => {
    lottieRef.current?.setDirection(
      themeMode === 'light' ? 1 : -1
    );

    lottieRef.current?.play();

    toggleTheme();
  };

  const {
    themeMode,
    toggleTheme
  } = useThemeContext();


  return (
    <SWrapper onClick={handleClick}>
      <Lottie
        className="lottie"
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
      />
    </SWrapper>
  );
}