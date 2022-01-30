import Link from "next/link";

function Button(props) {
  const { label, link } = props;
  return (
    <div
      className={`p-4 rounded-md bg-link text-onPrimary-txt hover:opacity-75 ${props.className}`}
    >
      <Link href={link || "#"}>{label}</Link>
    </div>
  );
}

export default Button;
