import React, { Component } from 'react';
import NotFound from '../3. assets/img/page_notfound.svg';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h3 className='btn-indigo py-3'>&nbsp;</h3>

                <div className="col-md-6 offset-md-3">
                    <img src={NotFound}
                        alt="Page Not Found"
                        className='img-responsive img-fluid mt-5'
                    />
                    <h2 className='text-center my-5'>Page Not Found</h2>
                </div>
            </div>
        );
    }
}

export default PageNotFound;