import ClientLayout from "../../components/Layout/client";
import Hero from "../../components/Home/hero";
import Features from "../../components/Home/features";
import Steps from "../../components/Home/steps";
import Demos from "../../components/Home/demos";
import Contact from "../../components/Home/contact";

export default function Home() {
  return (
    <ClientLayout>
      <Hero />
      <Features />
      <Steps />
      <Demos />
      <Contact />
    </ClientLayout>
  )
}
