//Assigning onclick function to Buttons
function buttons() {
    $("num0").onclick = but0;
    $("num1").onclick = but1;
    $("num2").onclick = but2;
    $("num3").onclick = but3;
    $("num4").onclick = but4;
    $("num5").onclick = but5;
    $("num6").onclick = but6;
    $("num7").onclick = but7;
    $("num8").onclick = but8;
    $("num9").onclick = but9;
    $("itemac").onclick = butac;
    $("divide").onclick = divide;
    $("multiply").onclick = multiply;
    $("minus").onclick = minus;
    $("add").onclick = add;
    $("point").onclick = point;
    $("equal").onclick = equal;
 }
// Asigning functions of number Keys
function but0() {
     var num = $("num0").innerHTML;
     $("entry").value+=num;
 }
function but1() {
    var num = $("num1").innerHTML;
    $("entry").value+=num;
}
function but2() {
    var num = $("num2").innerHTML;
    $("entry").value+=num;
}
function but3() {
    var num = $("num3").innerHTML;
    $("entry").value+=num;
}
function but4() {
    var num = $("num4").innerHTML;
    $("entry").value+=num;
}
function but5() {
    var num = $("num5").innerHTML;
    $("entry").value+=num;
}
function but6() {
    var num = $("num6").innerHTML;
    $("entry").value+=num;
}
function but7() {
    var num = $("num7").innerHTML;
    $("entry").value+=num;
}
function but8() {
    var num = $("num8").innerHTML;
    $("entry").value+=num;
}
function but9() {
    var num = $("num9").innerHTML;
    $("entry").value+=num;
}
// Asigning functions of operation Keys
function butac() {
      $("entry").value= "";
  }
function divide() {
      $("entry").value+= "/";
  }
function multiply() {
      $("entry").value+= "*";
  }
function minus() {
       $("entry").value+= "-";
   }
function add() {
        $("entry").value+= "+";
    }
function point() {
      $("entry").value+= ".";
    }
function equal() {
    if ($("entry").value === "") {

        $("entry").value = "Please Enter a Number";
        $("entry").style.fontSize = "140%";

      } else {

        $("entry").value = eval($("entry").value);
      }
    }
// Asigning functions to implement input solely from keyboard
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
   $("equal").click();
  }
  else if (event.keyCode === 96) {
    $("num0").click();
  }
  else if (event.keyCode === 97) {
    $("num1").click();
  }
  else if (event.keyCode === 98) {
    $("num2").click();
  }
  else if (event.keyCode === 99) {
    $("num3").click();
  }
  else if (event.keyCode === 100) {
    $("num4").click();
  }
  else if (event.keyCode === 101) {
    $("num5").click();
  }
  else if (event.keyCode === 102) {
    $("num6").click();
  }
  else if (event.keyCode === 103) {
    $("num7").click();
  }
  else if (event.keyCode === 104) {
    $("num8").click();
  }
  else if (event.keyCode === 105) {
    $("num9").click();
  }
  else if (event.keyCode === 111) {
    $("divide").click();
  }
  else if (event.keyCode === 106) {
    $("multiply").click();
  }
  else if (event.keyCode === 109) {
    $("minus").click();
  }
  else if (event.keyCode === 107) {
    $("add").click();
  }
  else if (event.keyCode === 110) {
    $("point").click();
  }
  else if (event.keyCode === 8) {
    $("itemac").click();
  }

});
