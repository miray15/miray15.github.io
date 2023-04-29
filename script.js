// let likeCount = 21;

// function likeImage() {
//   likeCount++;
//   document.querySelector('.like-count').textContent = likeCount;
// }

window.onload = function() {
  let likeCount = 351; // initialize like count to 100
  document.getElementById('like-count').textContent = likeCount;
  
  document.getElementById('like-button').addEventListener('click', function() {
    likeCount++;
    document.getElementById('like-count').textContent = likeCount;
  });
}
