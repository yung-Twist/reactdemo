import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import About from './components/about';
import CC from './components/cc';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
ReactDOM.render((
    <Router>
        <Route path='/' component={App} />
    </Router>
), document.getElementById('root'));

// ReactDOM.render(<Home />, document.getElementById('root'))