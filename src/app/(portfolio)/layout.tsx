import Navbar from '@/components/navbar'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-height-full m-0 flex h-full justify-center bg-base-200">
      <Navbar />
      <div className="box-border flex h-full min-h-full w-[81rem] justify-center px-4 pt-16">
        {children}
      </div>
    </div>
  )
}
