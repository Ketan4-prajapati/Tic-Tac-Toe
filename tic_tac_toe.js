let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgCont=document.querySelector(".msgCont");
let newGame=document.querySelector("#newGame");
let msg=document.querySelector(".msg");


 let turnO= true; //return X or O
 const patern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

 ];

const btnDisable = ()=>{
    for(let boxs of boxes){
       boxs.disabled=true;
   }
}

const btnEnable = ()=>{
    for(box of boxes){
       box.disabled=false;
       box.innerText="";
   }
}

 const resetGame=()=>{
      turnO = true;
      count=0;
      btnEnable();
      msgCont.classList.add("hide");
       
 }

 boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        console.log("clicked");
         if(turnO)
         {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
         }
        //  console.log(turnO);
         box.disabled=true;
    
        checkWinner();
          
    });
 });

const showWinner=(winner)=>{
      msg.innerText=`winner is ${winner}`;
      msgCont.classList.remove("hide");
      btnDisable();
};

const checkWinner=()=>{
    for(winpatern of patern)
      {
        // console.log(winpatern[0],winpatern[1],winpatern[2]); 
        // console.log(boxes[winpatern[0]].innerText,boxes[winpatern[1]].innerText,boxes[winpatern[2]].innerText);
     
        let pos1Val= boxes[winpatern[0]].innerText;
        let pos2Val= boxes[winpatern[1]].innerText;
        let pos3Val= boxes[winpatern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="" )
        {
            if(pos1Val ===pos2Val && pos2Val === pos3Val)
            {
                showWinner(pos1Val);
                return true;
            }            
        }
    }  

};

// newGame.addEventListener("click",resetGame);
  newGame.addEventListener("click",resetGame);
  reset.addEventListener("click",resetGame);
