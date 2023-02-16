let submit = document.getElementById("submit");

submit.onclick = function() {
  let name = document.getElementById("name");
  let radioBoxes = document.getElementsById("movie");
  let count = 0;
  for (let i = 0; i < radioBoxes.length; i += 1) {
    if (radioBoxes[i].checked == true) {
      count += 1;
    }
  }
  return alert(name.value + "님 저와 " + count + "개의 취향이 같으시네요!");
};

let clear = document.getElementById("clear");

clear.onclick = function() {
  let radioBoxes = document.getElementsById("movie");
  for (let i = 0; i < radioBoxes.length; i += 1) {
    radioBoxes[i].checked = false;
  }
};