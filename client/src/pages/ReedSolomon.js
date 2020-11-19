import React from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

import TitleBar from "../components/TitleBar";
import RSForm from "../components/RSForm";
import { isMobile, downloadFile } from "../lib";

import "../assets/css/reed-solomon.css";

class ReedSolomon extends React.Component {
  constructor(props) {
    super(props);

    this.copyText = this.copyText.bind(this);
    this.changeText = this.changeText.bind(this);

    this.state = {
      pageNumber: 1,
      numPages: null,
      messageVal: "  Change this text!",
      citePaperText: "cite the paper",
      buttonText: "Wait...",
    };
  }

  callBackend = async () => {
    const bar = document.getElementById("messageInput");
    const message = bar.getAttribute("value");

    const response = await axios({
      method: "post",
      url: "/api/rs/program",
      data: {
        message,
      },
    });

    const parsed = await response.data;

    // # of correctable errors field
    document.getElementById("staticErrors").value = parsed[0];

    // Encoded Message Field
    document.getElementById("staticEncoded").value = parsed[1];

    // Number of Corruptions Field
    document.getElementById("staticCorruptions").value = parsed[2];

    // Corrupted Message Field
    document.getElementById("staticCorrupted").value = parsed[3];

    // Decoded Message Field
    document.getElementById("staticDecoded").value = parsed[4];
  };

  componentDidMount() {
    // Call it once for the user to see something on the screen
    this.callBackend();
  }

  copyText() {
    const citationText = `Poland, K. (2018). On the Construction of Reed-Solomon Codes. Unpublished manuscript.`;

    const el = document.createElement("textarea");
    el.value = citationText;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }

    // Change the text of the button
    this.setState({ citePaperText: "citation copied!" });
    const itvl = setTimeout(
      () =>
        this.setState({ citePaperText: "cite the paper" }, () =>
          clearTimeout(itvl)
        ),
      2000
    );
  }

  changeText(newText) {
    this.setState({
      messageVal: newText,
      buttonText: "Go!",
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
            changeText={this.changeText}
          />
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            xs={10}
            lg={7}
          >
            <h3 className="montserrat-light">What is this page?</h3>
            <p>
              Above is an example of a Reed-Solomon (RS) Encoder and Decoder. It
              uses the Berlekamp-Massey Algorithm to decode Reed-Solomon codes.
            </p>

            <h3 className="montserrat-light">
              What does an RS encoder/decoder do?
            </h3>

            <p>
              First, we have to define data. When we discuss data, there can be
              multiple ways of interpreting it. For us, we will use data in a
              way that means physical characters, including alphabetic and
              numerical. These characters are really just numbers, but seeing
              them as characters helps visualize what an RS encoder/decoder is
              doing.
            </p>
            <br />
            <p>
              An RS encoder/decoder protects data. When a message (like
              "Hello!") is sent over the internet or a physical wire, there is a
              chance for corruption. All data transmission is subject to
              corruption, and when the message arrives, the receiver might get
              "Bello!" instead of "Hello!". This is what RS encoding/decoding
              schemes attempt to control.
            </p>
            <br />
            <p>
              Think of it this way. Image you sent a letter to a friend. You
              wrote in perfect handwriting, and proofread before sending it. You
              know that there is nothing wrong with the letter before sending
              it. In transit, the post office takes your letter and dunks it
              into water. The writing begins to bleed, and when it arrives, some
              parts of the letter are impossible to read. This is what
              corruption in data looks like.
            </p>
            <h3 className="montserrat-light">How does it work?</h3>
            <p>
              Well, there are two parts: the encoder and the decoder. Each is
              used at different points in the timeline of sending a message.
            </p>
            <br />
            <p>
              The encoder is analogous to proofreading the letter before sending
              it. For digital data, the encoder uses the message to determine
              the characters to append to the end. Think of it like adding a
              list to the end of your letter. The list details how many of each
              alphabetic letter the message contained. For example, it would
              say: "65 a's, 43 b's, ...". This information can be used by the
              decoder to determine of the message was received correctly.
            </p>
            <br />
            <p>
              The decoder is a little bit more involved, but put simply, it uses
              the characters at the end to check whether the message comes out
              correctly. Considering the list of letter the sender added to the
              end of their message. The receiver can count their message for its
              letters, and check with the list that the sender sent. If
              everything matches up, there is a good chance that the message
              sent is the same as the message received.
            </p>
            <h3 className="montserrat-light">How is this useful?</h3>
            <p>
              RS encoding/decoding techniques are used in nearly all forms of
              signal engineering. One of the most important/famous examples of
              RS encoding being used is in the Voyager 1 spacecraft. It flew
              beyond the solar system and used a method of RS encoding and
              decoding to make sure the pictures it took got back to NASA
              safely, without corruption from the radiation that permeates
              space.
            </p>

            <h3 className="montserrat-light">What do I do?</h3>
            <p>
              Play around with the values! In the first text box, try typing any
              text. You can then follow the boxes down for the flow. The program
              simulates some corruption to the message, as you can see that the
              "Corrupted Message" box is different than the "Encoded Message"
              box. Then, using a RS decoder, the message is retrieved, errors
              corrected!
            </p>

            <br />
          </Grid>
        </Grid>
        <div className="link-wrapper">
          <Grid container direction="row" justify="center">
            {!isMobile() ? (
              <div item="true" className="col-auto">
                <button onClick={downloadFile} className="like-link">
                  <h1 className="montserrat-medium hover-underline reed-solomon-paper-link">
                    read the paper
                  </h1>
                </button>
              </div>
            ) : null}
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
