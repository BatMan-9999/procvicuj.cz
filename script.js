let shit = [];
let shoot = [];

for (let x of document.querySelectorAll("table tr")) {
    if (x.querySelector(".td1") && x.querySelector(".td2")) {
        shit.push([
            x.querySelector(".td1").innerText.split(" ").slice(0, 2).join(" "),
            x.querySelector(".td2").innerText,
            x
        ]);
    }
}

let dists = ["km",null,null,"m","dm","cm","mm"];

for (let [numfrom, to, el] of shit) {
    let num = parseFloat(numfrom.split(" ")[0].replace(/\,/g, "."));
    let from = numfrom.split(" ")[1];
    from = dists.findIndex((k) => k === from);
    to = dists.findIndex((k) => k === to);
    let di = from - to;
    let n = parseInt(`1${"0".repeat(Math.abs(di))}`);

    let value = di < 0 ? (num * n) : (num / n);
    value = value.toString().replace(/\./g, ",");

    shoot.push([el, value]);
}

for (let [el, value] of shoot) {
    let int = undefined,
        i = 0;
    value = value.split("");
    int = setInterval(() => {
        el.querySelector("input").value = value.slice(0, i).join("");
        i++;
        if (i === value.length + 1) return clearInterval(int);
    }, 10);
}
