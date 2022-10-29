import React from "react";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { Heading } from "../../components/Heading";

export type EventCardsProps = SliceComponentProps<Content.EventCardsSlice>;

/**
 * @typedef {import("@prismicio/client").Content.EventCardsSlice} EventCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EventCardsSlice>} EventCardsProps
 * @param { EventCardsProps }
 */

const EventCards = ({ slice }: EventCardsProps) => {
  return (
    <Bounded>
      <div>
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
      </div>
      {slice.items.map((item, index) => (
        <div key={index} className="flex justify-between">
          <div className="w-32 h-32">
            <PrismicNextImage field={item.image} layout="responsive" />
          </div>
          <div className="flex justify-around w-full items-center bg-red-200">
            <div>
              <PrismicRichText field={item.title} />
              <PrismicRichText field={item.location} />
              <p>{item.date}</p>
            </div>
            <div className="">
              {prismicH.isFilled.link(item.facebookEvent) && (
                <div className="m-2 w-60 rounded border-2 border-[#183540] text-center hover:bg-[#183540] px-5 py-2 font-semibold text-[#183540] hover:text-white ">
                  <PrismicLink field={item.facebookEvent} className=" ">
                    {item.facebookEventButtonText || "Facebook Event"}
                  </PrismicLink>
                </div>
              )}

              {prismicH.isFilled.link(item.facebookEvent) && (
                <div className="m-2 w-60 rounded border-2 border-[#183540] text-center bg-[#183540] hover:bg-white px-5 py-2 font-semibold text-white hover:text-[#183540] ">
                  <PrismicLink field={item.ticketLink} className="">
                    {item.ticketLinkButtonText || "Koop tickets"}
                  </PrismicLink>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default EventCards;
