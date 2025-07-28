import Link from 'next/link';

type BackHomeButtonProps = {
  label?: string;
  href?: string;
};

export default function BackHomeButton({
  label = 'ホームに戻る',
  href = '/',
}: BackHomeButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 mb-8 px-4 py-2 text-indigo-700 font-semibold rounded-lg border-2 border-indigo-700
                 hover:bg-indigo-700 hover:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      {label}
    </Link>
  );
}
