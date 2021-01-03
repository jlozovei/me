import { menu } from './modules/menu';
import { blogpost } from './modules/blogpost';

(() => {
  const app = {
    init() {
      menu.init();
      blogpost.init();
    }
  };

  app.init();
})();
