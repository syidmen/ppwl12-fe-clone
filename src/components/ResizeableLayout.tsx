// src/components/ResizableLayout.tsx
import { useRef, useState, useCallback, type ReactNode } from "react";

const MIN_WIDTH = 300;
const MAX_WIDTH = 440;
const DEFAULT_WIDTH = 280;

interface Props {
  sidebar: ReactNode;
  main: ReactNode;
}

const ResizableLayout = ({ sidebar, main }: Props) => {
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_WIDTH);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const onMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - startX;
      const newWidth = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, startWidth + delta));
      setSidebarWidth(newWidth);
    };

    const onMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, [sidebarWidth]);

  return (
    <div
      ref={containerRef}
      className="sp-body"
    >
      <div style={{ width: sidebarWidth, minWidth: sidebarWidth, flexShrink: 0 }}>
        {sidebar}
      </div>

      {/* Drag Handle */}
      <div
        onMouseDown={onMouseDown}
        style={{
          width: "4px",
          flexShrink: 0,
          cursor: isDragging ? "grabbing" : "grab",
          borderRadius: "2px",
          background: "transparent",
          transition: "background 0.15s",
          position: "relative",
          zIndex: 10,
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "#555")}
        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
      />

      <div style={{ flex: 1, minWidth: 0, minHeight: 0, height: '100%', overflow: 'auto' }}>
        {main}
      </div>
    </div>
  );
};

export default ResizableLayout;