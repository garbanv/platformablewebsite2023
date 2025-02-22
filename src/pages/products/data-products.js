import Layout from "../../../components/Layout";
import Hero from "../../../components/data-products/Hero";
import styles from '@/styles/DataProducts.module.css'
import OurProducts from "../../../components/data-products/OurProducts";
import OurProcess from "../../../components/data-products/OurProcess";
import Footer from "../../../components/Footer";
import FindMore from "../../../components/data-products/FindMore";
import Testimonials from "../../../components/homepage/Testimonials";
export default function DataProducts({ data }) {
  console.log("data",data);

  return (
    <Layout>
      <Hero data={data}/>
      <OurProducts products={data?.products} title={data?.data_products_products_titl}/>
      <OurProcess data={data}/>
      <Testimonials data={data?.testimonials} title={data?.data_product_testimonial_title} logos={false}/>
      <FindMore images={data?.sectors_img?.data}/>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/data-product?populate[data_products_hero_img]=*&populate[products][populate][product_icon]=*&populate[testimonials][populate][testimonials_img]=*&populate[discovery_images]=*&populate[scope_img1]=*&populate[scope_img2]=*&populate[scope_img3]=*`
    );
    const data = await res.json();

    return {
      props: {
        data: data?.data?.attributes,
      },
    };
  } catch (error) {
    return {
      props: {
        data: "No Data",
      },
    };
  }
}
