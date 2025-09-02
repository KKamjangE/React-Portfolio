import clsx from 'clsx'
import YellowPoint from './YellowPoint'

export default function HoverMotion({
  children,
  isNav,
}: {
  children: React.ReactNode
  isNav?: string
}) {
  return (
    <div className={clsx(
      'bg-gradient-to-r from-transparent from-50% to-[var(--color-accent-yellow)] to-50% bg-[position:0%_0%] bg-[length:200%_100%] transition-all duration-200 ease-in-out hover:bg-[position:-100%_0%]',
      {
        'p-2.5 block no-underline': isNav === 'nav',
        'underline inline-block p-0': isNav !== 'nav',
      }
    )}>
      <YellowPoint>{children}</YellowPoint>
    </div>
  )
}