import { useEffect, useState } from "react";
import { LYNCDesktop } from "./pages/LYNCDesktop";
import { LYNCTablet } from "./pages/LYNCTablet";
import { LYNCMobile } from "./pages/LYNCMobile";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full h-full">
      {screenSize < 431 && <LYNCMobile />}
      {screenSize >= 431 && screenSize <= 912 && <LYNCTablet />}
      {screenSize > 912 && <LYNCDesktop />}
    </div>
  );
}
export default App;