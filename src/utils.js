const detectMob = () => {
  return ( ( window.innerWidth <= 600 ) && ( window.innerHeight <= 1200 ) );
}

const routeTo = (href) => () => {
  window.location.href = href;
};

export {
  detectMob,
  routeTo,
}