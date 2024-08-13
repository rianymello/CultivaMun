import React from 'react';

interface EditorsPickItemProps {
  designToCode: string;
  figmaForDevelopers: string;
  avatar: string;
  postedJustNow: string;
  editorsPickDetailsMinHeight?: string;
  editorsPickDetailsGap?: string;
  designToCodeDisplay?: string;
  designToCodeMinWidth?: string;
  postedJustNowAlignSelf?: string;
  postedJustNowDisplay?: string;
  postedJustNowMinWidth?: string;
}

const EditorsPickItem: React.FC<EditorsPickItemProps> = ({
  designToCode,
  figmaForDevelopers,
  avatar,
  postedJustNow,
  editorsPickDetailsMinHeight = 'unset',
  editorsPickDetailsGap = '11px',
  designToCodeDisplay = 'unset',
  designToCodeMinWidth = 'unset',
  postedJustNowAlignSelf = 'unset',
  postedJustNowDisplay = 'unset',
  postedJustNowMinWidth = 'unset',
}) => {
  return (
    <div
      className="w-[864px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-x-auto flex flex-row items-center justify-center mq680:flex-col"
      style={{
        minHeight: editorsPickDetailsMinHeight,
        gap: editorsPickDetailsGap,
      }}
    >
      <div className="flex flex-col items-start">
        <div
          className="flex flex-row items-center gap-2"
          style={{
            display: designToCodeDisplay,
            minWidth: designToCodeMinWidth,
          }}
        >
          <img
            className="w-12 h-12 rounded-full"
            alt="Avatar"
            src={avatar}
          />
          <div className="flex flex-col">
            <p className="font-semibold">{designToCode}</p>
            <p>{figmaForDevelopers}</p>
          </div>
        </div>
        <div
          className="text-sm"
          style={{
            alignSelf: postedJustNowAlignSelf,
            display: postedJustNowDisplay,
            minWidth: postedJustNowMinWidth,
          }}
        >
          {postedJustNow}
        </div>
      </div>
    </div>
  );
};

export default EditorsPickItem;
