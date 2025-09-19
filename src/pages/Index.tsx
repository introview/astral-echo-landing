import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuoteSection from "@/components/QuoteSection";
import CourseDescription from "@/components/CourseDescription";
import CourseInfo from "@/components/CourseInfo";
import TargetAudience from "@/components/TargetAudience";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main role="main">
        <Hero />
        <QuoteSection />
        <CourseDescription />
        <CourseInfo />
        <TargetAudience />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
