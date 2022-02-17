import Link from "next/link";

function Button(props) {
  const { label, link } = props;
  return (
    <div
      {...props}
      className={`p-4 select-none rounded-md cursor-pointer bg-link text-onPrimary-txt hover:opacity-75 shadow-2xl ${props.className}`}
    >
      {link ? <Link href={link}>{label}</Link> : <div> {label}</div>}
    </div>
  );
}

export default Button;
