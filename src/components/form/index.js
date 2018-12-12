import React, { Component } from 'react';
import './index.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={this.props.ourFunction}>
              <input type="text" name="city" placeholder="city..." />
              <input type="text" name="country" placeholder="country..." />
              <input type="submit" value="Get Weather" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
