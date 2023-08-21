// Funkcionalnost za rotirajuće slike
var images = [
    'https://source.unsplash.com/random/1920x1080/?apps',
    'https://source.unsplash.com/random/1920x1080/?influencers',
    'https://source.unsplash.com/random/1920x1080/?crowdfunding'
];
var currentImage = 0;

function changeImage() {
    document.querySelector('.hero').style.backgroundImage = 'url(' + images[currentImage] + ')';
    currentImage = (currentImage + 1) % images.length;
}

window.onload = function() {
    setInterval(changeImage, 5000); // mijenja sliku svakih 5 sekundi
};
