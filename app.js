let button=document.querySelector('#startBtn');
button.addEventListener("click",btnPress);

function btnPress(){
let maxNum=prompt("Enter a maximum number");
let randomNum=Math.floor( Math.random() * maxNum ) +1;
let guess=prompt("Guess the number");


while(true){
   if(guess=="quit"){
      let heading=document.createElement('h3');
      heading.innerText=(`You quit the game.`);
      heading.style.color="blue";
      document.querySelector('body').append(heading);
      break;
   }
  if(guess==randomNum){
      let heading=document.createElement('h3');
      heading.innerText=(`Congrats!! You are right. Random number was ${randomNum}`);
      heading.style.color="blue";
      document.querySelector('body').append(heading);
      break;
   }
   else if(guess < randomNum){
      guess=prompt("Hint::Your guess was too small.Please try again");
   }
   else{
       guess=prompt("Hint::Your guess was too large.Please try again");
   }
}
};

