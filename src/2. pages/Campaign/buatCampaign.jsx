import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';
import { urlAPI } from '../../5. helper/database';
import { MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';

class BuatCampaign extends Component {
    state = {
        agree: false,
        errorText: '',
        saveLoading: false,
        campaignTitle: '',
        campaignDesc: '',
        start: '',
        end: '',
        release: ''
    }

    // CHECK INPUTS
    validateInput = () => {
        let err = ''

        if (this.state.release === '') {
            this.setState({ errorText: 'Tanggal Rilis Tidak Boleh Kosong!' })
            err = 'error'
        }
        if (this.state.end === '') {
            this.setState({ errorText: 'Tanggal Selesai Tidak Boleh Kosong!' })
            err = 'error'
        }
        if (this.state.start === '') {
            this.setState({ errorText: 'Tanggal Mulai Tidak Boleh Kosong!' })
            err = 'error'
        }
        if (this.state.campaignDesc === '') {
            this.setState({ errorText: 'Deskripsi Campaign Harus Diisi!' })
            err = 'error'
        }
        if (this.state.campaignTitle === '') {
            this.setState({ errorText: 'Judul Campaign Harus Diisi!' })
            err = 'error'
        }

        if (err) {
            return false
        } else {
            err = ''
            this.setState({ errorText: '' })
            return true
        }
    }

    // SAVE USER CAMPAIGN
    saveCampaign = () => {
        let val = this.validateInput()
        console.log(val)
        if (val) {

            this.setState({ saveLoading: true })

            Axios.post(urlAPI + '/campaign/buatCampaign', {
                idUser: this.props.id,
                title: this.state.campaignTitle,
                description: this.state.campaignDesc,
                start_date: this.state.start,
                end_date: this.state.end,
                release_date: this.state.release
            }).then(res => {
                console.log(res.data)
                this.setState({ saveLoading: false })
            }).catch(err => {
                console.log(err.response)
                this.setState({ saveLoading: false })
            })

        }
    }

    // MAIN RENDER
    render() {
        if (!this.props.username) {
            return <Redirect to='/' />
        }
        
        return (
            <div className="page-padding">
                <div className="container-fluid px-3 px-sm-5">

                    <div className="row">

                        <MDBCol lg="8">

                            <h2 className="h2-responsive">Buat Campaign</h2>

                            {
                                this.state.errorText
                                ?
                                    <div className="alert alert-danger animated fadeIn my-3">
                                        {this.state.errorText}
                                    </div>
                                :
                                    null
                            }

                            <div className="form-group">
                                <MDBInput
                                    outline
                                    type="text"
                                    label="Judul Campaign"
                                    className="shadow-sm"
                                    onChange={(e) => this.setState({ campaignTitle: e.target.value })}
                                />
                                <MDBInput
                                    outline
                                    type="textarea"
                                    rows="5"
                                    label="Deskripsi Campaign"
                                    className="rounded shadow-sm"
                                    onChange={(e) => this.setState({ campaignDesc: e.target.value })}
                                />

                                <div className="form-row">
                                    <div className="col">
                                        <MDBInput outline type="date" label="Tanggal Mulai" onChange={(e) => this.setState({ start: e.target.value })} />
                                    </div>
                                    <div className="col">
                                        <MDBInput outline type="date" label="Tanggal Selesai" onChange={(e) => this.setState({ end: e.target.value })} />
                                    </div>
                                </div>

                                <MDBInput outline type="date" label="Tanggal Rilis" onChange={(e) => this.setState({ release: e.target.value })} />
                            </div>

                        </MDBCol>

                        <MDBCol lg="4" className="mt-4 mt-lg-0">
                            
                            <div className="card mb-5">
                                <div className="card-body">
                                    <div className="text-center font-weight-bold mb-3">
                                        Tips Agar Campaignmu Diterima
                                    </div>
                                    <hr/>
                                    <p style={{color:'#515151'}}>1. Pastikan konten tidak mengandung SARA.</p>
                                    <p style={{color:'#515151'}}>2. Informasi yang diberikan lengkap dan mudah dimengerti.</p>
                                    <p style={{color:'#515151'}}>3. Pastikan deskripsi campaign jelas, sehingga mudah ditemukan oleh donatur.</p>
                                </div>
                            </div>
                            
                            <div>
                                <MDBBtn outline color="elegant" className="btn-block mb-4">
                                    <MDBIcon icon="times" />
                                    <span className="ml-2">CANCEL</span>
                                </MDBBtn>
                                {
                                    this.state.saveLoading
                                    ?
                                        <MDBBtn color="indigo" className="btn-block mb-4" disabled>
                                            <div className="spinner-border spinner-border-sm" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            <span className="ml-2">SAVE</span>
                                        </MDBBtn>
                                    :
                                        <MDBBtn color="indigo" className="btn-block mb-4" onClick={this.saveCampaign}>
                                            <MDBIcon icon="check" />
                                            <span className="ml-2">SAVE</span>
                                        </MDBBtn>
                                }
                                <MDBBtn color="dark-green" className="btn-block mb-4" disabled={!this.state.agree}>
                                    <MDBIcon icon="paper-plane" />
                                    <span className="ml-2">SUBMIT</span>
                                </MDBBtn>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="agreement" onChange={() => this.setState({agree: !this.state.agree})} />
                                    <label className="custom-control-label font-small" htmlFor="agreement">
                                        Saya setuju dengan <span className="text-primary">syarat & ketentuan</span> yang berlaku di Sineas Kolektif
                                    </label>
                                </div>
                            </div>

                        </MDBCol>

                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = ({userData}) => {
    return {...userData}
}

export default connect(mapStateToProps)(BuatCampaign);