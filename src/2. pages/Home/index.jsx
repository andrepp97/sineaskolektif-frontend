import React, { Component } from 'react';

// IMPORT COMPONENTS //
import Jumbotron from './Home-Components/Jumbotron';
import Campaigns from './Home-Components/Campaign';
import StartNow from './Home-Components/StartNow';
// IMPORT COMPONENTS //

class Homepage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div className='pb-5 bg-home'>

                <Jumbotron />

                {/* DIVIDER */}
                <div className='container px-sm-5'>
                    <hr className="my-0" />
                    <hr className="my-0" />
                </div>
                {/* DIVIDER */}

                <Campaigns />

                {/* DIVIDER */}
                <div className='container px-sm-5'>
                    <hr className="my-0" />
                    <hr className="my-0" />
                </div>
                {/* DIVIDER */}

                <StartNow />
                
            </div>
        );
    }
}

export default Homepage;