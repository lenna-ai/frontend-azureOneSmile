import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Card({ className, children }: Props) {
  return (
    <div className={clsx("shadow-md rounded-lg p-4 bg-white t", className)}>
      {children}
    </div>
  );
}
