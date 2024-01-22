import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import BreakingNewsAlert from "./components/News/BreakingNewsAlert";
import NewsSection from "./components/News/NewsSection";
import TopStory from "./components/TopStory";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="sm:mx-72 sm:max-w-8xl flex sm:gap-12 flex-col items-center">
        <TopStory
          _id="01"
          byLine="Zahoor Ahmad"
          headline="Cake meme reflects coronavirus absurdity in a world where nothing is what it seems"
          description="Earlier this month, a viral video depicting hyper-realistic cakes as everyday items had folks on social media double-guessing every other post, and sometimes even their own realities, effectively launching the next meme : “Is this real or is this cake?”"
          imageSource="https://static01.nyt.com/images/2024/01/18/multimedia/18iran-missiles-02-hzvj/18iran-missiles-02-hzvj-superJumbo.jpg"
          imageAlternative="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quos?"
          key={1}
          pubishedAt="2024-1-4"
          url="https://www.nytimes.com/2024/01/05/arts/television/nigel-lythgoe-sytycd-judge-sexual-assault.html"
        />
        <BreakingNewsAlert />
        <NewsSection />
      </div>
      <Footer />
    </div>
  );
}
