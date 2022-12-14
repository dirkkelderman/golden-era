import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";
import Image from "next/image";

import type { Content } from "@prismicio/client";

export type HeaderProps = {
  navigation: Content.NavigationDocument;
  settings: Content.SettingsDocument;
};

// interface HeaderProps {
//   navigation: any;
//   settings: any;
// }

export const Header = ({ navigation, settings }: HeaderProps) => {
  const image = settings?.data?.logo;
  return (
    <Bounded as="header" yPadding="xs" className="z-0" >
      <div className="flex flex-wrap items-baseline justify-center gap-x-6 gap-y-3 leading-none lg:justify-between">
        <PrismicLink href="/" className=" text-xl font-semibold tracking-tight">
          <div className="flex items-center z-10">
            <div className="flex items-center px-3">
              <Image
                src={image?.url || ""}
                alt={image?.alt || ""}
                width="30"
                height="30"
                // layout="fixed"
                // objectFit="contain"
              />
            </div>
            <div className="">
              <PrismicText field={settings?.data?.siteTitle} />
            </div>
          </div>
        </PrismicLink>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {navigation?.data?.links.map((item: any) => (
              <li
                key={prismicH.asText(item.label)}
                className="font-semibold tracking-tight text-slate-800"
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
};
