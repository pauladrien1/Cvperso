import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './pages/home';
import knowledges from './pages/knowledges';
import contact from './pages/contact';
import notfound from './pages/notfound';
import portfolio from './pages/portfolio';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={home} />
        <Route path="/competences" component={knowledges} />
        <Route path="/portfolio" component={portfolio} />
        <Route path="/contact" component={contact} />
        <Route component={notfound} />

      </Switch>
    </BrowserRouter>
    </>
  );
};

export default App;