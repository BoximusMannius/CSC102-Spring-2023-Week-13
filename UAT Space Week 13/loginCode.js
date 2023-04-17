function creditCheck(){
    console.log("creditCheck() started");
    //variable declaration
    var firstName;
    var lastName;
    var fullName;
    var badgeNum;
    var fullNameLength;

    //gets the first name
    firstName = document.getElementById("fName").value;
    console.log("The first name is " + firstName);

    //gets the last name
    lastName = document.getElementById("lName").value;
    console.log("The last name is " + lastName);

    //combine first and last name
    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);

    //gets the badge number
    badgeNum = document.getElementById("bNumber").value;
    console.log("The badge number is " + badgeNum);

    //gets the length of the full name
    fullNameLength = fullName.length;
    console.log("The full name length is " + fullNameLength);

    //input validation
    //checks is the total name length is between 1 and 20, if it isnt, a warning is displayed to the user
    if(fullNameLength > 20 || fullNameLength == 1){
        console.log("Invalid Login. Please try again.");
        document.getElementById("loginStatus").innerHTML = "Invalid Login. Please try again.";
    }
    //checks if the badge number is 3 digits, if it isnt, a warning is displayed to the user
    else if(badgeNum > 999 || badgeNum < 100){
        console.log("Invalid Badge ID. Please try again.");
        document.getElementById("loginStatus").innerHTML = "Invalid Badge ID. Please try again.";
    } 
    //if both above statements are false, an alert is displayed to greet the user based on the name they provided, then they are moved to the UAT Space page
    else {
        console.log("Welcome");
        document.getElementById("loginStatus").innerHTML = "Welcome";
        alert("Welcome, " + firstName + " " + lastName);
        location.replace("./UATSpace.html")
    }

}
