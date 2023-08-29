export interface ServiceCardProps {
  label: string;
  imgURL: string;
  subtext: string;
}

export default function ServiceCard(props: ServiceCardProps): JSX.Element {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={props.imgURL} alt={props.label} width={24} height={24} />
      </div>
      <h3 className="mt-3 font-palanquin font-bold text-3xl leading-normal">
        {props.label}
      </h3>
      <p className="mt-3 font-montserrat text-lg leading-normal text-slate-gray break-words">
        {props.subtext}
      </p>
    </div>
  );
}
