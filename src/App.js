import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router-dom';
import Signin from './Pages/Signin';
import Home from './Pages';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <Signin />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
