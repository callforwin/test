document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    alert('Hvala na prijavi, ' + email + '! Uskoro ćete primiti obavijesti od nas.');
    // Ovdje možete dodati logiku za spremanje e-maila u bazu podataka ili slanje na server
});
