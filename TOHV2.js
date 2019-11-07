var tower1 = [];
var tower2 = [];
var tower3 = [];
var disk1 = document.createElement("div") //creating disk1
disk1.setAttribute("class", "disc1 discs");
disk1.setAttribute("id", "1");
disk1.setAttribute("value", 1);


var disk2 = document.createElement("div") //creating disk2
disk2.setAttribute("class", "disc2 discs");
disk2.setAttribute("id", "2");
disk2.setAttribute("value", 2);

var disk3 = document.createElement("div") //creating disk3
disk3.setAttribute("class", "disc3 discs");
disk3.setAttribute("id", "3");
disk3.setAttribute("value", 3);

var movesLeft;
var init = function() {
   movesLeft = 7;
   document.getElementById("base1").appendChild(disk1);
   document.getElementById("base1").appendChild(disk2);
   document.getElementById("base1").appendChild(disk3);
   document.getElementById("movesBox").value = movesLeft;
   disk1.setAttribute("style","top: 11.65em");
   disk2.setAttribute("style","top: 11.65em");
   disk3.setAttribute("style","top: 11.55em");
   tower1.push(3);
   tower1.push(2);
   tower1.push(1);
}
init();
var d1 = document.getElementById("1");
var d2 = document.getElementById("2");
var d3 = document.getElementById("3");
var b1 = document.getElementById("base1");
var b2 = document.getElementById("base2");
var b3 = document.getElementById("base3");
var selectedDisk = null;
var selectedNumber = null;
var prevTower;

function select(towerArr) {
   prevTower = towerArr;
   if (movesLeft != 0) {
      if (towerArr.length != 0) {
         var a = Math.min.apply(Math, towerArr);
         if (a == 1) {
            d1.setAttribute("style", "top:0em");
            selectedDisk = d1;
            selectedNumber = 1;
         } else if (a == 2) {
            d2.setAttribute("style", "top:-1em");
            selectedDisk = d2;
            // otherDisk = d3;
            selectedNumber = 2;
         } else if (a == 3) {
            d3.setAttribute("style", "top:-2em");
            selectedDisk = d3;
            selectedNumber = 3;
            // otherDisk=null;
         }
      }
   } else{
      alert("You have failed to complete in 7 moves.");
   }
   console.log("t1: " + tower1 + ". t2: " + tower2 + ". t3: " + tower3);
}

function move(towerArr, movingBase) {
   if (towerArr.length == 0) {
      prevTower.pop(selectedNumber);
      towerArr.push(selectedNumber);
      movesLeft--;
      document.getElementById("movesBox").value = movesLeft;
      movingBase.appendChild(selectedDisk);
      selectedDisk.setAttribute('style', 'top:14.05em');
      // otherDisk.setAttribute('style', 'top:12em');

   } else if (towerArr.length == 1) {
      if (towerArr[0] > selectedNumber) {
         prevTower.pop(selectedNumber);
         towerArr.push(selectedNumber);
         movesLeft--;
         document.getElementById("movesBox").value = movesLeft;
         movingBase.appendChild(selectedDisk);
         selectedDisk.setAttribute("style", "top:11.55em")
      } else {
         alert("This disk cannot be placed on a smaller Disk.")
      }
   } else if (towerArr.length == 2) {
      if (towerArr[towerArr.length - 1] > selectedNumber) {
         prevTower.pop(selectedNumber);
         towerArr.push(selectedNumber);
         movesLeft--;
         document.getElementById("movesBox").value = movesLeft;
         movingBase.appendChild(selectedDisk);
         selectedDisk.setAttribute("style", "top:9.05em");
         if(movesLeft==0 && tower3.length==3){
            alert("Congrats!!!, You won the Game!");
         }
      } else {
         alert("This disk cannot be placed on a smaller Disk.")
      }
   }
}