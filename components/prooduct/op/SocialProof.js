import { useState, useRef } from "react";


export default function SocialProof({data}) {
  
    const slidesRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(2);
    const [next, setNext] = useState(1);
  console.log("current state ", current, slidesRef)
  
    const gotoPrev = () =>
      current > 0
        ? gotoNum(current - 1)
        : gotoNum(slidesRef.current.childNodes.length - 2);
  
    const gotoNext = () => (current < 2 ? gotoNum(current + 1) : gotoNum(0));
  
    const gotoNum = (number) => {
      console.log("given number", number)
      setCurrent(number);
      setPrev(number - 1);
      setNext(number + 1);
  
      // Create this variables because hooks states does not give the expected behaviour when update variables
      let curr = number;
      let pre = number === 0 ? 2 : number - 1;
      let nxt = number === 2 ? 0 : number + 1;
      
      console.log(curr,pre,nxt)
      
      for (let i = 0; i < slidesRef.current.childNodes.length - 1; i++) {
        slidesRef.current.childNodes[i].classList.remove("active");
        slidesRef.current.childNodes[i].classList.remove("prev");
        slidesRef.current.childNodes[i].classList.remove("next");
      }
      // if (prev == -1) {
      //   setPrev(2);
      // }
      // if (next == 3) {
      //   setNext(0);
      // }
  
      slidesRef.current.childNodes[curr]?.classList.add("active");
      slidesRef.current.childNodes[pre]?.classList.add("prev");
      slidesRef.current.childNodes[nxt]?.classList.add("next");
    };
  return (
   <>
    <section className="bg-[#FFE20010] py-14">
      <div className="container mx-auto">
      <div className={`testimonials-items mt-7 hidden md:block`} ref={slidesRef}>
          <div className={`testimonial-card active p-10 bg-white rounded-xl border border-black`}>
            <p>
                {data?.testimonials?.[2].text}
            </p>
            <div className="flex items-center gap-3">
                <img src={data?.testimonials?.[2]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>
                    <h5 className="font-bold text-sm">{data?.testimonials?.[2].name}</h5>
                    <small className="font-medium">{data?.testimonials?.[2].position}</small>
                </div>
            </div>
          </div>
          <div className={`testimonial-card next p-10 bg-white rounded-xl border border-black`}>
            <p>
                {data?.testimonials?.[0].text}
            </p>
            <div className="flex items-center gap-3">
                <img src={data?.testimonials?.[0]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>
                    <h5 className="font-bold text-sm">{data?.testimonials?.[0].name}</h5>
                    <small className="font-medium">{data?.testimonials?.[0].position}</small>
                </div>
            </div>
          </div>
          
          <div className={`testimonial-card prev p-10 bg-white rounded-xl border border-black`}>
            <p>
                {data?.testimonials?.[1].text}
            </p>
            <div className="flex items-center gap-3">
                <img src={data?.testimonials?.[1]?.image?.data?.attributes?.url} alt="" className="rounded-full w-10 h-10 aspect-square" />
                <div>
                    <h5 className="font-bold text-sm">{data?.testimonials?.[1].name}</h5>
                    <small className="font-medium">{data?.testimonials?.[1].position}</small>
                </div>
            </div>
          </div>
          
        </div>
        <div className={`flex items-center justify-center gap-3 mt-5`}>
            <div className={`rounded-full bg-[#5E2AED] p-2`} onClick={gotoPrev}>
              <img
                className="w-[12px]"
                src="/left-arrow-carousel.svg"
                alt="left arrow"
              />
            </div>
            <div className={`rounded-full bg-[#5E2AED] p-2`} onClick={gotoNext}>
              <img
                className="w-[12px]"
                src="/right-arrow-carousel.svg"
                alt="right arrow"
              />
            </div>
          </div>
      </div>
    </section>
   </>
  );
}
