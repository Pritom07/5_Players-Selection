document.addEventListener("DOMContentLoaded", function () {
    const selectButtons = document.querySelectorAll(".card-body button");
    selectButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            const targetEvent = event.target;
            const targetParent = targetEvent.parentNode;
            const playerName = targetParent.children[0].innerText;
            addUlElement(playerName, targetEvent);
        })
    })
})