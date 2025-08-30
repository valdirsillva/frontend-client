import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import TextField from '../TextField'
import { FormWrapper, FormLink } from '../Form'

import * as S from './styles'
import Button from '../Button'

const FormSignIn = () => (
  <FormWrapper>
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

      <FormLink>
        Ainda não tem uma conta? <Link href="/sign-up">Cadastre-se</Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn
