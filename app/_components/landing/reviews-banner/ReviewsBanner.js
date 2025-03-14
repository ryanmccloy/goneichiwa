import Stars from "./Stars";

const reviews = [
  { id: 1, text: "Absolutely amazing travel guides!", name: "Ryan M" },
  {
    id: 2,
    text: "Saved me so much time planning my trip!",
    name: "Michael R.",
  },
  { id: 3, text: "The recommendations were spot on!", name: "Ieva V" },
  {
    id: 4,
    text: "I felt like a local thanks to these guides.",
    name: "Lynn M",
  },
  { id: 5, text: "A must-have for travelers!", name: "Sammy D" },
];

export default function ReviewsBanner() {
  return (
    <div className="bg-off-black py-2 mb-10 text-off-white overflow-hidden flex">
      <ul className="flex  gap-60 text-nowrap animate-infinite-scroll">
        {[...reviews, ...reviews].map((review, index) => (
          <li
            key={`${review.id}-${index}`}
            className="flex gap-15 items-center"
          >
            <p>&quot;{review.text}&quot;</p>
            <span className="font-extralight">-</span>
            <p>{review.name}</p>
            <Stars />
          </li>
        ))}
      </ul>
    </div>
  );
}
