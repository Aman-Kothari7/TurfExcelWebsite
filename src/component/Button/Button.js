import Link from "next/link";

function Button(props) {
  const { label, link } = props;
  return (
    <>
      {" "}
      {link ? (
        <Link href={link}>
          <div
            {...props}
            className={`p-4 select-none rounded-md cursor-pointer bg-link text-onPrimary-txt hover:opacity-75 shadow-2xl ${props.className}`}
          >
            {label}
          </div>
        </Link>
      ) : (
        <div
          {...props}
          className={`p-4 select-none rounded-md cursor-pointer bg-link text-onPrimary-txt hover:opacity-75 shadow-2xl ${props.className}`}
        >
          {" "}
          {label}
        </div>
      )}
    </>
  );
}

export default Button;
