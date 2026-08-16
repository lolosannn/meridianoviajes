import { useEffect, useRef, useState } from 'react';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4';
const FADE_DURATION = 0.5;

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const tick = () => {
      const { currentTime, duration } = video;

      if (duration && !Number.isNaN(duration)) {
        let nextOpacity = 1;

        if (currentTime < FADE_DURATION) {
          nextOpacity = currentTime / FADE_DURATION;
        } else if (currentTime > duration - FADE_DURATION) {
          nextOpacity = Math.max(0, (duration - currentTime) / FADE_DURATION);
        }

        setOpacity(nextOpacity);
      }

      rafId = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        style={{ inset: 'auto 0 0 0', top: '300px', opacity }}
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}
