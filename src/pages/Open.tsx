import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import BottomBanner from "../components/BottomBanner";
import ResizableLayout from "../components/ResizeableLayout";

function Open() {
  return (
    <div className="sp-layout">
      <Header />
      {/* Ganti sp-body div biasa dengan ResizableLayout */}
      <ResizableLayout
        sidebar={<Sidebar />}
        main={<MainContent />}
      />
      <BottomBanner />
    </div>
  );
}

export default Open;