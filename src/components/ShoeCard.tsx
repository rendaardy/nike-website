export interface ShoeCardProps {
  shoe: {
    thumbnail: string;
    bigShoe: string;
  };
  onImageSelected: (image: string) => void;
  currentImage: string;
}

export default function ShoeCard({
  shoe,
  onImageSelected,
  currentImage,
}: ShoeCardProps): JSX.Element {
  const handleClick = () => {
    if (shoe.bigShoe !== currentImage) {
      onImageSelected(shoe.bigShoe);
    }
  };

  return (
    <div
      className={`${
        shoe.bigShoe === currentImage
          ? "border-coral-red"
          : "border-transparent"
      } border-2 rounded-xl cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl">
        <img
          src={shoe.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
}
