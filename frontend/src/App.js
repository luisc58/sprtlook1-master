import React, { Component } from 'react';
import Router from './Router';
import Header from './components/Header';
import Home_1 from './components/Home_1';
import Home_2 from './components/Home_2';
import Home_3 from './components/Home_3';
import Home_4 from './components/Home_4';
import Home_5 from './components/Home_5';
import Home_6 from './components/Home_6';
import './styles/app.css';

class App extends Component {
    render() {
        return (
            <div className="app-container">
              <div className="section-1">
                <Header />
                <Routes />
              </div>
              <div className="section-2">
                <Home_1 />
              </div>
              <div className="section-3">
                <Home_2 />
              </div>
              <div className="section-4">
                <Home_3/>
                <Home_4 />
              </div>
              <div className="section-5">
                <Home_5 />
              </div>
             <div className="section-6">
               <Home_6 />
             </div>
          </div>
        );
    }
}

export default App;
