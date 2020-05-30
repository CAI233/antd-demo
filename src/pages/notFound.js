import React from 'react';

import waite from './../assets/images/waite.png';
export default class notFound extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:3
          };
    }
    render() {
        return (
            <div id="waite">
               <div className="waite">
                    <img src={waite} className="waite-error" alt="error" />
                </div>
            </div>
        )
    }
}