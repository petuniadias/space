document.querySelectorAll('.news-box').forEach(box => {
  const newsContent = box.querySelector('.news-content');
  const newsTitle = box.querySelector('.news-title');

  box.addEventListener('mouseenter', () => {
    if (!box.newsContentPreview) { // Evita múltiplos elementos
      const newsContentPreview = document.createElement('p');
      newsContentPreview.classList.add('news-content-preview');
      newsContentPreview.innerHTML = `Hoje na cidade de Petersburgo, a Ovelha Xoné...`;

      newsContent.appendChild(newsContentPreview);

      box.newsContentPreview = newsContentPreview;

      newsTitle.style.transform = 'translateY(-55px)'; 
      newsTitle.style.transition = 'transform 0.3s ease-in-out'; 
      newsContent.style.transform = 'translateY(15px)';
      newsContent.style.transition = 'transform 0.3s ease-in-out';
    }
  });

  box.addEventListener('mouseleave', () => {
    if (box.newsContentPreview) {
      newsContent.removeChild(box.newsContentPreview);
      box.newsContentPreview = null;

      newsTitle.style.transform = 'translateY(-20px)'; 
      newsTitle.style.transition = 'transform 0.3s ease-in-out';
    }
  });
});