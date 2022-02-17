import Link from "next/link";
import { useState, useEffect } from "react";

let errorMessageJSX;
function Input(props) {
  const [errorMessage, setErrorMessage] = useState(props.errorMessage);

  let type = props.type;
  let className = props.className;

  if (props.type === "phone") {
    type = "number";
    className = ` bg-white flex p-0 justify-between shadow-2xl ${props.className} `;
  }

  // let onBlur = () => {
  //   errorMessageJSX = props.errorMessage ? (
  //     <p className=" text-red-300 text-md"> ! {errorMessage}</p>
  //   ) : (
  //     <div className="mx-1"> &nbsp; </div>
  //   );

  //   props.onBlur && onBlur();
  // };

  useEffect(() => {
    setErrorMessage(props.errorMessage);
  }, [props.errorMessage]);

  // console.log(`>> errorMessage ${props.type}: `, errorMessage);
  errorMessageJSX =
    props.errorMessage && props.showError ? (
      <p className=" text-red-300 text-md h-3">{errorMessage}</p>
    ) : (
      <p className="text-sm h-3"> &nbsp; </p>
    );

  if (props.type === "phone") {
    return (
      <>
        <div className={className}>
          <p className=" text-gray-400"> +91</p>
          <input
            {...props}
            className="w-11/12 mx-1 outline-none "
            type={type}
            min="0"
            // onblur={onBlur}
          />{" "}
        </div>
        {errorMessageJSX}
      </>
    );
  } else if (props.type === "text" || !props.type || props.type === "number") {
    return (
      <>
        <input
          {...props}
          type={type}
          className={`${props.className} py-2  px-4 `}
        />
        {errorMessageJSX}
      </>
    );
  } else {
    return (
      <>
        <div className="mx-auto px-4 py-2 flex justify-between w-full bg-white rounded-full shadow-2xl">
          <label className="">{props.label}</label>
          <input {...props} className={`${props.className} px-2`} type={type} />
        </div>
        {errorMessageJSX}
      </>
    );
  }
}

export default Input;
