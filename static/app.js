"strict mode";

$("form").on("submit", async function (e) {
  // Stopping the page from refreshing
  e.preventDefault();

  // Get the value from form
  const guess = document.querySelector("form").value;

  res = await axios.post("http://127.0.0.1:5000", { user_guess: guess });
  console.log(res);
});
