import type { ReactNode } from "react";

interface Props {
  title: string;
  showAll?: boolean;
  children: ReactNode;
}

const Section = ({ title, showAll = true, children }: Props) => (
  <section style={{ marginBottom: '32px' }}>
    <div className="flex items-center justify-between" style={{ marginBottom: '16px' }}>
      <a href="#" className="font-bold text-white hover:underline" style={{ fontSize: '22px' }}>
        {title}
      </a>
      {showAll && (
        <a href="#"
          className="font-bold uppercase tracking-wider hover:underline"
          style={{ fontSize: '11px', color: '#b3b3b3', letterSpacing: '1.5px' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#b3b3b3')}>
          Show all
        </a>
      )}
    </div>
    <div className="sp-carousel-wrap">
      <div className="sp-carousel">
        {Array.isArray(children)
          ? (children as ReactNode[]).map((child, i) => (
              <div key={i} className="sp-carousel-item">{child}</div>
            ))
          : <div className="sp-carousel-item">{children}</div>
        }
      </div>
    </div>
  </section>
);

export default Section;
