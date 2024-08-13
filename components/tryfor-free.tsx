import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TryforFreeType = {
  className?: string;

  /** Style props */
  propTextDecoration?: CSSProperties["textDecoration"];
};

const TryforFree: NextPage<TryforFreeType> = ({
  className = "",
  propTextDecoration,
}) => {
  const signUpStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <a
      className={`[text-decoration:none] h-[46px] w-[49px] rounded-3xl bg-mediumseagreen flex flex-col items-center justify-center py-[11px] px-5 box-border text-center text-sm text-white font-source-code-pro hover:bg-mediumslateblue-100 hover:cursor-pointer hover:[transition:0.25s] sm:py-[11px] sm:px-3 sm:box-border sm:w-auto mq960:py-[9px] mq960:px-2.5 mq960:box-border mq960:h-auto ${className}`}
    >
      <div className="hidden flex-row items-center justify-center gap-[5px] [pointer-events:none]">
        <div
          className="relative tracking-[-0.03em] font-semibold mq960:text-3xs"
          style={signUpStyle}
        >
          S
        </div>
        <div className="relative tracking-[-0.03em] font-semibold text-transparent !bg-clip-text [background:hsla(0,0%,100%,.11)] rounded py-[3px] px-1 mq960:text-3xs" />
      </div>
    </a>
  );
};

export default TryforFree;
