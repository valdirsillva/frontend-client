import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import TextField from '../TextField'
import * as S from './styles'
import Button from '../Button'

const FormSignin = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <S.ForgotPassword href="#">Esqueceu sua senha?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Entrar
      </Button>

      <S.FormLink>
        Ainda não tem uma conta? <Link href="/sign-up">Cadastre-se</Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignin
