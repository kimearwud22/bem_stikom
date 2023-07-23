import { VisiMisi } from "@/components/home/about/VisiMisi";
import { FotoKegiatan } from "@/components/home/gallery/FotoKegiatan";
import { LogoUKM } from "@/components/home/gallery/LogoUKM";
import Layout from "@/components/home/utils/Layout";
import Banner from "@/components/home/utils/Banner";


export default function index() {
  return (
  <>
  <Layout>
    <Banner />
    <VisiMisi />
    <FotoKegiatan />
    <LogoUKM />
  </Layout>
  </>
  
  );
}
