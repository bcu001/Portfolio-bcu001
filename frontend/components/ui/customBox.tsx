type CustomBoxProps = {
  text: string;
};

const CustomBox = (props: CustomBoxProps) => {
  return (
    <div className="rounded-xl px-3 py-1 bg-black text-white w-fit text-sm">
      {props.text}
    </div>
  );
};

export default CustomBox;
