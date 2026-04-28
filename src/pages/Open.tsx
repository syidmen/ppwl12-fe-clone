import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import BottomBanner from "../components/BottomBanner";

function Open() {
  return (
    <div className="sp-layout">
      <Header />
      <div className="sp-body">
        <Sidebar />
        <MainContent />
      </div>
      <BottomBanner />
    </div>
  );
}

export default Open;