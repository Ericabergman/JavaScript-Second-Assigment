// BANK ACCOUNT

// Start by creating the object and the properties.
// You can leave the functions empty for now if you want.
// You'll find all the information about what properties the object should have in the readme file.

// In the deposit and withdrawal function use this code to show the prompt

// parseFloat(prompt("Put some proper message here"));
// parseFloat(prompt("welcome"));

// You need to change the message of course.
// You should also do some research why parseFloat() is used here
// answer by making a comment in the code.
// Be aware of that you need to add some code to this so you can display the actual input.

// In the deposit and withdrawal function you also need to handle som potential errors.
// To handle one of the potential error you can use this piece of code
// isNaN(variableName);
// you need to change the variableName to your actual variable.
// you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// Do you know what operator you should use?

// In the accountError and accountExit function you can use this to show a message to the user:
// alert("your code here and maybe properties");
// alert("account name, ");

// of course you need to put a proper message and you might need to display some of the properties.

// STARER FUNCTION

// function atm() {
//   // let choice = parseInt(prompt("Display menu choices here"));
//   let choice = parseInt(
//     prompt(
//       "Select a choice 1.) See balance 2.) Make a depoist 3.) Make a withdwal 4.) Get account name 5.) Exit"
//     )
//   );

// prompt user for choice.

// you can use the variable choice for your switch or if/else statement
// so choice will hold the value of the user input.

// getBalance();

// ---------------------------------------------------------------------------

// In this assignment you will make a small program that will simulate a bank account and atm (a cash machine).
// You will get some guidance that will help you solve this assignment.

// In this assignment you will have to use:
// * object
// * functions
// * this keyword
// * if/else statement or switch
// * prompt or only the console
// * conditional operators
// * You will also have to handle errors, like wrong input. Some functions for this assignment should be properties to the account object.

// GUIDANCE:

// The objects should have the following properties.
// You can also see what data type each property should be.

// Object name: account Properties of the object:

// accountName: String,
// balance: Number (initiate this to 100 from start),
// getBalance: function,
// deposit: function,
// withdrawal = uttag:  function,
// getAccountName: function,
// accountError: function,
// exitAccount: function

// ----------------------------------------------------------------------

// STEPS:

// Go through these steps to solve the assigment.

// 1.
// - Start by creating an object called account and define all the properties above.
// - Initiate balance to 100 from start.
// - You can start by just leaving the function properties empty if that makes it easier.
// - Like this: getBalance: function () { },

// created a object called accaount
// defined all the properties
// const accaount = {
//   accountName: "Erica Bergman", //            // String,
//   balance: 100, //                 Number,    // (initiate this to 100 from start),
//   getBalance: "", //                          // function,
//   deposit: "", //     = insätttning           // function,
//   withdrawal: "", //                          // = uttag // function,
//   getAccountName: "", //                      // function,
//   accountError: "", //                        // function,
//   exitAccount: "", //                         // function,
// };

// ---------------------------------------------------------------------------------------

// 2.
// - You will be able to clone starter code that i provided for you and you can also find some guiding images in the code repository.
// - Check the images.pdf file.
// - You can use a switch or if/else statement to create the navigate in the menu but comment what you based your choice on, you can comment in the code.

// const info = prompt("What information du you want choose between");
// console.log(accaount[info]);

// use if / else

// if (info) {
// } else console.log("wrong input, try something else");
// alert("your code here and maybe properties");

// ("Select a choice 1.) See balance 2.) Make a depoist 3.) Make a withdwal 4.) Get account name 5.)");

// ---------------------------------------------------------------------------------------

// 3.
// - The first function that is a property of the account object is getBalance.
// - This function should display the account balance for the user.
// - At start the account balance is 100 but this can change depending on if the user makes a deposit or withdrawal.
// - Don't forget to point at the actual property of the object.
// - After get balance has been called you need to show the menu to the user again.

// ---------------------------------------------------------------------------------------

// 4.
// - The second function that is a property of the object is deposit.
// - This function should first ask the user how much he/she wants to deposit.
// - You have some guidance in the starter code on how to sole this.
// - You need to handle potential errors aswell.
// - A user should not be able to deposit 0, empty string or string or negative values.
// - I provided one solution to a potential error already but you will need to add some more in the condition and use logical operator.
// - If the user tries not enter a non valid value you should display a error message and run the deposit function again.
// - This works fine you can actually run the deposit function inside of the deposit function using this.deposit().
// - When the deposit function is done you should display the menu to the user again.

// ---------------------------------------------------------------------------------------

// 5.
// - The third function that is a property of the object is withdrawal.
// - This function should handle when the user wants to collect money from the account.
// - You have some guidance here in the starter code.
// - And just like the deposit function the user should not be able to withdraw 0, empty string/string or negative number.
// - If the user tries to enter a non valid value you should handle it the same way as in the deposit function.
// - And again, after the withdrawal function the user should see the menu.

// ---------------------------------------------------------------------------------------

// 6.
// - The fourth function is getAccountName and is also a property of the object.
// - This function should display the account holders name to the user.
// - When the user clicks ok you should display the menu again.

// ---------------------------------------------------------------------------------------

// 7.
// - The fifth function (also property of the object) accountError should handle errors and display a proper message to the user when the function i executed.
// - Again, show the menu for the user when the error message has been shown.

// ---------------------------------------------------------------------------------------

// 8.
// - The last of the functions that is a property of the object is exitAccount.
// - And this function should close the whole window.
// - Try and find information by yourself on how you close a window using javascript.
// - If you struggle with this please contact me and I'll guide you to the right answer.
// - Hint: try to goole "close window javascript"

// ---------------------------------------------------------------------------------------

// 9.
// - The main function should be called atm() and that is not a function that is a property of the object.
// - This function holds the actual menu, the switch or if/else.
// - I've provided som starter code inside of that function but you need to modify it also run the function.

// GOOD LUCK! Don't hesitate to ask for guidance or help when working with assigment :)

const accaount = {
  accountName: "Erica Bergman",
  balance: 100,
  getBalance: function () {
    alert("your balance is " + this.balance);
    atm();
  },

  // -----------------------------------------------------------------------------------------------

  getAccountName: function () {
    alert("Your account name is: " + this.accountName);
    atm();
  },

  // -----------------------------------------------------------------------------------------------

  deposit: function () {
    let deposit = parseFloat(prompt("How much do you want to deposit?"));

    if (isNaN(deposit) || deposit === "" || deposit <= 0) {
      // inte ett nummer, inte en tom sträng, inte 0 eller minus värde
      alert("Error: please enter a valide number");
      this.deposit();
      // visar användaren igen och frågar hur mycket den vill sätta in
    } else {
      this.balance += deposit;
      //this.balance = this.balance + deposit;
      this.getBalance();
    }
  },

  // -----------------------------------------------------------------------------------------------

  withdrawal: function () {
    let withdrawal = parseFloat(prompt("How much du you want to withdrawal ?"));

    if (isNaN(withdrawal) || withdrawal === "" || withdrawal <= 0) {
      // inte ett nummer, inte en tom sträng, inte 0 eller minus värde
      alert("Error: please enter a valide number");
      this.withdrawal();
      // här vill vi ju köra nåt igen
      // visar användaren igen och frågar hur mycket den vill ta ut in
    } else {
      this.balance -= withdrawal;
      //this.balance = this.balance + withdrawal;
      this.getBalance();
    }
    atm();
  },

  // -----------------------------------------------------------------------------------------------

  exitAccount: function () {
    // här klistrar du in det du kopierade
    const leave = confirm("Do yo want to exit?");
    if (leave) {
      window.close();
      console.log("you have selected exit");
    } else {
      atm();
    }
  },
};

function atm() {
  let choice = parseInt(
    prompt(
      "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
    )
  );

  // -----------------------------------------------------------------------------------------------

  switch (choice) {
    case 1:
      accaount.getBalance();
      // testa account.getBalance();
      break;
    case 2:
      accaount.deposit();
      break;
    case 3:
      accaount.withdrawal();
      break;
    case 4:
      accaount.getAccountName();
      break;
    case 5:
      accaount.exitAccount();
    default:
      console.log("Wrong input pleace chooce between 1 - 5");
      break;
  }
}

// -----------------------------------------------------------------------------------------------

function exitAccount() {
  const leave = confirm("Do you want to exit?");
  if (leave) {
    window.close();
    console.log("you have selected exit");
  } else {
  }
}

atm();
