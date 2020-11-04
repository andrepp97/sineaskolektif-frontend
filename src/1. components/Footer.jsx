import React from "react"
import Logo from '../3. assets/img/Logo_white.png';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact"

const date = new Date()

const Footer = () => {
    return (
        <MDBFooter className="sineaskolektif-footer font-small pt-5">
            <MDBContainer className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6" className='my-3'>
                        <h5 className="title">TENTANG</h5>
                        <ul className='list-group'>
                            <li className="list-unstyled">
                                <a href="#!" className='grey-text'>FAQ</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='grey-text'>Kontak</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='grey-text'>Tentang Kami</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='grey-text'>Kebijakan Privasi</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" className='grey-text'>Syarat dan Ketentuan</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6" className='my-3'>
                        <h5 className="title">IKUTI KAMI</h5>
                        <div className='list-inline'>
                            <li className='list-inline-item'>
                                <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer">
                                    <MDBIcon fab icon="instagram" size="2x" />
                                </a>
                            </li>
                            <li className="list-inline-item ml-2">
                                <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer">
                                    <MDBIcon fab icon="facebook" size="2x" />
                                </a>
                            </li>
                            <li className="list-inline-item ml-2">
                                <a href="https://github.com" target='_blank' rel="noopener noreferrer">
                                    <MDBIcon fab icon="twitter" size="2x" />
                                </a>
                            </li>
                            <li className="list-inline-item ml-2">
                                <a href="https://github.com" target='_blank' rel="noopener noreferrer">
                                    <MDBIcon fab icon="linkedin" size="2x" />
                                </a>
                            </li>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className="py-5">
                <MDBContainer className='border-top w-100 pt-4'>
                    <img src={Logo} alt="Sineas Kolektif" height={40} />
                    <p className="opacity-90 mt-3">
                        &copy; {date.getFullYear()} Sineas Kolektif. All Rights Reserved.
                    </p>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}


export default (Footer);