import Section from "./Section";
import SongCard from "./SongCard";
import ArtistCard from "./ArtistCard";
import PlaylistCard from "./PlaylistCard";
import Footer from "./Footer";
import { trendingSongs, popularArtists, popularAlbums, featuredPlaylists, popularRadio } from "../data/musicData";

const MainContent = () => (
  <main className="sp-main">
    <div style={{ padding: '24px 32px 0' }}>
      <Section title="Trending songs">
        {trendingSongs.map(s => (
          <SongCard key={s.id} image={s.image} title={s.title} artists={s.artists} explicit={s.explicit} />
        ))}
      </Section>

      <Section title="Popular artists">
        {popularArtists.map(a => (
          <ArtistCard key={a.id} image={a.image} name={a.name} />
        ))}
      </Section>

      <Section title="Popular albums and singles">
        {popularAlbums.map(a => (
          <SongCard key={a.id} image={a.image} title={a.title} artists={a.artists} />
        ))}
      </Section>

      <Section title="Popular radio">
        {popularRadio.map(r => (
          <ArtistCard key={r.id} image={r.image} name={r.name} />
        ))}
      </Section>

      <Section title="Featured Charts">
        {featuredPlaylists.map(p => (
          <PlaylistCard key={p.id} image={p.image} title={p.title} description={p.description} />
        ))}
      </Section>
    </div>
    <Footer />
  </main>
);

export default MainContent;
