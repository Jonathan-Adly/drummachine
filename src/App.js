import { useEffect, useState } from "react"


const drum = [
  {
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    keyCode: 81,
    letter: "Q",
    name: "Heater1"
  },
  {
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    keyCode: 87,
    letter: "W",
    name: "Heater2"
  },
  {
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    keyCode: 69,
    letter: "E",
    name: "Heater3"
  },
  {
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    keyCode: 65,
    letter: "A",
    name: "Heater4"
  },
  {
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    keyCode: 83,
    letter: "S",
    name: "Heater6"
  },
  {
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    keyCode: 68,
    letter: "D",
    name: "Dsc-oh"
  },
  {
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    keyCode: 90,
    letter: "Z",
    name: "kick_n_hat"
  },
  {
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    keyCode: 88,
    letter: "X",
    name: "Kick"
  },
  {
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    keyCode: 67,
    letter: "C",
    name: "Cev_H2"
  }
];



function DrumPad(props) {

  const num = Number(props.id)

  const playsound = (id) => {
    document.getElementById(id).play()
  }

  useEffect(() => {
    function onKeyup(e) {
      if (e.keyCode === drum[num].keyCode) {
        playsound(drum[num].letter)
      }
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [num]);

  return (
    <div className="col card p-0">
      <button onClick={() => playsound(drum[num].letter)} className="drum-pad stretched-link btn btn-outline-primary" id={props.id}>{drum[num].letter} </button>
      <audio className="clip" id={drum[num].letter} src={drum[num].url}> </audio>
    </div>
  )

}

function App() {

  return (
    <div id="drum-machine" className="container-fluid">
      <div id="display">
        <div className="row row-cols-3">
          <DrumPad id="0" />
          <DrumPad id="1" />
          <DrumPad id="2" />
          <DrumPad id="3" />
          <DrumPad id="4" />
          <DrumPad id="5" />
          <DrumPad id="6" />
          <DrumPad id="7" />
          <DrumPad id="8" />
        </div>
      </div>
    </div>

  );
}

export default App;
