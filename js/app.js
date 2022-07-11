

let plsBtn = document.getElementById("plus");
let mnsBtn = document.getElementById("minus");
  count = 0;

  plsBtn.onclick = function() {
  count += 1;
  let amount = document.getElementById('inner-div').innerHTML = count;
  if (count>4){
    count = -1
  }
  mnsBtn.onclick = function() {
  count -= 1;
  let amount = document.getElementById('inner-div').innerHTML = count;
  if (count<1){
    count = 6
  }

}
}




