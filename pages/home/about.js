import { VisiMisi } from "@/components/home/about/VisiMisi";
import { LogoUKM } from "@/components/home/gallery/LogoUKM";
import Layout from "@/components/home/utils/Layout";
import Struktur from "@/components/home/about/Struktur";
import BannerAbout from "@/components/home/about/BannerAbout";

export default function index() {
  return (
  <>
  <Layout>
  <BannerAbout />
    <VisiMisi />
    <Struktur />
    <LogoUKM />
  </Layout>
  </>
  
  );
}
