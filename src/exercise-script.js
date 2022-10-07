async function getImageUrls() {
    const data = await new Promise((resolve, reject) => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        .then((response) => response.json())
        .then((data) => resolve(data))
        });
    const imageUrls = data.map((dataItem) => dataItem.url)
    console.log(data)
    return imageUrls
}
function makeImages(imageUrls) {
    const images = document.querySelector('.img')
    const html = imageUrls.reduce((accum, imageUrlItem) => {
        return `${accum}<img src="${imageUrlItem}" width="300" height="300">`
    }, '')
    images.innerHTML = html
}

async function runOnLoad() {
    const imageUrls = await getImageUrls();
    makeImages(imageUrls);
}

window.onload = runOnLoad();