import Head from "next/head";
import Image from "next/image";
import { createClient } from "../prismicio";
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import clsx from "clsx";
import { Layout } from "../components/Layout";

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({
  page,
  navigation,
  settings,
  footer,
}: PageProps) {
  return (
    <Layout footer={footer} settings={settings} navigation={navigation}>
      <Head>
        <title>Golden Era</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundColor: "transparent" || page.data.backgroundColor,
          color: page.data.textColor || "black",
        }}
      >
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({
  locale,
  previewData,
}: GetStaticPropsContext) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });
  const footer = await client.getSingle("footer", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
      footer,
    },
  };
}
