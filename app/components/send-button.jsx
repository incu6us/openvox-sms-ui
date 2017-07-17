import React, {Component} from 'react';
import $ from 'jquery';

export default class SendButton extends Component {
    render() {

        const getMessage = function () {
            let message = $('textarea#msg').val()
            let phone = $('input#phone').val()

            if (message != "" && phone != "") {
                const modem = ["gsm-1.1", "gsm-1.2", "gsm-1.3", "gsm-1.4", "gsm-2.1", "gsm-2.2", "gsm-2.3", "gsm-2.4"];
                let rand = Math.floor(Math.random() * modem.length)

                let url = "http://192.168.1.10:8081/sendsms"
                let cont = "username=messager&password=666666&phonenumber=" +
                    phone + "&message=" + message + "&port=" + modem[rand] + "&report=JSON";

                $('button#sendMsg').prop('disabled', true)
                $('div#successSent').hide()
                $('div#errorSent').hide()

                $.ajax({
                    url: url,
                    type: "GET",
                    data: cont,
                    contentType: "application/json",
                    dataType: 'jsonp',
                    crossDomain: true,
                    jsonpCallback: 'parseJSON',
                })
                    .done(function (data) {
                        console.log("DONE: " + JSON.stringify(data))
                        $('button#sendMsg').prop('disabled', false)
                        $('div#successSent').show()

                        $('textarea#msg').val('')
                        $('input#phone').val('')

                        $('span#successSentPhone').text(data.report[0]["0"][0].phonenumber)
                        $('span#successSentResult').text(data.report[0]["0"][0].result)
                        $('span#successSentPort').text(data.report[0]["0"][0].port)
                        $('span#successSentTime').text(data.report[0]["0"][0].time)
                    })
                    .fail(function (data) {
                        console.log("Fail: " + JSON.stringify(data))
                        $('button#sendMsg').prop('disabled', false)
                        $('div#errorSent').show()
                        $('span#errorSentMessage').text(JSON.stringify(data))
                    })

            } else {
                alert("Message or phone field is empty!")
            }
        }

        return (
            <span className="input-group-btn">
                <button id="sendMsg" type="submit" className="btn btn-success btn-secondary"
                        onClick={getMessage}>Submit</button>
            </span>
        );
    }
}
