let likeCount = 21;

function likeImage() {
  likeCount++;
  document.querySelector('.like-count').textContent = likeCount;
}
