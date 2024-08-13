import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const BlogArticle1: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onIntroductionClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative [background:linear-gradient(180deg,_#f1f3f7,_rgba(244,_247,_252,_0)),_#fff] w-full h-[2494px] flex flex-col items-center justify-start gap-[45px] text-left text-lg text-studio-darkmode-exportbg-1a202e font-roboto">
      <header className="w-full shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-gray-100 flex flex-row items-center justify-between py-[26px] pl-9 pr-12 box-border sticky top-[0px] z-[2] text-left text-34xl text-studio-darkmode-exportbg-1a202e font-alegreya lg:pt-[18px] lg:pb-[18px] lg:box-border md:py-1.5 md:px-9 md:box-border mq960:py-1.5 mq960:px-3.5 mq960:box-border mq680:pl-9 mq680:pr-9 mq680:box-border">
        <b className="w-[405px] relative tracking-[0.02em] leading-[64px] inline-block h-16 shrink-0 sm:text-[40px!important] sm:leading-[50px!important] mq680:text-29xl mq680:leading-[56px]">
          CultivaMun
        </b>
        <div className="flex flex-row items-start justify-start text-center text-sm text-white font-source-code-pro">
          <div className="flex flex-row items-start justify-start gap-2.5">
            <a className="[text-decoration:none] h-[46px] w-[47px] rounded-6xl bg-white border-mediumseagreen border-[1px] border-solid box-border hover:bg-dodgerblue hover:[transition:0.3s] md:py-[17px] md:px-[15px] md:box-border sm:flex sm:p-[15px] sm:box-border mq960:p-[11px] mq960:box-border mq960:h-auto mq960:w-auto" />
            <a className="[text-decoration:none] h-[46px] w-[49px] rounded-3xl bg-mediumseagreen flex flex-col items-center justify-center py-[11px] px-5 box-border text-[inherit] hover:bg-mediumslateblue-100 hover:cursor-pointer hover:[transition:0.25s] sm:py-[11px] sm:px-3 sm:box-border sm:w-auto mq960:py-[9px] mq960:px-2.5 mq960:box-border mq960:h-auto">
              <div className="hidden flex-row items-center justify-center gap-[5px] [pointer-events:none]">
                <div className="relative tracking-[-0.03em] font-semibold mq960:text-3xs">
                  S
                </div>
                <div className="relative tracking-[-0.03em] font-semibold text-transparent !bg-clip-text [background:hsla(0,0%,100%,.11)] rounded py-[3px] px-1 mq960:text-3xs" />
              </div>
            </a>
          </div>
        </div>
      </header>
      <div
        className="w-full flex flex-col items-start justify-start gap-[23px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_roll-in-left] opacity-[0] max-w-[1113px] lg:pl-6 lg:pr-6 lg:box-border"
        data-animate-on-scroll
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-2 sticky top-[120px] mq960:relative mq960:top-[auto]"
          onClick={onFrameButtonClick}
        >
          <img
            className="w-[23px] relative h-[23px]"
            alt=""
            src="/icon--back.svg"
          />
          <a className="[text-decoration:none] relative text-base tracking-[0.01em] leading-[28px] font-roboto text-studio-darkmode-popuplabels-5e6a86 text-left">
            Home
          </a>
        </button>
        <div className="flex flex-row items-start justify-between">
          <div className="w-[235px] rounded-lg bg-white flex flex-col items-start justify-start p-[15px] box-border gap-4 sticky top-[165px] mq960:hidden">
            <div className="relative tracking-[0.01em] font-semibold [transition:0.3s] hover:text-studio-darkmode-maincta-457eff">
              Table of Contents
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-2.5 text-base text-studio-darkmode-popuplabels-5e6a86">
              <a
                className="[text-decoration:none] relative tracking-[0.01em] leading-[28px] text-[inherit] [transition:0.3s] cursor-pointer hover:text-studio-darkmode-maincta-457eff"
                onClick={onIntroductionClick}
              >
                Introduction
              </a>
              <a className="[text-decoration:none] relative tracking-[0.01em] leading-[28px] text-[inherit] [transition:0.3s] hover:text-studio-darkmode-maincta-457eff">
                Zero Friction
              </a>
              <a className="[text-decoration:none] relative tracking-[0.01em] leading-[28px] text-[inherit] [transition:0.3s] hover:text-studio-darkmode-maincta-457eff">
                AI Powered
              </a>
              <a className="[text-decoration:none] self-stretch relative tracking-[0.01em] leading-[25px] text-[inherit] [transition:0.3s] hover:text-studio-darkmode-maincta-457eff">{`View Code & Digest Dynamic Data`}</a>
              <a className="[text-decoration:none] self-stretch relative tracking-[0.01em] leading-[25px] text-[inherit] [transition:0.3s] hover:text-studio-darkmode-maincta-457eff">{`Share & Collaborate Seamlessly with Locofy Builder`}</a>
              <a className="[text-decoration:none] self-stretch relative tracking-[0.01em] leading-[25px] text-[inherit] [transition:0.3s] hover:text-studio-darkmode-maincta-457eff">{`Direct Export & Deploy`}</a>
              <a className="[text-decoration:none] self-stretch relative tracking-[0.01em] leading-[25px] text-[inherit] [transition:0.3s] hover:text-studio-darkmode-maincta-457eff">
                Conclusion
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-8 text-sm font-source-code-pro">
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-10 sm:w-full mq960:pl-0 mq960:pr-0 mq960:box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-6">
                <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
                  <div className="self-stretch flex flex-row items-center justify-start text-dimgray sm:flex-col sm:items-start sm:gap-2.5">
                    <div className="rounded-md bg-whitesmoke flex flex-row items-start justify-start py-1 px-2">
                      <div className="relative tracking-[-0.04em]">
                        3 min read
                      </div>
                    </div>
                  </div>
                  <b className="self-stretch relative text-34xl tracking-[0.02em] leading-[64px] font-alegreya sm:text-[40px!important] sm:leading-[50px] mq680:text-29xl mq680:leading-[56px]">
                    Artigo 3
                  </b>
                  <div className="self-stretch relative text-xl tracking-[0.01em] leading-[34px] font-roboto">
                    Go from Figma to code in minimum amount of time using
                    Locofy. Take your design to real world with Locofy's AI
                    powered plugin.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start text-mid text-dimgray">
                  <div className="rounded-lg flex flex-row items-center justify-start gap-2.5">
                    <img
                      className="w-10 relative rounded-[50%] h-10 object-cover"
                      alt=""
                      src="/avatar1@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-0.5">
                      <div className="relative tracking-[-0.04em] font-semibold">
                        Anna Rosé
                      </div>
                      <div className="relative text-sm font-roboto text-studio-darkmode-normalsolid-icons-96a2be">
                        Posted just now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start sm:w-full">
              <img
                className="self-stretch h-[476.6px] relative rounded-3xs max-w-full overflow-hidden shrink-0 object-cover w-full sm:w-full sm:h-auto mq960:w-full mq960:h-auto"
                alt=""
                src="/image-33@2x.png"
              />
            </div>
            <div className="self-stretch relative border-studio-lightmode-midseparator-dee3eb border-t-[0.7px] border-solid box-border h-[0.7px]" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-10 pr-14 text-5xl font-roboto sm:flex-col sm:w-full mq960:pl-0 mq960:pr-2.5 mq960:box-border">
              <div className="flex-1 flex flex-col items-start justify-start sm:w-full sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start gap-2.5 relative">
                  <b className="self-stretch relative tracking-[0.01em]">
                    Introduction
                  </b>
                  <div className="self-stretch relative text-base tracking-[0.01em] leading-[28px]">
                    <p className="m-0">{`Figma has become a household name in the UIUX community. Being a truly browser-first product (not just storage in the cloud - no installation, no patching, no updates) and with highly collaborative features that no other player could think of or execute, Figma emerged as the clear market leader. `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      You can design anything on Figma – from a cool logo to
                      native apps and much more. But design is just the
                      beginning of building a world-class product. You need to
                      bring your product to life by actually building it -
                      Writing the damn code!
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">{`That’s where Locofy.ai comes in. While Figma is enough to get the ball rolling, Locofy.ai even takes it further by enabling anyone with a Figma design to get high-quality, pixel-perfect code. Hence, accelerating the building process – with minimal time and a shallow learning curve, builders can now quickly and easily go from Figma to code. `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">{`Validating an idea? Revamping your UI? The Locofy plugin puts Figma on steroids by taking your idea from design to websites and app.  Figma has become a household name in the UIUX community. Being a truly browser-first product (not just storage in the cloud - no installation, no patching, no updates) and with highly collaborative features that no other player could think of or execute, Figma emerged as the clear market leader. `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      You can design anything on Figma – from a cool logo to
                      native apps and much more. But design is just the
                      beginning of building a world-class product. You need to
                      bring your product to life by actually building it -
                      Writing the damn code!
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">{`That’s where Locofy.ai comes in. While Figma is enough to get the ball rolling, Locofy.ai even takes it further by enabling anyone with a Figma design to get high-quality, pixel-perfect code. Hence, accelerating the building process – with minimal time and a shallow learning curve, builders can now quickly and easily go from Figma to code. `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">{`Validating an idea? Revamping your UI? The Locofy plugin puts Figma on steroids by taking your idea from design to websites and app.  Figma has become a household name in the UIUX community. Being a truly browser-first product (not just storage in the cloud - no installation, no patching, no updates) and with highly collaborative features that no other player could think of or execute, Figma emerged as the clear market leader. `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      You can design anything on Figma – from a cool logo to
                      native apps and much more. But design is just the
                      beginning of building a world-class product. You need to
                      bring your product to life by actually building it -
                      Writing the damn code!
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">{`That’s where Locofy.ai comes in. While Figma is enough to get the ball rolling, Locofy.ai even takes it further by enabling anyone with a Figma design to get high-quality, pixel-perfect code. Hence, accelerating the building process – with minimal time and a shallow learning curve, builders can now quickly and easily go from Figma to code. `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Validating an idea? Revamping your UI? The Locofy plugin
                      puts Figma on steroids by taking your idea from design to
                      websites and app.
                    </p>
                  </div>
                  <div
                    className="absolute left-[0] top-[-110px]"
                    data-scroll-to="frameContainer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch relative text-base tracking-[0.01em] leading-[24px] text-studio-darkmode-normalsolid-icons-96a2be text-center sm:mb-5 mq680:mb-5">
        © 2022, Locofy Pte Ltd. All Rights Reserved.
      </div>
    </div>
  );
};

export default BlogArticle1;
