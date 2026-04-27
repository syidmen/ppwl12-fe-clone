import { Play, Plus, MoreHorizontal, Clock, List } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BottomBanner from "../components/BottomBanner";

// Sample album data
const albumData = {
  type: "Single",
  title: "You'll Be In My Heart",
  artist: "NIKI",
  artistImg: "https://i.scdn.co/image/ab6761610000e5ebb2b3896a88e94e2fd0e25d59",
  year: "2022",
  songCount: 2,
  duration: "8 min 40 sec",
  coverImg: "https://i.scdn.co/image/ab67616d0000b273f9ea2098e9b96b7e96e1b8f5",
  tracks: [
    { number: 1, title: "Before - Acoustic Version", artist: "NIKI", duration: "4:38", explicit: false },
    { number: 2, title: "You'll Be In My Heart", artist: "NIKI", duration: "4:02", explicit: false },
  ]
};

function AlbumPage() {
  return (
    <div className="sp-layout">
      <Header />
      <div className="sp-body">
        <Sidebar />
        <main className="sp-main" style={{ position: 'relative' }}>

          {/* ── Hero section with gradient bg ── */}
          <div style={{
            background: 'linear-gradient(180deg, #4a3728 0%, #2a2a2a 60%, #121212 100%)',
            padding: '24px 24px 24px',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '24px',
            minHeight: '280px',
          }}>
            {/* Album cover */}
            <div style={{ flexShrink: 0, boxShadow: '0 8px 48px rgba(0,0,0,0.6)' }}>
              <img
                src={albumData.coverImg}
                alt={albumData.title}
                style={{ width: '220px', height: '220px', objectFit: 'cover', borderRadius: '4px', display: 'block' }}
              />
            </div>

            {/* Album info */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#fff', textTransform: 'capitalize', marginBottom: '8px' }}>
                {albumData.type}
              </p>
              <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#fff', lineHeight: 1.05, marginBottom: '20px', letterSpacing: '-1px' }}>
                {albumData.title}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img
                  src={albumData.artistImg}
                  alt={albumData.artist}
                  style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <span style={{ fontWeight: 700, fontSize: '14px', color: '#fff' }}>{albumData.artist}</span>
                <span style={{ color: '#b3b3b3', fontSize: '14px' }}>•</span>
                <span style={{ color: '#b3b3b3', fontSize: '14px' }}>{albumData.year}</span>
                <span style={{ color: '#b3b3b3', fontSize: '14px' }}>•</span>
                <span style={{ color: '#b3b3b3', fontSize: '14px' }}>{albumData.songCount} songs, {albumData.duration}</span>
              </div>
            </div>
          </div>

          {/* ── Controls bar ── */}
          <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Big green play */}
              <button
                style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#1ed760', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(30,215,96,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.background = '#1fdf64'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#1ed760'; }}>
                <Play size={22} fill="#000" color="#000" style={{ marginLeft: '3px' }} />
              </button>

              {/* Add + */}
              <button
                style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid #6a6a6a', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', cursor: 'pointer', color: '#b3b3b3' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#6a6a6a')}>
                <Plus size={18} />
              </button>

              {/* More ··· */}
              <button
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b3b3b3', display: 'flex', alignItems: 'center' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#b3b3b3')}>
                <MoreHorizontal size={24} />
              </button>
            </div>

            {/* List button */}
            <button
              style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: '#b3b3b3', fontSize: '14px', fontWeight: 700 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#b3b3b3')}>
              List
              <List size={18} />
            </button>
          </div>

          {/* ── Track list table ── */}
          <div style={{ padding: '0 24px 32px' }}>
            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr 80px', padding: '0 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', color: '#b3b3b3', fontWeight: 400 }}>#</span>
              <span style={{ fontSize: '13px', color: '#b3b3b3', fontWeight: 400 }}>Title</span>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Clock size={16} color="#b3b3b3" />
              </div>
            </div>

            {/* Tracks */}
            {albumData.tracks.map(track => (
              <div
                key={track.number}
                style={{ display: 'grid', gridTemplateColumns: '40px 1fr 80px', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', alignItems: 'center' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#ffffff14')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>

                <span style={{ fontSize: '16px', color: '#b3b3b3' }}>{track.number}</span>

                <div>
                  <p style={{ fontSize: '15px', fontWeight: 400, color: '#fff', marginBottom: '2px' }}>{track.title}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {track.explicit && (
                      <span style={{ background: '#b3b3b3', color: '#000', fontSize: '9px', fontWeight: 700, borderRadius: '2px', padding: '1px 4px' }}>E</span>
                    )}
                    <p style={{ fontSize: '13px', color: '#b3b3b3' }}>{track.artist}</p>
                  </div>
                </div>

                <span style={{ fontSize: '14px', color: '#b3b3b3', textAlign: 'right' }}>{track.duration}</span>
              </div>
            ))}
          </div>

          {/* Album meta at bottom */}
          <div style={{ padding: '0 24px 32px' }}>
            <p style={{ fontSize: '13px', color: '#b3b3b3' }}>{albumData.year}</p>
          </div>

        </main>
      </div>
      <BottomBanner />
    </div>
  );
}

export default AlbumPage;
