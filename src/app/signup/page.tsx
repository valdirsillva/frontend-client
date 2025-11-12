import FormSignUp from '@/components/FormSignUp'
import Auth from '../auth/auth'

export default function SignUpPage() {
  return (
    <Auth title="Sign Up">
      <FormSignUp />
    </Auth>
  )
}
