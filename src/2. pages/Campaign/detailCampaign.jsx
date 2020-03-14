import React, { Component } from 'react';
import Axios from 'axios';
import moment from 'moment';
import { MDBIcon, MDBBtn } from 'mdbreact';
import { urlAPI } from '../../5. helper/database';

// IMPORT COMPONENTS
import UserCard from '../../1. components/UserCard';
import Loader from '../../1. components/Loader';

class DetailCampaign extends Component {
    state = {
        isLoading: false,
        campaignData: {}
    }

    // GET DATA
    getDetailCampaign = () => {
        const idCampaign = this.props.match.params.id
        this.setState({ isLoading: true })
        Axios.get(urlAPI + '/campaign/getCampaignById', {
            params: {
                id: idCampaign
            }
        }).then(res => {
            console.log(res.data)
            this.setState({ campaignData: res.data, isLoading: false })
        }).catch(err => {
            console.log(err.response)
            this.setState({ isLoading: false })
        })
    }
    // GET DATA

    // LIFECYCLE
    componentDidMount() {
        this.getDetailCampaign()
        window.scrollTo(0, 0)
    }
    // LIFECYCLE

    // MAIN RENDER
    render() {
        const { campaignData, isLoading } = this.state

        if (isLoading) {
            return <Loader />
        }

        return (
            <div className="page-padding bg-home">
                <div className="container px-3 px-sm-5">

                    <div className="row">

                        {/* CAMPAIGN IMAGE */}
                        <div className="col-lg-6 mb-4">
                            <img
                                className="img-fluid shadow rounded"
                                src={urlAPI + this.state.campaignData.image}
                                alt={campaignData.title}
                            />
                        </div>
                        {/* CAMPAIGN IMAGE */}

                        {/* CAMPAIGN INFORMATION */}
                        <div className="col-lg-6">
                            <h2 className="h2-responsive opacity-80">{campaignData.title}</h2>
                            <p className="opacity-70 mt-3">
                                {campaignData.description}
                            </p>
                            <hr className="my-4" />
                            <div className="row">
                                <div className="col-6">
                                    <UserCard user={{ id: campaignData.idUser, username: campaignData.username}} />
                                </div>
                                <div className="col-6">
                                    <div className="card card-detail pl-4 pr-3 py-2">
                                        <span className="opacity-80">Tanggal Rilis</span>
                                        <div className="d-flex align-items-center mt-3 mb-1">
                                            <MDBIcon far icon="calendar-check" size="lg" />
                                            <small className="font-weight-bold ml-2">
                                                {moment(campaignData.release_date).format('LL')}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="card card-detail pl-4 pr-3 py-3">
                                        <div className="d-flex align-items-center">
                                            <MDBIcon far icon="clock" size="lg" />
                                            <small className="font-weight-bold ml-1">
                                                Berakhir {moment(campaignData.end_date, "YYYYMMDD").fromNow()}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* CAMPAIGN INFORMATION */}

                    </div>

                    {/* CAMPAIGN FOOTER */}
                    <div className="row mt-5">
                        <div className="col-12 d-flex justify-content-center">
                            <MDBBtn color="indigo">
                                <MDBIcon icon="money-bill-wave-alt" />
                                <span className="ml-2">Donasi</span>
                            </MDBBtn>
                        </div>
                    </div>
                    {/* CAMPAIGN FOOTER */}

                </div>
            </div>
        );
    }
}

export default DetailCampaign;