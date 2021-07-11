//Template Created with simple Header, footer & body along with blank style.css & * apps.js on 6/30/2021.
//minimal use is Bootstrap Container, row and col.

localStorage.setItem("_quantityManualClick1", 0);
localStorage.setItem("_quantityManualClick2", 0);
localStorage.setItem("_quantityAutoClick1", 0);
localStorage.setItem("_quantityAutoClick2", 0);

// global variables
let cheese = 0;

//manual click1 parameters
var manualClick1Price = -12;
var manualClick1Multiplier = 1.5;
var manualClick1Bonus = 1;
var _quantityManualClick1 = 0;

//manual click2 parameters
var manualClick2Price = -15
var manualClick2Multiplier = 3
var _quantityManualClick2 = 0;

//auto click1 parameters 
var autoClick1Price = -6;
var _quantityAutoClick1 = 0;
var autoClick1multiplier = 2;

//auto click2 parameters 
var autoClick2Price = -20;
var _quantityAutoClick2 = 0;
var autoClick2multiplier = 4;

//this var is used to break the loop for auto increment after clicking autoclicks
var functionout;

//define seconds here for autoclicks
var setTimeAutoClick1 = 1;
var setTimeAutoClick2 = 3;

let manualUpgrades = {
  manualclick1: {
    price: manualClick1Price,
    quantity: _quantityManualClick1,
    multiplier: manualClick1Multiplier,
    bonus: manualClick1Bonus,
  },
  manualclick2: {
    price: manualClick2Price,
    quantity: _quantityManualClick2,
    multiplier: manualClick2Multiplier,
  }
};

let autoUpgrades = {
  autoclick1: {
    price: autoClick1Price,
    quantity: _quantityAutoClick1,
    multiplier: autoClick1multiplier,
  },
  autoclick2: {
    price: autoClick2Price,
    quantity: _quantityAutoClick2,
    multiplier: autoClick2multiplier,
  }
};

function manualupgrade(manualclick1) {
  let entries = []
  entries = Object.entries(manualUpgrades.manualclick1);

  var quantityManualClick1 = 0;
  var quantityManualClick2 = 0;
  var quantityAutoClick1 = 0;
  var quantityAutoClick2 = 0;

  if (manualclick1 == 'manualclick1') {
    var session = localStorage.getItem("_quantityManualClick1");
    let m1 = 0;
    if (session != null) {
      //substract the price from cheese
      subtractCheese(manualUpgrades.manualclick1.price);

      quantityManualClick1 = parseInt(session) + 1;
      _quantityManualClick1 = quantityManualClick1
      const x = manualUpgrades.manualclick1;
      x.quantity = _quantityManualClick1;

      // update the price values based on Multipler
      x.price = x.price * x.multiplier;
      m1 = x.multiplier;

      // Adding bonus value 
      if (x.quantity >= m1) { incrementcheese(manualClick1Bonus) }
      localStorage.setItem("_quantityManualClick1", _quantityManualClick1);
    }
    //  document.getElementById("manual1").innerHTML = "M:" + m1 + " B:" + manualClick1Bonus;
  }

  if (manualclick1 == 'manualclick2') {
    var session = localStorage.getItem("_quantityManualClick2");
    let m2 = 0;
    if (session != null) {
      //substract the price from cheese
      subtractCheese(manualUpgrades.manualclick2.price);

      quantityManualClick2 = parseInt(session) + 1;
      _quantityManualClick2 = quantityManualClick2
      const x = manualUpgrades.manualclick2;

      // update the price values based on Multipler
      x.price = x.price * x.multiplier;

      m2 = x.multiplier;

      x.quantity = _quantityManualClick2;
      localStorage.setItem("_quantityManualClick2", _quantityManualClick2);
    }
    //   document.getElementById("manual2").innerHTML = "M:" + m2;

  }

  if (manualclick1 == 'autoclick2') {

    var session = localStorage.getItem("_quantityAutoClick2");
    if (session != null) {
      quantityAutoClick2 = parseInt(session) + 1;
      _quantityAutoClick2 = quantityAutoClick2
      const x = autoUpgrades.autoclick2;
      x.quantity = _quantityAutoClick2;

      // update the price values based on Multipler
      x.price = x.price * x.multiplier;

      x.quantity = _quantityAutoClick2;
      localStorage.setItem("_quantityAutoClick2", _quantityAutoClick2);
    }
    //   document.getElementById("auto2").innerHTML = "M:" + autoClick2multiplier;
  }

  if (manualclick1 == 'autoclick1') {

    var session = localStorage.getItem("_quantityAutoClick1");
    if (session != null) {
      quantityAutoClick1 = parseInt(session) + 1;
      _quantityAutoClick1 = quantityAutoClick1
      const x = autoUpgrades.autoclick1;
      x.quantity = _quantityAutoClick1;

      // update the price values based on Multipler
      x.price = x.price * x.multiplier;

      x.quantity = _quantityAutoClick1;
      localStorage.setItem("_quantityAutoClick1", _quantityAutoClick1);
    }
    //   document.getElementById("auto1").innerHTML = "M:" + autoClick1multiplier;
  }

  //displaybtnInfo();

  //Fecth the current information from th object based on the passed parameter
  displayInventory();
}

// main display 
function displayInventory() {
  _quantityManualClick1 = _quantityManualClick1;
  _quantityManualClick2 = _quantityManualClick2;
  _quantityAutoClick1 = _quantityAutoClick1;
  _quantityAutoClick2 = _quantityAutoClick2;

  let template = ''
  var kvalue;
  var cheesecheck;

  template = '<span class="iconify" data-icon="mdi:cash-multiple" data-inline="false"></span>'
  // Cheese value from global variable
  template += ` :  ` + Math.abs(Math.round(cheese));
  //  template += `Cheese collected :  ` + Math.abs(Math.round(cheese));

  template += '<ul>' + "\r \n" + '</ul>';

  // Fecth the quantity for each key from manualUpgrades & autoUpgrades
  for (const key in manualUpgrades) {
    kvalue = key;
    template += '<ul>' + "\r \n" + '</ul>';

    if (kvalue == 'manualclick1') {
      template += '<ul>' + '<span class="iconify" data-icon="mdi:alien" data-inline="false"></span>';
      template += ' - Qty: ' + Math.abs(Math.round(manualUpgrades[kvalue].quantity)) + ', Price: ' + Math.abs(Math.round(manualUpgrades[kvalue].price)) + '</ul>';
    }
    if (kvalue == 'manualclick2') {
      template += '<ul>' + '<span class="iconify" data-icon="mdi:alien-outline"data - inline="false" ></span>';
      template += ' - Qty: ' + Math.abs(Math.round(manualUpgrades[kvalue].quantity)) + ', Price: ' + Math.abs(Math.round(manualUpgrades[kvalue].price)) + '</ul>';
    }
  }
  // template += '<ul>' + capitalize(kvalue) + '- Qty: ' + Math.abs(Math.round(manualUpgrades[kvalue].quantity)) + ', Price: ' + Math.abs(Math.round(manualUpgrades[kvalue].price)) + '</ul>';
  // }

  template += "\r \n";

  for (const key in autoUpgrades) {

    kvalue = key;
    template += '<ul>' + "\r \n" + '</ul>';

    if (kvalue == 'autoclick1') {
      template += '<ul>' + '<span class="iconify" data-icon="mdi:archive-arrow-up" data-inline="false"></span>';
      template += ' - Qty: ' + Math.abs(Math.round(autoUpgrades[kvalue].quantity)) + ',  Price: ' + Math.abs(Math.round(autoUpgrades[kvalue].price)) + '</ul>';
    }
    if (kvalue == 'autoclick2') {
      template += '<ul>' + '<span class="iconify" data-icon="mdi:archive-arrow-up-outline" data-inline="false"></span>';
      template += ' - Qty: ' + Math.abs(Math.round(autoUpgrades[kvalue].quantity)) + ',  Price: ' + Math.abs(Math.round(autoUpgrades[kvalue].price)) + '</ul>';
    }
    // template += '<ul>' + capitalize(kvalue) + '- Qty: ' + Math.abs(Math.round(autoUpgrades[kvalue].quantity)) + ',  Price: ' + Math.abs(Math.round(autoUpgrades[kvalue].price)) + '</ul>';
  }
  document.getElementById('inventory').innerHTML = template

  if (manualUpgrades.manualclick1) {
    cheesecheck = Math.abs(manualUpgrades.manualclick1.price)
    if (cheese >= cheesecheck)
      document.getElementById("manualclick1").disabled = false;
    else
      document.getElementById("manualclick1").disabled = true;
  }

  if (manualUpgrades.manualclick2) {
    cheesecheck = Math.abs(manualUpgrades.manualclick2.price)
    if (cheese >= cheesecheck)
      document.getElementById("manualclick2").disabled = false;
    else
      document.getElementById("manualclick2").disabled = true;
  }

  if (autoUpgrades.autoclick1) {
    cheesecheck = Math.abs(autoUpgrades.autoclick1.price)
    if (cheese >= cheesecheck)
      document.getElementById("autoclick1").disabled = false;
    else
      document.getElementById("autoclick1").disabled = true;
  }

  if (autoUpgrades.autoclick2) {
    cheesecheck = Math.abs(autoUpgrades.autoclick2.price)

    if (cheese >= cheesecheck) {
      document.getElementById("autoclick2").disabled = false;
    }
    else {
      document.getElementById("autoclick2").disabled = true;
    }
  }

  displaybtnInfo();
}

function displaybtnInfo() {

  document.getElementById("manual1").innerHTML = "M:" + manualUpgrades.manualclick1.multiplier + " B:" + manualUpgrades.manualclick1.bonus;
  document.getElementById("manual2").innerHTML = "M:" + manualUpgrades.manualclick2.multiplier;
  document.getElementById("auto1").innerHTML = "M:" + autoClick1multiplier;
  document.getElementById("auto2").innerHTML = "M:" + autoClick2multiplier;

}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


function incrementcheese(incrementvalue) {
  // increment the cheese and pass it 
  // update the cheese value
  // Current Cheese values are global; later on change to object
  let defaultCheese = 1;

  if (incrementvalue) {
    cheese += incrementvalue;
  }
  else
    cheese += defaultCheese;
  //document.getElementById("userclick").innerHTML = "Cheese collected: " + cheese;
  displayInventory();
}

function subtractCheese(subtractionValue) {
  cheese += subtractionValue;
  displayInventory();
}

// Function created to test the SetINternal
function Autobtn(btnclk) {
  let intervalID;

  console.log(btnclk);
  intervalID = setInterval(incrementcheese, 100);
  //  Calling the Auto Increment buttons under Setinterval
  manualupgrade(btnclk);
}

displayInventory();

