import  React  from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './misc/Login';
import Register from './misc/Register';
import Recomendations from './misc/Recomendations';


function App() {
  return (
    <div className="App">
      <main className="container">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/">
            <Recomendations />
          </Route>

          <Redirect to='/' />
        </Switch>
      </main>
    </div>
  );
}

export default App;
