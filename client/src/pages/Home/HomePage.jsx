import IndexVideo from "./IndexVideo";
import SearchSection from './SearchSection';
import PopularDestinations from "./PopularDestinations";
import Destinations from "./Destinations";
import Feedback from "./Feedback";
import Posts from "./Posts";

const HomePage = () => {
  return (
    <>
      <IndexVideo />
      <SearchSection />
      <PopularDestinations />
      <Destinations />
      <Feedback />
      <Posts />
    </>
  )
}

export default HomePage