import React, {Component} from 'react';
import TextInput from './text-input';
import SendButton from './send-button';
import PhoneInput from './phone-input';

export default class App extends Component {
    render() {
        return (
            <div className="container form-group">
                <label className="form-group">Send SMS</label>
                <TextInput />
                <div className="row">
                    <div className="col-lg-6">
                        <div id="successSent" className="alert alert-success" style={{display: "none"}}>
                           Sent to: <b><span id="successSentPhone"></span></b>&nbsp;
                           Result: <b><span id="successSentResult"></span></b>&nbsp;
                           Port: <b><span id="successSentPort"></span></b>&nbsp;
                           Time: <b><span id="successSentTime"></span></b>
                        </div>
                        <div id="errorSent" className="alert alert-danger" style={{display: "none"}}>
                            Error: <b><span id="errorSentMessage"></span></b>
                        </div>
                        <div className="input-group">
                            <PhoneInput/>
                            <SendButton/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
