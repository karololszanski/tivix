const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const dateRegex =
  /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

const zipRegex = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/;

export { phoneRegex, dateRegex, zipRegex };
