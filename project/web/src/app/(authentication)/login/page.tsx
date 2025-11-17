import CommonLayout from '../_components/CommonLayout';
import LoginForm from './_components/LoginForm';

export default function Login(): React.ReactElement {
  return (
    <CommonLayout title='계정 로그인' subtitle='감상평과 좋아요를 남기세요!'>
      <LoginForm />
    </CommonLayout>
  );
}
