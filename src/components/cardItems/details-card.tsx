interface Props {
  imgUrl: string;
  P_one?: string;
  P_two?: string;
  P_three?: string;
  P_four?: string;
}

export default function DetailsCard({ ...prop }: Props) {
  return (
    <div className="flex gap-3.5 my-4">
      <img
        src={prop?.imgUrl}
        alt="your profile picture"
        className="block w-16 h-16 rounded-[50%] object-cover"
      />

      <div className="text-xs font-medium ">
        <p>{prop?.P_one}</p>
        <p>{prop?.P_two}</p>
        <p>{prop?.P_three}</p>
        <p>{prop?.P_four}</p>
      </div>
    </div>
  );
}
