import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CourseDescription from "@/components/CourseDescription";
import CourseInfo from "@/components/CourseInfo";
import TargetAudience from "@/components/TargetAudience";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <CourseDescription />
      <CourseInfo />
      <TargetAudience />
      <About />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Index;
