
const state = {

  view: {

    squares: document.querySelectorAll(".square"),

    enemy: document.querySelector(".enemy"),

    timeLeft: document.querySelector("#time-left"),

    score: document.querySelector("#score"),

    lives: document.querySelector("#lives"),

  },

  values: {

    gameVelocity: 1000,

    hitPosition: 0,

    result: 0,

    curretTime: 60,

    lives: 3

  },

  actions: {
    
    timerId: setInterval(randomSquare, 1000),

    countDownTimerId: setInterval(countDown, 1000),

  },

};

function endGame(){

  clearInterval(state.actions.countDownTimerId);

  clearInterval(state.actions.timerId);

  

  



}


function countDown() {

  state.values.curretTime--;

  state.view.timeLeft.textContent = state.values.curretTime;


  if (state.values.curretTime <= 0) {

    


      alert("Time is out! Your result is: " + state.values.result);

      endGame();

      playSound('gameover.mp3');

      

  }

    

}

function playSound(audioName) {

  let audio = new Audio(`./src/sounds/${audioName}`);

  audio.volume = 0.2;

  audio.play();

}

function randomSquare() {

  state.view.squares.forEach((square) => {

    square.classList.remove("enemy");

  });

  let randomNumber = Math.floor(Math.random() * 9);

  let randomSquare = state.view.squares[randomNumber];

  randomSquare.classList.add("enemy");

  state.values.hitPosition = randomSquare.id;

}

function addListenerHitBox() {

  state.view.squares.forEach((square) => {

    square.addEventListener("mousedown", () => {

      if (square.id === state.values.hitPosition) {

        

        state.values.result++;

        state.view.score.textContent = state.values.result;

        state.values.hitPosition = null;

        playSound('hit.m4a');

      }

      else {

          state.values.lives--;

          state.view.lives.textContent = "x" + state.values.lives;

          if(state.values.lives <= 0) 

            {

               alert("Your lifes is finished! Your result is: " + state.values.result);
              
              endGame();

              playSound('gameover.mp3');

             


            }

      }

    });

  });

}

function initialize() {

  addListenerHitBox();

}

initialize();

