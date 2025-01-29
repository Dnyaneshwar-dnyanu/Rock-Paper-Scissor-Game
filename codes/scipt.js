function getName(name) {
     if (name == 1) return "Rock";
     else if (name == 2) return "Paper";
     else return "Scissor";
}

function getImage(image) {
     let rockImage = "url('/assets/rock.png')";
     let paperImage = "url('/assets/paper.png')";
     let scissorImage = "url('/assets/scissor.png')";

     if (image == 1) return rockImage;
     else if (image == 2) return paperImage;
     else return scissorImage;
}

function changeMessage() {

     let messages = ["Rock", "Paper", "Scissor"];
     let index = 0;
     let count_down_element = document.getElementById("winner");

     let interval = setInterval(() => {
          count_down_element.innerText = messages[index % messages.length];
          index++;
     }, 1000);  // Change text every 1 second

     setTimeout(() => {
          clearInterval(interval);  // Stop after 3 second
     }, 3000);
}

function toggleDivFandS() {
     document.getElementById("first_page").classList.toggle("hidden");
     document.getElementById("second_page").classList.toggle("hidden");
}

function toggleDivSandT() {
     document.getElementById("second_page").classList.toggle("hidden");
     document.getElementById("third_page").classList.toggle("hidden");
}

function getResult(x) {

     document.getElementById("play_again_button").style.display = "none";

     document.getElementById("symbol1").style.backgroundImage = getImage(1);
     document.getElementById("symbol2").style.backgroundImage = getImage(1);

     changeMessage();
     
     document.getElementById("symbol1").style.animation = "wave1 0.65s infinite alternate-reverse";
     document.getElementById("symbol2").style.animation = "wave2 0.65s infinite alternate-reverse";

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

          document.getElementById("play_again_button").style.display = "block";

     }, 4000);
}