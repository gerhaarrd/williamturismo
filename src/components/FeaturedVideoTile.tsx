import { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import type { FeaturedVideo } from "../data/featuredVideo";
import { GALLERY_TILE_WIDTH, GALLERY_TILE_ASPECT } from "./Gallery";
import { IconPlay } from "./icons";

export function FeaturedVideoTile({ video, index }: { video: FeaturedVideo; index: number }) {
  const { lang } = useLang();
  const revealRef = useReveal<HTMLDivElement>((index % 6) * 70);
  const [playing, setPlaying] = useState(false);

  return (
    <div
      ref={revealRef}
      className={`reveal group relative mb-4 overflow-hidden rounded-xl bg-black shadow-card ${GALLERY_TILE_WIDTH} ${
        playing ? "" : GALLERY_TILE_ASPECT
      }`}
    >
      {playing ? (
        <video src={video.src} poster={video.poster} controls autoPlay playsInline className="w-full" />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={video.playLabel[lang]}
          className="relative block h-full w-full"
        >
          <picture>
            <source srcSet={video.posterWebp} type="image/webp" />
            <img
              src={video.poster}
              alt={video.caption[lang]}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </picture>
          <span className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/25">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-blue-900 shadow-card transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
              <IconPlay className="ml-1 h-6 w-6 sm:h-7 sm:w-7" />
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(6,22,28,0.82)] to-transparent px-4 pb-3.5 pt-9 text-left text-sm font-semibold text-white">
            {video.caption[lang]}
          </span>
        </button>
      )}
    </div>
  );
}
