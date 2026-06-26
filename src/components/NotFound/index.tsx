'use client';
import animationData from '@/Lotties/gatinho-corta-fio.json'
import { SLottie } from './notFound.styles';
import Lottie from 'lottie-react';

type PropsNotFound = {
  title?: string
  subTitle?: string
}

export default function NotFoundAnimation({ title, subTitle }: PropsNotFound) {
  return (
    <SLottie
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        damping: 13,
        stiffness: 100,
      }}
    >
      {
        title && (
          <h2>{title}</h2>
        )
      }
      {
        subTitle && (
          <p>{subTitle}</p>
        )
      }

      <Lottie className='animation'
        animationData={animationData}
        loop={true}
      // style={{
      //   width: 350,
      //   height: 350,
      // }}
      />
    </SLottie>
  )

}