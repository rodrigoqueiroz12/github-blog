import { ExtraProps } from 'react-markdown'

type LiProps = React.ClassAttributes<HTMLLIElement> &
  React.LiHTMLAttributes<HTMLLIElement> &
  ExtraProps

export const Li = (props: LiProps) => {
  return <li className="text-foreground mb-1 leading-relaxed" {...props} />
}
