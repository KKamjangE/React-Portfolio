export default function YellowPoint({ children }: { children: React.ReactNode }) {
  return (
    <span>
      {children}
      <span style={{ color: 'var(--color-accent-yellow)' }}>.</span>
    </span>
  )
}