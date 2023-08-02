import { LandingContent } from "@/components/landing-content";
import { LandingFeature } from "@/components/landing-feature";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingFeature />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
