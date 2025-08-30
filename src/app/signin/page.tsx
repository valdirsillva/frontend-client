import FormSignIn from '@/components/FormSignIn'
import Auth from '../auth/auth'
// Next renderiza o page.tsx como server component
export default function Signin() {
  return (
    <Auth title="Sign In">
      <FormSignIn />
    </Auth>
  )
}
