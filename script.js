functionfunction celebrate() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const message = document.getElementById("message").value;

  if (name === "" || age === "" || message === "") {
    alert("Please fill all fields 🎈");
    return;
  }

  document.getElementById("wish").innerText =
    `🎉 Happy ${age}th Birthday, ${name}! 🎉\n\n💌 ${message}`;

  document.getElementById("cake").classList.remove("hidden");
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("candle")) {
    document.getElementById("flame").style.display = "none";
    alert("🕯️ Candles blown! Make a wish ✨");
  }
});
