import { Icons } from "./github";

export function TwitterIcon({ link }: Icons) {
  return (
    <a href={`https://twitter.com/${link}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="hover:fill-purple/30"
      >
        <path
          stroke="#B9D"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.279-.028-.556-.08-.83A7.72 7.72 0 0023 3v0z"
        ></path>
      </svg>
    </a>
  );
}
