import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import LocomotiveScroll from 'locomotive-scroll';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

function App() {
  useEffect(() => {
    // Initialize Locomotive Scroll globally (v5 uses native scrolling and works perfectly with GSAP)
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
      }
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default App;