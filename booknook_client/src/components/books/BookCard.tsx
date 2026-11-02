
import Link from "next/link";

export interface Book {
  _id: string;
  title: string;
  author: string;
  category: string;
  image: string;
  description?: string;
  totalCopies?: number;
  createdAt?: string;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link
        href={`/books/${book._id}`}
        className="relative block h-64 overflow-hidden bg-[#f3f5ef]"
      >
        <img
          src={book.image}
          alt={book.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-[#e8f2e9] px-3 py-1.5 text-xs font-semibold text-[#236b45]">
          {book.category}
        </span>
      </Link>

      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#39845a]">
          {book.category}
        </p>

        <h3 className="line-clamp-1 text-lg font-bold text-[#173d2b] transition group-hover:text-green-700">
          {book.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          By {book.author}
        </p>

        <div className="mt-5 border-t border-gray-100 pt-4">
          <Link
            href={`/books/${book._id}`}
            className="flex w-full items-center justify-center rounded-xl bg-[#236b45] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#174e32]"
          >
            View Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
