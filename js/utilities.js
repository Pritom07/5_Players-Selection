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

function playerPrice(priceArray) {
    const priceCalculate = function (total, value) {
        return total + value;
    }
    const price = priceArray.reduce(priceCalculate, 0);
    return price;
}

function setText(elementId, value) {
    const targetTag = document.getElementById(elementId);
    targetTag.innerText = value;
}

function getText(elementId) {
    const targetTag = document.getElementById(elementId);
    const targetString = targetTag.innerText;
    const targetValue = parseFloat(targetString);
    return targetValue;
}

function getInputValue(elementId) {
    const targetField = document.getElementById(elementId);
    const targetFieldString = targetField.value;
    const targetFieldvalue = parseFloat(targetFieldString);
    return targetFieldvalue;
}