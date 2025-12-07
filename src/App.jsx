import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Work from "./Components/Work/Work";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import YallaGrowProject from "./Components/YallaGrowProject/YallaGrowProject";
import FreshCartProject from "./Components/FreshCartProject/FreshCartProject";
import CoursesProject from "./Components/CoursesProject/CoursesProject";
import RozaProject from "./Components/RozaProject/RozaProject";
import PrintInProject from "./Components/PrintInProject/PrintInProject";
import WardrobeProject from "./Components/WardrobeProject/WardrobeProject";
import EtmannaRunningProject from "./Components/EtmannaRunningProject/EtmannaRunningProject";
import Loading from "./Components/Loading/Loading";
import DanielsProject from "./Components/DanielsProject/DanielsProject";
import OilProject from "./Components/OilProject/OilProject";
import BakeryProject from "./Components/BakeryProject/BakeryProject";
import JewelryProject from "./Components/JewerlyProject/JewerlyProject";
import ArtProject from "./Components/ArtProject/ArtProject";
import EwanProject from "./Components/EwanProject/EwanProject";
import MejazProject from "./Components/MejazProject/MejazProject";
import AllamProject from "./Components/AllamProject/AllamProject";
import AlradoonProject from "./Components/AlradoonProject/AlradoonProject";
import ConcordProject from "./Components/ConcordProject/ConcordProject";
import ElsaferProject from "./Components/ElsaferProject/ElsaferProject";
import StartUpProject from "./Components/StartUpProject/StartUpProject";

gsap.registerPlugin(ScrollTrigger);

function LenisWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}

function App() {
  const [loading, setLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "work", element: <Work /> },
        { path: "freshcart", element: <FreshCartProject /> },
        { path: "yallagrow", element: <YallaGrowProject /> },
        { path: "Courses", element: <CoursesProject /> },
        { path: "roza", element: <RozaProject /> },
        { path: "print-in", element: <PrintInProject /> },
        { path: "Wardrobe", element: <WardrobeProject /> },
        { path: "etmanna-running", element: <EtmannaRunningProject /> },
        { path: "daniels", element: <DanielsProject /> },
        { path: "princess-natural", element: <OilProject /> },
        { path: "bakery", element: <BakeryProject /> },
        { path: "jewerly-art", element: <JewelryProject /> },
        { path: "art-elegancy", element: <ArtProject /> },
        { path: "ewan-el-hegaz", element: <EwanProject /> },
        { path: "Mejaz", element: <MejazProject /> },
        { path: "allam-el-basher", element: <AllamProject /> },
        { path: "alradoon", element: <AlradoonProject /> },
        { path: "concord", element: <ConcordProject /> },
        { path: "elsafer", element: <ElsaferProject /> },
        { path: "start-up", element: <StartUpProject /> },
      ],
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LenisWrapper>
      {loading && <Loading />}
      {!loading && <RouterProvider router={router} />}
    </LenisWrapper>
  );
}

export default App;
