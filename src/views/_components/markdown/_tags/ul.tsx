import { ExtraProps } from 'react-markdown'

type UlProps = React.ClassAttributes<HTMLUListElement> &
  React.HTMLAttributes<HTMLUListElement> &
  ExtraProps

export const Ul = (props: UlProps) => {
  return <ul className="list-disc pl-4" {...props} />
}
