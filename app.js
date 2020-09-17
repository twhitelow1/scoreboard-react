const Header = () => (
  <header>
    <h1>Scoreboard</h1>
    <span className="stats">Players: 1</span>
  </header>
);

const Counter = () => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score">35</span>
    <button className="counter-action increment"> + </button>
  </div>
);

const Player = () => (
  <div className="player">
    <span className="player-name">Todd</span>
    <Counter />
  </div>
);

const App = () => {
  return (
    <div className="scoreboard">
      <Header />

      {/* Players list*/}
      <Player />
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)