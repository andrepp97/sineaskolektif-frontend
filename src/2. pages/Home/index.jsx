import React, { Component } from 'react';
import Axios from 'axios';

// HELPER
import { urlAPI } from '../../5. helper/database';

// IMPORT COMPONENTS //
import Jumbotron from './Home-Components/Jumbotron';
import Campaigns from './Home-Components/Campaign';
import StartNow from './Home-Components/StartNow';

class Homepage extends Component {
    state = {
        campaignData: []
    }

    // GET DATA
    getNewCampaigns = () => {
        Axios.get(urlAPI + '/campaign/getNewCampaign')
            .then(res => {
                this.setState({ campaignData: res.data })
            })
            .catch(err => {
                console.log(err.response)
            })
    }


    // LIFECYCLE
    componentDidMount() {
        this.getNewCampaigns()
    }

    
    // MAIN RENDER
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

                <Campaigns data={this.state.campaignData} />

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