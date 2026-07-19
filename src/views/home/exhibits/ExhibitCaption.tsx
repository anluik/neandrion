export default function ExhibitCaption({
  children,
}: {
  children: React.ReactNode
}) {
  return <span className="mono-label !tracking-[0.1em]">{children}</span>
}
