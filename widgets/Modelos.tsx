import type { ModeloConfig } from "@/config/modelos_dados";
import CardModelo from "@/components/CardModelo";

interface ModelosProps {
  boxy: ModeloConfig;
  classica: ModeloConfig;
  regata: ModeloConfig;
  divisoria?: string;
}

export default function Modelos({
  boxy,
  classica,
  regata,
  divisoria = "via-white/15",
}: ModelosProps) {
  return (
    <div className="relative flex min-h-lvh w-full flex-col">
      {/* Primeira Sessão */}
      <div className="relative flex h-full min-h-lvh w-full flex-col items-center gap-30 lg:flex-row lg:gap-0">
        {/* Card #1 */}
        <div className="relative w-full flex-1">
          <CardModelo
            img_modelo_frente={boxy.img_modelo_frente}
            img_modelo_costas={boxy.img_modelo_costas}
            width={boxy.width}
            height={boxy.height}
            larguraImagem={boxy.larguraImagem}
            tamanhoImagem={boxy.tamanhoImagem}
            classNameImage={boxy.classNameImage}
            titulo={boxy.titulo}
            texto={boxy.texto}
            background={boxy.background}
            // background="bg-linear-to-b from-zinc-800 to-zinc-950"
            textColor={boxy.textColor}
            textSecondaryColor={boxy.textSecondaryColor}
            logoColor={boxy.logoColor}
            buttonColor={boxy.buttonColor}
            lineColor={boxy.lineColor}
            linkCamisa={boxy.linkCamisa}
            buttonTextColor={boxy.buttonTextColor}
            buttonShadowColor={boxy.buttonShadowColor}
            // tabsPosition="bottom"
          />
        </div>

        {/* Divisor */}
        <div className={`hidden h-[70vh] w-px bg-linear-to-b from-transparent ${divisoria} to-transparent lg:flex`} />
        <div className={`h-px w-xs bg-linear-to-r from-transparent ${divisoria} to-transparent px-10 lg:hidden`} />

        {/* Card #2 */}
        <div className="relative w-full flex-1">
          <CardModelo
            img_modelo_frente={classica.img_modelo_frente}
            img_modelo_costas={classica.img_modelo_costas}
            width={classica.width}
            height={classica.height}
            larguraImagem={classica.larguraImagem}
            tamanhoImagem={classica.tamanhoImagem}
            classNameImage={classica.classNameImage}
            titulo={classica.titulo}
            texto={classica.texto}
            background={classica.background}
            // background="bg-linear-to-b from-zinc-800 to-zinc-950"
            textColor={classica.textColor}
            textSecondaryColor={classica.textSecondaryColor}
            logoColor={classica.logoColor}
            buttonColor={classica.buttonColor}
            lineColor={classica.lineColor}
            linkCamisa={classica.linkCamisa}
            buttonTextColor={classica.buttonTextColor}
            buttonShadowColor={classica.buttonShadowColor}
            // tabsPosition="bottom"
          />
        </div>

        {/* Divisor */}
        <div className={`hidden h-[70vh] w-px bg-linear-to-b from-transparent ${divisoria} to-transparent lg:flex`} />
        <div className={`h-px w-xs bg-linear-to-r from-transparent ${divisoria} to-transparent px-10 lg:hidden`} />

        {/* Card #3 */}
        <div className="relative w-full flex-1">
          <CardModelo
            img_modelo_frente={regata.img_modelo_frente}
            img_modelo_costas={regata.img_modelo_costas}
            width={regata.width}
            height={regata.height}
            larguraImagem={regata.larguraImagem}
            tamanhoImagem={regata.tamanhoImagem}
            classNameImage={regata.classNameImage}
            titulo={regata.titulo}
            texto={regata.texto}
            background={regata.background}
            // background="bg-linear-to-b from-zinc-800 to-zinc-950"
            textColor={regata.textColor}
            textSecondaryColor={regata.textSecondaryColor}
            logoColor={regata.logoColor}
            buttonColor={regata.buttonColor}
            lineColor={regata.lineColor}
            linkCamisa={regata.linkCamisa}
            buttonTextColor={regata.buttonTextColor}
            buttonShadowColor={regata.buttonShadowColor}
            // tabsPosition="bottom"
          />
        </div>
      </div>
    </div>
  );
}
