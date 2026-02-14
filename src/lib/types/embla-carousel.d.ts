import { ComponentPropsWithRef } from "react";

export type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export type CarouselProps = ComponentPropsWithRef<"button">;
