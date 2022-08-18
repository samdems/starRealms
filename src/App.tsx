import { Component, createSignal, For, Show } from "solid-js";

const App: Component = () => {
  const [activePlayer, setActivePlayer] = createSignal(1)
  const [numberOfPlayers, setNumberOfPlayers] = createSignal(4);
  const next =()=>{
    setActivePlayer(activePlayer()+1)
  }
  const pre =() =>{
    setActivePlayer(activePlayer()-1)
  }
  return (
    <div class="h-screen">
      <div class="grid grid-cols-2 p-4 gap-4 h-full">
        <Player id="1" show={activePlayer() === 1}/>
        <Player id="2" show={activePlayer() === 2}/>
        <Player id="3" show={activePlayer() === 3}/>
        <Player id="4" show={activePlayer() === 4}/>
      </div>
      {/* <button class="btn btn-success"></button> */}
      {/* <button class="btn btn-warning"></button> */}
      {/* <button class="btn btn-error"></button> */}
    </div>
  );
};
const Player = ({ id,show = false }) => {
  const [myAuthority, setMyAuthority] = createSignal(50);

  const [authority, setAuthority] = createSignal(0);
  const [combat, setCombat] = createSignal(0);
  const [trade, setTrade] = createSignal(0);
  const reset = ()=>{
    setAuthority(0)
    setCombat(0)
    setTrade(0)
  }
  return (
      <div class="alert  shadow-lg h-full">
        <Selecter number={myAuthority} setNumber={setMyAuthority} type="success"/>
          <div class="flex gap-4 h-full">
            <Selecter number={authority} setNumber={setAuthority} type="success" />
            <Selecter number={combat} setNumber={setCombat} type="warning" />
            <Selecter number={trade} setNumber={setTrade} type="error"/>
          </div>
          <button class="btn" onClick={reset}>
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />
</svg>

          </button>
        {/* </Show> */}
      </div>
  );
};

const Selecter = ({ number, setNumber, type = 'info' }) => {
  function add() {
    setNumber(number() + 1);
  }
  function remove() {
    setNumber(number() - 1);
  }
  return (
    <div class="flex-row text-center text-1xl font-bold">
      <button class={"btn btn-"+type} onclick={add}>
        +
      </button>
      <h1 class="p-1">{number()}</h1>
      <button class={"btn btn-"+type}  onclick={remove}>
        -
      </button>
    </div>
  );
};
export default App;
