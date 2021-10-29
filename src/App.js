import GameList from './components/GameList' 
import PlatformList from './components/PlatformListRest';
import './App.css';

function App(props) {
  return (
  <>
  <h3>Video Game Reference List</h3>
  <GameList/>
  <PlatformList/>
  </>
  )
}
//
export default App;
