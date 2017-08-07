var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require("prompt")

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazon"
});

con.connect(function(err) {
  if (err) throw err;
  // start();
  // buy();
});


function displayInventory() {
	// console.log('___ENTER displayInventory___');

	// Construct the db query string
	queryStr = 'SELECT * FROM products';

	// Make the db query
	con.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Store Inventory: ');
		console.log('...................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Product ID: ' + data[i].item_id;
			strOut += '  Product Name: ' + data[i].product_name;
			strOut += '   Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	//Prompt the user for item/quantity they would like to purchase
	  	buyStuff();
	})
}

displayInventory()


function buyStuff() {
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the procuct ID of what you want to buy?"
      },
      {
      	name: "quantity",
      	type: "input",
      	message: "How many would you like to buy?"
      }
      ])
    .then(function(answer){
    var buying = answer.item;
    var quantity = answer.quantity;
        con.query('SELECT * FROM products WHERE item_id=' + buying, function(err, selectedItem) {
    	if (err) throw err;
         if (selectedItem[0].stock_quantity - quantity >= 0) {
       		  console.log("Bamazon's Inventory has enough of that item (" + selectedItem[0].item_id + ")!");
              console.log("Quantity in Stock: " + selectedItem[0].stock_quantity + " Order Quantity: " + quantity);
              console.log("You will be charged " + (answer.quantity * selectedItem[0].price) +  " dollars.  Thank you for shopping at Bamazon.");
              con.query('UPDATE products SET stock_quantity=? WHERE item_id=?', [selectedItem[0].StockQuantity - quantity, buying],
              function(err, inventory) {
              	// if (err) throw err;
                   // Runs the prompt again, so the user can keep shopping.9
                   displayInventory();
              });  // Ends the code to remove item from inventory.

         }

         else {
              console.log("Insufficient quantity.  Please order less of that item, as Bamazon only has " + selectedItem[0].stock_quantity + 
              	" " + selectedItem[0].product_name + " in stock at this moment.");
              displayInventory();
         }
    });

    })
}


