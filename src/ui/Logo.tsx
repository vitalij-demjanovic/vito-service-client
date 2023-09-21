import cn from "classnames";

interface LogoI {
  appearance: string;
}

export default function Logo({ appearance }: LogoI) {
  return (
    <>
      <h1
        className={cn("logo", {
          "text-5xl mb-5": appearance === "big",
          "text-2xl text-third": appearance === "small",
        })}
      >
        vito-service
      </h1>
    </>
  );
}
