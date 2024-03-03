const outer = document.querySelector(".outer");
const bigdiv = document.querySelector(".inner-container");
const inner = document.querySelector(".inner");
let str = "0123456789abcdeABCDE";
const ran = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += str[Math.floor(Math.random() * str.length)];
    }
    return color;
}

outer.addEventListener("click", (e) => {
    const { offsetX, offsetY } = e;
    let color = ran();
    bigdiv.style.backgroundColor = `${color}`;
    let colors = ran();
    inner.style.backgroundColor = `${colors}`;
    console.log(offsetX - 100, offsetY - 100);

    if ((offsetX - 50) > 0 && (offsetY - 50) > 0) {
        bigdiv.style.left = `${offsetX - 50}px`;
        bigdiv.style.top = `${offsetY - 50}px`;
    }

})