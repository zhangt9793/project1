function checkneirong() {
    var name = document.getElementById("neirong").value;
    if (name.trim() == "") {
        alert("Please input the submission!");
        document.form.neirong.focus();
        return false;
    } else {
        return true;
    }
}

function checkForm() {
    if (checkneirong()) {
        alert("User submitted successfully!");
        return true;
    } else {
        return false;
    }
}

