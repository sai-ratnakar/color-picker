function fun() {
    var s = "", t = "";
    const v=document.getElementById("d")
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    for (let i = 0; i < 6; i++) {
        s += arr[Math.floor(Math.random() * arr.length)]
        t += arr[Math.floor(Math.random() * arr.length)]
    }
    v.style.backgroundColor = "#" + s;
}