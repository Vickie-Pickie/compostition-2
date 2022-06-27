import TabsList from "./TabsList";
import CurrenciesList from "./CurrenciesList";
import SideWidget from "./SideWidget";
import Logo from "./Logo";
import MenuList from "./MenuList";
import SearchForm from "./SearchForm";
import Banner from "./Banner";
import WeatherWidget from "./WeatherWidget";
import VisitedWidget from "./VisitedWidget";
import TVguideWidget from "./TVguideWidget";
import OnlineWidget from "./OnlineWidget";

function App() {
  return (
    <>
      <div>
        <div>
          <TabsList />
          <NewsList />
          <CurrenciesList />
        </div>
        <SideWidget icon="http://..." title="Работа над ошибками" text="какой-то текст"/>
      </div>
      <div>
        <Logo />
        <div>
          <MenuList />
          <SearchForm />
        </div>
      </div>
      <Banner link="..."/>
      <div>
        <WeatherWidget icon="..." temp=".." tempDay=".." tempMorning=".."/>
        <VisitedWidget title="..." visitedList={[{},{}]}/>
        <TVguideWidget title="..." tvProgramList={[{},{}]}/>
        <OnlineWidget title="..." onlineList={[{},{}]}/>
      </div>
    </>
  );
}

export default App;
