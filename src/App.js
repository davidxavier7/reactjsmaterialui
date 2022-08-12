// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ServicesPage from './pages/Services/services';
import Home from './pages/Home/home';
import ContactPage from './pages/Contact/contact';
import BottomMenu from './components/BottomMenu/menu'

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route path="/servicos" component={ServicesPage} />
        <Route path="/contato" component={ContactPage} />
      </Switch>
      
    </Router>
    <BottomMenu />
    </div>
  );
}

export default App;
