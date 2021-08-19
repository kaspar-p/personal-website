import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { Grid } from "@material-ui/core";

import "../assets/css/reed-solomon.css";

function RSForm(props) {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <form className="text-center rs-form">
        <hr />
        <div className="row text-center">
          <label
            id="messageField"
            htmlFor="messageInput"
            className="col-4 col-form-label"
          >
            Message
          </label>
          <div className="col">
            <input
              type="text"
              className="form-control-plaintext"
              id="messageInput"
              name="messageVal"
              onChange={(e) => props.changeText(e.target.value)}
              value={props.messageVal}
            />
          </div>
          <input
            type="button"
            id="RSButton"
            onClick={props.callBackend}
            className="btn btn-primary mb-2 col-2 montserrat-medium"
            style={{ marginRight: "2vh" }}
            value={props.buttonText}
          />
        </div>

        <hr />
        <div className="form-group row">
          <label htmlFor="staticEncoded" className="col-4 col-form-label">
            Encoded Message
          </label>
          <div className="col-8">
            <input
              type="text"
              disabled
              className="form-control"
              id="staticEncoded"
              placeholder=""
            />
          </div>
        </div>

        <hr />
        <div className="form-group row">
          <label htmlFor="staticErrors" className="col-4 col-form-label">
            # of correctable errors
          </label>
          <div className="col-8">
            <input
              type="text"
              disabled
              className="form-control"
              id="staticErrors"
              placeholder=""
            />
          </div>
        </div>

        <hr />
        <div className="form-group row">
          <label htmlFor="staticCorruptions" className="col-4 col-form-label">
            # of errors occured
          </label>
          <div className="col-8">
            <input
              type="text"
              disabled
              className="form-control"
              id="staticCorruptions"
              placeholder=""
            />
          </div>
        </div>

        <hr />
        <div className="form-group row">
          <label htmlFor="staticEncoded" className="col-4 col-form-label">
            Corrupted Message
          </label>
          <div className="col-8">
            <input
              type="text"
              disabled
              className="form-control"
              id="staticCorrupted"
              placeholder=""
            />
          </div>
        </div>

        <hr />
        <div className="form-group row">
          <label htmlFor="staticDecoded" className="col-4 col-form-label">
            Decoded Message
          </label>
          <div className="col-8">
            <input
              type="text"
              disabled
              className="form-control"
              id="staticDecoded"
              placeholder=""
            />
          </div>
        </div>
        <hr />
      </form>
    </Grid>
  );
}

RSForm.propTypes = exact({
  buttonText: PropTypes.string.isRequired,
  messageVal: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
  callBackend: PropTypes.func.isRequired,
});

export default RSForm;
