import * as S from './styles'
import { AccountCircle, CreditCard, ExitToApp, FormatListBulleted } from '@styled-icons/material-outlined'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders'
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <S.LinkWrapper isActive={activeLink === '/profile/me'} title='My profile' href="/profile/me" passHref>
      <AccountCircle size={24} />
      <span>My profile</span>
    </S.LinkWrapper>

    <S.LinkWrapper isActive={activeLink === '/profile/cards'} href="/profile/cards" title='My cards' passHref>
      <CreditCard size={24} />
      <span>My cards</span>
    </S.LinkWrapper>

    <S.LinkWrapper isActive={activeLink === '/profile/orders'} href="/profile/orders" title='My orders' passHref>
      <FormatListBulleted size={24} />
      <span>My orders</span>
    </S.LinkWrapper>

    <S.LinkWrapper href="/signout" >
      <ExitToApp size={24} />
      <span>Sign out</span>
    </S.LinkWrapper>
  </S.Nav>
)

export default ProfileMenu