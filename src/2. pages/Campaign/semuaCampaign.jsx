import React, { Component } from 'react';
import Axios from 'axios';
import { MDBAnimation } from 'mdbreact';
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
            <MDBAnimation type="fadeIn" className="bg-home">

                {/* FILTER */}
                <div className="campaign-filter">
                    <div className="campaign-filter-inputs text-center">
                        <h3 className="h3-responsive border-bottom mb-4 pb-4">
                            Cari Kolaborasi Karya Favoritmu
                        </h3>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="kategori-campaign">Kategori</label>
                                <select id="kategori-campaign" className="custom-select pointer-cursor">
                                    <option value="" disabled>
                                        -- Pilih Kategori --
                                    </option>
                                    <option value={1}>Semua</option>
                                    <option value={2}>Film</option>
                                    <option value={3}>Film Pendek</option>
                                    <option value={4}>Film Dokumenter</option>
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="sort-campaign">Sortir</label>
                                <select id="sort-campaign" className="custom-select pointer-cursor">
                                    <option value="" disabled>
                                        -- Sortir --
                                    </option>
                                    <option value={1}>Semua</option>
                                    <option value={2}>Terbaru</option>
                                    <option value={3}>Terpopuler</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="container py-5">
                    {
                        this.state.isLoading
                        ? <Loader />
                        : <div className="row justify-content-center">
                            {this.renderAllCampaign()}
                        </div>
                    }
                </div>

            </MDBAnimation>
        );
    }
}

export default SemuaCampaign;