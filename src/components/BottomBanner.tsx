const BottomBanner = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6"
    style={{ background: 'linear-gradient(90deg,#af2896,#509bf5)', height: '72px' }}>
    <div>
      <p className="font-bold text-white uppercase tracking-widest" style={{ fontSize: '11px', marginBottom: '2px' }}>
        Preview of Spotify
      </p>
      <p className="text-white" style={{ fontSize: '14px' }}>
        Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
      </p>
    </div>
    <button className="bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex-shrink-0 ml-6"
      style={{ padding: '14px 32px', fontSize: '14px' }}>
      Sign up free
    </button>
  </div>
);

export default BottomBanner;