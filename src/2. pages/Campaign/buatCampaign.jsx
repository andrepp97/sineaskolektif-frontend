import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { MDBCol, MDBInput, MDBBtn, MDBIcon, MDBAnimation } from 'mdbreact';

// HELPER
import { urlAPI } from '../../5. helper/database';

// FILEPOND
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);



class BuatCampaign extends Component {
    state = {
        // GENERAL
        agree: false,
        errorText: '',
        isLoading: false,

        // CAMPAIGN DATA
        campaignTitle: '',
        campaignDesc: '',
        start: '',
        end: '',
        release: '',
        files: null
    }


    // LIFECYCLE
    componentDidMount() {
        window.scrollTo(0,0)
    }
    

    // CHECK INPUTS
    validateInput = () => {
        let err = ''

        if (!this.state.files) {
            this.setState({ errorText: 'Gambar Tidak Boleh Kosong!' })
            err = 'error'
        }
        if (!this.state.release) {
            this.setState({ errorText: 'Tanggal Rilis Tidak Boleh Kosong!' })
            err = 'error'
        }
        if (!this.state.end) {
            this.setState({ errorText: 'Tanggal Selesai Tidak Boleh Kosong!' })
            err = 'error'
        }
        if (!this.state.start) {
            this.setState({ errorText: 'Tanggal Mulai Tidak Boleh Kosong!' })
            err = 'error'
        }
        if (!this.state.campaignDesc) {
            this.setState({ errorText: 'Deskripsi Campaign Harus Diisi!' })
            err = 'error'
        }
        if (!this.state.campaignTitle) {
            this.setState({ errorText: 'Judul Campaign Harus Diisi!' })
            err = 'error'
        }

        if (err) {
            window.scrollTo(0, 0)
            return false
        } else {
            err = ''
            this.setState({ errorText: '' })
            return true
        }
    }


    // SUBMIT USER CAMPAIGN
    submitCampaign = () => {
        let valid = this.validateInput()

        if (valid) {
            // Membuat button jadi loading
            this.setState({ isLoading: true })

            // FORM DATA
            var formdata = new FormData(),
                options = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            formdata.append('image', this.state.files[0])
            formdata.append('data', JSON.stringify({
                idUser: this.props.id,
                title: this.state.campaignTitle,
                description: this.state.campaignDesc,
                start_date: this.state.start,
                end_date: this.state.end,
                release_date: this.state.release
            }))

            // POST Data
            Axios.post(urlAPI + '/campaign/buatCampaign', formdata, options)
                .then(res => {
                    toast.success('Campaign berhasil disimpan. Campaign kamu akan ditampilkan setelah diverifikasi oleh admin.')
                    setTimeout(() => window.location.pathname = '/user/campaign', 1000)
                }).catch(err => {
                    console.log(err.response)
                    this.setState({ isLoading: false })
                })
        }
    }


    // MAIN RENDER
    render() {
        if (this.props.isLogin) {
            return (
                <div className="page-padding">
                    <div className="container-fluid px-3 px-sm-5">

                        <MDBAnimation type="fadeIn">
                            <div className="row">

                                <MDBCol md="7" lg="8">
                                    <h2 className="h2-responsive">Buat Campaign</h2>

                                    {
                                        this.state.errorText
                                            ?
                                            <div className="alert alert-danger animated shake my-3">
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
                                            rows="5"
                                            type="textarea"
                                            label="Deskripsi Campaign"
                                            className="rounded shadow-sm"
                                            onChange={(e) => this.setState({ campaignDesc: e.target.value })}
                                        />

                                        <div className="form-row">
                                            <div className="col">
                                                <MDBInput outline type="date" min={new Date().toISOString().split("T")[0]} label="Tanggal Mulai" onChange={(e) => this.setState({ start: e.target.value })} />
                                            </div>
                                            <div className="col">
                                                <MDBInput outline type="date" min={new Date().toISOString().split("T")[0]} label="Tanggal Selesai" onChange={(e) => this.setState({ end: e.target.value })} />
                                            </div>
                                        </div>

                                        <MDBInput outline type="date" min={new Date().toISOString().split("T")[0]} label="Tanggal Rilis" onChange={(e) => this.setState({ release: e.target.value })} />
                                    
                                        <label htmlFor="campaign-file" className="font-small pl-2" style={{ color:'#757779' }}>
                                            Gambar <small>(Recommended: <strong>728x480</strong> px)</small>
                                        </label>
                                        <FilePond
                                            id="campaign-file"
                                            maxFiles={1}
                                            allowMultiple={false}
                                            ref={ref => this.pond = ref}
                                            onupdatefiles={fileItems => {
                                                this.setState({
                                                    files: fileItems.map(fileItem => fileItem.file)
                                                });
                                            }}
                                            acceptedFileTypes={['image/*']}
                                            onaddfile={file => console.log(this.state.files)}
                                        />
                                    </div>
                                </MDBCol>

                                <MDBCol md="5" lg="4" className="mt-4 mt-lg-0">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <div className="text-center font-weight-bold mb-3">
                                                Tips Agar Campaignmu Diterima
                                        </div>
                                            <hr />
                                            <p style={{ color: '#515151' }}>1. Pastikan konten tidak mengandung SARA.</p>
                                            <p style={{ color: '#515151' }}>2. Informasi yang diberikan lengkap dan mudah dimengerti.</p>
                                            <p style={{ color: '#515151' }}>3. Pastikan deskripsi campaign jelas, sehingga mudah ditemukan oleh donatur.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <MDBBtn outline color="elegant" className="btn-block mb-4" onClick={() => window.history.back()}>
                                            <MDBIcon icon="times" />
                                            <span className="ml-2">CANCEL</span>
                                        </MDBBtn>
                                        {
                                            this.state.isLoading
                                                ?
                                                <MDBBtn color="dark-green" className="btn-block mb-4" disabled>
                                                    <div className="spinner-border spinner-border-sm" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                    <span className="ml-2">SUBMIT</span>
                                                </MDBBtn>
                                                :
                                                <MDBBtn color="dark-green" className="btn-block mb-4" disabled={!this.state.agree} onClick={this.submitCampaign}>
                                                    <MDBIcon icon="paper-plane" />
                                                    <span className="ml-2">SUBMIT</span>
                                                </MDBBtn>
                                        }
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="agreement" onChange={() => this.setState({ agree: !this.state.agree })} />
                                            <label className="custom-control-label font-small" htmlFor="agreement">
                                                Saya setuju dengan <span className="text-primary">syarat & ketentuan</span> yang berlaku di Sineas Kolektif
                                        </label>
                                        </div>
                                    </div>
                                </MDBCol>

                            </div>
                        </MDBAnimation>

                    </div>
                </div>
            );
        } else {
            return (
                <Redirect to='/' />
            )
        }
        
    }
}

const mapStateToProps = ({userData}) => {
    return {...userData}
}

export default connect(mapStateToProps)(BuatCampaign);