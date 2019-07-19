import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const NotesPage = loadable(() => import('./pages/NotesPage'));
const NotePage = loadable(() => import('./pages/NotePage'));
const AddPage = loadable(() => import('./pages/AddPage'));
const EditPage = loadable(() => import('./pages/EditPage'));
const NotFoundPage = loadable(() => import('./pages/NotFoundPage'));

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={NotesPage} />
            <Route path="/note/:id" render={({ match }) => <NotePage id={match.params.id} />} />
            <Route path="/add" component={AddPage} />
            <Route path="/edit/:id" component={EditPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default App;
