const button = document.querySelector("button");
const section = document.querySelector("section")

button.addEventListener("click", () => {
    let input = document.querySelector("input").value;
    let del = document.createElement("div");
    del.className = "delete";
    del.innerHTML = "delete";
    let list = document.createElement('div');
    list.className = "list";
    list.innerHTML = input;
    section.append(list);
    list.append(del)
    del.onclick = () => list.remove('list')
    return false;
})