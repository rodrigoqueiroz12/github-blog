import { ExtraProps } from 'react-markdown'

type HrProps = React.ClassAttributes<HTMLHRElement> &
  React.HTMLAttributes<HTMLHRElement> &
  ExtraProps

export const Hr = (props: HrProps) => {
  return <hr className="my-8 border border-border" {...props} />
}
