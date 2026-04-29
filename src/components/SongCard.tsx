import { useState } from "react";

interface SongCardProps {
  coverImage: string;
  title: string;
  artists: string[];
  explicit?: boolean;
  isPlaying?: boolean;
  onPlay?: () => void;
}

export function SongCard({
  coverImage,
  title,
  artists,
  explicit = false,
  isPlaying = false,
  onPlay,
}: SongCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-[180px] cursor-pointer rounded-lg bg-[#181818] p-4 transition-all duration-300 hover:bg-[#282828]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Album Cover */}
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-md shadow-[0_8px_24px_rgba(0,0,0,.5)]">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Play Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPlay?.();
          }}
          className={`absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#1DB954] shadow-[0_8px_16px_rgba(0,0,0,.3)] transition-all duration-300 hover:scale-[1.06] hover:bg-[#1ed760] active:scale-100 ${
            isHovered || isPlaying
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-black">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="ml-1 h-6 w-6 text-black">
              <path d="M8 5.14v14l11-7-11-7z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>

      {/* Song Info */}
      <div className="flex flex-col gap-1">
        <h3 className={`truncate text-[15px] font-bold leading-tight ${isPlaying ? "text-[#1DB954]" : "text-white"}`}>
          {title}
        </h3>
        <div className="flex items-center gap-2">
          {explicit && (
            <span className="flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-[2px] bg-[hsla(0,0%,100%,.6)] text-[9px] font-medium text-[#121212]">
              E
            </span>
          )}
          <p className="truncate text-sm text-[#a7a7a7]">
            {artists.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
