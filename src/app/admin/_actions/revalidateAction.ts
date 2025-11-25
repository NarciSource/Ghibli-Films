'use server';

import { revalidatePath } from 'next/cache';

export default async function revalidateAction(path: string) {
  revalidatePath(path, 'layout');
}
