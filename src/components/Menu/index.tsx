import Link from 'next/link'
import { Fragment, useState } from 'react'
import * as S from './styles'
import Logo from '../Logo'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Button from '../Button'
import MediaMatch from '../MediaMatch'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open Menu" onClick={() => setIsOpen(true)} />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo $hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!username && (
            <Fragment>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </Fragment>
          )}
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/signin" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!username && (
            <Fragment>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </Fragment>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/signin" passHref>
              <Button fullWidth size="large" as="a">
                Sign In
              </Button>
            </Link>
            <span>or</span>
            <Link href="/signun" passHref>
              <S.CreateAccount href="#" title="Sign In" as="a">
                Sign Up
              </S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
