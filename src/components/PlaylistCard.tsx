import { useState } from "react";

interface PlaylistCardProps {
  coverImage: string;
  title: string;
  description: string;
  isPlaying?: boolean;
  onPlay?: () => void;
}

export function PlaylistCard({
  coverImage,
  title,
  description,
}: PlaylistCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative w-[180px] cursor-pointer rounded-lg bg-[#181818] p-4 transition-all duration-300 hover:bg-[#282828]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Playlist Cover */}
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-md shadow-[0_8px_24px_rgba(0,0,0,.5)]">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Play Button */}
        <button
          type="button"
          className={`absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#1DB954] shadow-[0_8px_16px_rgba(0,0,0,.3)] transition-all duration-300 hover:scale-[1.06] hover:bg-[#1ed760] active:scale-100 ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="ml-1 h-6 w-6 text-black"
          >
            <path
              d="M8 5.14v14l11-7-11-7z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* Playlist Info */}
      <div className="flex flex-col gap-1">
        <h3 className="truncate text-[15px] font-bold leading-tight text-white">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm leading-snug text-[#a7a7a7]">
          {description}
        </p>
      </div>
    </div>
  );
}