import Button from '../Button'
import Heading from '../Heading'
import TextField from '../TextField'
import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading lineBottom color='black' size='small'>My profile</Heading>
    <S.Form>
      <TextField
        name='name'
        placeholder='Name'
        label='Name'
        initialValue='Jhon Doe'
      />

      <TextField
        type='email'
        name='email'
        placeholder='E-mail'
        initialValue='jhondoe@gmail.com'
        label='E-mail'
        disabled
      />

      <TextField
        type='password'
        name='password'
        placeholder='Type your password'
        label='password'
      />

      <TextField
        type='password'
        name='new_password'
        placeholder='New password'
        label='New password'
      />

      <Button size='large'>Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile