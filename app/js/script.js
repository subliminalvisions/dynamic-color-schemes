const btn_blue = document.querySelector(".color-button.blue");
const btn_orange = document.querySelector(".color-button.orange");
const btn_green = document.querySelector(".color-button.green");

btn_orange.addEventListener("click", function () {
  document.body.className = '';
  console.log('it is red');
  document.body.className += ' dynamic_color_orange';
});
btn_blue.addEventListener("click", function () {
  document.body.className = '';  
  document.body.className += ' dynamic_color_blue';
});
btn_green.addEventListener("click", function () {
  document.body.className = '';  
  document.body.className += ' dynamic_color_green';
});



