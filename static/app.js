"use strict";

function showWord(msg) {
  $(".msg").text(msg).css("color", "green");
}

function showMessage(msg) {
  $(".msg").text(msg).css("color", "red");
}

$(".word-form").on("submit", async function (e) {
  // Stopping the page from refreshing
  e.preventDefault();

  // Get the value from form
  const guess = document.querySelector(".word-form").value;

  const res = await axios.get("/result", { params: { guess: guess } });
  console.log(res);
  if (res.data.result === "not-word") {
    const message = "Not a valid word!";
    showMessage(message);
  } else if (res.data.result === "not-on-board") {
    const message = "Not on the board";
    showMessage(message);
  } else {
    const message = "That is correct";
    showWord(message);
  }
});
