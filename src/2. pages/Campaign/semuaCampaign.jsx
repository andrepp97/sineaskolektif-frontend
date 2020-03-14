import React, { Component } from 'react';
import Axios from 'axios';
import { urlAPI } from '../../5. helper/database';

// IMPORT COMPONENTS
import CampaignCard from '../../1. components/CampaignCard';
import Loader from '../../1. components/Loader';


class SemuaCampaign extends Component {
    state = {
        isLoading: false,
        campaignData: []
    }

    // GET DATA
    getAllCampaign = () => {
        this.setState({ isLoading: true })
        Axios.get(urlAPI + '/campaign/getAllCampaign')
            .then(res => {
                // console.log(res.data)
                this.setState({ campaignData: res.data, isLoading: false })
            })
            .catch(err => {
                console.log(err.response)
                this.setState({ isLoading: false })
            })
    }
    // GET DATA

    // LIFECYCLE
    componentDidMount() {
        window.scrollTo(0,0)
        this.getAllCampaign()
    }
    // LIFECYCLE

    // RENDERS
    renderAllCampaign = () => {
        return this.state.campaignData.map((campaign,idx) => {
            return <CampaignCard data={campaign} key={idx} />
        })
    }
    // RENDERS

    // MAIN RENDER
    render() {
        return (
            <div className="page-padding">
                <div className="container px-3 px-sm-5">

                    <div
                        className="position-absolute d-flex justify-content-center align-items-center"
                        style={{ top: 0, left: 0, right: 0, minHeight: '50vh', background: '#EDEDED' }}
                    >
                        <div className="text-center px-3">
                            <h4 className="h4-responsive mb-4">Cari Campaign Yang Menarik</h4>
                            <select id="sort-campaign" className="custom-select shadow rounded-pill px-3" style={{ cursor:'pointer' }}>
                                <option value="" defaultChecked hidden>Urutkan Campaign</option>
                                <option value="terbaru">Terbaru</option>
                                <option value="populer">Terpopuler</option>
                                <option value="progress">Progress</option>
                            </select>
                        </div>
                    </div>

                    {
                        this.state.isLoading
                        ?
                            <Loader />
                        :
                            <div className="row px-2 px-sm-0" style={{ marginTop: '30vh' }}>
                                {this.renderAllCampaign()}
                            </div>
                    }

                </div>
            </div>
        );
    }
}

export default SemuaCampaign;