let likeCount = 351;

// Function to handle like button click
function likeButtonClick() {
  likeCount++;
  updateLikeCount();
}

// Function to update the like count on the page
function updateLikeCount() {
  document.getElementById("like-count").textContent = likeCount;
}
