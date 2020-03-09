import React, { Component } from 'react';
import Axios from 'axios';

// HELPER
import { urlAPI } from '../../5. helper/database';
import Loader from '../../1. components/Loader';

// IMPORT COMPONENTS //
import Jumbotron from './Home-Components/Jumbotron';
import Campaigns from './Home-Components/Campaign';
import StartNow from './Home-Components/StartNow';
import Pollings from './Home-Components/Polling';

class Homepage extends Component {
    state = {
        campaignData: [],
        pollingData: [],
        loadingCampaign: false,
        loadingPolling: false
    }

    // GET DATA
    getNewCampaigns = () => {
        this.setState({ loadingCampaign: true })
        Axios.get(urlAPI + '/campaign/getNewCampaign')
            .then(res => {
                this.setState({ campaignData: res.data, loadingCampaign: false })
            })
            .catch(err => {
                console.log(err.response)
                this.setState({ loadingCampaign: false })
            })
    }

    getNewPollings = () => {
        this.setState({ loadingPolling: true })
        Axios.get(urlAPI + '/polling/getNewPolling')
            .then(res => {
                this.setState({ pollingData: res.data, loadingPolling: false })
            })
            .catch(err => {
                console.log(err.response)
                this.setState({ loadingPolling: false })
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

                {
                    this.state.loadingCampaign
                    ?
                        <Loader />
                    :
                        <Campaigns data={this.state.campaignData} />
                }

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


                {
                    this.state.loadingPolling
                    ?
                        <Loader />
                    :
                        <Pollings data={this.state.pollingData} />
                }
                
            </div>
        );
    }
}

export default Homepage;