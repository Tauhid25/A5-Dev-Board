// go to next page
function goPage(id, path) {
    document.getElementById(id,).addEventListener("click",
        function () {
            window.location.href = path;
        })
}

// for get id
function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    if (convertedValue === 1) {
        alert("Congrates !!! You have completed all the current task");
    }
    return convertedValue;
}

// for set sum
function setSum(id, sum) {
    const value = document.getElementById(id).innerText = sum;
    return value;
}
