var arr_img = [
    './images/banners/Banner-kieler-720x445.png',
    './images/banners/Banner-may-xay-720x445.png',
    './images/banners/Banner-tivi-thong-minh-720x445.png',
];

var i = 0;

function left() {
    if (i === 0) {
        i = arr_img.length - 1;
    } else {
        i--;
    }
    document.querySelector("#banner").src = arr_img[i];
}

function right() {
    if (i === arr_img.length - 1) {
        i = 0;
    } else {
        i++;
    }
    document.querySelector("#banner").src = arr_img[i];
}

setInterval(right, 10000);
