import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { MDBCol, MDBInputGroup, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';

// HELPER
import { urlAPI } from '../../5. helper/database';

class BuatPolling extends Component {
    state = {
        // GENERAL
        agree: false,
        errorText: '',
        isLoading: false,

        // POLLING DATA
        pollingTitle: '',
        pollingDesc: '',
        questions: [1],
        options: [1],
        start: '',
        end: '',
        files: null
    }


    // RENDERS
    renderQuestions = () => {
        return this.state.questions.map((val,idx) => {
            return (
                <div key={idx} className="card mb-3">
                    <div className="card-body">
                        <MDBInputGroup
                            hint={`Pertanyaan ${idx + 1}`}
                            prepend={<h4 className="px-2 h4-responsive">{idx + 1}</h4>}
                            append={<MDBBtn color="red" className="px-2 py-1" onClick={() => this.removeQuestion(val)}><MDBIcon icon="times" /></MDBBtn>}
                        />
                        <ul className="mt-2">
                            {this.renderOptions()}
                            <MDBBtn color="indigo" className="px-2 py-1 rounded-pill" onClick={this.addOption}>
                                <MDBIcon icon="plus" /> Pilihan
                            </MDBBtn>
                        </ul>
                    </div>
                </div>
            )
        })
    }

    renderOptions = () => {
        return this.state.options.map((val,idx) => {
            return (
                <li key={idx} className="my-1">
                    <MDBInputGroup
                        hint={`Pilihan ${idx + 1}`}
                        append={<MDBBtn color="red" className="px-2 py-1" onClick={() => this.removeOption(val)}><MDBIcon icon="times" /></MDBBtn>}
                    />
                </li>
            )
        })
    }
    // RENDERS


    // ADD QUESTION
    addQuestion = () => {
        let newQuestions = this.state.questions
        if (newQuestions.length < 5) {
            newQuestions.push(newQuestions.length + 1)
            this.setState({ questions: newQuestions })
        } else {
            toast.error('Pertanyaan maksimal hanya 5')
        }
    }
    // ADD QUESTION

    // ADD OPTION
    addOption = () => {
        let newOptions = this.state.options
        newOptions.push(newOptions.length + 1)
        this.setState({ options: newOptions })
    }

    // REMOVE QUESTION
    removeQuestion = (idx) => {
        let newQuestions = this.state.questions
        newQuestions = newQuestions.filter(val => parseInt(val) !== parseInt(idx))
        this.setState({ questions: newQuestions })
    }
    // REMOVE QUESTION

    // REMOVE OPTION
    removeOption = (idx) => {
        let newOptions = this.state.options
        newOptions = newOptions.filter(val => parseInt(val) !== parseInt(idx))
        this.setState({ options: newOptions })
    }
    // REMOVE OPTION


    // MAIN RENDER
    render() {
        if (this.props.isLogin) {
            return (
                <div className="page-padding">
                    <div className="container-fluid px-3 px-sm-5">

                        <div className="row">

                            {/* LEFT PANEL */}
                            <MDBCol md="7" lg="8">

                                <h2 className="h2-responsive">Buat Polling</h2>

                                <div id="polling-top" className="card px-4 my-3">
                                    <div className="form-group mt-2 mb-0">
                                        <MDBInput
                                            outline
                                            type="text"
                                            label="Judul Polling"
                                            className="shadow-sm font-weight-bold h5-responsive"
                                            onChange={(e) => this.setState({ pollingTitle: e.target.value })}
                                            value={this.state.pollingTitle}
                                        />
                                        <MDBInput
                                            outline
                                            type="textarea"
                                            className="shadow-sm"
                                            label="Deskripsi Polling"
                                            onChange={(e) => this.setState({ pollingDesc: e.target.value })}
                                            value={this.state.pollingDesc}
                                        />
                                    </div>
                                </div>

                                {/* POLLING QUESTIONS */}
                                <div className="form-group">
                                    {this.renderQuestions()}

                                    {/* ADD QUESTION */}
                                    <MDBBtn color="indigo" className="px-2 py-1" onClick={this.addQuestion}>
                                        <MDBIcon icon="plus" /> Pertanyaan
                                    </MDBBtn>
                                </div>
                                {/* POLLING QUESTIONS */}

                            </MDBCol>
                            {/* LEFT PANEL */}

                            {/* RIGHT PANEL */}
                            <MDBCol md="5" lg="4" className="mt-4 mt-lg-0">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="text-center font-weight-bold mb-3">
                                            Tips Agar Pollingmu Diterima
                                        </div>
                                        <hr />
                                        <p style={{ color: '#515151' }}>1. Pastikan konten tidak mengandung SARA.</p>
                                        <p style={{ color: '#515151' }}>2. Pertanyaan yang diberikan jelas dan mudah dimengerti.</p>
                                        <p style={{ color: '#515151' }}>3. Pastikan deskripsi polling relevan dengan judul, sehingga mudah ditemukan.</p>
                                    </div>
                                </div>

                                <div className="sticky-top pt-5 mt-2">
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
                                            <MDBBtn color="dark-green" className="btn-block mb-4" disabled={!this.state.agree}>
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
                            {/* RIGHT PANEL */}

                        </div>

                    </div>
                </div>
            )
        } else {
            return <Redirect to='/' />
        }
    }
}

const mapStateToProps = ({ userData }) => {
    return { ...userData }
}

export default connect(mapStateToProps)(BuatPolling);