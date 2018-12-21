import React, { Component } from 'react';
import TuningButton from './TuningButton.js';

class TuningSelect extends Component {
  render() {
   const buttons = [];

    // Create buttons
    for (let tuning of this.props.tunings) {
      buttons.push(
        <TuningButton
          key={tuning.abbr}
          tuningAbbr={tuning.abbr}
          tuningName={tuning.name}
          onTuningSelect={this.props.onTuningSelect}
        />
      );
    }

    return (
      <div className="Container">
        <fieldset className="TuningSelect">
          <legend>Choose a tuning:</legend>
          {buttons}
        </fieldset>
      </div>
    );
  }
}

export default TuningSelect;