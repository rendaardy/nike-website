import { star } from "../assets/icons/index.js";

export interface ReviewCardProps {
  imgURL: string;
  customerName: string;
  feedback: string;
  rating: number;
}

export default function ReviewCard(props: ReviewCardProps): JSX.Element {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={props.imgURL}
        alt={props.customerName}
        className="object-cover w-[120px] h-[120px] rounded-full"
      />
      <p className="mt-6 max-w-sm text-center info-text">{props.feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain"
        />
        <p className="text-xl text-slate-gray font-motserrat">
          ({props.rating})
        </p>
      </div>
      <h3 className="mt-1 text-center text-3xl font-palanquin font-bold">
        {props.customerName}
      </h3>
    </div>
  );
}
