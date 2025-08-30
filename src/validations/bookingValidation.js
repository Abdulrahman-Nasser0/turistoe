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

export const validateTripDetails = (values) => {
  const errors = {};

  if (!values.packageType) {
    errors.packageType = "Please select a package";
  }

  if (!values.roomType) {
    errors.roomType = "Please select a room type";
  }

  return errors;
};

export const validatePersonalInfo = (values) => {
  const errors = {};

  if (!values.firstName || values.firstName.trim().length < 2) {
    errors.firstName = "First name is required and must be at least 2 characters";
  }

  if (!values.lastName || values.lastName.trim().length < 2) {
    errors.lastName = "Last name is required and must be at least 2 characters";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^[\d\s\-+()]{10,}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!values.address || values.address.trim().length < 5) {
    errors.address = "Address is required and must be at least 5 characters";
  }

  if (!values.city || values.city.trim().length < 2) {
    errors.city = "City is required";
  }

  if (!values.zipCode) {
    errors.zipCode = "ZIP code is required";
  }

  if (!values.country) {
    errors.country = "Please select a country";
  }


  return errors;
};

export const validatePaymentInfo = (values) => {
  const errors = {};

  if (!values.cardNumber) {
    errors.cardNumber = "Card number is required";
  } else {
    const cleanCardNumber = values.cardNumber.replace(/\s/g, '');
    if (cleanCardNumber.length < 16) {
      errors.cardNumber = "Card number must be 16 digits";
    } else if (!/^\d+$/.test(cleanCardNumber)) {
      errors.cardNumber = "Card number must contain only digits";
    }
  }

  if (!values.expiryDate) {
    errors.expiryDate = "Expiry date is required";
  } else if (!/^\d{2}\/\d{2}$/.test(values.expiryDate)) {
    errors.expiryDate = "Please enter expiry date in MM/YY format";
  } else {
    const [month, year] = values.expiryDate.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (parseInt(month) < 1 || parseInt(month) > 12) {
      errors.expiryDate = "Invalid month";
    } else if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
      errors.expiryDate = "Card has expired";
    }
  }

  if (!values.cvv) {
    errors.cvv = "CVV is required";
  } else if (!/^\d{3,4}$/.test(values.cvv)) {
    errors.cvv = "CVV must be 3 or 4 digits";
  }

  if (!values.cardName || values.cardName.trim().length < 2) {
    errors.cardName = "Cardholder name is required";
  }

  if (!values.sameAsPersonal && (!values.billingAddress || values.billingAddress.trim().length < 5)) {
    errors.billingAddress = "Billing address is required";
  }

  return errors;
};
