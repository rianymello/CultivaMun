import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gray-200 border-studio-lightmode-midseparator-dee3eb border-[1px] border-solid box-border h-[262px] flex flex-row items-center justify-center pt-[46px] px-[30px] pb-[42px] gap-[23px] text-left text-13xl text-studio-darkmode-exportbg-1a202e font-roboto mq1080:flex-col ${className}`}
    >
      <div className="w-[558.5px] flex flex-row items-center justify-center">
        <div className="w-[603px] h-[213px] flex flex-col items-start justify-between">
          <div className="w-[517px] flex flex-row flex-wrap items-center justify-center gap-[21px]">
            <b className="relative tracking-[0.01em]">
              Junte-se à nossa missão!
            </b>
            <img
              className="w-28 relative h-[101px] object-cover"
              alt=""
              src="/rectangle-479@2x.png"
            />
          </div>
          <div className="w-[421px] relative text-xl tracking-[0.01em] leading-[36px] inline-block">
            Quer ser o primeiro a receber nossos desafios semanais? inscreva-se
            na nossa newsletter e torne-se parte do movimento Cultiva Mun!
          </div>
        </div>
      </div>
      <div className="w-[558.5px] flex flex-row items-start justify-center gap-2.5 text-lg text-white mq1080:w-full mq680:flex-col">
        <input
          className="border-studio-lightmode-midseparator-dee3eb border-[1px] border-solid [outline:none] font-roboto text-lg bg-white flex-1 rounded-md box-border h-14 flex flex-row items-center justify-center py-3.5 px-[17px] text-lightsteelblue-200 mq680:w-full mq680:flex-[unset] mq680:self-stretch"
          placeholder="Enter email address"
          type="text"
        />
        <div className="h-14 rounded-md bg-mediumseagreen flex flex-row items-center justify-center py-[18px] px-[37px] box-border [transition:0.3s] hover:bg-mediumslateblue-200 mq680:[transition:0.3s] mq680:w-full">
          <div className="relative font-semibold">Subscribe</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
