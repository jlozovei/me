import { elementOffset } from './elementOffset';

const blogpost = {
  init() {
    this.PROGRESS_CONTAINER_CLASS = 'blogpost__progress--visible';

    this.cacheDOM();
  },

  cacheDOM() {
    this.post = document.getElementById('blogpost');
    this.postHeight = this.post ? this.post.clientHeight : null;

    this.progressContainer = document.querySelector('.blogpost__progress');
    this.indicator = document.getElementById('progress-indicator');

    this.bindEvents();
  },

  bindEvents() {
    this.post &&
      window.addEventListener('scroll', () => {
        this.readingProgress(window.scrollY);
      });
  },

  readingProgress(windowScroll) {
    const postOffset = elementOffset(this.post);
    const scrollPosition = windowScroll - postOffset.top + 64;
    const postEnd = postOffset.top + this.postHeight + 64;

    const progress = Math.floor((scrollPosition / this.postHeight) * 100);
    const percentage = progress <= 100 ? progress : 100;

    if (windowScroll > postOffset.top && windowScroll < postEnd) {
      this.progressContainer.classList.add(this.PROGRESS_CONTAINER_CLASS);
    } else {
      this.progressContainer.classList.remove(this.PROGRESS_CONTAINER_CLASS);
    }

    this.indicator.style.width = `${percentage}%`;
  }
};

export { blogpost };
