import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Values from "./components/Values";
import Cta from "./components/Cta";

function App() {
  return (
    <Layout>
        <Hero />
        <Features />
        <Values />
        <Cta />
    </Layout>
  );
}

export default App;
