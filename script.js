let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns= [
  [0,1,2],
  [3,4,5],
  [0,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
                                    
];
const resetGame=()=>{
  turnO=true;
  EnableBoxes();
  msgcontainer.classList.add("hide");
};


boxes.forEach((box)=> {
  box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO){
      box.innerText="O";
      turnO=false;
      box.style.color="green";
    }
    else{
      box.innerText="X";
      turnO=true;
      box.style.color="red";
    }
    box.disabled=true;
    CheckWinner();
  });

});
const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const EnableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showWinner=(winner=>{
  msg.innerText=`Congratulations !!!!!!!!!!, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
})
const CheckWinner=()=>{

  for( let pattern of winPatterns){
    let posvalue1=boxes[pattern[0]].innerText;
    let posevalue2=boxes[pattern[1]].innerText;
    let posevalue3=boxes[pattern[2]].innerText;
    if(posvalue1!=""&&posevalue2!=""&&posevalue3!=""){
      if(posvalue1===posevalue2 && posevalue2===posevalue3){
       
        
        showWinner(posvalue1);

        
      }

    }
   
  }
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);