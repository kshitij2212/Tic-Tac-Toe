let boxes = document.querySelectorAll(".box");
 let resetBtn = document.querySelector("#reset");
 let newgamebtn =document.querySelector("#new-game")
 let msgcontainer =document.querySelector(".msg-container")
 let msg= document.querySelector("#msg")
 
 
 let turnO = true;//player X,player O
 let count =0;//to draw
 
 
 const winPatterns = [
     [0, 1, 2],
     [0, 3, 6],
     [0, 4, 8],
     [1, 4, 7],
     [2, 5, 8],
     [2, 4, 6],
     [3, 4, 5],
     [6, 7, 8]];
 
 const resetgame = () =>{
     turnO=true;
     count=0;
     enableboxes()
     msgcontainer.classList.add("hide");
 }
 
 boxes.forEach((box) => {
     box.addEventListener("click", () => {
        
        if(turnO){
         box.innerText ="O";
         turnO = false;
        }else{
         box.innerText ="X";
         turnO = true;
 
        }
        box.disabled = true;
        count++;
        let iswinner = checkWinner();
         
        if  (count===9 && !iswinner){
         gamedraw();
        }
     });
 });
 
 const gamedraw = () =>{
     msg.innerText = `Game was a Draw`
     msgcontainer.classList.remove("hide");
     disableboxes();
 }
 
 
 const disableboxes =() =>{
     for(let box of boxes){
         box.disabled =true ;   
     }
 };
 
 const enableboxes =() =>{
     for(let box of boxes){
         box.disabled =false;  
         box.innerText="";  
     }
 };
 
 const showwinner = (winner) => {
     msg.innerText = `Congratulation, winner is ${winner}`;
     msgcontainer.classList.remove("hide");
     disableboxes()
 };
 
 const checkWinner = () =>{
     for(let pattern of winPatterns){
 
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;
 
         if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
             if(pos1Val === pos2Val && pos2Val=== pos3Val){
                 console.log("winner",pos1Val);
                 showwinner(pos1Val);
                 return true
             }
         }
 
     }
 };
 
 newgamebtn.addEventListener("click",resetgame);
 resetBtn.addEventListener("click",resetgame)