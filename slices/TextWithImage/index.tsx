import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";

export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

const TextWithImage = ({ slice }: TextWithImageProps) => {
  const image = slice.primary?.image;

  return (
    <Bounded as="section" >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div>
          {prismicH.isFilled.image(image) && (
            <div className="bg-gray-100">
              <PrismicNextImage field={image} layout="responsive" />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
