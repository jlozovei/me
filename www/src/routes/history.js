import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
});

export default history;
