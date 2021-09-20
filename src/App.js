import { useEffect } from "react"


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

    document.getElementById(drum[id].letter).play()
    document.getElementById("display").innerText = drum[id].name
  }

  useEffect(() => {
    function onKeyup(e) {
      if (e.keyCode === drum[num].keyCode) {
        playsound(num)
      }
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [num]);

  return (
    <div className="card border-success col-sm-3 btn btn-outline-light p-0 bg-dark text-white m-1">
      <div onClick={() => playsound(num)} className="drum-pad" id={props.id}>
        {drum[num].letter}
        <audio className="clip" id={drum[num].letter} src={drum[num].url}> </audio>
      </div>
    </div>
  )

}

function App() {

  return (
    <div id="drum-machine" className="container-fluid bg-dark text-white text-center vh-100">
      <div className="card bg-dark d-flex h-100">
        <h1> Drum Machine</h1>
        <div className="row justify-content-center align-self-center mt-5">
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
        <div className="row align-items-center mt-5">
          <div className="col-sm-4 card p-0 bg-dark text-white m-1 border-success mx-auto" id="display"> </div>
        </div>
      </div>
    </div>

  );
}

export default App;
