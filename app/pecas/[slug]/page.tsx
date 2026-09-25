import { getProductBySlug } from "@/config/pecas_dados"
import CamisetaPage from "@/widgets/CamisetaPage"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductRoute({ params }: Props) {
  const { slug } = await params

  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return <CamisetaPage product={product} />
}