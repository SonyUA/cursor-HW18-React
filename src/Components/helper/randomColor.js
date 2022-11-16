function bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
function random_bg_color() {
    let color = document.getElementsByClassName("circle");
    for (let i = 0; i < color.length; i++) {
        color[i].style.cssText = `background-color: ${bg_color()};`;
    }
}

export default random_bg_color;
