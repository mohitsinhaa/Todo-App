let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    console.log("Task Added");
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("Delete");
    item.appendChild(delBtn);

    ul.append(item);
     inp.value = "";
});

ul.addEventListener("click", function(){
   if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("Task Deleted");
   }
});

