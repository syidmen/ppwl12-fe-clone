import { Library, Plus, Globe } from "lucide-react";

const Sidebar = () => (
  <aside className="sp-sidebar">

    {/* ── Library header: icon + text LEFT, + Create RIGHT ── */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px 8px' }}>
      <button
        style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', fontWeight: 700, fontSize: '15px', background: 'none', border: 'none', cursor: 'pointer' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#b3b3b3')}
        onMouseLeave={e => (e.currentTarget.style.color = '#fff')}>
        <Library size={24} />
        Your Library
      </button>
      <button
        style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#b3b3b3', fontWeight: 700, fontSize: '14px', background: '#2a2a2a', border: 'none', cursor: 'pointer', borderRadius: '20px', padding: '6px 12px' }}
        onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = '#3a3a3a'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#b3b3b3'; e.currentTarget.style.background = '#2a2a2a'; }}>
        <Plus size={16} />
        Create
      </button>
    </div>

    {/* ── Create playlist — CARD with dark bg ── */}
    <div style={{ margin: '8px', padding: '16px', borderRadius: '8px', background: '#242424', flexShrink: 0 }}>
      <p style={{ fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '6px' }}>Create your first playlist</p>
      <p style={{ fontSize: '13px', color: '#b3b3b3', marginBottom: '16px' }}>It's easy, we'll help you</p>
      <button
        style={{ background: '#fff', color: '#000', fontWeight: 700, fontSize: '13px', borderRadius: '20px', padding: '7px 16px', border: 'none', cursor: 'pointer' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
        Create playlist
      </button>
    </div>

    {/* ── Browse podcasts — ALSO CARD with dark bg ── */}
    <div style={{ margin: '8px', padding: '16px', borderRadius: '8px', background: '#242424', flexShrink: 0 }}>
      <p style={{ fontWeight: 700, fontSize: '15px', color: '#fff', marginBottom: '6px' }}>Let's find some podcasts to follow</p>
      <p style={{ fontSize: '13px', color: '#b3b3b3', marginBottom: '16px' }}>We'll keep you updated on new episodes</p>
      <button
        style={{ background: '#fff', color: '#000', fontWeight: 700, fontSize: '13px', borderRadius: '20px', padding: '7px 16px', border: 'none', cursor: 'pointer' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
        Browse podcasts
      </button>
    </div>

    {/* Spacer */}
    <div style={{ flex: 1 }} />

    {/* ── Footer legal links ── */}
    <div style={{ padding: '8px 16px 4px', flexShrink: 0 }}>
      {/* Row 1 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 8px', marginBottom: '4px' }}>
        {['Legal', 'Safety & Privacy Center', 'Privacy Policy'].map(item => (
          <a key={item} href="#"
            style={{ fontSize: '11px', color: '#b3b3b3', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#b3b3b3')}>
            {item}
          </a>
        ))}
      </div>
      {/* Row 2 */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 8px', marginBottom: '4px' }}>
        {['Cookies', 'About Ads', 'Accessibility'].map(item => (
          <a key={item} href="#"
            style={{ fontSize: '11px', color: '#b3b3b3', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#b3b3b3')}>
            {item}
          </a>
        ))}
      </div>
      {/* Row 3: Cookies alone */}
      <div style={{ marginBottom: '8px' }}>
        <a href="#"
          style={{ fontSize: '11px', color: '#b3b3b3', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#b3b3b3')}>
          Cookies
        </a>
      </div>
    </div>

    {/* ── Language button ── */}
    <div style={{ padding: '0 16px 24px', flexShrink: 0 }}>
      <button
        style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '8px 16px', color: '#fff', fontWeight: 700, fontSize: '13px', background: 'none', cursor: 'pointer' }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}>
        <Globe size={16} />
        English
      </button>
    </div>
  </aside>
);

export default Sidebar;