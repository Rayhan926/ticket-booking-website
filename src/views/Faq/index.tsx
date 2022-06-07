import { faqs } from "@config/constants";
import React, { useState } from "react";
import FaqCard from "./components/FaqCard";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState<string>("");
  const evenFaqs = faqs.filter((_, i) => (i + 1) % 2 === 0);
  const oddFaqs = faqs.filter((_, i) => (i + 1) % 2 !== 0);

  const onChangehandler = (faqKey: string) => {
    setActiveFaq((prev) => (prev === faqKey ? "" : faqKey));
  };
  return (
    <section className="pt-[90px] lg:pt-[130px] pb-[150px] lg:pb-[300px] bg-dark-900">
      <div className="container">
        <div className="text-center">
          <p className="text-base lg:text-lg text-dark">FAQ</p>
          <h1 className="title_lg">Have any questions ?</h1>
        </div>

        <div className="mt-[55px] grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          <div className="space-y-[30px]">
            {oddFaqs.map((faq, i) => (
              <FaqCard
                faq={faq}
                isActiveFaq={activeFaq === `odd_faq_${i}`}
                faqKey={`odd_faq_${i}`}
                onChangehandler={onChangehandler}
                key={i}
              />
            ))}
          </div>
          <div className="space-y-[30px]">
            {evenFaqs.map((faq, i) => (
              <FaqCard
                faq={faq}
                isActiveFaq={activeFaq === `even_faq_${i}`}
                faqKey={`even_faq_${i}`}
                onChangehandler={onChangehandler}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
