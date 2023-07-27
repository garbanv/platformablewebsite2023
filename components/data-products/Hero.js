import styles from "@/styles/DataProducts.module.css";

export default function Hero({ data }) {
  return (
    <section className="">
      <div className="container  mx-auto   py-10">
        <h1 className="mb-10 text-[var(--purple-medium)] font-bold">
          {data?.data_products_hero_title}
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.data_products_hero_description_top,
          }}
          className="lg:w-3/6 xl:w-[60%] 2xl:w-3/5"
        />
      </div>
      <div className={`${styles.hero_background_gradient} py-10 `}>
        <div className="container mx-auto   flex gap-7">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.data_products_hero_description_bottom,
            }}
            className="text-white lg:w-3/6 xl:w-[60%] 2xl:w-3/5 font-bold"
          />

          <img
            src={data?.data_products_hero_img?.data.attributes.url}
            alt="Data products mapped"
            className="lg:-mt-[28rem] xl:-mt-72  lg:-mt-[24pc] lg:-mr-10 hidden justify-self-end lg:block lg:w-3/6 xl:w-[40%] 2xl:w-2/5 h-96"
          />
        </div>
      </div>
    </section>
  );
}
