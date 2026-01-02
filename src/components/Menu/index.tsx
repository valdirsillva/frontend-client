import Link from 'next/link'
import { Fragment, useState } from 'react'
import * as S from './styles'
import Logo from '../Logo'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Button from '../Button'
import MediaMatch from '../MediaMatch'
import CartDropdown from '../CartDropdown'
import UserDropdown from '../UserDropdown'

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
        <Link href="/">
          <Logo $hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/">
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games">
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
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

          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>

          <MediaMatch lessThan="medium">
            <Link href="/cart" passHref>
              <CartDropdown />
            </Link>
          </MediaMatch>
        </S.IconWrapper>

        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="/signin" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <Link href="/">
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games">
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
          {!!username && (
            <Fragment>
              <Link href="/profile/me">
                <S.MenuLink>My profile</S.MenuLink>
              </Link>
              <Link href="/profile/wishlist">
                <S.MenuLink>Wishlist</S.MenuLink>
              </Link>
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
            <Link href="/signup" passHref>
              <S.CreateAccount href="#" title="Sign Up" as="a">
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
