import Button from "../components/Button.tsx";
import { offer } from "../assets/images/index.js";
import { arrowRight } from "../assets/icons/index.js";

export default function SpecialOffer(): JSX.Element {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-palanquin font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets up apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of posibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button iconUrl={arrowRight}>Shop now</Button>
          <Button style="secondary">Learn more</Button>
        </div>
      </div>
    </section>
  );
}
