import React from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

import TitleBar from "../components/TitleBar";
import RSForm from "../components/RSForm";

import "../assets/css/reed-solomon.css";

class ReedSolomon extends React.Component {
  constructor(props) {
    super(props);

    this.copyText = this.copyText.bind(this);

    this.state = {
      pageNumber: 1,
      numPages: null,
      messageVal: "  Change this text!",
      citePaperText: "cite the paper",
      buttonText: "Wait..."
    };
  }

  async downloadFile() {
    const response = await axios({
      method: "get",
      url: "/api/rs-paper",
      responseType: "blob"
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "OnTheConstructionOfReedSolomonCodes.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  callBackend = async () => {
    const bar = document.getElementById("messageInput");
    const message = bar.getAttribute("value");

    const response = await axios({
      method: "post",
      url: "/api/RS",
      data: {
        message
      }
    });

    const parsed = await response.data;

    // # of correctable errors field
    document.getElementById("staticErrors").value = parsed[0];

    // Encoded Message Field
    document.getElementById("staticEncoded").value = parsed[1];

    // Corrupted Message Field
    document.getElementById("staticCorrupted").value = parsed[2];

    // Decoded Message Field
    document.getElementById("staticDecoded").value = parsed[3];
  };

  componentDidMount() {
    // Call it once for the user to see something on the screen
    this.callBackend();
  }

  copyText() {
    const citationText = `Poland, K. (2018). On the Construction of Reed-Solomon Codes. Unpublished manuscript.`;

    navigator.permissions.query({ name: "clipboard-write" }).then(result => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(citationText).then(
          () => {
            this.setState({ citePaperText: "citation copied!" });
            const itvl = setTimeout(
              () =>
                this.setState({ citePaperText: "cite the paper" }, () =>
                  clearTimeout(itvl)
                ),
              2000
            );
          },
          function () {
            console.log("failed");
          }
        );
      }
    });
  }

  render() {
    return (
      <div>
        <TitleBar title="reed solomon encoding/decoding" />
        <Grid container direction="column" justify="center" alignItems="center">
          <RSForm
            item="true"
            callBackend={this.callBackend}
            messageVal={this.state.messageVal}
            buttonText={this.state.buttonText}
            setState={this.setState}
          />
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            xs={10}
            lg={7}
            className="textWrapper"
          >
            <h3 className="montserrat-light">What is this page?</h3>
            <p>
              Above is an example of a Reed-Solomon Encoder and Decoder. It uses
              the Berlekamp-Massey Algorithm to decode Reed-Solomon codes. An RS
              encoder/decoder is a way to protect data from any type of
              corruption. That may be the static through the phone, or the
              natural imperfections of the wires we use to transmit digital
              data. I conceptualized/planned this for my AP Computer Science
              Principles Class in April of 2018, and finally built it in
              December 2018 and January 2019.
            </p>

            <h3 className="montserrat-light">
              What does an RS encoder/decoder do?
            </h3>
            <p>
              As previously stated, it protects data. Specifically, it adds
              specially chosen characters on the end of some data so that if the
              data gets corrupted, it can be recovered again. There are a couple
              terms to remember here. A 'message' is the data that is inputted.
              In the example above, the 'message' is simply a string of
              characters that you can put in yourself. An 'encoded message' is
              the message + the other specially chosen characters. You will see
              this as the message with some weird symbols on the end. The
              'corrupted message' is a way I am pretending that the message has
              experienced some corruption, like what happens over old phone
              lines or imperfect wires. The 'decoded message' is then the
              message, but recovered. The algorithm has used the special
              characters on the end and done some math and gotten the original
              message back.
            </p>

            <h3 className="montserrat-light">How is this useful?</h3>
            <p>
              RS encoding/decoding techniques are used in nearly all forms of
              signal engineering. One of the most important/famous examples of
              RS encoding being used is in the Voyager 1 spacecraft. It flew
              beyond the solar system and used a method of RS encoding and
              decoding to make sure the pictures it took got back to NASA
              safely, without corruption from the radiation in space.
            </p>

            <h3 className="montserrat-light">What do I do?</h3>
            <p>
              This program is one of the least exciting I've ever written.
              Simply type some characters into the message field, press the
              button, and witness the algorithm work. You could learn more about
              it, though. I've written a very long paper explaining how someone
              can construct a Reed-Solomon code, and use this technique
              themselves.
            </p>

            <br />
          </Grid>
        </Grid>
        <div className="link-wrapper">
          <Grid container direction="row" justify="center">
            <div item="true" className="col-auto">
              <button onClick={this.downloadFile} className="like-link">
                <h1 className="montserrat-medium hover-underline reed-solomon-paper-link">
                  read the paper
                </h1>
              </button>
            </div>
            <div item="true" className="col-auto">
              <button onClick={this.copyText} className="like-link">
                <h1 className="montserrat-medium hover-underline reed-solomon-paper-link">
                  {this.state.citePaperText}
                </h1>
              </button>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default ReedSolomon;
