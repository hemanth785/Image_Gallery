import './App.css';
import Gallery from './components/Gallery';
import Insert from './components/Insert';
import ImageDetail from './components/ImageDetail';
import 'antd/dist/antd.css';
import {Switch, Route} from 'react-router-dom';

export const config = {
  endpoint: `https://gallery-h-api.herokuapp.com/api`, // update api endpoint here.
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Gallery />
        </Route>
        <Route exact path='/new'>
          <Insert />
        </Route>
        <Route path='/show'>
          <ImageDetail />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
