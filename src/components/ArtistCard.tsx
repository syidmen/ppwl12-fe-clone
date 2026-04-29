import { Play } from "lucide-react";

interface Props { image: string; name: string; }

const ArtistCard = ({ image, name }: Props) => (
  <div className="sp-card">
    <div className="img-ci shadow-lg">
      <img src={image} alt={name} loading="lazy" />
      <button className="play-btn">
        <Play style={{ width: '18px', height: '18px', fill: '#000', color: '#000', marginLeft: '2px' }} />
      </button>
    </div>
    <h3 className="font-bold text-white truncate" style={{ fontSize: '14px', marginBottom: '2px' }}>{name}</h3>
    <p style={{ fontSize: '13px', color: '#b3b3b3' }}>Artist</p>
  </div>
);

export default ArtistCard;