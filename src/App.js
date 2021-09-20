import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/Contact-List-Redux" component={() => <Home />} />
        <Route path="/Contact-List-Redux/add" component={() => <AddContact />} />
        <Route path="/Contact-List-Redux/edit/:id" component={() => <EditContact />} />
      </Switch>
    </div>
  );
}

export default App;
