// like button and count

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


// carousel 

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});
