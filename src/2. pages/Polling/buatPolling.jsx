/* eslint-disable no-labels */
import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { MDBCol, MDBInputGroup, MDBInput, MDBBtn, MDBIcon, MDBAnimation } from 'mdbreact';

// HELPER
import { urlAPI } from '../../5. helper/database';

class BuatPolling extends Component {
    state = {
        // GENERAL
        agree: false,
        errorText: '',
        isLoading: false,
        dummy: false,

        // POLLING DATA
        pollingTitle: '',
        pollingDesc: '',
        questions: [
            {
                id: 1,
                question: '',
                options: ['']
            }
        ],
        start: '',
        end: '',
        files: null
    }


    // RENDERS
    renderQuestions = () => {
        return this.state.questions.map((val,idx) => {
            return (
                <MDBAnimation type="slideInLeft" key={idx}>
                    <div className="card mb-3">
                        <div className="card-body">
                            <MDBInputGroup
                                hint={`Pertanyaan ${idx + 1}`}
                                prepend={<h4 className="px-2 h4-responsive">{idx + 1}</h4>}
                                append={<MDBBtn color="red" className="px-2 py-1" onClick={() => this.removeQuestion(val.id)}><MDBIcon icon="times" /></MDBBtn>}
                            />
                            <ul className="mt-2 mb-0">
                                {
                                    val.options.map((option,idxOption) => {
                                        return (
                                            <MDBAnimation type="fadeIn" key={idxOption}>
                                                <li className="my-1">
                                                    <MDBInputGroup
                                                        hint={`Pilihan ${idxOption + 1}`}
                                                        append={<MDBBtn color="transparent" className="px-2 py-1" onClick={() => this.removeOption(idx, idxOption)}>
                                                                    <MDBIcon icon="times" />
                                                                </MDBBtn>}
                                                    />
                                                </li>
                                            </MDBAnimation>
                                        )
                                    })
                                }
                                <MDBBtn color="indigo" className="px-2 py-1 rounded-pill" onClick={() => this.addOption(idx)}>
                                    <MDBIcon icon="plus" /> Pilihan
                                </MDBBtn>
                            </ul>
                        </div>
                    </div>
                </MDBAnimation>
            )
        })
    }
    // RENDERS


    // QUESTIONS
    addQuestion = () => {
        let currentQuestions = this.state.questions
        if (currentQuestions.length < 5) {
            currentQuestions.push({ 
                id: currentQuestions[currentQuestions.length-1].id + 1,
                question: '',
                options: ['']
             })
             this.setState({ questions: currentQuestions })
             window.scrollTo(0, window.innerHeight)
        } else {
            toast.error('Polling dibatasi hingga 5 pertanyaan')
        }
    }

    removeQuestion = (id) => {
        var newQuestions = []
        let currentQuestions = this.state.questions

        currentQuestions.forEach((question,idx) => {
            if (id !== question.id) {
                newQuestions.push(question)
            }
        })
        
        this.setState({ questions: newQuestions })
    }
    // QUESTIONS


    // OPTIONS
    addOption = (idxQuestion) => {
        let newOptions = this.state.questions[idxQuestion].options
        if (newOptions.length < 5) {
            newOptions.push('')
            this.state.questions.forEach((question,idx) => {
                if (idx === idxQuestion) {
                    question.options = newOptions
                }
                this.setState({dummy: true})
            })
        } else {
            toast.error('Pilihan dari pertanyaan dibatasi hingga 5 pilihan')
        }
    }

    removeOption = (idxQuestion, idxOption) => {
        let newOptions = this.state.questions[idxQuestion].options
        newOptions = newOptions.filter((option,idx) => parseInt(idx) !== parseInt(idxOption))
        this.state.questions.forEach((question, index) => {
            if (index === idxQuestion) {
                question.options = newOptions
            }
            this.setState({dummy: true})
        })
    }
    // OPTIONS


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

                                <MDBAnimation type="fadeIn">
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
                                </MDBAnimation>

                                {/* POLLING QUESTIONS */}
                                <div className="form-group">
                                    {this.renderQuestions()}

                                    {/* ADD QUESTION */}
                                    <div className="text-center">
                                        <MDBBtn color="indigo" className="px-2 py-1" onClick={this.addQuestion}>
                                            <MDBIcon icon="plus" /> Pertanyaan
                                        </MDBBtn>
                                    </div>
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