import { useState } from "react";
import { useLang } from "../i18n/LanguageContext";
import { useReveal } from "../hooks/useReveal";
import { galleryItems, type GalleryItem } from "../data/gallery";
import { featuredVideos } from "../data/featuredVideo";
import { Lightbox } from "./Lightbox";
import { FeaturedVideoTile } from "./FeaturedVideoTile";

// Shared sizing: a peeking horizontal card (fixed aspect, like a feed) on mobile,
// a normal masonry tile (natural aspect ratio) from sm: up.
export const GALLERY_TILE_WIDTH = "w-[76vw] max-w-[320px] flex-none snap-start sm:w-full sm:max-w-none";
export const GALLERY_TILE_ASPECT = "aspect-[4/5] sm:aspect-auto";

function toThumb(path: string, ext: "jpg" | "webp") {
  const name = path.split("/").pop()?.replace(/\.(jpg|webp)$/, "");
  return `/images/thumbs/${name}.${ext}`;
}

function GalleryTile({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: () => void;
}) {
  const { lang } = useLang();
  const revealRef = useReveal<HTMLButtonElement>((index % 6) * 70);

  return (
    <button
      ref={revealRef}
      type="button"
      onClick={onOpen}
      className={`reveal group relative mb-4 block break-inside-avoid overflow-hidden rounded-xl shadow-card ${GALLERY_TILE_WIDTH} ${GALLERY_TILE_ASPECT}`}
    >
      <picture>
        <source srcSet={toThumb(item.image, "webp")} type="image/webp" />
        <img
          src={toThumb(item.image, "jpg")}
          alt={item.caption[lang]}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-auto"
        />
      </picture>
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(6,22,28,0.82)] to-transparent px-4 pb-3.5 pt-9 text-left text-sm font-semibold text-white opacity-100 transition-all duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100">
        {item.caption[lang]}
      </span>
    </button>
  );
}

export function Gallery() {
  const { t, lang } = useLang();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-sand-200 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-xl text-center sm:mb-12">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-coral">{t.gallery.eyebrow}</p>
          <h2 className="mb-3.5 text-3xl font-extrabold text-blue-900 sm:text-4xl">{t.gallery.title}</h2>
          <p className="text-[1.05rem] text-ink-soft">{t.gallery.subtitle}</p>
        </div>

        <div className="relative -mx-6 sm:mx-0">
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:block sm:columns-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden lg:columns-3"
          >
            {featuredVideos.map((video, i) => (
              <FeaturedVideoTile key={video.id} video={video} index={i} />
            ))}
            {galleryItems.map((item, i) => (
              <GalleryTile key={item.id} item={item} index={i} onOpen={() => setActiveIndex(i)} />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-sand-200 to-transparent sm:hidden" />
        </div>

        <p className="mt-3 text-center text-xs font-semibold text-ink-soft sm:hidden">{t.gallery.swipeHint}</p>
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={galleryItems}
          index={activeIndex}
          lang={lang}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
