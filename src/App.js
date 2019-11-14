import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ContentWrapper from './components/ContentWrapper';
import Login from './screens/Login'
import Products from './screens/Products'
import Users from './screens/Users'
import Register from './screens/Register'
import { ApolloProvider } from 'react-apollo';
import { client } from './graphql/client';

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <Switch>
          <Route path="/users">
              <ContentWrapper>
                <Users />
              </ContentWrapper>
            </Route>
          <Route path="/products">
              <ContentWrapper>
                <Products />
              </ContentWrapper>
            </Route>
          <Route path="/home">
              <ContentWrapper>

              </ContentWrapper>
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
