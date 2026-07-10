<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS Billing Calculator Practical</title>
</head>
<body>
    <h1>JavaScript Billing Calculator</h1>
    <p>Click the button below to start the practical calculator:</p>
    <button onclick="calculateBill()">Run Calculator</button>

    <script>
    // 1. Variable Scopes
    const TAX_RATE = 0.18;   
    let discountRate = 0.05; 
    var cashierName = "Sam"; 

    function calculateBill() {
        // User Input via prompts
        const itemName = prompt("Enter item name (e.g., Laptop):", "Laptop");
        const itemPrice = parseFloat(prompt("Enter price per item ($):", "1200"));
        const quantity = parseInt(prompt("Enter quantity:", "2"));

        // Calculations
        let rawTotal = itemPrice * quantity;
        let discountAmount = rawTotal * discountRate;
        let taxableAmount = rawTotal - discountAmount;
        let taxAmount = taxableAmount * TAX_RATE;
        let finalBill = taxableAmount + taxAmount;

        const billObject = {
            name: itemName,
            qty: quantity,
            total: finalBill,
            savings: discountAmount,
            tax: taxAmount
        };

        // 3. Object Destructuring
        const { name, qty, total, savings, tax } = billObject;

        // 4. Template Literals
        const invoiceSummary = `
=================================
          TAX INVOICE          
=================================
Cashier     : ${cashierName}
Item Name   : ${name}
Quantity    : ${qty}
Raw Total   : $${rawTotal.toFixed(2)}
Discount    : -$${savings.toFixed(2)} (${discountRate * 100}%)
Tax (GST)   : +$${tax.toFixed(2)} (${TAX_RATE * 100}%)
---------------------------------
TOTAL DUE   : $${total.toFixed(2)}
=================================
   Thank you for shopping!
        `;

        console.log(invoiceSummary);
        alert(invoiceSummary); 
    }
    </script>
</body>
</html>
