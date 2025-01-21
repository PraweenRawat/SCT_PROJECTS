const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  // check whether if the input box is empty
  if (inputBox.value === '') {
    alert("You must write something..");
  }
  //   to write a task
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // add cros icon to del. the task
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    // to display the span icon
    li.appendChild(span);
  }

  //   after writing a task we have to clear the input
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
    // to delete the task
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
