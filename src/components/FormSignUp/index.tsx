import Link from 'next/link'
import Button from '../Button'
import * as S from './styles'
import TextField from '../TextField'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import { User } from '@styled-icons/remix-fill'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="name"
        placeholder="Name"
        type="text"
        icon={<AccountCircle />}
      />

      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        id="passwordId"
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <TextField
        name="confirm-password"
        placeholder="Confirm password"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Criar conta
      </Button>

      <S.FormLink>
        Já tem uma conta? <Link href="/sign-in">Entrar</Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp
