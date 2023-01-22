const toggleButton = document.getElementById("dropdown");
const table = document.getElementById("mods");
let isTableVisible = true;

toggleButton.addEventListener("click", function() {
    if (isTableVisible) {
        table.style.display = "none";
        toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i> Show Mods';
        isTableVisible = false;
    } else {
        table.style.display = "table";
        toggleButton.innerHTML = '<i class="fas fa-eye"></i> Hide Mods';
        isTableVisible = true;
    }
});
