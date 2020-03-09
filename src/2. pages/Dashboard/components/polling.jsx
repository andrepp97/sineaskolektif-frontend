import React, { Component } from 'react';
import moment from 'moment';
import Axios from 'axios';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { urlAPI } from '../../../5. helper/database';

class Polling extends Component {
    state = {
        isLoading: false,
        pollingData: []
    }


    // GET DATA
    getPolling = () => {
        this.setState({ isLoading: true })
        Axios.get(urlAPI + '/polling/getPollingByUser', {
            params: {
                id: this.props.uid
            }
        }).then(res => {
            this.setState({ pollingData: res.data, isLoading: false })
        }).catch(err => {
            console.log(err.response)
            this.setState({ isLoading: false })
        })
    }


    // LIFECYCLE
    componentDidMount() {
        this.getPolling()
    }


    // RENDERS
    renderPolling = () => {
        return this.state.pollingData.map((val, idx) => {
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{val.polling_title}</td>
                    <td>{moment(val.start_date).format('LL')}</td>
                    <td>{moment(val.end_date).format('LL')}</td>
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
        if (this.state.isLoading) {
            return (
                <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '25vh' }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        return (
            <div className="minheight50 py-4">

                <h4 className="h4-responsive mb-3">POLLING KAMU</h4>

                <div className="row">
                    <div className="col-auto">

                        <div className="card px-4 pt-3">
                            <table className="table table-hover table-responsive">
                                <thead>
                                    <tr>
                                        <th className="font-weight-bold">#</th>
                                        <th className="font-weight-bold">Polling</th>
                                        <th className="font-weight-bold">Tgl Mulai</th>
                                        <th className="font-weight-bold">Tgl Selesai</th>
                                        <th className="font-weight-bold">Status</th>
                                        <th className="font-weight-bold text-center">Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderPolling()}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default Polling;