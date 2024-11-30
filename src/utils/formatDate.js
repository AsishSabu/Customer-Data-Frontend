export const formatDate = (date) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-GB', options); 
};
