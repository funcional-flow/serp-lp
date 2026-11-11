import QualidadeCardDesk from "@/components/QualidadeCardDesk";
import QualidadeCardMobile from "@/components/QualidadeCardMobile";

interface QualidadeProps {
  title: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  image1: string;
  image2: string;
  imageBackground?: boolean;
}

export default function Qualidade({
  title,
  backgroundColor,
  titleColor,
  textColor,
  image1,
  image2,
  imageBackground= false
}: QualidadeProps) {
  return (
    <>
      <div className="hidden h-lvh lg:block">
        <QualidadeCardDesk
          title={title}
          image1={image1}
          image2={image2}
          backgroundColor={backgroundColor}
          titleColor={titleColor}
          textColor={textColor}
        />
      </div>
      <div className="h-lvh lg:hidden">
        <QualidadeCardMobile
          title={title}
          backgroundColor={backgroundColor}
          titleColor={titleColor}
          textColor={textColor}
        />
      </div>
    </>
  );
}
