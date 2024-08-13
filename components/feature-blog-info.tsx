import type { NextPage } from "next";

export type FeatureBlogInfoType = {
  className?: string;
};

const FeatureBlogInfo: NextPage<FeatureBlogInfoType> = ({ className = "" }) => {
  return (
    <div
      className={`feature-blog-info w-[425px] flex flex-col items-start justify-start py-2.5 pl-0 pr-5 box-border gap-6 z-[1] text-left text-lg text-studio-darkmode-exportbg-1a202e font-source-code-pro mq960:w-full ${className}`}
    >
      <div className="feat-blog-details self-stretch flex flex-col items-start justify-start gap-1.5">
        <div className="blog-info-top self-stretch flex flex-row items-center justify-start sm:flex-col sm:items-start sm:gap-1.5">
          <b className="seja-bem-vindo-ao relative uppercase text-transparent !bg-clip-text [background:linear-gradient(90deg,_#2f509b,_#27b660)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            SEJA Bem-vindo AO
          </b>
        </div>
        <b className="cultivamun self-stretch relative text-34xl tracking-[0.02em] leading-[64px] font-alegreya sm:text-[40px!important] sm:leading-[50px!important] mq680:text-29xl mq680:leading-[56px]">
          CultivaMun
        </b>
        <div className="blog-description self-stretch flex flex-col items-start justify-start text-xl font-roboto">
          <div className="um-lugar-onde self-stretch relative tracking-[0.01em] leading-[32px]">
            {" "}
            Um lugar onde acreditamos que pequenas ações podem gerar grandes
            mudanças. Nosso objetivo é inspirar e capacitar você a fazer a
            diferença no meio ambiente. Junte-se a nós para transformar o nosso
            mundo, um passo de cada vez.
          </div>
        </div>
      </div>
      <div className="feature-blog-info-child self-stretch relative border-studio-lightmode-lightseparator-ecf0f6 border-t-[0.7px] border-solid box-border h-[0.7px]" />
    </div>
  );
};

export default FeatureBlogInfo;
