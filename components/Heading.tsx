"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? " text-center" : "text-start"}>
      <h3 className=" text-2xl font-bold">{title}</h3>
      {subtitle ? (
        <h3 className=" font-light text-neutral-500 mt-2">{subtitle}</h3>
      ) : null}
    </div>
  );
};

export default Heading;
