import './App.css';
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
        <Route exact path="/" component={() => <Home />} />
        <Route path="/add" component={() => <AddContact />} />
        <Route path="/edit/:id" component={() => <EditContact />} />
      </Switch>
    </div>
  );
}

export default App;
