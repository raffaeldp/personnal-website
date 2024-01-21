import Navbar from '@/components/navbar'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="m-0 flex justify-center">
      <Navbar />
      <div className="w-[81rem] px-4 pt-16">{children}</div>
    </div>
  )
}
