// beberapa fungsi untuk debaging
console.log("Hello, World!");
console.error("This is an error message.");
console.warn("This is a warning message.");
console.info("This is an informational message.");
console.debug("This is a debug message.");
console.trace("This is a trace message.");
console.table([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]);
console.group("Grouped Messages");
console.log("Message 1 in group");
console.log("Message 2 in group");
console.groupEnd();
console.time("Timer");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Timer");
console.assert(1 === 2, "This assertion failed");



// menggunakan alert untuk memunculkan dialog
alert("This is an alert message.");
let userInput = prompt("Please enter your name:", "ussername");
console.log("User input:", userInput);
let isConfirmed = confirm("Do you want to proceed?");
console.log("User confirmed:", isConfirmed);

document.write("<h1>Hello World!</h1>");
        document.write("<hr>");
        document.write("<p>Saya sedang belajar Javascript</p>");
        document.write("di <b>petanikode.com</b>")

