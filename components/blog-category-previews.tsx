import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type BlogCategoryPreviewsType = {
  className?: string;
};

const BlogCategoryPreviews: NextPage<BlogCategoryPreviewsType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onFrameLinkClick = useCallback(() => {
    router.push("/blog-article");
  }, [router]);

  const onFrameLinkClick1 = useCallback(() => {
    router.push("/blog-article2");
  }, [router]);

  const onFrameLinkClick2 = useCallback(() => {
    router.push("/blog-article3");
  }, [router]);

  return (
    <div
      className={`self-stretch h-[474px] flex flex-row items-start justify-between flex-wrap text-left text-7xl text-studio-darkmode-exportbg-1a202e font-alegreya ${className}`}
    >
      <a
        className="[text-decoration:none] w-[32%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white border-studio-lightmode-midseparator-dee3eb border-[0.7px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start gap-1 cursor-pointer mb-5 [transition:0.3s] text-[inherit] hover:shadow-[0px_0px_24px_rgba(0,_0,_0,_0.1)] mq960:w-[48%] mq680:w-full"
        onClick={onFrameLinkClick}
      >
        <img
          className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
          alt=""
          src="/rectangle-478@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start p-4 gap-[13px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="self-stretch flex flex-col items-start justify-start">
              <b className="self-stretch relative tracking-[0.02em] leading-[34px]">
                Locofy.ai – Turn Figma to Code!
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base font-roboto">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px]">
                Go from Figma to code in minimum amount of time using Locofy.
                Take your..
              </div>
            </div>
          </div>
          <div className="self-stretch relative border-studio-lightmode-lightseparator-ecf0f6 border-t-[0.7px] border-solid box-border h-[0.7px]" />
          <div className="flex flex-row items-center justify-start gap-2.5 text-mid text-dimgray font-source-code-pro">
            <img
              className="w-10 relative rounded-[50%] h-10 object-cover"
              alt=""
              src="/avatar-3@2x.png"
            />
            <div className="flex flex-col items-start justify-start gap-0.5">
              <div className="w-[145.5px] relative tracking-[-0.04em] font-semibold inline-block">
                Anna Rosé
              </div>
              <div className="w-[145.5px] relative text-sm font-roboto text-studio-darkmode-normalsolid-icons-96a2be inline-block">
                Posted just now
              </div>
            </div>
          </div>
        </div>
      </a>
      <a
        className="[text-decoration:none] self-stretch w-[32%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white border-studio-lightmode-midseparator-dee3eb border-[0.7px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start gap-1 mb-5 [transition:0.3s] cursor-pointer text-[inherit] hover:shadow-[0px_0px_24px_rgba(0,_0,_0,_0.1)] mq960:w-[48%] mq680:w-full"
        onClick={onFrameLinkClick1}
      >
        <img
          className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
          alt=""
          src="/rectangle-478-3@2x.png"
        />
        <div className="self-stretch flex-1 flex flex-col items-start justify-between p-4">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="self-stretch flex flex-col items-start justify-start">
              <b className="self-stretch relative tracking-[0.02em] leading-[34px]">
                Figma for Developers
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base font-roboto">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px]">
                Developers often believe they will be off to a flying start if
                they skip the designing process and jump directly to code.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[13px] text-mid text-dimgray font-source-code-pro">
            <div className="w-[302.7px] relative border-studio-lightmode-lightseparator-ecf0f6 border-t-[0.7px] border-solid box-border h-[0.7px]" />
            <div className="flex flex-row items-center justify-start gap-2.5">
              <img
                className="w-10 relative rounded-[50%] h-10 object-cover"
                alt=""
                src="/avatar-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-0.5">
                <div className="w-[145.5px] relative tracking-[-0.04em] font-semibold inline-block">
                  Justin Chen
                </div>
                <div className="w-[145.5px] relative text-sm font-roboto text-studio-darkmode-normalsolid-icons-96a2be inline-block">
                  Posted on Sep 6, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a
        className="[text-decoration:none] self-stretch w-[32%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white border-studio-lightmode-midseparator-dee3eb border-[0.7px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start gap-1 mb-5 [transition:0.3s] cursor-pointer text-[inherit] hover:shadow-[0px_0px_24px_rgba(0,_0,_0,_0.1)] mq960:w-[48%] mq680:w-full"
        onClick={onFrameLinkClick2}
      >
        <img
          className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
          alt=""
          src="/rectangle-478-4@2x.png"
        />
        <div className="self-stretch flex-1 flex flex-col items-start justify-between p-4">
          <div className="self-stretch flex flex-col items-start justify-start gap-2">
            <div className="self-stretch flex flex-col items-start justify-start">
              <b className="self-stretch relative tracking-[0.02em] leading-[34px]">
                Best UI library to use in Figma
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base font-roboto">
              <div className="self-stretch relative tracking-[0.01em] leading-[28px]">
                Find out what UI library suit your product the most. From
                Material UI, Bootstrap, ...
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[13px] text-mid text-dimgray font-source-code-pro">
            <div className="w-[330.7px] relative border-studio-lightmode-lightseparator-ecf0f6 border-t-[0.7px] border-solid box-border h-[0.7px]" />
            <div className="flex flex-row items-center justify-start gap-2.5">
              <img
                className="w-10 relative rounded-[50%] h-10 object-cover"
                alt=""
                src="/avatar-2@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-0.5">
                <div className="w-[145.5px] relative tracking-[-0.04em] font-semibold inline-block">
                  Isaac Tan
                </div>
                <div className="w-[145.5px] relative text-sm font-roboto text-studio-darkmode-normalsolid-icons-96a2be inline-block">
                  Posted on Sep 5, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogCategoryPreviews;