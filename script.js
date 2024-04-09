$(document).ready(function () {
  let userName;
  let userNameH1;
  $(".sec-enter-name-btn").click(function () {
    if (document.getElementById("sec-enter-name-input").value === "") {
      alert("name cannot be empty");
    } else {
      $(".enter-name-section").fadeOut("slow");
      userName = document.getElementById("sec-enter-name-input").value;
      userNameH1 = document.getElementById("user-name-h1");
      userNameH1.innerHTML = userName;
    }
  });
});

// function test(){
//     var userName = document.getElementById("sec-enter-name-input").value;
//     console.log(userName);
// }
