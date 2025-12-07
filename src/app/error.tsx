'use client';

import ErrorFallback, { type ErrorFallbackProps } from './_shared/ErrorFallback';

export default function ErrorPage(props: ErrorFallbackProps) {
  return <ErrorFallback {...props} />;
}
