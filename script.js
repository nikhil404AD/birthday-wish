function celebrate() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name === "" || age === "") {
    alert("Please enter name and age 🎈");
    return;
  }

  document.getElementById("wish").innerText =
    `🎉 Happy ${age}th Birthday, ${name}! 🎉`;

  document.getElementById("cake").classList.remove("hidden");
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("candle")) {
    const flame = document.getElementById("flame");
    flame.style.display = "none";
    alert("🎂 Candles blown! Make a wish ✨");
  }
});
