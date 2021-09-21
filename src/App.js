import './App.css';
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Weather Application</h1>
       <WeatherSearch />
      </header>
      <footer>
      <p>This website is designed and coded by UX Web and Brand Designer <a href="https://www.linkedin.com/in/tiffanylmackay/" target="_blank" rel="noreferrer">Tiffany Mackay</a>, and is <a href="https://github.com/tiffanymackay/weather-react" target="_blank" rel="noreferrer">open-sourced</a>.</p>
      <small class="text-center">© 2021 Tiffany Mackay</small>
      </footer>
    </div>
  );
}

export default App;
