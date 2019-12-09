const setCurrentDate = () => {
  const today = new Date().toISOString().replace(/-/gi, '').slice(0, 8);
  return parseInt(today);
};

module.exports = {
  setCurrentDate,
};