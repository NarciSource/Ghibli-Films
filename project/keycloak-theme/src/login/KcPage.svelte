<script lang="ts">
  import Template from '@keycloakify/svelte/login/Template.svelte';
  import UserProfileFormFields from '@keycloakify/svelte/login/components/UserProfileFormFields.svelte';
  import type { KcContext } from 'keycloakify/login/KcContext';
  import type { ClassKey } from 'keycloakify/login/lib/kcClsx';
  import type { Component } from 'svelte';
  import { useI18n } from './i18n';

  const { kcContext }: { kcContext: KcContext } = $props();

  const { i18n } = useI18n({ kcContext });

  const classes = {
    kcBodyClass: 'no-padding',
    kcLoginClass: 'login-pf-page kc-root',
    kcHeaderWrapperClass: 'kc-header',
    kcButtonPrimaryClass: 'kc-btn-primary',
    kcFormCardClass: 'card-pf kc-form-card',
  } satisfies { [key in ClassKey]?: string };

  const doMakeUserConfirmPassword = true;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const page = async (): Promise<{ default?: Component<any> }> => {
    switch (kcContext.pageId) {
      default:
        return import('@keycloakify/svelte/login/DefaultPage.svelte');
    }
  };
</script>

{#await page() then { default: Page }}
  <Page
    {kcContext}
    {i18n}
    {classes}
    {Template}
    {UserProfileFormFields}
    doUseDefaultCss={true}
    {doMakeUserConfirmPassword}
  ></Page>
{/await}

<style>
  :global(.no-padding) {
    padding: 0 !important;
  }

  :global(.kc-root) {
    min-height: 100vh;
    background: white;
    align-items: center;
  }

  :global(.kc-header) {
    color: #27272a;
    font-weight: 700;
  }

  :global(.kc-form-card) {
    max-width: 300px;
    border-color: #0d9488;
  }

  :global(.kc-btn-primary) {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: #0d9488; /* teal-600 */
    color: white;
    border-radius: 0.5rem;
    border: none;
  }

  :global(.kc-btn-primary:hover) {
    background-color: #3fa59b;
  }
</style>
