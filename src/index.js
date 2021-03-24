import React from 'react';
import ReactDOM from 'react-dom';
import RedditApp from './pages/RedditApp';
import SeasonApp from './pages/SeasonApp';
import AnimeDetail from './pages/AnimeDetail';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path="/" component={SeasonApp} />
            <Route exact path="/reddit" component={RedditApp} />
            <Route exact path="/watched-anime" component={SeasonApp} />
            <Route exact path="/anime/:id" component={AnimeDetail} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
