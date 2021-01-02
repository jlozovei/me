import { menu } from './modules/menu';

(() => {
  const app = {
    init() {
      console.log('app init');

      menu.init();
    }
  };

  app.init();
})();

console.log('index');
