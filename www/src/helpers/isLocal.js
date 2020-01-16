const isLocal = () => {
  const { location } = window;

  return location.href.includes('localhost') || location.href.includes('127.0.0.1');
};

export default isLocal;
