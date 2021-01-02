import { debounce } from './debounce';

const menu = {
  init() {
    this.SCREEN_BOUNDARY = 768;
    this.HAMBURGER_ACTIVE_CLASS = 'header__hamburger--active';
    this.NAV_ACTIVE_CLASS = 'active';

    this.cacheDOM();
  },

  cacheDOM() {
    this.hamburger = document.getElementById('hamburger');
    this.nav = document.querySelector('.header nav');

    this.bindEvents();
  },

  bindEvents() {
    this.hamburger.addEventListener('click', () => {
      this.toggleMenu();
    });

    window.addEventListener(
      'resize',
      debounce(() => {
        const { innerWidth } = window;

        if (innerWidth >= this.SCREEN_BOUNDARY) {
          this.nav.classList.remove(this.NAV_ACTIVE_CLASS);
          this.hamburger.classList.remove(this.HAMBURGER_ACTIVE_CLASS);
        }
      }, 300)
    );
  },

  toggleMenu() {
    const isActive = this.nav.classList.contains(this.NAV_ACTIVE_CLASS);

    if (isActive) {
      this.nav.classList.remove(this.NAV_ACTIVE_CLASS);
      this.hamburger.classList.remove(this.HAMBURGER_ACTIVE_CLASS);
    } else {
      this.nav.classList.add(this.NAV_ACTIVE_CLASS);
      this.hamburger.classList.add(this.HAMBURGER_ACTIVE_CLASS);
    }
  }
};

export { menu };
