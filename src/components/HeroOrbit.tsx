import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrdbit = false,
  shouldSpin = false,
  spinDuration ,
  orbitDuration,
}: PropsWithChildren<{ size: number; rotation: number, shouldOrdbit?: boolean, shouldSpin?: boolean,spinDuration?: string ,orbitDuration?: string}>) => {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
    -z-20 "
    ><div className={
      twMerge(shouldOrdbit === true && "animate-spin")
    } style={{ animationDuration: orbitDuration }}>
        <div
          className="flex items-start justify-start  "
          style={{
            transform: `rotate(${rotation}deg)`,

            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <div className={twMerge(shouldSpin === true && "animate-spin")}
          style={{animationDuration: spinDuration}}>
          <div
            className=" inline-flex"
            style={{ transform: `rotate(${rotation * -1}deg)` }}
          >
            {children}
            </div>
          </div>
        </div>
        </div>
      </div>
    
  );
};
