class Validator {
  constructor() {
    this._isAllValid = {};
  }
  isNotEmail = (email) => {
    const isValid = !!String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (isValid) {
      delete this._isAllValid.email;
      return false;
    } else {
      this._isAllValid.email = false;
      return "Please enter a valid email";
    }
  };

  isNotPhoneNumber = (phone) => {
    if (!+phone || phone.length !== 10) {
      this._isAllValid.phone = false;
      return "Invalid Phone Number";
    }

    delete this._isAllValid.phone;
    return false;
  };

  isNotName = (name) => {
    if (!name) {
      this._isAllValid.name = false;
      return "Name is Required";
    }

    delete this._isAllValid.name;
    return false;
  };

  isNotDate = (date) => {
    if (!date) {
      this._isAllValid.endDate = false;
      return "Date is Required";
    }
    date = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (today > date) {
      this._isAllValid.endDate = false;
      return "Date Must be Today or Future Date";
    }

    delete this._isAllValid.date;
    return false;
  };

  isGreaterThenNow = (time) => {
    var now = new Date();
    var d = new Date(time); // pass all the parameters you need to create the time
    if (now.getTime() > d.getTime()) {
      return true;
    }

    return false;
  };

  isNotStartTime = (time, min) => {
    if (!time) {
      this._isAllValid.startDate = false;
      return "Time is Required";
    }
    if (!min) {
      delete this._isAllValid.startDate;
      return false;
    }

    if (min < time) {
      return "Time must be less than End time";
    }

    delete this._isAllValid.startDate;
    return false;
  };

  isNotEndTime = (time, max) => {
    if (!time) {
      this._isAllValid.endDate = false;
      return "Time is Required";
    }
    if (!max) {
      delete this._isAllValid.endDate;
      return false;
    }

    if (max > time) {
      return "Time must be greater than start time";
    }

    delete this._isAllValid.endDate;
    return false;
  };

  isNotValidActivity = (activity) => {
    if (!activity) {
      this._isAllValid.activity = false;
      return "Activity is Required";
    }

    delete this._isAllValid.activity;
    return false;
  };

  isAllInputsValid = () => {
    return Object.keys(this._isAllValid).length === 0;
  };
}

export default Validator;
