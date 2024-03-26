import { ExtraProps } from 'react-markdown'

type H3Props = React.ClassAttributes<HTMLHeadingElement> &
  React.HTMLAttributes<HTMLHeadingElement> &
  ExtraProps

export const H3 = (props: H3Props) => {
  return <h3 className="text-foreground mb-6 text-xl font-bold" {...props} />
}
