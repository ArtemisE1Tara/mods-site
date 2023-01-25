const toggleCoreModsButton = document.getElementById("coredropdown");
const tableCoreMods = document.getElementById("coremods");
let isCoreTableVisible = false;

toggleCoreModsButton.addEventListener("click", function() {
    if (isCoreTableVisible) {
        tableCoreMods.style.display = "none";
        toggleCoreModsButton.innerHTML = '<i class="fas fa-eye-slash"></i> Show Coremods';
        isCoreTableVisible = false;
    } else {
        tableCoreMods.style.display = "table";
        toggleCoreModsButton.innerHTML = '<i class="fas fa-eye"></i> Hide Coremods';
        isCoreTableVisible = true;
    }
});