export const getReadableDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const readableDate = new Date(date).toLocaleDateString('en-US', options);
  return readableDate;
};
