// popup.js

function gameCallback(type){

  let overlay=document.createElement("div");
  overlay.className="overlay-popup";

  let box=document.createElement("div");
  box.className="popup-box";

  if(type==="rightanswer"){
    box.innerHTML=`
      <h4 class="text-success fw-bold">Correct 🎉</h4>
      <p>Great! Keep going.</p>
      <button class="btn btn-success w-100" onclick="closePopup(true)">Continue</button>
    `;
  }

  if(type==="wronganswer"){
    box.innerHTML=`
      <h4 class="text-danger fw-bold">Wrong 😢</h4>
      <p>Try again. You can do it.</p>
      <button class="btn btn-danger w-100" onclick="closePopup(false)">Retry</button>
    `;
  }

  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

function closePopup(next){
  document.querySelector(".overlay-popup").remove();

  if(next && typeof nextStep==="function"){
    nextStep();
  }
}
