let obj = {};

const getValue = (key) => {
  const target = obj[key];
  obj[key] = undefined;
  return target;
}

const sendValue = (key, value) => {
  obj[key] = value;
}

module.exports = {
  getValue,
  sendValue
}