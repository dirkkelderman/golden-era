import React, { useState } from "react";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { Heading } from "../../components/Heading";
import Image from "next/image";

export type EventCardsProps = SliceComponentProps<Content.EventCardsSlice>;

// interface EventCardProps {
//   event: {
//     title: string;
//     location: string;
//     date: string;
//     facebookEvent: string;
//     facebookEventLink: string;
//     ticketLink: string;
//     ticketLinkButtonText: string;
//     image: {
//       url: string;
//       alt: string;
//     };
//   };
// }

/**
 * @typedef {import("@prismicio/client").Content.EventCardsSlice} EventCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<EventCardsSlice>} EventCardsProps
 * @param { EventCardsProps }
 */

const borderArray = [
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
];

const EventCard = ({ event }: any) => {
  const randomBorderStyle =
    borderArray[Math.floor(Math.random() * borderArray.length)];

  const borderStyleCard = {
    border: `5px ${randomBorderStyle} #E5E7EB`,
    borderRadius: "0.5rem",
  };

  const borderStyleButton = {
    border: `2px ${randomBorderStyle} #183540`,
    borderRadius: "0.5rem",
  };

  return (
    <div
      // key={index}
      className="grid grid-cols-1 gap-2 md:grid-cols-3 shadow-lg  mt-4"
      style={borderStyleCard}
    >
      <div className=" w-full h-32 relative flex justify-center items-center">
        <Image
          src={event.image.url || ""}
          alt={event.image.alt || ""}
          width={100}
          height={100}
        />
      </div>
      <div className="flex justify-around w-full items-center font-bold">
        <div>
          <PrismicRichText field={event.title} />
          <PrismicRichText field={event.location} />
          <p>{event.date}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {prismicH.isFilled.link(event.facebookEvent) && (
          <div
            className="m-1 md:m-2 w-60 text-center hover:bg-[#183540] px-5 py-2 font-semibold text-[#183540] hover:text-white "
            style={borderStyleButton}
          >
            <PrismicLink field={event.facebookEvent} className=" ">
              {event.facebookEventButtonText || "Facebook Event"}
            </PrismicLink>
          </div>
        )}

        {prismicH.isFilled.link(event.facebookEvent) && (
          <div
            className="m-1 md:m-2 w-60 text-center bg-[#183540] hover:bg-white px-5 py-2 font-semibold text-white hover:text-[#183540] "
            style={borderStyleButton}
          >
            <PrismicLink field={event.ticketLink} className="">
              {event.ticketLinkButtonText || "Koop tickets"}
            </PrismicLink>
          </div>
        )}
      </div>
    </div>
  );
};

const EventCards = ({ slice }: EventCardsProps) => {
  const currentDate = new Date();

  const eventList = slice.items
    .sort(
      (a, b) =>
        new Date(a.date as string).getTime() -
        new Date(b.date as string).getTime()
    )
    .filter((item) => new Date(item.date as string) > currentDate);

  return (
    <Bounded as="section" yPadding="xs">
      <div>
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className="text-center py-3">
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
      </div>
      {eventList.map((item, index) => (
        <EventCard key={index} event={item} />
      ))}
    </Bounded>
  );
};

export default EventCards;
