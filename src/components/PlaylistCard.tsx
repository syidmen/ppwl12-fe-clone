import { Play } from "lucide-react";

interface Props { image: string; title: string; description: string; }

const PlaylistCard = ({ image, title, description }: Props) => (
  <div className="sp-card">
    <div className="img-sq shadow-lg">
      <img src={image} alt={title} loading="lazy" />
      <button className="play-btn">
        <Play style={{ width: '18px', height: '18px', fill: '#000', color: '#000', marginLeft: '2px' }} />
      </button>
    </div>
    <h3 className="font-bold text-white truncate" style={{ fontSize: '14px', marginBottom: '2px' }}>{title}</h3>
    <p className="line-clamp-2" style={{ fontSize: '13px', color: '#b3b3b3' }}>{description}</p>
  </div>
);

export default PlaylistCard;
