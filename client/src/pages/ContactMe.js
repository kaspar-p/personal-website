import React from "react";
import TitleBar from "../components/TitleBar";
import ContactMeSquare from "../components/ContactMeSquare";
import "../assets/css/contactme.css";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.updateWidth = this.updateWidth.bind(this);

    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth });
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  updateWidth() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <div>
        <TitleBar title="contact me" />
        <div className="socialWrapper">
          <div className="row justify-content-center">
            <h4 className="col-auto montserrat-medium email">
              kaspar78@mouco.com
            </h4>
          </div>

          <div className="row socialRow justify-content-center">
            {/* GITHUB */}
            <ContactMeSquare
              socialName="Github"
              handle="@kaspar78"
              socialLink="https://github.com/kaspar78"
              width={this.state.width}
            />

            {/* INSTAGRAM */}
            <ContactMeSquare
              socialName="Instagram"
              handle="@kaspar.p"
              socialLink="https://instagram.com/kaspar.p"
              width={this.state.width}
            />
          </div>

          <div className="row socialRow justify-content-center">
            {/* TWITTER */}
            <ContactMeSquare
              socialName="Twitter"
              handle="@kasparFpoland"
              socialLink="https://twitter.com/kasparFpoland"
              width={this.state.width}
            />

            {/* LINKEDIN */}
            <ContactMeSquare
              socialName="LinkedIn"
              handle="@Kaspar Poland"
              socialLink="https://www.linkedin.com/in/kaspar-p-48b115110"
              width={this.state.width}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
