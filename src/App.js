import About from "./Components/About/About";
import ArticleSection from "./Components/ArticleSection/ArticleSection";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";


function App () {
  return (
    <div className=" container mx-auto">

      <HeroSection />
      <About />
      <ArticleSection />
      <Footer />
    </div>
  );
}

export default App;
