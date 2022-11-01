import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

export type HeroSlice = SliceComponentProps<Content.HeroSlice>;

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */

const Hero = ({ slice }: HeroSlice) => {
  const image = slice.primary.image;
  return (
    <Bounded as="section" yPadding="xs">
      <div className="relative flex flex-col items-center justify-center h-full">
        <PrismicNextImage field={image} layout="responsive" />
      </div>
    </Bounded>
  );
};

export default Hero;
