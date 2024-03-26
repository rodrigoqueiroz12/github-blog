import { ExtraProps } from 'react-markdown'

type H4Props = React.ClassAttributes<HTMLHeadingElement> &
  React.HTMLAttributes<HTMLHeadingElement> &
  ExtraProps

export const H4 = (props: H4Props) => {
  return (
    <h4 className="text-foreground mb-2 mt-8 text-lg font-bold" {...props} />
  )
}
