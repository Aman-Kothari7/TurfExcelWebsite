import Input from "../Input";
import Button from "../Button";
import { useState, useEffect } from "react";
import Validator from "../../utils/validator.js";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const validator = new Validator();

function CustomForm({ onValidated, status, message }) {
  const [email, setEmail] = useState("");
  const [showFormError, setShowFormError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async () => {
    console.log(">>> Subscribe", status, message, validator.isAllInputsValid());

    setShowFormError(true);

    if (email && status !== "error" && validator.isAllInputsValid()) {
      console.log(">>> emial", email);
      const res = await onValidated({
        EMAIL: email,
        STATUS: "subscribed",
      });
      setShowSuccess(true);
      setShowFormError(false);
      setEmail("");
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className=" flex flex-col md:flex-row max-w-md sm:mx-auto  mt-12 mx-4 ">
        <div className="w-full md:w-3/4 ">
          <Input
            placeholder="Email Id"
            className="w-full rounded-full outline-none"
            errorColor="text-red-600"
            type="email"
            value={email}
            onChange={onEmailChange}
            errorMessage={validator.isNotEmail(email)}
            showError={showFormError}
          />
        </div>
        <div className="w-2/4 md:w-1/4 mt-4 md:mt-0">
          <Button
            className="mx-1 w-32 py-2 text-center rounded-full"
            label="Join Us"
            onClick={onSubmit}
          />
        </div>
      </div>
      {showSuccess && (
        <div className="text-center max-w-md  m-auto">
          <p className="text-center">
            We got you email, we'll keep you update with our events
          </p>
        </div>
      )}
    </>
  );
}

function EmailBox() {
  return (
    // <MailchimpSubscribe url={} render={CustomForm} />
    <MailchimpSubscribe
      url={process.env.MAIL_CHAMP_URL}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}

export default EmailBox;
