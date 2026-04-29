import { useState, useRef, useEffect } from "react";
import { Play, Plus, MoreHorizontal, Clock, List } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BottomBanner from "../components/BottomBanner";
import ResizableLayout from "../components/ResizeableLayout";
import Footer from "@/components/Footer";
import { albumData } from "../data/albumData";

const moreByNIKI = [
  {
    title: "Nicole",
    year: "2022",
    img: "https://i.scdn.co/image/ab67616d00001e0289aa3d00d339b8948374782b",
  },
  {
    title: "lowkey",
    year: "2019",
    img: "https://i.scdn.co/image/ab67616d00001e0227d27aa0719f69df2c50f4dd",
  },
  {
    title: "Buzz",
    year: "2024",
    img: "https://i.scdn.co/image/ab67616d00001e02af28c3161d272af6c015131c",
  },
  {
    title: "NIKI Acoustic Sessions: Head In...",
    year: "2019",
    img: "https://i.scdn.co/image/ab67616d00001e028b0e2044b4b20f24908f7122",
  },
  {
    title: "Every Summertime",
    year: "2021",
    img: "https://i.scdn.co/image/ab67616d00001e02e81fd3b9a7230db447f38182",
  },
];

function AlbumMain() {
  const [isSticky, setIsSticky] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;
    const onScroll = () => {
      // Aktifkan sticky bar saat user scroll melewati batas bawah hero section (minus tinggi header)
      const heroH = heroRef.current?.offsetHeight ?? 260;
      setIsSticky(scrollEl.scrollTop > heroH - 64);
    };
    scrollEl.addEventListener("scroll", onScroll);
    return () => {
      scrollEl.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="sp-main" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      
      {/* ── Sticky Bar (Hanya muncul saat scroll) ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "64px",
          background: "#2f3737", // Warna solid agar teks terbaca saat ditumpuk
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "0 24px",
          zIndex: 100,
          opacity: isSticky ? 1 : 0,
          transform: isSticky ? "translateY(0)" : "translateY(-100%)",
          transition: "opacity 0.25s, transform 0.25s",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          pointerEvents: isSticky ? "auto" : "none",
        }}
      >
        <button style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#1ed760", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer" }}>
          <Play size={18} fill="#000" color="#000" style={{ marginLeft: "2px" }} />
        </button>
        <span style={{ fontSize: "22px", fontWeight: 700, color: "#fff" }}>{albumData.title}</span>
      </div>

      {/* ── Scroll Container ── */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", scrollBehavior: "smooth" }}>
        
        {/* ── Hero Section ── */}
        <div
          ref={heroRef}
          style={{
            background: "linear-gradient(180deg, #4a3728 0%, #2a2a2a 60%, #121212 100%)",
            padding: "24px 24px 24px",
            display: "flex",
            alignItems: "flex-end",
            gap: "24px",
            minHeight: "280px",
          }}
        >
          <div style={{ flexShrink: 0, boxShadow: "0 8px 48px rgba(0,0,0,0.6)" }}>
            <img
              src={albumData.coverImg}
              alt={albumData.title}
              style={{ width: "223px", height: "223px", objectFit: "cover", borderRadius: "4px", display: "block" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff", textTransform: "capitalize", marginBottom: "8px" }}>
              {albumData.type}
            </p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 72px)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "20px", letterSpacing: "-2px" }}>
              {albumData.title}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <img src={albumData.artistImg} alt={albumData.artist} style={{ width: "24px", height: "24px", borderRadius: "50%" }} />
              <span style={{ fontWeight: 700, fontSize: "14px", color: "#fff" }}>{albumData.artist}</span>
              <span style={{ color: "#b3b3b3", fontSize: "14px" }}>• {albumData.year} • {albumData.songCount} songs, {albumData.duration}</span>
            </div>
          </div>
        </div>

        {/* ── Controls Bar ── */}
        <div style={{ padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#121212" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <button style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#1ed760", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer" }}>
              <Play size={22} fill="#000" color="#000" style={{ marginLeft: "3px" }} />
            </button>
            <button style={{ width: "32px", height: "32px", borderRadius: "50%", border: "2px solid #6a6a6a", display: "flex", alignItems: "center", justifyContent: "center", background: "none", color: "#b3b3b3", cursor: "pointer" }}>
              <Plus size={18} />
            </button>
            <MoreHorizontal size={24} color="#b3b3b3" style={{ cursor: "pointer" }} />
          </div>
          <button style={{ display: "flex", alignItems: "center", gap: "6px", background: "none", border: "none", color: "#b3b3b3", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
            List <List size={18} />
          </button>
        </div>

        {/* ── Track List Table ── */}
        <div style={{ padding: "0 24px 32px", background: "#121212" }}>
          <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 80px", padding: "0 16px 8px", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: "8px" }}>
            <span style={{ fontSize: "13px", color: "#b3b3b3" }}>#</span>
            <span style={{ fontSize: "13px", color: "#b3b3b3" }}>Title</span>
            <div style={{ display: "flex", justifyContent: "flex-end" }}><Clock size={16} color="#b3b3b3" /></div>
          </div>

          {albumData.tracks.map((track) => (
            <div
              key={track.number}
              style={{ display: "grid", gridTemplateColumns: "40px 1fr 80px", padding: "8px 16px", borderRadius: "4px", cursor: "pointer", alignItems: "center" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff14")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <span style={{ fontSize: "15px", color: "#b3b3b3" }}>{track.number}</span>
              <div>
                <p style={{ fontSize: "15px", color: "#fff", marginBottom: "2px" }}>{track.title}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {track.explicit && <span style={{ background: "#b3b3b3", color: "#000", fontSize: "9px", fontWeight: 700, borderRadius: "2px", padding: "1px 4px" }}>E</span>}
                  <p style={{ fontSize: "13px", color: "#b3b3b3" }}>{track.artist}</p>
                </div>
              </div>
              <span style={{ fontSize: "14px", color: "#b3b3b3", textAlign: "right" }}>{track.duration}</span>
            </div>
          ))}
        </div>

        {/* ── Footer / Copyright ── */}
        <div style={{ padding: "24px 24px", background: "#121212" }}>
          <p style={{ fontSize: "13px", color: "#b3b3b3", marginBottom: "4px" }}>September 14, 2022</p>
          <p style={{ fontSize: "12px", color: "#b3b3b3" }}>© 2022 88rising Records LLC</p>
          <p style={{ fontSize: "12px", color: "#b3b3b3" }}>℗ 2022 88rising Records LLC</p>
        </div>

        {/* ── More By Artist ── */}
        <div style={{ padding: "24px 24px 80px", background: "#transparent" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#fff" }}>More by {albumData.artist}</h2>
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#b3b3b3", cursor: "pointer" }}>See discography</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "26px" }}>
            {moreByNIKI.map((album) => (
              <div
                key={album.title}
                style={{ background: "#none", padding: "8px", borderRadius: "8px", cursor: "pointer", transition: "background 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#282828")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#181818")}
              >
                <img src={album.img} alt={album.title} style={{ width: "100%", aspectRatio: "1", borderRadius: "4px", marginBottom: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.5)" }} />
                <p style={{ color: "#fff", fontSize: "14px", fontWeight: 700, marginBottom: "4px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{album.title}</p>
                <p style={{ color: "#b3b3b3", fontSize: "13px" }}>{album.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function AlbumPage() {
  return (
    <div className="sp-layout" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <ResizableLayout
        sidebar={<Sidebar />}
        main={<AlbumMain />}
      />
      <BottomBanner />
    </div>
  );
}

export default AlbumPage;