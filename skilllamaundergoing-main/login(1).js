window.onload = function () {
  const toggle1 = document.getElementById("box1");
  const toggle2 = document.getElementById("box2");
  document.getElementById("sign-in").addEventListener("click", () => {
    toggle1.style.animation = "move-box-right 3s infinite alternate running";
    toggle2.style.animation = "move-box-left 3s infinite  alternate running";
    setTimeout(()=>{
      toggle1.style.animation = " move-box-right 3s infinite  alternate paused";
      toggle2.style.animation = " move-box-left 3s infinite  alternate paused";
    },3000);
  });
};
