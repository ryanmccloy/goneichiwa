import Link from "next/link";

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-top md:justify-between md:items-end">
      <div className="flex flex-col gap-regular md:items-end">
        <h5 className="font-display lg:text-heading-small">Questions?</h5>
        <a href="mailto:hello@hereandthere.com">hello@hereandthere.com</a>
      </div>
      <Link
        href="https://www.webdevryan.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created By WEBDEVRYAN
      </Link>
    </div>
  );
}
