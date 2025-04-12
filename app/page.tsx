import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Logos />
      <Container>

      <Section
          id="process"
          title="How It Works"
          description="Pick your tree, schedule delivery, and we’ll bring it to your door—just decorate and enjoy!"
        >

          <Benefits />

        </Section>
        
        <Section
          id="why"
          title="Why Choose a Christmas Tree from Us?"
          description="When it comes to holiday cheer, nothing beats the charm of a real Christmas tree. Here are just a few reasons why ordering your tree from us is the best choice:"
        >

          <Testimonials />

        </Section>

        <Section
          id="gallery"
          title="Gallery"
          description="Discover the beauty of our trees through this stunning photo collection, showcasing nature’s strength and charm."
        >

          <Pricing />

        </Section>

       

        <FAQ />

        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
