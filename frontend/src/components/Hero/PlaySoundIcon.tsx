"use client";

import { Volume1, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PlaySoundIcon = () => {
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
      {!isPlaying ? (
        <div className="w-12 cursor-pointer sm:w-16">
          <Volume1
            onClick={playSound}
            strokeWidth={1.5}
            className="w-full h-full hover:text-whiteDimmed"
          />
        </div>
      ) : (
        <div className="w-12 sm:w-16">
          <Volume2
            strokeWidth={1.5}
            className="w-full h-full text-whiteDimmed"
          />
        </div>
      )}

      <audio ref={ref}>
        <source src="/name-sound.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default PlaySoundIcon;
