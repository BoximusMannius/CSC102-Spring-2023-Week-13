
//improved version of blastoffTimer() that uses a for loop
function betterBlastoffTimer(){
    //displays blastoffTimer() started in the console
    console.log("blastoffTimer() started");
    //sets currTime to 50
    currTime = 50;

    //loop runs 11 times
    for(var i = 0; i < 11; i=i + 1){
        setTimeout(function(){
            //diplays currTime to the console
            console.log("currTime =" + currTime);
            //displays time left on the webpage
            document.getElementById("blastoffDis").innerHTML = currTime + "sec left";
            //checks is the current time left is between 25 seconds and 0 seconds
            if(currTime < 25 && currTime > 0){
                //displays Warning! Less than half way to launch.
                document.getElementById("blastoffWarning").innerHTML = "Warning! Less than half way to launch.";
            }
            //checks if the countdown is complete
            else if(currTime == 0) {
                    //displays Blastoff! on the webpage
                    document.getElementById("blastoffDis").innerHTML = "Blastoff!";
                    //removes the halfway warning
                    document.getElementById("blastoffWarning").innerHTML = "";
            }
            //lowers the countdown in increments of five
            currTime = currTime - 5;
        //sets a delay on the for loop, making each lopp 5 seconds after the previous one
        }, 5000 * i);
    }
}

// craps tracking variables

 //displays that the game has started on the console
 console.log("playCraps() started");
 //create and assign variable for die1
 var die1 = 0;
 //create and assign variable for die2
 var die2 = 0;
 //create and assign variable for sum
 var sum = 0;
 //create and assign variable for wins
 var wins = 0;
 //create and assign variable for losses
 var losses = 0;
 //create and assign variable for draws
 var draws = 0;

function playCraps(){
   

    //roll die1
    die1 = Math.floor(6 * Math.random()) + 1;
    //displays the result on the console
    console.log(die1);

    //roll die2
    die2 = Math.floor(6 * Math.random())+ 1;
    //displays the result on the console
    console.log(die2);

    //total roll of die1 and die2
    sum = die1 + die2;
    //displays the result on the console
    console.log(sum);

    //display the value of die1 on the webpage
    document.getElementById("die1Res").innerHTML = die1;
    //display the value of die2 on the webpage
    document.getElementById("die2Res").innerHTML = die2;
    //display the value of the sum on the webpage
    document.getElementById("diceSum").innerHTML = sum;

    //checks if the sum is equal to 7 or 11, in which case it displays Skill Issue on the webpage, and adds 1 to the loss counter
    if(sum == 7 || sum == 11){
        //displays the game result on the console
        console.log("Game Result : loss");
        //displays Skill Issue on the webpage
        document.getElementById("gameRes").innerHTML = "Skill Issue";
        //increases the loss counter by 1
        losses++;
        //displays the amount of games lost on the webpage
        document.getElementById("lossesRes").innerHTML = losses;

    } 
    //checks if both die1 and die2 are even numbers, and that they are the same number. If both are true then Big W is displayed on the webpage, and adds 1 to the win counter
    else if(die1 == die2 && die2 % 2 == 0) {
        //displays the game result on the console
        console.log("Game Result : win");
        //displays Big W on the webpage
        document.getElementById("gameRes").innerHTML = "Big W";
        //adds 1 to the win counter
        wins++;
        //displays the amount of games won on the webpage
        document.getElementById("winsRes").innerHTML = wins;

    }
    //if neither of the if statements above were true, Push is displayed on the webpage, and adds 1 to the draw counter
    else {
        //displays the game result on the console
        console.log("Game Result : draw");
        //displays Puch on the webpage
        document.getElementById("gameRes").innerHTML = "Push";
        //adds 1 to the draw counter
        draws++;
        //displays the amount of games tied on the webpage
        document.getElementById("drawsRes").innerHTML = draws;
    }

    
}
//displayed as the start button, when pressed, disables the start button, and reenables the stop button
function startFun(){
    console.log("startFun() started");
    document.getElementById("data").rows["time_seconds"].innerHTML = "reading data";
    index = 0;
    timer = setInterval(updateDisplay, timeInterval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//displayed as the stop button, when pressed, disabes the stop button, and reenables the start button
function stopFun(){
    console.group("stopFun() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    clearInterval(timer);
    document.getElementById("clockTime").innerHTML = "Press start to dislay current time";
}

//loads and plays the space station sound
function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

//sets up all sound files on the site
function sound(srcFile){
    console.log("sound(srcFile) started");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

//creates the variables for the table data
class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temperature,
        digSensor_temperature,
        cssSensor_temperature,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temperature = bmpSensor_temperature;
        this.digSensor_temperature = digSensor_temperature;
        this.cssSensor_temperature = cssSensor_temperature;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV =UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;


    }
}

//gets and returns the data from dataloader.js
function getData(){
    var loadedData = loadData();
    return loadedData;
}

//formats the data output in the table
function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ":</td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function updateDisplay(){
    console.log("updateDisplay() started");
    theTime = new Date();
    //test the time before showing
    //using if statement for > 10 seconds, condition ? if true : if false
    console.log(theTime.getHours() + ":" + 
        (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" +
        (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

    document.getElementById("clockTime").innerHTML = (theTime.getHours() + ":" +
        (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" +
        (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

    //tracks the time to update the table
    var timeRead = data[index].time_seconds;

    //starts updating the table after 9 seconds
    if (timeRead > 9){
        //updates the time_seconds row
        document.getElementById("data").rows["time_seconds"].innerHTML = 
            dataRow("Time elapsed", data[index].time_seconds, "seconds");
        //updates the latitude row
        document.getElementById("data").rows["latitude"].innerHTML =
            dataRow("Latitude", data[index].latitude, "");
        //updates the longitude row
        document.getElementById("data").rows["longitude"].innerHTML =
            dataRow("Longitude", data[index].longitude, "");
        //updates the gps_altitude row
        document.getElementById("data").rows["gps_altitude"].innerHTML =
            dataRow("GPS altitude", data[index].gps_altitude, "");
        //updates the bmpSensor_altitude row
        document.getElementById("data").rows["bmpSensor_altitude"].innerHTML =
            dataRow("BMP Sensor altitude", data[index].bmpSensor_altitude, "");
        //updates the bmpSensor_pressure row
        document.getElementById("data").rows["bmpSensor_pressure"].innerHTML =
            dataRow("BMP Sensor pressure", data[index].bmpSensor_pressure, "");
        //updates the bmpSensor_temperature row
        document.getElementById("data").rows["bmpSensor_temperature"].innerHTML =
            dataRow(" BMP Sensor temperature", data[index].bmpSensor_temperature, "");
        //updates the digSensor_temperature row
        document.getElementById("data").rows["digSensor_temperature"].innerHTML =
            dataRow("Digital Sensor temperature", data[index].digSensor_temperature, "");
        //updates the cssSensor_temperature row
        document.getElementById("data").rows["cssSensor_temperature"].innerHTML =
            dataRow("CSS Sensor temperature", data[index].cssSensor_temperature, "");
        //updates the cssSensor_eCO2 row
        document.getElementById("data").rows["cssSensor_eCO2"].innerHTML =
            dataRow("CSS Sensor eCO2", data[index].cssSensor_eCO2, "");
        //updates the cssSensor_TVOC row
        document.getElementById("data").rows["cssSensor_TVOC"].innerHTML =
            dataRow("CSS Sensor TVOC", data[index].cssSensor_TVOC, "");
        //updates the UV row
        document.getElementById("data").rows["UV"].innerHTML =
            dataRow("UV", data[index].UV, "");
        //updates the accelX row
        document.getElementById("data").rows["accelX"].innerHTML =
            dataRow("accelX", data[index].accelX, "");
        //updates the accelY row
        document.getElementById("data").rows["accelY"].innerHTML =
            dataRow("accelY", data[index].accelY, "");
        //updates the accelZ row
        document.getElementById("data").rows["accelZ"].innerHTML =
            dataRow("accelZ", data[index].accelZ, "");
        //updates the magneticX row
        document.getElementById("data").rows["magneticX"].innerHTML =
            dataRow("magneticX", data[index].magneticX, "");
        //updates the magneticY row
        document.getElementById("data").rows["magneticY"].innerHTML =
            dataRow("magneticY", data[index].magneticY, "");
        //updates the magneticZ row
        document.getElementById("data").rows["magneticZ"].innerHTML =
            dataRow("magneticZ", data[index].magneticZ, "");
        //updates the gyroX row
        document.getElementById("data").rows["gyroX"].innerHTML =
            dataRow("gyroX", data[index].gyroX, "");
        //updates the gyroY row
        document.getElementById("data").rows["gyroY"].innerHTML =
            dataRow("gyroY", data[index].gyroY, "");
        //updates the gyroZ row
        document.getElementById("data").rows["gyroZ"].innerHTML =
            dataRow("gyroZ", data[index].gyroZ, "");
    }

    //allows the table to update, when the end of the data list is reached (500) the table is reset
    if(index < 500){
        index++;
    } else {
        index = 0;
    }
}   



