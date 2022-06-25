import React from 'react';
import { Switch } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';
import Home from './pages/Home/Index';

import SignIn from "./pages/SignIn";
import './styles/main.scss';
import PrivateRotue from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/SignIn">
          <SignIn />
        </PublicRoute>
        <PrivateRotue path="/">
          <Home />
        </PrivateRotue>
      </Switch>
    </ProfileProvider>
  );
}

export default App;