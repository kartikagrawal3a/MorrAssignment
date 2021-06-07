import React from 'react';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Movies from './Components/Movies';
import Series from './Components/Series';
import ErrorPage from './Components/ErrorPage';

const App = () => {
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path = "/" component={Home} />
                    <Route exact path = "/movies" component={Movies} />
                    <Route exact path = "/series" component={Series} />
                    <Route component={ErrorPage} />
                </Switch>
            </Router>
        </>
    );
}
export default App;