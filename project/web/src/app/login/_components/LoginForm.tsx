'use client';

import { Button, Field, Fieldset, Input, Separator, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toaster } from '@/components/ui/toaster';
import { useLoginMutation } from '@/graphql/api/hooks';
import type { LoginMutationVariables } from '@/graphql/api/operations';
import type { FieldError, UserWithToken } from '@/graphql/api/type';
import { useAuthStore } from '@/store/useAuthStore';

export default function LoginForm(): React.ReactElement {
  const [login, { loading }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginMutationVariables>();
  const navigate = useRouter();
  const { updateAccessToken } = useAuthStore();

  const onSubmit = ({ loginInput }: LoginMutationVariables) => {
    login({ variables: { loginInput } })
      .then(({ data }) => {
        if (data?.login as FieldError) {
          const fieldForm = 'loginInput.';
          const { field, message } = data?.login as FieldError;

          setError((fieldForm + field) as Parameters<typeof setError>[0], { message });
        }
        if (data?.login as UserWithToken) {
          const { accessToken } = data?.login as UserWithToken;

          updateAccessToken(accessToken);
          toaster.create({ title: '환영합니다!', type: 'success' });
          navigate.push('/');
        }
      })
      .catch((err) => {
        toaster.create({ title: '로그인 과정에 문제가 생겼습니다.', type: 'error' });
        return err;
      });
  };

  return (
    <Stack as='form' onSubmit={handleSubmit(onSubmit)} gap={4}>
      <Fieldset.Root>
        <Field.Root invalid={!!errors.loginInput?.emailOrUsername}>
          <Field.Label>이메일 또는 아이디</Field.Label>
          <Input
            type='emailOrUsername'
            {...register('loginInput.emailOrUsername', {
              required: '이메일 또는 아이디를 입력해주세요.',
            })}
            placeholder='example@example.com'
          />
          <Field.ErrorText>{errors.loginInput?.emailOrUsername?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.loginInput?.password}>
          <Field.Label>비밀번호</Field.Label>
          <Input
            type='password'
            {...register('loginInput.password', {
              required: '암호를 입력해주세요.',
              minLength: { value: 8, message: '8자리 이상이어야 합니다.' },
            })}
            placeholder='********'
          />
          <Field.ErrorText>{errors.loginInput?.password?.message}</Field.ErrorText>
        </Field.Root>

        <Separator />
        <Button type='submit' loading={loading} colorPalette='teal'>
          로그인
        </Button>
      </Fieldset.Root>
    </Stack>
  );
}
