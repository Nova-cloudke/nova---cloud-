// Nova Cloud V2 - Application Logic

document.addEventListener("DOMContentLoaded", () => {
  console.log("Nova Cloud is ready.");

  const buttons = document.querySelectorAll(".cta");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Nova Cloud navigation activated.");
    });
  });
});
