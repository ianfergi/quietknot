const detectMob = () => {
  return ( ( window.innerWidth <= 600 ) && ( window.innerHeight <= 1200 ) );
}

export {
  detectMob
}