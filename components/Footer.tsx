import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";

interface Props {
  children?: React.ReactNode;
}

interface FooterProps {
  footer: any;
}

const components = {
  heading3: ({ children }: Props) => (
    <Heading as="h3" size="sm" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }: Props) => <p className="mb-1 ">{children}</p>,
};

export const Footer = ({ footer }: FooterProps) => {
  return (
    <Bounded as="footer" yPadding="sm" className="bg-black text-white">
      Footer
      {/* <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-center leading-none md:grid-cols-4 ">
        <div className="flex h-full flex-col justify-between items-center">
          <PrismicRichText field={footer.data?.sitemapHeading} />
          <ul className=" list-none">
            {footer.data?.sitemap.map((item: any, index: number) => (
              <li key={index} className="tracking-tight text-white">
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full flex-col justify-between items-center">
          <PrismicRichText field={footer.data?.locationsHeading} />
          <ul className=" list-none">
            {footer.data?.locations.map((item: any, index: number) => (
              <li key={index} className=" tracking-tight text-white pb-2">
                <PrismicRichText field={item.city} components={components} />
                <PrismicRichText field={item.address} components={components} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full flex-col justify-between">
          <PrismicRichText field={footer.data?.contactHeading} />
          <ul className=" list-none">
            {footer.data?.contact.map((item: any, index: number) => (
              <li key={index} className="tracking-tight text-white pb-2">
                <PrismicRichText field={item.email} components={components} />
                <PrismicRichText
                  field={item.telephone}
                  components={components}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full flex-col justify-between">
          <PrismicRichText field={footer.data?.socialsHeading} />
          <ul className=" list-none">
            {footer.data?.socials.map((item: any, index: number) => (
              <li key={index} className=" tracking-tight text-white">
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </Bounded>
  );
};
