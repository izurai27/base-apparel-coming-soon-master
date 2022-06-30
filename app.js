

// const funcCheck = () => {
  let inputEmail = document.getElementById('inputEmail');
  let warningMsg = document.querySelector(".warningMsg");
  let warning = document.querySelector(".warning");
 
  inputEmail.addEventListener("change", function() {
    console.log(inputEmail.value)
    console.log(/@/gi.test(inputEmail.value))
    if (/\@/gi.test(inputEmail.value) === false) {
      warningMsg.style.visibility = "visible";
      warning.style.visibility="visible";
    } 
    else {
      warningMsg.style.visibility = "hidden";
      warning.style.visibility="hidden";
    }
  })
  
  
 
// }