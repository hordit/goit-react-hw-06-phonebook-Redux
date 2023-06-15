export const capitalizedName = str => {
  return typeof str !== 'string'
    ? ''
    : str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

