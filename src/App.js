import Card from "./Components/Card";
import Campaigns from "./Components/Campaigns";
import Categories from "./Components/Categories";
import Favorites from "./Components/Favorites";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import MobileApp from "./Components/MobileApp";
import { useWindowSize } from 'react-use';


function App() {
  const { width } = useWindowSize();
  return (
    <div className="App">
      <Header></Header>
      {width <= 768 ? <Campaigns></Campaigns> : null}
      <HeroSection></HeroSection>
      <Categories></Categories>
      {width > 768 ? <Campaigns></Campaigns> : null}

      <div className="container mx-auto">
        <Favorites></Favorites>
        <MobileApp></MobileApp>
        <Card></Card>
        <Footer></Footer>
      </div>


    </div>
  );
}

export default App;
