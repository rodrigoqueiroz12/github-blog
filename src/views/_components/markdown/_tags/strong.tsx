import { ExtraProps } from 'react-markdown'

type StrongProps = React.ClassAttributes<HTMLElement> &
  React.HTMLAttributes<HTMLElement> &
  ExtraProps

export const Strong = (props: StrongProps) => {
  return <strong className="text-foreground font-bold" {...props} />
}
