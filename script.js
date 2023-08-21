// Funkcionalnost za rotirajuće slike
var images = [
    'https://source.unsplash.com/random/1920x1080/?apps',
    'https://source.unsplash.com/random/1920x1080/?influencers',
    'https://source.unsplash.com/random/1920x1080/?crowdfunding'
];
var currentImage = 0;

function changeImage() {
    var heroElement = document.querySelector('.hero');
    if (heroElement) {
        heroElement.style.backgroundImage = 'url(' + images[currentImage] + ')';
        currentImage = (currentImage + 1) % images.length;
    } else {
        console.error('Element s klasom .hero nije pronađen');
    }
}

window.onload = function() {
    setInterval(changeImage, 5000); // mijenja sliku svakih 5 sekundi
};
