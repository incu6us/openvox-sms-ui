import React, {Component} from 'react';

export default class PhoneInput extends Component {
    render() {
        return (
            <input id="phone" type="text" className="form-control" minLength="10" maxLength="10" placeholder="(0XX) XXX XX XX"></input>
        );
    }
}
