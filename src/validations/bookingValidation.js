export const validateBookingForm = (values) => {
  const errors = {};

  // Location validation
  if (!values.location) {
    errors.location = "Please select a location";
  }

  // Date validation
  if (!values.date) {
    errors.date = "Please select a date";
  } else {
    const selectedDate = new Date(values.date);
    const today = new Date();
    // Reset time portions to compare dates only
    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.date = "Please select a future date";
    }
  }

  // Guest validation
  if (values.adults < 1) {
    errors.adults = "At least one adult is required";
  }
  if (values.adults + values.children > 10) {
    errors.guests = "Maximum 10 guests allowed";
  }

  return errors;
};
