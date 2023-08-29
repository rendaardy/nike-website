import { reviews } from "../constants.ts";
import ReviewCard from "../components/ReviewCard.tsx";

export default function CustomerReviews(): JSX.Element {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="text-center mx-auto mt-4 max-w-lg info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experience with us.
      </p>
      <div className="mt-24 flex justify-evenly items-center gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
}
