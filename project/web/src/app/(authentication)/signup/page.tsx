import CommonLayout from '../_components/CommonLayout';
import SignUpForm from './_components/SignUpForm';

export default function SignUp(): React.ReactElement {
  return (
    <CommonLayout title='계정 생성' subtitle='환영합니다!'>
      <SignUpForm />
    </CommonLayout>
  );
}
