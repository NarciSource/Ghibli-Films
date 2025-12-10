'use client';

import { Box } from '@chakra-ui/react';

import ErrorFallback, { type ErrorFallbackProps } from '@/app/_shared/ErrorFallback';
import CutModal from './_components/CutModal';

export default function ErrorPage(props: ErrorFallbackProps) {
  return (
    <CutModal>
      <Box bg='white'>
        <ErrorFallback {...props} />
      </Box>
    </CutModal>
  );
}
