document.addEventListener('DOMContentLoaded', () => {
  const articles = document.getElementsByTagName('article');
  for (let a = 0; a < articles.length; a++) {
    const button = articles[a].querySelector('.show-content');
    if (button) {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        articles[a].classList.add('expanded');
        button.remove();
      });
    }
  }
});