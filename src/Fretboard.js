import React, { Component } from 'react';

const STRINGS = 6;
const FRETS = 12;

function FretboardHeader(props) {
  let columns = [
    <th className="Spacer" colSpan="2" key="spacer"></th>,
  ];

  // Create fret numbers
  for (let i  = 0; i < FRETS; i++) {
    let fretNumber = i + 1;
    let className = "Fret-" + fretNumber;
    columns.push(
      <th className={className} key={fretNumber}>
        {fretNumber}
      </th>
    );
  }

  return (
    <thead>
      <tr className="Fretnumbers">
        {columns}
      </tr>
    </thead>
  );
}

function FretboardBody(props) {
  let selectedTuning = props.selectedTuning;
  let tunings = props.tunings;
  let stringNotes = props.stringNotes;
  let rows = [];

  // Find notes of selected tuning
  let tuning = tunings.find(tuning => tuning.abbr === selectedTuning);

  // Create strings
  for (let i = 0; i < STRINGS; i++) {
    let className = "String-" + i;
    let openNote = tuning.notes[i];
    let columns = [
      <td className="Open" key="open">{openNote}</td>,
      <td className="Spacer" key="spacer"></td>
    ];

    // Find notes of current string
    let currentString = stringNotes.find(string => string.openNote === openNote);

    // Create frets
    for (let j = 0; j < FRETS; j++) {
      let fretNumber = j + 1;
      let fretNote = currentString.fretNotes[j];
      let className = "Fret-" + fretNumber;
      columns.push(
        <td className={className} key={fretNumber}>
          {fretNote}
        </td>
      );
    }

    // Build the strings bottom to tap to respect guitar tabs conventions
    rows.unshift(
      <tr className={className} key={i}>
        {columns}
      </tr>
    );
  }

  return (
    <tbody>
      {rows}
    </tbody>
  );
}

class Fretboard extends Component {
  render() {
    return (
      <div className="Fretboard">
        <table>
          <FretboardHeader />
          <FretboardBody 
            selectedTuning={this.props.selectedTuning}
            tunings={this.props.tunings}
            stringNotes={this.props.stringNotes}
          />
        </table>
      </div>
    );
  }
}

export default Fretboard;