var images = [
    'https://source.unsplash.com/random/1920x1080/?apps',
    'https://source.unsplash.com/random/1920x1080/?influencers',
    'https://source.unsplash.com/random/1920x1080/?crowdfunding'
];
var randomImage = images[Math.floor(Math.random() * images.length)];

window.onload = function() {
    document.querySelector('.hero').style.backgroundImage = 'url(' + randomImage + ')';
};
