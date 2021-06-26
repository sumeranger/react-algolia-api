import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";
import News from "./components/news/News";

export default function App() {
  return (
    <div className="app">
      <h2 className="appTitle">Hacker News Rest API</h2>
      <SearchBar />
      <News />
    </div>
  );
}
