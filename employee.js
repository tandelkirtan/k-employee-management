/**
 * Evemploye can have below property
 * {
 *   1. name: " ",
 *   2. email: " ",
 *   3. id: " ",
 *   4. role: " ",
 *   5. DOJ: " ",
 *   6. Gender: " "
 * }
 */

let addEmploye = document.getElementById("add-button");
let popup = document.getElementById("pop");
let closepopup = document.getElementById("close-icon");

let employees = {};

function toggle() {
    popup.classList.toggle("show");
    popup.classList.toggle("hide");
}

function deleterow(e) {
    e.target.parentNode.parentNode.remove();
}

addEmploye.addEventListener("click", toggle);
closepopup.addEventListener("click", toggle);

let editpopup = document.getElementById("editpop");

//prefilled form
let preform = document.querySelector(".preform");
function prefillform(employee) {
    for (let property in employee) {
        preform[property] && (preform[property].value = employee[property]);
    }
}

// edit row function
let updatedid = null;
function editrow(e) {
    let employeeId = e.target.parentNode.parentNode.id;
    updatedid = employeeId;
    editpopup.classList.toggle("hide");
    editpopup.classList.toggle("show");
    prefillform(employees[employeeId]);
}
let closeeditpopup = document.getElementById("close-icon-edit");

function toggle1() {
    editpopup.classList.toggle("hide");
    editpopup.classList.toggle("show");
}
closeeditpopup.addEventListener("click", toggle1);



let tablebody = document.getElementById("tbody");
function createnewemployeerow(employee) {
    let tablerow = document.createElement("tr");
    tablerow.id = employee.id;
    for (let key in employee) {
        let cell = document.createElement("td");
        cell.innerText = employee[key];
        tablerow.append(cell);
    };
    tablebody.append(tablerow);

    let icondiv = document.createElement("td");

    let editbutton = document.createElement("i");
    editbutton.className = "fa-solid fa-pencil marginn";
    icondiv.append(editbutton);
    editbutton.addEventListener("click", editrow);

    let deletebutton = document.createElement("i");
    deletebutton.className = "fa-solid fa-trash marginn";
    icondiv.append(deletebutton);
    deletebutton.addEventListener("click", deleterow);

    tablerow.append(icondiv);
};


let newid = 1;
function generateid() {
    return newid++;
};

// let form = document.getElementById("form");
let form = document.querySelector(".form1");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let employee =
    {
        name: form.name.value,
        email: form.email.value,
        id: generateid(),
        role: form.role.value,
        doj: form.date.value,
        gender: form.gender.value
    };

    employees[employee.id] = employee;
    form.reset();
    toggle();
    createnewemployeerow(employee);
});

//edit sumbit click

function updatedetails(updateemployee) {

}


// let form2 = document.querySelector(".form2");

preform.addEventListener("submit", (e) => {
    e.preventDefault();
    let updateemployee =
    {
        name: preform.name.value,
        email: preform.email.value,
        id: updatedid,
        role: preform.role.value,
        doj: preform.date.value,
        gender: preform.gender.value
    };
    employees[updatedid] = updateemployee;
    toggle1();
    let updetedrecord = document.getElementById(updatedid);
    let cell = 0;
    for (let property in updateemployee) {
        updetedrecord.children[cell].innerText = updateemployee[property];
        cell++;
    }
    preform.reset();
});
