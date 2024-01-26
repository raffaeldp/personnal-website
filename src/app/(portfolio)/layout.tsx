import Navbar from '@/components/navigation/navbar'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="m-0 flex justify-center">
      <Navbar />
      <div className="mt-16 w-[81rem] px-4">{children}</div>
    </div>
  )
}
