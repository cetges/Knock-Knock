document.getElementById("joke-part2").style.display = "none";
document.getElementById("button2").style.display = "none";
document.getElementById("joke-part3").style.display = "none";
document.getElementById("again").style.display = "none";


document.getElementById("button1").addEventListener("click", function() {
    document.getElementById("joke-part1").style.display = "none";
    document.getElementById("button1").style.display = "none";
    document.getElementById("joke-part2").style.display = "block";
    document.getElementById("button2").style.display = "block";
});

document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("joke-part2").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("joke-part3").style.display = "block";
    document.getElementById("again").style.display = "block";
});

document.getElementById("again").addEventListener("click", function() {
    document.getElementById("joke-part2").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("joke-part3").style.display = "none";
    document.getElementById("again").style.display = "none";
    document.getElementById("joke-part1").style.display = "block";
    document.getElementById("button1").style.display = "block";
});
