$(document).ready(function() {
    $('#tax-form').submit(function(event) {
      event.preventDefault();
      
      // Get values from input fields
      var age = $('#age').val();
      var grossIncome = parseFloat($('#gross-annual-income').val());
      var extraIncome = parseFloat($('#extra-income').val());
      var deductions = parseFloat($('#deductions').val());
      
      // Calculate tax based on age and income
      var tax = 0;
      if (age < 40) {
        tax = grossIncome * 0.1;
      } else if (age >= 40 && age < 60) {
        tax = grossIncome * 0.2;
      } else if (age >= 60) {
        tax = grossIncome * 0.3;
      }
      
      // Add extra income and subtract deductions
      tax += extraIncome;
      tax -= deductions;
      
      // Display the result in the results-input field
      $('.results-input').val('Result is ' + tax.toFixed(2));
    });
  });
  