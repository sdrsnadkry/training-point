function submitForm(event) {
    event.preventDefault();

    //get values from forms
    const form = document.forms["todo"];
    const task = form["task"].value;

    const olList = document.getElementById("list");


    //take last element of olList
    const lastElementValue = olList.lastElementChild.attributes['id']['value'];

    console.log(lastElementValue)

    //create new li element <li>task</li>
    const newLi = document.createElement("li");
    newLi.innerHTML = task;
    newLi.setAttribute("id", Number(lastElementValue) + 1);

    /**
     * <ol>
     *  <li>task</li>
     * </ol>
     */
    olList.appendChild(newLi);
}

function clickToStrike() {
    const olList = document.getElementById("list");
    const lastElement = olList.lastElementChild;

    lastElement.style.textDecoration = "line-through";
}