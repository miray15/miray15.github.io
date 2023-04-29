let likeCount = 0;

function likeImage() {
  likeCount++;
  document.querySelector('.like-count').textContent = likeCount;
}
