/**
 * Formats an Epoch date for display
 * @param {int} date
 *  The title of the book.
 * @return {string}
 *  Date formatted as January 18, 2018
 */
export function formatDate(date) {
  let convertDate = new Date(0); // The 0 there is the key, which sets the date to the epoch
  // Convert the epoch date time we get from Drupal
  convertDate.setUTCSeconds(date);
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  return convertDate.toLocaleString('en-US', options);
};