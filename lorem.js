baseURL = "https://picsum.photos";
let url;

console.log('hello')

function fetchImages() {
    url = `${baseURL}/v2/list`
    console.log('Hello world')
    fetch(url)
        .then(result => result.json())
        .then(jsonified => displayImages(jsonified));
}

function displayImages() {
    document.getElementById
};

fetchImages();
