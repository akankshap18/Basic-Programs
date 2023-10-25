function submitForm() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if(firstName === "" || lastName === "" || dob === "" || country === "" || gender === undefined || profession === "" || email === "" || mobile === "") {
        alert("Please fill in all fields");
        return false;
    }

    var popupContent = "First Name: " + firstName + "\n" +
                       "Last Name: " + lastName + "\n" +
                       "Date of Birth: " + dob + "\n" +
                       "Country: " + country + "\n" +
                       "Gender: " + gender + "\n" +
                       "Profession: " + profession + "\n" +
                       "Email: " + email + "\n" +
                       "Mobile: " + mobile;

    alert(popupContent);

    document.getElementById("surveyForm").reset();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}