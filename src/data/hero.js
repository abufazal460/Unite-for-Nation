// Desktop (large / wide-crop) sources
import heroDesktop1 from "../assets/works/work1.webp";
import heroDesktop2 from "../assets/works/Hadis 1.webp";
import heroDesktop3 from "../assets/works/work2.webp";
import heroDesktop4 from "../assets/works/Hadis 2.webp";
import heroDesktop5 from "../assets/works/shlok.webp";

// Mobile (tall / portrait-crop) sources — used for phones & tablets
// in both portrait and landscape orientation (breakpoint-based switch,
// not orientation-based, so rotating the phone doesn't swap images).
import heroMobile1 from "../assets/works/workMobile1.webp";
import heroMobile2 from "../assets/works/Hadis_1_portrait.webp";
import heroMobile3 from "../assets/works/workMobile2.webp";
import heroMobile4 from "../assets/works/Hadis_2_portrait.webp";
import heroMobile5 from "../assets/works/shlok_portrait.webp";

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
    {
      id: "hero-slide-3",
      desktopSrc: heroDesktop3,
      mobileSrc: heroMobile3,
      alt: "Unite For Nation legal aid team supporting a wrongfully accused case",
    },
    {
      id: "hero-slide-4",
      desktopSrc: heroDesktop4,
      mobileSrc: heroMobile4,
      alt: "Unite For Nation legal aid team supporting a wrongfully accused case",
    },
    {
      id: "hero-slide-5",
      desktopSrc: heroDesktop5,
      mobileSrc: heroMobile5,
      alt: "Unite For Nation legal aid team supporting a wrongfully accused case",
    },
  ],
};