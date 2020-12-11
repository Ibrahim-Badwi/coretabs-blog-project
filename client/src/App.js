import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

import InfoBar from './components/InforBar';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const Home = () => (
  <div>
    {' '}
    <h2>TKTL notes app</h2>{' '}
  </div>
);

const Notes = () => (
  <div>
    {' '}
    <h2>Notes</h2>{' '}
  </div>
);

const Users = () => (
  <div>
    {' '}
    <h2>Users</h2>{' '}
  </div>
);

function App() {
  return (
    <div>
      <div className="container-lg debug">
        {/* <InfoBar /> */}
        <Navigation />
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

function App2() {
  const padding = {
    padding: 5,
  };

  return (
    <BrowserRouter>
      <div>
        <div>
          <Link style={padding} to="/">
            home
          </Link>
          <Link style={padding} to="/notes">
            notes
          </Link>
          <Link style={padding} to="/users">
            users
          </Link>
        </div>
        <Switch>
          <Route path="/notes">
            <Notes />
            {console.log('ok')}
          </Route>
          <Route path="/users">
            <Users />
            {console.log('ok')}
          </Route>
          <Route path="/">
            <Home />
            {console.log('ok')}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;