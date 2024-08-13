import type { NextPage } from "next";
import FeatureBlogInfo from "../components/feature-blog-info";
import EditorsPickItem from "../components/editors-pick-item";
import BlogCategoryPreviews from "../components/blog-category-previews";
import Footer from "../components/footer";

const BlogHome: NextPage = () => {
  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-start pt-0 px-0 pb-[50px] box-border gap-[65px] text-center text-base text-studio-darkmode-normalsolid-icons-96a2be font-roboto md:gap-[30px]">
      <header className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-gray-100 flex flex-row items-center justify-between py-[26px] pl-9 pr-12 box-border sticky top-[0px] w-full z-[2] text-left text-34xl text-studio-darkmode-exportbg-1a202e font-alegreya lg:pt-[18px] lg:pb-[18px] lg:box-border md:py-1.5 md:px-9 md:box-border mq960:py-1.5 mq960:px-3.5 mq960:box-border mq680:pl-9 mq680:pr-9 mq680:box-border">
        <b className="w-[405px] relative tracking-[0.02em] leading-[64px] inline-block h-16 shrink-0 sm:text-[40px!important] sm:leading-[50px!important] mq680:text-29xl mq680:leading-[56px]">
          CultivaMun
        </b>
        <div className="flex flex-row items-start justify-start gap-2.5 text-center text-sm text-white font-source-code-pro">
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
      </header>
      <section className="w-full h-[1827px] flex flex-col items-center justify-start gap-[65px] max-w-[1200px] ml-[auto] mr-[auto] text-left text-5xl text-studio-darkmode-exportbg-1a202e font-roboto lg:pl-6 lg:pr-6 lg:box-border">
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-white flex flex-row items-center justify-start p-6 gap-5 [transition:0.3s] hover:shadow-[0px_0px_30px_rgba(0,_0,_0,_0.1)] [&_.featured-blog]:hover:bg-white [&_.feature-blog-info]:hover:bg-white [&_.feat-blog-details]:hover:bg-white [&_.blog-info-top]:hover:bg-white [&_.seja-bem-vindo-ao]:hover:text-white [&_.cultivamun]:hover:text-white [&_.blog-description]:hover:bg-white [&_.um-lugar-onde]:hover:text-white [&_.feature-blog-info-child]:hover:bg-white [&_.image-32-icon]:hover:bg-white [&_.image-32-wrapper]:hover:bg-white mq960:flex-col-reverse mq960:[transition:0.3s]">
          <FeatureBlogInfo />
          <div className="image-32-wrapper flex-1 flex flex-col items-start justify-start z-[0] mq960:flex-[unset] mq960:self-stretch">
            <img
              className="image-32-icon w-full h-[448px] relative rounded-xl object-cover mq960:w-full mq960:h-auto"
              alt=""
              src="/image-32@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-5">
          <div className="self-stretch relative tracking-[0.02em] font-semibold">
            Relatos sobre os desafios anteriores
          </div>
          <div className="w-[864px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-x-auto flex flex-row items-center justify-center mq680:flex-col">
            <EditorsPickItem
              designToCode="desafiO:  substituA 5 itens descartáveis por alternativas reutilizáveis "
              figmaForDevelopers={`“Durante uma semana, me comprometi a reduzir ao máximo o uso de plásticos descartáveis. Comecei a levar minha própria garrafa de água, sacolas de pano para as compras e até substituí o plástico filme por cera de abelha reutilizável. No início, foi um pouco difícil mudar alguns hábitos, mas logo percebi o impacto positivo que essas pequenas mudanças podem ter. Agora, mantenho essa prática no meu dia a dia e sinto que estou contribuindo para um mundo melhor."`}
              avatar="/avatar-2@2x.png"
              postedJustNow="Comentado em 20 de agosto, 2023"
              editorsPickDetailsMinHeight="unset"
              editorsPickDetailsGap="11px"
              designToCodeDisplay="unset"
              designToCodeMinWidth="unset"
              postedJustNowAlignSelf="unset"
              postedJustNowDisplay="unset"
              postedJustNowMinWidth="unset"
            />
          </div>
        </div>
        <div className="self-stretch h-[560px] flex flex-col items-start justify-start gap-[30px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative tracking-[0.02em] font-semibold">
              Leia nossos artigos
            </div>
          </div>
          <BlogCategoryPreviews />
        </div>
        <Footer />
      </section>
      <div className="w-[1600px] relative tracking-[0.01em] leading-[24px] inline-block h-[74px] shrink-0 sm:mb-5 mq680:mb-5">
        © 2024, by Riany Mello
      </div>
    </div>
  );
};

export default BlogHome;
