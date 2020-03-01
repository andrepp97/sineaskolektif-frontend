import React, { Component } from 'react';
import moment from 'moment';
import Axios from 'axios';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { urlAPI } from '../../../5. helper/database';

class Campaign extends Component {
    state = {
        campaignData: []
    }


    // GET DATA
    getCampaign = () => {
        Axios.get(urlAPI + '/campaign/getCampaignByUser', {
            params: {
                id: this.props.uid
            }
        }).then(res => {
            this.setState({ campaignData: res.data })
        }).catch(err => {
            console.log(err.response)
        })
    }


    // LIFECYCLE
    componentDidMount() {
        this.getCampaign()
    }


    // RENDERS
    renderCampaign = () => {
        return this.state.campaignData.map((val,idx) => {
            return (
                <tr key={idx}>
                    <td>{idx+1}</td>
                    <td>{val.title}</td>
                    <td>{moment(val.start_date).format('LL')}</td>
                    <td>{moment(val.end_date).format('LL')}</td>
                    <td>{moment(val.release_date).format('LL')}</td>
                    <td>{val.status}</td>
                    <td className="text-center">
                        <MDBBtn color="indigo" className="rounded-circle m-0 py-1 px-2">
                            <MDBIcon icon="eye" />
                        </MDBBtn>
                    </td>
                </tr>
            )
        })
    }


    // MAIN RENDER
    render() {
        return (
            <div className="minheight50 py-4">

                <h4 className="h4-responsive mb-3">CAMPAIGN KAMU</h4>

                <div className="row">
                    <div className="col-auto">

                        <div className="card px-4 pt-3">
                            <table className="table table-hover table-responsive">
                                <thead>
                                    <tr>
                                        <th className="font-weight-bold">#</th>
                                        <th className="font-weight-bold">Campaign</th>
                                        <th className="font-weight-bold">Tgl Mulai</th>
                                        <th className="font-weight-bold">Tgl Selesai</th>
                                        <th className="font-weight-bold">Tgl Rilis</th>
                                        <th className="font-weight-bold">Status</th>
                                        <th className="font-weight-bold text-center">Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderCampaign()}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Campaign;