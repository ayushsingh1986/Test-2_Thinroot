function handleClick() {

    var Name = document.getElementById("Name").value;
    var emailid = document.getElementById("exampleFormControlInput1").value;
    var birthdaytime = document.getElementById("birthdaytime").value;
    var gender = document.getElementById("gender").value;

    var Phone = document.getElementById("Phone").value;

    var textarea = document.getElementById("validationTextarea").value;

    document.getElementById("name_name").innerHTML = Name;
    document.getElementById("emailid").innerHTML = emailid;

    document.getElementById("DOB").innerHTML = birthdaytime;
    document.getElementById("Gender").innerHTML = gender;
    document.getElementById("phone_num").innerHTML = Phone;
    document.getElementById("textarea").innerHTML = textarea;



}