import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { MDBCol, MDBInputGroup, MDBInput, MDBBtn, MDBIcon, MDBAnimation } from 'mdbreact';

// HELPER
import { urlAPI } from '../../5. helper/database';

// FILEPOND
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

class BuatPolling extends Component {
    state = {
        // GENERAL
        agree: false,
        errorText: '',
        isLoading: false,

        // POLLING DATA
        pollingTitle: '',
        pollingDesc: '',
        questions: [
            {
                question: '',
                options: ['']
            }
        ],
        start: '',
        end: '',
        files: null
    }


    // LIFECYCLE
    componentDidMount() {
        window.scrollTo(0, 0)
    }


    // RENDERS
    renderQuestions = () => {
        return this.state.questions.map((val,idx) => {
            return (
                <MDBAnimation type="slideInLeft" key={idx}>
                    <div className="card mb-3">
                        <div className="card-body">
                            <MDBInputGroup
                                onChange={(e) => this.questionHandle(idx, e.target.value)}
                                hint={`Pertanyaan ${idx + 1}`}
                                prepend={<h4 className="px-2 h4-responsive">{idx + 1}</h4>}
                                append={<MDBBtn color="red" className="px-2 py-1" onClick={() => this.removeQuestion(idx)}><MDBIcon icon="times" /></MDBBtn>}
                            />
                            <ul className="mt-2 mb-0">
                                {
                                    val.options.map((option,idxOption) => {
                                        return (
                                            <MDBAnimation type="fadeIn" key={idxOption}>
                                                <li className="my-1">
                                                    <MDBInputGroup
                                                        onChange={(e) => this.optionHandle(idx, idxOption, e.target.value)}
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
                question: '',
                options: ['']
             })
             this.setState({ questions: currentQuestions })
        } else {
            toast.error('Polling dibatasi hingga 5 pertanyaan')
        }
    }

    removeQuestion = (idxQ) => {
        var newQuestions = []
        let currentQuestions = this.state.questions

        currentQuestions.forEach((question,idx) => {
            if (idxQ !== idx) {
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


    // INPUT HANDLE
    questionHandle = (idx, val) => {
        let questionTemp = this.state.questions
        questionTemp[idx].question = val
        this.setState({ questions: questionTemp })
    }

    optionHandle = (idxQ, idxO, val) => {
        let questionTemp = this.state.questions
        questionTemp[idxQ].options[idxO] = val
        this.setState({ questions: questionTemp })
    }
    // INPUT HANDLE


    // CHECK INPUTS
    validateInput = () => {
        let err = ''

        if (this.state.questions.length < 1) {
            this.setState({ errorText: 'Polling Harus Memiliki Minimal 1 Pertanyaan!' })
            err = 'error'
        }
        if (!this.state.files) {
            this.setState({ errorText: 'Gambar Tidak Boleh Kosong!' })
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
        if (!this.state.pollingDesc) {
            this.setState({ errorText: 'Deskripsi Polling Harus Diisi!' })
            err = 'error'
        }
        if (!this.state.pollingTitle) {
            this.setState({ errorText: 'Judul Polling Harus Diisi!' })
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

    // SUBMIT POLLING
    submitPolling = () => {
        let valid = this.validateInput()

        if (valid) {
            // Loading state
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
                polling_title: this.state.pollingTitle,
                polling_desc: this.state.pollingDesc,
                start_date: this.state.start,
                end_date: this.state.end,
                questions: this.state.questions
            }))

            Axios.post(urlAPI + '/polling/buatPolling', formdata, options)
                .then(res => {
                    toast.success('Polling berhasil disimpan. Polling kamu akan ditampilkan setelah diverifikasi oleh admin.')
                    window.location.pathname = '/user/polling'
                })
                .catch(err => {
                    console.log(err.response)
                    this.setState({ isLoading: false })
                    toast.error('Server bermasalah, coba lagi nanti.')
                })
        }
    }
    // SUBMIT POLLING


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

                                {
                                    this.state.errorText
                                        ?
                                        <div className="alert alert-danger animated shake my-3">
                                            {this.state.errorText}
                                        </div>
                                        :
                                        null
                                }

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
                                            <div className="form-row">
                                                <div className="col">
                                                    <MDBInput
                                                        outline
                                                        type="date"
                                                        label="Tanggal Mulai"
                                                        min={new Date().toISOString().split("T")[0]}
                                                        onChange={(e) => this.setState({ start: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <MDBInput
                                                        outline
                                                        type="date"
                                                        label="Tanggal Selesai"
                                                        min={new Date().toISOString().split("T")[0]}
                                                        onChange={(e) => this.setState({ end: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="campaign-file" className="font-small pl-2" style={{ color: '#757779' }}>
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
                                        </div>
                                    </div>
                                </MDBAnimation>

                                {/* POLLING QUESTIONS */}
                                <div className="form-group mt-4">
                                    <h4 className="h4-responsive">Pertanyaan</h4>
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
                                            <MDBBtn color="dark-green" className="btn-block mb-4" disabled={!this.state.agree} onClick={this.submitPolling}>
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