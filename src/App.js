import NavBar from './navbar';
import {Home} from './home';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <div className="Contents">
        <Home/>
      </div>
    </div>
  );
}

export default App;
