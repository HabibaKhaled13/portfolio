import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../../assets/logo.png";

export default function Loading() {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const logoEl = logoRef.current;

    if (!loader || !logoEl) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    gsap.set(loader, { clipPath: "circle(100% at 50% 50%)", backgroundColor: "#0F1014" });

 
    tl.fromTo(logoEl, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.8 });


    tl.to(logoEl, { opacity: 0, scale: 0.95, duration: 0.8 }, "-=0.3");


    tl.to(loader, { clipPath: "circle(0% at 50% 50%)", duration: 1 }, "-=0.6");

    tl.set(loader, { display: "none" });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-[#0F1014] flex items-center justify-center"
      style={{ clipPath: "circle(100% at 50% 50%)" }}
    >
      <img ref={logoRef} src={logo} alt="Logo" className="w-[110px] h-auto" />
    </div>
  );
}
