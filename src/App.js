// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ServicesPage from './pages/Services/services';
import Home from './pages/Home/home';
import ContactPage from './pages/Contact/contact';
import BottomMenu from './components/BottomMenu/menu'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
    <Container maxWidth="lg"> 
    <Grid Container spacing={3} alignItems="stretch">
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route path="/servicos" component={ServicesPage} />
        <Route path="/contato" component={ContactPage} />
      </Switch>
      
    </Router>
    <Grid item xs={12} sm={4}>
    <BottomMenu />
    </Grid>
    <Grid item xs={12} sm={4}>
    <Typography variant="h5" component="h3">
              Visit the Best Spots
            </Typography>
    </Grid>
    </Grid>
    </Container>
    </div>
  );
}

export default App;
