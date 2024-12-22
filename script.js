// button = document.getElementByClass('hamburger-menu');


const myPurple = "rgb(79, 0, 158)";

function expand_menu() {
    console.log("helo");
    document.getElementById("myNav").style.height = "100%";
};

function close_menu() {
    document.getElementById("myNav").style.height = "0%";
}