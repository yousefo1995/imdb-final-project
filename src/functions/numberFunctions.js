export const toIntegar = (value) => {
  if (value) {
    value = parseFloat(value, 10.0).toFixed(1);
  } else {
    value = "00";
  }
  return value;
};
export const toKValue = (value) => {
  if (value > 1000) {
    const kValue = value / 1000;
    value = toIntegar(kValue) + "k";
    return value;
  } else {
    value = "";
  }
  return value;
};
