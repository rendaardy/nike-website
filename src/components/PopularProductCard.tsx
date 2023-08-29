import { star } from "../assets/icons/index.js";

export interface PopularProductCardProps {
  imgURL: string;
  name: string;
  price: string;
}

export default function PopularProductCard({
  imgURL,
  name,
  price,
}: PopularProductCardProps): JSX.Element {
  return (
    <div className="flex flex-col w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
        {name}
      </h3>
      <p className="mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red">
        {price}
      </p>
    </div>
  );
}
