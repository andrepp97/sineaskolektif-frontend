import React, { Component } from 'react';
import Axios from 'axios';
import { MDBAnimation } from 'mdbreact';

// HELPER
import { urlAPI } from '../../5. helper/database';

// IMPORT COMPONENTS //
import Jumbotron from './Home-Components/Jumbotron';
import Campaigns from './Home-Components/Campaign';
import StartNow from './Home-Components/StartNow';
import Pollings from './Home-Components/Polling';

class Homepage extends Component {
    state = {
        campaignData: [],
        pollingData: []
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

    getNewPollings = () => {
        Axios.get(urlAPI + '/polling/getNewPolling')
            .then(res => {
                this.setState({ pollingData: res.data })
            })
            .catch(err => {
                console.log(err.response)
            })
    }
    // GET DATA


    // LIFECYCLE
    componentDidMount() {
        this.getNewCampaigns()
        this.getNewPollings()
    }
    // LIFECYCLE

    
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

                {/* DIVIDER */}
                <div className='container px-sm-5'>
                    <hr className="my-0" />
                    <hr className="my-0" />
                </div>
                {/* DIVIDER */}

                <Pollings data={this.state.pollingData} />
                
            </div>
        );
    }
}

export default Homepage;