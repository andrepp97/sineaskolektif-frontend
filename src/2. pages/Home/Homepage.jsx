import React, { Component } from 'react';
import '../../3. assets/styles/components.css';

// IMPORT COMPONENTS //
import Jumbotron from './Home-Components/Jumbotron';
import Campaigns from './Home-Components/Campaign';
import StartNow from './Home-Components/StartNow';

class Homepage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div className='pb-5 background-home'>

                <Jumbotron />

                <Campaigns />

                <StartNow />
                
            </div>
        );
    }
}

export default Homepage;