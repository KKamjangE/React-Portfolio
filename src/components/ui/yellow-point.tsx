export default function YellowPoint({ children }: { children: React.ReactNode }) {
  return (
    <span>
      {children}
      <span className="text-accent">.</span>
    </span>
  );
}
