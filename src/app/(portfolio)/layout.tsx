import Navbar from '@/components/navbar'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="m-0 flex justify-center">
      <Navbar />
      <div className="mt-16 w-[81rem] bg-red-50 px-4 pt-8">{children}</div>
    </div>
  )
}
