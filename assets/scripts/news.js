function displayDescription() {
  const newsDescription = document.querySelector('news-description');
  document.querySelectorAll('.news-box').forEach(box => {
    box.addEventListener('mouseleave', () => {
      newsDescription.style.display = 'none';
    });
  });
}