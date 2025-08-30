import Link from 'next/link'
import Button from '../Button'
import TextField from '../TextField'
import { FormWrapper, FormLink } from '../../components/Form'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

const FormSignUp = () => (
  <FormWrapper>
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

      <FormLink>
        Já tem uma conta? <Link href="/sign-in">Entrar</Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
