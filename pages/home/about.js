import { VisiMisi } from "@/components/home/about/VisiMisi";
import { LogoUKM } from "@/components/home/gallery/LogoUKM";
import Layout from "@/components/home/utils/Layout";
import Struktur from "@/components/home/about/Struktur";
import BannerUkm from "@/components/home/ukm/BannerUkm";

export default function index() {
  return (
  <>
  <Layout>
    <BannerUkm />
    <VisiMisi />
    <Struktur />
    <LogoUKM />
  </Layout>
  </>
  
  );
}
