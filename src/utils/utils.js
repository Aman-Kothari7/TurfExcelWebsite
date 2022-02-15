import emailjs from "@emailjs/browser";

export const sendEmail = (template_params, onSuccess, onError) => {
  emailjs
    .send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      template_params,
      process.env.USER_ID
    )
    .then(
      (result) => {
        console.log(result.text);
        if (result.status == 200) {
          onSuccess && onSuccess(result);
        }
        console.log(">>> ", result);
      },
      (error) => {
        onError && onError(error);
        console.log(">> emailjs error: ", error);
      }
    );
};

export function timeConvertToAmPm(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}
