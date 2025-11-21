'use client'
import { usePathname } from 'next/navigation'

import Base from '@/app/templates/base'
import Heading from '@/components/Heading'
import { Container } from '@/components/Container'
import ProfileMenu from '@/components/ProfileMenu'
import * as S from './styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const ProfileTemplate = ({ children }: ProfileTemplateProps) => {
  // Ler a URL atual
  const pathname = usePathname()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor='secondary'>
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={pathname} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default ProfileTemplate