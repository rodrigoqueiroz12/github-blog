import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { ExtraProps } from 'react-markdown'

type AProps = React.ClassAttributes<HTMLAnchorElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ExtraProps

export const A = (props: AProps) => {
  return (
    <a
      target="_blank"
      className="text-primary inline-flex items-start gap-1 underline-offset-2 hover:underline"
      {...props}
    >
      {props.children}
      <ExternalLinkIcon className="size-3" />
    </a>
  )
}
