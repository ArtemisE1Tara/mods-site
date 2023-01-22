
const dropdownButton = document.getElementById("dropdown");
const table = document.getElementById("mods");
const rows = document.querySelectorAll("#mods tr");
let isTableVisible = false;

dropdownButton.addEventListener("click", function() {
    if (isTableVisible) {
        table.style.display = "none";
        dropdownButton.innerHTML = '<i class="fas fa-eye-slash"></i> Show Mods';
        rows.forEach(row => row.classList.remove("row-slide-in"));
        rows.forEach(row => row.classList.add("row-slide-out"));
        isTableVisible = false;
    } else {
        table.style.display = "table";
        dropdownButton.innerHTML = '<i class="fas fa-eye"></i> Hide Mods';
        rows.forEach(row => row.classList.remove("row-slide-out"));
        rows.forEach(row => row.classList.add("row-slide-in"));
        isTableVisible = true;
    }
});

