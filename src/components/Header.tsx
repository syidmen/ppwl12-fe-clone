import { Search } from "lucide-react";

const Header = () => (
  <header style={{
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 16px', height: '64px', background: '#000'
  }}>

    {/* ── LEFT ── */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

      {/* Spotify Logo */}
      <a href="/" style={{ flexShrink: 0, marginRight: '4px' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#1ed760">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </a>

      {/* Home circle */}
      <a href="/"
        style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
        onMouseEnter={e => (e.currentTarget.style.background = '#2a2a2a')}
        onMouseLeave={e => (e.currentTarget.style.background = '#1a1a1a')}>
        <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
          <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"/>
        </svg>
      </a>

      {/* Search pill */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#1a1a1a', border: '1px solid transparent', borderRadius: '500px', padding: '10px 16px', width: '360px', transition: 'all 0.2s' }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = '#242424'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#1a1a1a'; (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent'; }}>
        <Search size={16} color="#a0a0a0" style={{ flexShrink: 0 }} />
        <input type="text" placeholder="What do you want to play?"
          style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '14px', color: '#fff', width: '100%' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div style={{ width: '1px', height: '24px', background: '#404040' }} />
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#a0a0a0" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        </div>
      </div>
    </div>

    {/* ── RIGHT ── */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      {/* Premium Support Download */}
      {['Premium', 'Support', 'Download'].map(n => (
        <a key={n} href="#"
          style={{ fontWeight: 700, fontSize: '14px', color: '#fff', padding: '8px 12px', whiteSpace: 'nowrap', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#b3b3b3')}
          onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>
          {n}
        </a>
      ))}

      {/* Divider */}
      <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.25)', margin: '0 8px' }} />

      {/* Install App */}
      <a href="#"
        style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '14px', color: '#fff', padding: '8px 8px', whiteSpace: 'nowrap', textDecoration: 'none' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#b3b3b3')}
        onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 13l4 4 4-4"/>
        </svg>
        Install App
      </a>

      {/* Sign up */}
      <a href="#"
        style={{ fontWeight: 700, fontSize: '14px', color: '#b3b3b3', padding: '8px 12px', whiteSpace: 'nowrap', textDecoration: 'none' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.color = '#b3b3b3')}>
        Sign up
      </a>

      {/* Log in */}
      <a href="#"
        style={{ fontWeight: 700, fontSize: '14px', background: '#fff', color: '#000', padding: '12px 32px', borderRadius: '500px', whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-block' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.background = '#f0f0f0'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#fff'; }}>
        Log in
      </a>
    </div>
  </header>
);

export default Header;
