import React from 'react' ; 
import './App.css'
//import Component
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import Navbar from './component/Navbar';

// Routing Imports 
import {Route , Switch} from 'react-router-dom' ;


const App = function App() {
    return(
        <div className='app' >
        <Navbar />
        <Switch >
            <Route exact path ="/" component ={Home} />
            <Route exact path ="/rooms" component ={Rooms} />
            <Route exact path ="/:id" component ={SingleRoom} />
                {/* in Case Nothing Match Do That--> */}
            <Route component ={Error} />
        </Switch>    
        </div>
    )
}
export default App ;