import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

//COMPONENTS
import Home from './components/Home'
import Artiste from './components/Artiste'

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/artiste/:artisteId" component={Artiste} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))