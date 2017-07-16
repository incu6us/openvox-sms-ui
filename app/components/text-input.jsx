import React, {Component} from 'react';
import { createStore, compose } from 'redux';

export default class TextInput extends Component {
    render() {
        return (
            <div>
                <textarea id="msg" cols="80" rows="20" className="form-group" placeholder="Message"></textarea>
            </div>
        );
    }
}
