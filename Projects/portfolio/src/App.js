import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';

function App(){
  return(
    <div className="App">
      <NavBar/>
      <div className="overlay"></div>
      <div className="homeBackground"></div>
        <div className="container">
        <LandingPage/>
    </div>
  </div>
  );
}
export default App;