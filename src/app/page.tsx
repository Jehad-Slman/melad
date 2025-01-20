
import Header from "@/components/Header";
import styles from "./page.module.css";
import LandPage from "@/components/LandPage";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header/>
      <LandPage/>
      <Services/>
      <About/>
      <Contact/>
    </main>
  );
}
