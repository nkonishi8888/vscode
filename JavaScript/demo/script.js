document.getElementById("submitBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  document.getElementById("output").textContent = `こんにちは、${name}さん！`;
});