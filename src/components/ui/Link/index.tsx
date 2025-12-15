import { SLink } from './link.styles'

type propsCustomLink = {
  link: string,
  children: React.ReactNode
}

export default function CustomLink({ children, link} : propsCustomLink) {
  return (
    <SLink href={link}>
      <span>{children}</span>
    </SLink>
  );
}
