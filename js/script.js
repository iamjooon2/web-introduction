function register() {
  let checks = document.getElementsByName('check');
  let name = document.getElementById('name').value;
  let count = 0;
  for (let i = 0; i < checks.length; i++) {
      if (checks[i].checked) {
          count++;
      }
  }
  alert(name + "님, 저와 " + count + "개의 취향이 같으시네요!");
}

function reset() {
  let checks = document.getElementsByName('check');
  document.getElementById('name').value = '';
  for (let i = 0; i < checks.length; i++) {
      checks[i].checked = false;
  }
}