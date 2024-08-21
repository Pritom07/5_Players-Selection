function addUlElement(playerName, targetEvent) {
    const ulId = document.getElementById("fiveplayersfield");
    const listcount = ulId.children.length;
    if (listcount > 4) {
        alert("You can't choose more than 5 players. It's a 5 players game, you know!!");
        return;
    }
    else {
        const li = document.createElement("li");
        li.textContent = playerName;
        ulId.appendChild(li);
        const button = targetEvent;
        button.setAttribute("disabled", "true");
        button.style.backgroundColor = "grey";
        return listcount;
    }
}