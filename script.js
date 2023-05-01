let likeCount = 389;

updateLikeCount();

// Function to handle like button click
function likeButtonClick() {
  likeCount++;
  updateLikeCount();
}

// Function to update the like count on the page
function updateLikeCount() {
  document.getElementById("like-count").textContent = likeCount;
}

// Utility function for formatting number as currency
function formatCurrency(num) {
  var sign, integer, placesTilFirstSep;
  sign = num < 0 ? "-" : "";
  num = Math.abs(+num || 0);
  integer = parseInt(num, 10) + "";
  placesTilFirstSep = integer.length > 3 ? integer.length % 3 : 0;
  return sign + "\u00A3" + (placesTilFirstSep ? integer.substr(0, placesTilFirstSep) + "," : "") + integer.substr(placesTilFirstSep).replace(/(\d{3})(?=\d)/g, "$1,") + "." + Math.abs(num - integer).toFixed(2).slice(2)
}

