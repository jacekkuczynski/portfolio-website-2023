"use client";
import { Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const PlaySoundIcon = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    if (ref.current) {
      ref.current.play();
    }
  };

  useEffect(() => {
    const audio = ref.current;
    if (audio) {
      const playListener = () => setIsPlaying(true);
      const endedListener = () => setIsPlaying(false);

      audio.addEventListener("play", playListener);
      audio.addEventListener("ended", endedListener);

      return () => {
        audio.removeEventListener("play", playListener);
        audio.removeEventListener("ended", endedListener);
      };
    }
  }, []);

  return (
    <>
      <Volume2
        onClick={playSound}
        size={64}
        strokeWidth={1.5}
        className="hover:text-whiteDimmed"
      />
      <audio ref={ref}>
        <source src="/name-sound.mp3" type="audio/mpeg" />
      </audio>
      {isPlaying ? (
        <p className="text-white text-8xl">Audio is playing</p>
      ) : (
        <p className="text-white text-8xl">not playing</p>
      )}
    </>
  );
};
