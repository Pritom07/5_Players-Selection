document.addEventListener("DOMContentLoaded", function () {
    const selectButtons = document.querySelectorAll(".card-body button");
    selectButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            const targetEvent = event.target;
            const targetParent = targetEvent.parentNode;
            const playerName = targetParent.children[0].innerText;
            const liCount = addUlElement(playerName, targetEvent);
            const removeButton = document.getElementById("remove");
            if (liCount >= 0) {
                removeButton.removeAttribute("disabled");
                removeButton.style.backgroundColor = "blue";
            }
        })
    })
})

document.getElementById("remove").addEventListener("click", function () {
    const ulId = document.getElementById("fiveplayersfield");
    const liCount = ulId.children.length;
    const removeButton = document.getElementById("remove");
    if (liCount == 1) {
        removeButton.setAttribute("disabled", "true");
        removeButton.style.backgroundColor = "grey";
    }
    const getRemoved = ulId.children[liCount - 1];
    ulId.removeChild(getRemoved);
    const selectButtons = document.querySelectorAll(".card-body button");
    selectButtons.forEach((button) => {
        const playerNameTag = button.parentNode.children[0];
        const playerName = playerNameTag.textContent;
        const removePlayerName = getRemoved.textContent;
        if (playerName == removePlayerName) {
            button.removeAttribute("disabled");
            button.style.backgroundColor = "blue";
        }
    })
})
