export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-[81rem] justify-center px-4 pt-16">{children}</div>
  )
}
