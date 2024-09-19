import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Brands from "@/components/Brands";
import CallToAction from "@/components/Home/CallToAction";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import Team from "@/components/Team";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `koplicowork - Coworking Space in Põhja-Tallinn`,
  description: "koplicowork - Coworking Space in Põhja-Tallinn",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Pricing />
      <About />

    {/* ---------------------------------------------------------------
      <Features />
      <Team />
      <Testimonials />
      <Brands />
      <HomeBlogSection />
      <Support />
      <CallToAction /> */}
    </>
  );
}
