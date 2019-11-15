import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './screens/Login'
import Products from './screens/Products'
import Users from './screens/Users'
import Dashboard from './screens/Dashboard'
import Register from './screens/Register'
import Home from './components/Home'
import { ApolloProvider } from 'react-apollo'
import { client } from './graphql/client'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Home>
              <Dashboard />
            </Home>
          </Route>
          <Route path="/users">
            <Home>
              <Users />
            </Home>
          </Route>
          <Route path="/products">
            <Home>
              <Products />
            </Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
