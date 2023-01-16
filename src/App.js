import "./App.css"

function App() {
  
  return (
    <div className="App">
      <main>
        <section class="player player--0 player--active">
          <h2 class="name" id="name--0">
            Player 1
          </h2>
          <p class="score" id="score--0">
            43
          </p>
          <div class="current">
            <p class="current-label">Current</p>
            <p class="current-score" id="current--0">
              0
            </p>
          </div>
        </section>
        <section class="player player--1">
          <h2 class="name" id="name--1">
            Player 2
          </h2>
          <p class="score" id="score--1">
            24
          </p>
          <div class="current">
            <p class="current-label-1">Current</p>
            <p class="current-score" id="current--1">
              0
            </p>
          </div>
        </section>

        <img src="dice-5.png" alt="Playing dice" class="dice" />
        <button class="btn btn--new">🔄 New game</button>
        <button class="btn btn--roll">🎲 Roll dice</button>
        <button class="btn btn--hold">📥 Hold</button>
      </main>
    </div>
  )
}

export default App