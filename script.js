// Funkcija koja će se pozvati nakon što se stranica učita
function onPageLoad() {
    // Funkcionalnost za formu za prijavu
    document.getElementById('subscribe-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var email = document.getElementById('email').value;
        alert('Hvala na prijavi, ' + email + '! Uskoro ćete primiti obavijesti od nas.');
        // Ovdje možete dodati logiku za spremanje e-maila u bazu podataka ili slanje na server
    });

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

    setInterval(changeImage, 5000); // mijenja sliku svakih 5 sekundi
}

// Dodajemo slušatelj koji će pozvati funkciju onPageLoad nakon što se stranica učita
window.addEventListener('load', onPageLoad);
