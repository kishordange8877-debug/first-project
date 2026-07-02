
// function submitFeedback() {
//     let name = document.getElementById("name").value;

//     document.getElementById("result").innerText =
//         "Thank you " + name + " for your feedback!";
// }

function submitFeedback() {

    let name = document.getElementById("name").value;
    let msg = document.getElementById("msg").value;

    if (name == "" || msg == "") {

        document.getElementById("result").innerHTML = "Please fill the feedback form.";
        document.getElementById("result").style.color = "red";

    } else {

        document.getElementById("result").innerHTML = "Thank You " + name + " for your feedback!";
        document.getElementById("result").style.color = "green";

    }

}