const _isAllValid = {};

export const isNotEmail = (email) => {
  const isValid = !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (isValid) {
    delete _isAllValid.email;
    return false;
  } else {
    return "Please enter a valid email";
  }
};

export const isNotPhoneNumber = (phone) => {
  if (!+phone || phone.length !== 10) {
    _isAllValid.phone = false;
    return "Invalid Phone Number";
  }

  delete _isAllValid.phone;
  return false;
};

export const isNotName = (name) => {
  if (!name) {
    _isAllValid.name = false;
    return "Name is Required";
  }

  delete _isAllValid.name;
  return false;
};

export const isNotDate = (date) => {
  if (!date) {
    _isAllValid.endDate = false;
    return "Date is Required";
  }
  date = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (today > date) {
    _isAllValid.endDate = false;
    return "Date Must be Today or Future Date";
  }

  delete _isAllValid.date;
  return false;
};

const isGreaterThenNow = (time) => {
  var now = new Date();
  var d = new Date(time); // pass all the parameters you need to create the time
  if (now.getTime() > d.getTime()) {
    return true;
  }

  return false;
};

export const isNotStartTime = (time, min) => {
  if (!time) {
    _isAllValid.startDate = false;
    return "Time is Required";
  }
  if (!min) {
    delete _isAllValid.startDate;
    return false;
  }

  if (min < time) {
    return "Time must be less than End time";
  }

  delete _isAllValid.startDate;
  return false;
};

export const isNotEndTime = (time, max) => {
  if (!time) {
    _isAllValid.endDate = false;
    return "Time is Required";
  }
  if (!max) {
    delete _isAllValid.endDate;
    return false;
  }

  if (max > time) {
    return "Time must be greater than start time";
  }

  delete _isAllValid.endDate;
  return false;
};

export const isNotValidActivity = (activity) => {
  if (!activity) {
    _isAllValid.activity = false;
    return "Activity is Required";
  }

  delete _isAllValid.activity;
  return false;
};

export const isAllInputsValid = () => {
  return Object.keys(_isAllValid).length === 0;
};
