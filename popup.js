window.gameCallback=function(type){

const overlay=document.getElementById("overlay");

if(type==="rightanswer"){
overlay.innerHTML=`
<div class="card p-4 text-center">
   <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" class="popup-img mb-3">
   <h4 class="text-success">Correct 🎉</h4>
   <p>Great job! Keep going.</p>
   <button class="btn btn-success" onclick="next()">Next</button>
</div>`;
overlay.style.display="flex";
}

if(type==="wronganswer"){
overlay.innerHTML=`
<div class="card p-4 text-center">
   <img src="https://cdn-icons-png.flaticon.com/512/463/463612.png" class="popup-img mb-3">
   <h4 class="text-danger">Try again</h4>
   <p>You are very close 🔥</p>
   <button class="btn btn-primary" onclick="closePop()">Continue</button>
</div>`;
overlay.style.display="flex";
}

}

function next(){
closePop();
goNext();
}

function closePop(){
overlay.style.display="none";
}
