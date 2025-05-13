function isDate(input) {
  // Check if input is a Date object and is valid
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }

  // If input is a string or number, try to parse it as a date
  if (typeof input === 'string' || typeof input === 'number') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  }

  // All other types return false
  return false;
}
