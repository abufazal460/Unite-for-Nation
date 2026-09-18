// Desktop (large / wide-crop) sources
import heroDesktop1 from "../assets/works/work1.png";
import heroDesktop2 from "../assets/works/work2.jpeg";

// Mobile (tall / portrait-crop) sources — used for phones & tablets
// in both portrait and landscape orientation (breakpoint-based switch,
// not orientation-based, so rotating the phone doesn't swap images).
import heroMobile1 from "../assets/works/work1.png";
import heroMobile2 from "../assets/works/work2.jpeg";

export const hero = {
  // Breakpoint at which the desktop image takes over from the mobile
  // image. Kept in one place so HeroSection.jsx and this file always
  // agree — change it here only.
  desktopBreakpoint: "768px",

  images: [
    {
      id: "hero-slide-1",
      desktopSrc: heroDesktop1,
      mobileSrc: heroMobile1,
      alt: "Unite For Nation registration certificate confirming legal NGO status",
    },
    {
      id: "hero-slide-2",
      desktopSrc: heroDesktop2,
      mobileSrc: heroMobile2,
      alt: "Unite For Nation legal aid team supporting a wrongfully accused case",
    },
  ],
};