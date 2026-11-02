
import {
  FaSearch,
  FaBookOpen,
  FaCalendarCheck,
  FaUndoAlt,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: FaSearch,
    title: "Explore Books",
    description:
      "Browse our collection and discover books that match your interests.",
  },
  {
    number: "02",
    icon: FaBookOpen,
    title: "Choose Your Book",
    description:
      "Find your favorite book and check its availability.",
  },
  {
    number: "03",
    icon: FaCalendarCheck,
    title: "Borrow Easily",
    description:
      "Submit your borrowing request with just a few clicks.",
  },
  {
    number: "04",
    icon: FaUndoAlt,
    title: "Enjoy & Return",
    description:
      "Enjoy your reading and return the book on time.",
  },
];

export default function BorrowingSteps() {
  return (
    <section className="bg-[#f7f8f2] px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[3px] text-green-700">
            Simple & Easy
          </p>

          <h2 className="text-3xl font-extrabold text-[#173d2b] md:text-4xl">
            How Borrowing Works
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            Getting your favorite book is easier than ever.
            Follow these four simple steps and start reading.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-2xl border border-green-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f2e9] text-2xl text-[#236b45] transition group-hover:bg-[#236b45] group-hover:text-white">
                    <Icon />
                  </div>

                  <span className="text-3xl font-extrabold text-green-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#173d2b]">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
