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
  
  const videoLinks = document.querySelectorAll('a[href$=".mp4"]');
  for (let i = 0; i < videoLinks.length; i++) {
    const a = videoLinks[i];
    a.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof Swal !== "function") return;
      Swal.fire({
        html: `<video src="${a.href}" autoplay controls></video>`,
        background: "#222324",
        backdrop: "rgba(0,0,0,0.8)",
        width: "640px",
        padding: 0,
        showCloseButton: true,
        showConfirmButton: false,
        showCancelButton: false,
      });
    });
  }
});
