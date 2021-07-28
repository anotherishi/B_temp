var rs = Math.floor(Math.random() * 11 + 2); // 11+4 original
var t = new Trianglify({
    // x_gradient: Trianglify.colorbrewer.Spectral[rs],
    // y_gradient: Trianglify.colorbrewer.Spectral[rs],
    x_gradient: Trianglify.colorbrewer.Spectral[10],
    noiseIntensity: 0,
    cellsize: 80,
});
// var pattern = t.generate(window.innerWidth, window.innerWidth+200);

var pattern = t.generate(window.innerWidth, window.innerHeight);
document.documentElement.style.backgroundImage = document.getElementsByTagName(
    "header"
)[0].style.backgroundImage = pattern.dataUrl;
// document.body.style.backgroundImage = pattern.dataUrl;

function updatebg(n) {
    document.documentElement.style.backgroundImage =
        document.getElementsByTagName("header")[0].style.backgroundImage =
            new Trianglify({
                x_gradient: Trianglify.colorbrewer.Spectral[n],
                noiseIntensity: 0,
                cellsize: 80,
            }).generate(window.innerWidth, window.innerHeight).dataUrl;
}
