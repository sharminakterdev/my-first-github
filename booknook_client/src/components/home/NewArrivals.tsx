
import Link from "next/link";
import BookCard, { type Book } from "@/components/books/BookCard";

interface NewArrivalsProps {
  books: Book[];
}

export default function NewArrivals({ books }: NewArrivalsProps) {
  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-green-700">
              Fresh From Our Shelf
            </p>

            <h2 className="text-3xl font-extrabold text-[#173d2b] md:text-4xl">
              New Arrivals
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-gray-500">
              Explore our latest collection and discover your next favorite read.
            </p>
          </div>

          <Link
            href="/books"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-green-700 px-5 py-3 font-semibold text-green-800 transition hover:bg-green-700 hover:text-white"
          >
            See All Books →
          </Link>
        </div>

        {/* Book Grid */}
        {books.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {books.slice(0, 6).map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-[#f7f8f2] py-16 text-center">
            <p className="text-lg font-semibold text-gray-600">
              No books available yet.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              New books will appear here soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
