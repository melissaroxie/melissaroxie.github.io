import React, { Component } from "react";
import styled from "styled-components"

class ContactPage extends Component {
  render() {
    return (
      <div>
        <div className="mw9 center bb bw1 b--black-05 pt2 pb4-ns pb2 mb6-ns mb3 relative">
          <h1 className="f1 f-headline-l lh-solid mb1 athelas fw9">Contact</h1>
        </div>

        <div className="mw8 center mb4">
          <form action="https://formspree.io/melissa@melissacalamia.com" method="POST">
            <div className="mw9 center ph3-ns">
              <div className="cf ph-ns">
                <div className="fl w-100 w-50-ns pa3">
                  <input className="input-reset db w-100 ba pa3 br1 b--black-20 f5 fw3" type="text" name="name" placeholder="Full Name:" required />
                </div>
                <div className="fl w-100 w-50-ns pa3">
                  <input className="input-reset db w-100 ba pa3 br1 b--black-20 f5 fw3" type="email" name="_replyto" placeholder="Email:" required />
                </div>
                <div className="fl w-100 pa3">
                  <textarea id="comment" name="comment" className="input-reset db w-100 h4 mw-100 ba pa3 br1 b--black-20 f5 fw3" placeholder="Message:" required />
                </div>
                <div className="fl w-100 pa3">
                  <input className="pa2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Send" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
