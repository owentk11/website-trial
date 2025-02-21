function turnBlue() {
    console.log("Button clicked!");
    document.body.style.backgroundColor = "#0000FF";
    setTimeout(function() {
        document.body.style.backgroundColor = "#f4f4f4";
    }, 3000);
}