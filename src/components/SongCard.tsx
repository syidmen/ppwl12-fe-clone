import { Play } from "lucide-react";

interface Props { image: string; title: string; artists: string; explicit?: boolean; }

const SongCard = ({ image, title, artists, explicit = false }: Props) => (
  <div className="sp-card">
    <div className="img-sq shadow-lg">
      <img src={image} alt={title} loading="lazy" />
      <button className="play-btn">
        <Play style={{ width: '18px', height: '18px', fill: '#000', color: '#000', marginLeft: '2px' }} />
      </button>
    </div>
    <h3 className="font-bold text-white truncate" style={{ fontSize: '14px', marginBottom: '2px' }}>{title}</h3>
    <p className="flex items-center gap-1 truncate" style={{ fontSize: '13px', color: '#b3b3b3' }}>
      {explicit && (
        <span className="rounded-sm font-bold flex-shrink-0"
          style={{ background: '#b3b3b3', color: '#000', fontSize: '9px', padding: '1px 4px' }}>E</span>
      )}
      {artists}
    </p>
  </div>
);

export default SongCard;
