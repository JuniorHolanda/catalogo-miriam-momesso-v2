import { SLink } from './link.styles'

type propsCustomLink = {
  link: string,
  children: React.ReactNode
  className?: string
}

export default function CustomLink({ children, link, className} : propsCustomLink) {
  return (
    <SLink href={link} className={className}>
      <span>{children}</span>
    </SLink>
  );
}
