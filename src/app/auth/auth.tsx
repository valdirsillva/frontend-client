'use client'

import Link from 'next/link'
import Logo from '@/components/Logo'
import Heading from '@/components/Heading'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href="/">
            <Logo id="banner" />
          </Link>

          <div>
            <Heading size="huge">Seus jogos favoritos em um só lugar</Heading>
            <S.Subtitle>
              A <strong>WON</strong> é a melhor e mais completa plataforma de
              games.
            </S.Subtitle>
          </div>

          <S.Footer>Won Games 2025 © Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Link href="/">
            <Logo color="black" size="large" id="content" />
          </Link>
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>
          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
