
let firstName, lastName, email, dob, year;
let users = [];

let user = {
    firstName,  
    lastName,
    email,
    dob,
}

// Get Value
const getVal = ID => {
    return document.getElementById(ID).value;
}

// Input Values
const input = () => {
    // First Name
    firstName = getVal("firstName");
    let nuName = Number(firstName);
    if (Number.isNaN(nuName) == false || nuName == 0 || nuName == Number(nuName) || isNaN(nuName) == false || firstName.length < 3) {
        showTosat("Enter The First Name Correctly!", "error")
        return -1;
    }

    // Last Name
    lastName = getVal("lastName");
    nuName = Number(lastName);
    if (Number.isNaN(nuName) == false || nuName == 0 || nuName == Number(nuName) || isNaN(nuName) == false || lastName.length < 3) {
        showTosat("Enter The Last Name Correctly!", "error")
        return -1;
    }

    // Email
    email = getVal("exampleInputEmail1");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    nuName = regex.test(email);
    if (nuName == false) {
        showTosat("Enter The Email Correctly!", "error")
        return -1;
    }

    // Date of Birth
    dob = getVal("birthday");
    dob = dob.slice(0, 4)
    dob = birthPassDate(dob);
    if (year == "-1") { return -1; }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.dob = dob;
    users.push(Object.assign({}, user));

    if (year != "-1") { return year; }
}

// Date To Days Convert
function convertDate(mydate) {
    let getDate = new Date(mydate);
    let conToMillSec = getDate.getTime();
    return Math.ceil(conToMillSec / (1000 * 60 * 60 * 24));
}

// Get Date Of Birth
const birthPassDate = date => {
    let toDate = new Date();
    let todayYear = toDate.getFullYear();
    if (date === "" || todayYear <= date) {
        showTosat("Enter The Correct Date of Birth!", "error");
        return -1;
    }
    let lifeDay = todayYear - date;
    return lifeDay;
}

// Add User
const onSubmit = () => {
    document.getElementById("Submit").addEventListener("click", function (event) {
        event.preventDefault()
    });
    if (input() == "-1") { return; }
    showTosat("Successfully! User Added!", "noerror");
}

// Table Show
const showTable = () => {
    if (users.length < 1) {
        showTosat("No Data Found! First Add User", "error");
        return;
    }
    showTosat("Show Data in Output");

    let tableHead = '<table class="table table-hover"><thead><tr><th scope="col">#</th><th scope="col">Full Name</th><th scope="col">Email</th><th scope="col">Age</th></tr></thead>;';
    let tableBodyStart = "<tbody>";
    let tableBodyMid = ""
    let tableBodyEnd = "</tbody></table>";

    for (let i = 0; users.length > i; i++) {
        tableBodyMid += '<tr><th scope="row">' + (i + 1) + '</th><td>' + users[i].firstName + ' ' + users[i].lastName + '</td><td>' + users[i].email + '</td><td>' + users[i].dob + '</td</tr>';
    }
    document.getElementById("output").innerHTML = tableHead + tableBodyStart + tableBodyMid + tableBodyEnd;
}

// Show Table In Console
const printInConsole = () => {
    if (users.length < 1) {
        showTosat("No Data Found! First Add User", "error");
        return;
    }
    showTosat("Show Data in Console");
    console.log(users);
}


const showTosat = (massage, type) => {
    let color;
    if (type === "error") { color = "linear-gradient(to right, #DC0000, #850000)"; }
    else { color = "linear-gradient(to right, #63B75D, #388E3C)"; }
    Toastify({
        text: massage,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Clear Button 
function outclear() {
    document.getElementById("output").innerHTML = " ";
    users.length = 0;
}