function increment() {
    let initialCount = document.getElementById("num").innerText;
    let count = parseInt(initialCount);
    count += 1;
    document.getElementById("num").innerText = JSON.stringify(count);
}

const save = () => {
    console.log(document.getElementById("num").innerText)
}