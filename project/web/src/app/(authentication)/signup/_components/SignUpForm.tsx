'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Box, Button, Field, Fieldset, Input, Separator, Stack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react/color-mode';
import { toaster } from '@chakra-ui/react/toaster';

import { useSignUpMutation } from '@/graphql/api/hooks';
import type { SignUpMutationVariables } from '@/graphql/api/operations';

export default function SignUpForm(): React.ReactElement {
  const [signUp, { loading }] = useSignUpMutation();
  // from 작업의 재렌더링
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpMutationVariables>();

  const navigate = useRouter();

  const onSubmit = (data: SignUpMutationVariables) => {
    const { signUpInput } = data;

    signUp({ variables: { signUpInput } })
      .then((res) => {
        if (res.data?.signUp) {
          toaster.create({
            type: 'success',
            title: '회원가입을 환영합니다!',
          });
          navigate.push('/');
        } else {
          toaster.create({
            type: 'error',
            title: '회원가입 도중 문제가 발생했습니다.',
          });
        }
      })
      .catch((err) => {
        toaster.create({
          type: 'error',
          title: '이메일 또는 아이디가 중복됩니다.',
        });
        return err;
      });
  };

  return (
    <Box rounded='lg' bg={useColorModeValue('white', 'gray.700')} boxShadow='lg' p={8}>
      <Stack as='form' onSubmit={handleSubmit(onSubmit)} gap={4}>
        {/* 필드 유효성 검사, isInvalid 값으로 판단 */}
        <Fieldset.Root>
          <Field.Root invalid={!!errors.signUpInput?.email}>
            {/* isInvalid = useForm의 errors값 */}
            <Field.Label>이메일</Field.Label>
            {/* register를 통해 input 필드를 reactForm에 등록 */}
            <Input
              type='email'
              {...register('signUpInput.email', {
                required: '이메일을 입력해주세요.',
              })}
              placeholder='example@example.com'
            />
            {/* 유효성 검사 통과하지 못했을 때 에러 메시지 */}
            <Field.ErrorText>{errors.signUpInput?.email?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.signUpInput?.username}>
            <Field.Label>아이디</Field.Label>
            <Input
              type='text'
              {...register('signUpInput.username', {
                required: '아이디를 입력해주세요.',
              })}
              placeholder='example'
            />
            <Field.ErrorText>{errors.signUpInput?.username?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.signUpInput?.password}>
            <Field.Label>비밀번호</Field.Label>
            <Input
              type='password'
              {...register('signUpInput.password', {
                required: '암호를 입력해주세요.',
                minLength: { value: 8, message: '8자리 이상이어야 합니다.' },
              })}
              placeholder='8자 이상의 영문, 숫자, 특수문자'
            />
            <Field.ErrorText>{errors.signUpInput?.password?.message}</Field.ErrorText>
          </Field.Root>

          <Separator />
          <Button type='submit' loading={loading} colorPalette='teal'>
            계정 생성
          </Button>
        </Fieldset.Root>
      </Stack>
    </Box>
  );
}
