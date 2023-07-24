import BannerUkm from "@/components/home/ukm/BannerUkm";
import ProfileUKM from "@/components/home/ukm/ProfileUKM";
import UkmAdalah from "@/components/home/ukm/UkmAdalah";
import Layout from "@/components/home/utils/Layout";
import React from "react";

export default function ukm() {
  return (
    <>
      <Layout>
        <BannerUkm />
        <UkmAdalah />
        <ProfileUKM />
      </Layout>
    </>
  );
}
