function getName(name) {
     if (name == 1) return "Rock";
     else if (name == 2) return "Paper";
     else return "Scissor";
}

function getImage(image) {
     let rockImage = "url('rock2.png')";
     let paperImage = "url('paper.png')";
     let scissorImage = "url('scissor.png')";

     if (image == 1) return rockImage;
     else if (image == 2) return paperImage;
     else return scissorImage;
}
function getResult(x) {

     document.getElementById("symbol1").style.backgroundImage = getImage(1);
     document.getElementById("symbol2").style.backgroundImage = getImage(1);
     document.getElementById("symbol1").style.animation = "wave1 0.5s infinite alternate-reverse";
     document.getElementById("symbol2").style.animation = "wave2 0.5s infinite alternate-reverse";
     document.getElementById("winner").innerText = "The winner is loading....";

     let y = Math.floor(Math.random() * 3) + 1;
     console.log(y);

     console.log("loading....");
     console.log("You : " + getName(x));

     setTimeout(() => {

          console.log("Me : " + getName(y));

          if (x == y) {
               console.log("Draw");
               document.getElementById("winner").innerText = "Match is  draw";
               document.getElementById("symbol1").style.backgroundImage = getImage(x);
               document.getElementById("symbol2").style.backgroundImage = getImage(y);

          } else if (
               (x == 1 && y == 3) ||
               (x == 2 && y == 1) ||
               (x == 3 && y == 2)) {
               console.log("You Won!");
               document.getElementById("winner").innerText = "You Won the match!";
               document.getElementById("symbol1").style.backgroundImage = getImage(x);
               document.getElementById("symbol2").style.backgroundImage = getImage(y);
          } else {
               console.log("Won by me");
               document.getElementById("winner").innerText = "Won by me!";
               document.getElementById("symbol1").style.backgroundImage = getImage(x);
               document.getElementById("symbol2").style.backgroundImage = getImage(y);
          }
          document.getElementById("symbol1").style.animation = "none";
          document.getElementById("symbol2").style.animation = "none";
     }, 3000);
}