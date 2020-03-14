import React, { Component } from 'react';

class DetailCampaign extends Component {
    state = {

    }

    // LIFECYCLE
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    // LIFECYCLE

    // MAIN RENDER
    render() {
        return (
            <div className="page-padding">
                <div className="container px-3 px-sm-5">

                    <div className="row">

                        <div className="col-md-6">
                            <img src="" alt=""/>
                        </div>

                        <div className="col-md-6">
                            <h2 className="h2-responsive">Judul Campaign</h2>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga velit error libero incidunt facere sunt iure eligendi quae voluptate in? Perferendis doloribus numquam tenetur laboriosam fugiat unde saepe quibusdam minus!
                            </span>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default DetailCampaign;