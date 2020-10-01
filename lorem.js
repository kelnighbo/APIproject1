baseURL = "https://picsum.photos";
let url;
const imgsArray = ['https://picsum.photos/id/10/200/300', 'https://picsum.photos/id/1006/200/300', 'https://picsum.photos/id/1018/200/300', 'https://picsum.photos/id/1020/200/300']

console.log('hello')

function fetchImages() {
    url = `${baseURL}/v2/list`
    console.log('Hello world')
    fetch(url)
        .then(result => result.json())
        .then(jsonified => displayImages(jsonified));
}

function displayImages() {
    var imgs = document.getElementById("imgs")
    let container = document.getElementById("container")
    for (let i = 0; i < imgsArray.length; i++) {
        console.log(imgsArray[i]);
        let img = document.createElement("img")
        img.src = imgsArray[i]
        container.appendChild(img)
      }
};

//fetchImages();
displayImages();

