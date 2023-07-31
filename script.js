
window.onload = function() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById('orderDate').value = today;
}

document.getElementById('location').addEventListener('change', function() {
  let deliveryDetails = document.getElementById('deliveryDetails');
  if (this.value === 'dostava') {
    deliveryDetails.classList.remove('hidden');
  } else {
    deliveryDetails.classList.add('hidden');
  }
});

document.getElementById('paymentMethod').addEventListener('change', function() {
  let combinationPaymentDetails = document.getElementById('combinationPaymentDetails');
  if (this.value === 'kombinacija') {
    combinationPaymentDetails.classList.remove('hidden');
  } else {
    combinationPaymentDetails.classList.add('hidden');
  }
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // prikupi podatke i prikaži ih u konzoli
});
