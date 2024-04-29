const textInEditor = document.getElementById("editor");
const textSaved = textInEditor.value  = localStorage.getItem("text");

textInEditor.addEventListener("input", () => {
    localStorage.setItem("text", textInEditor.value)
})
