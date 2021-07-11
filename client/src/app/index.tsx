/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { GlobalStyle } from 'styles/global-styles';
import * as Pages from './pages';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

const client = new ApolloClient({
  uri: 'http://localhost:8001/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
});

export function App() {
  const { i18n } = useTranslation();
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Pages.ControlPage} />
          <Route exact path="/add/:id" component={Pages.AddRouter} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </ApolloProvider>
  );
}
