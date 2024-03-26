import { ExtraProps } from 'react-markdown'

type PProps = React.ClassAttributes<HTMLHeadingElement> &
  React.HTMLAttributes<HTMLHeadingElement> &
  ExtraProps

export const P = (props: PProps) => {
  return (
    <p className="text-foreground mb-4 text-base leading-relaxed" {...props} />
  )
}
