import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_request, prevContext: { headers?: Record<string, string> }) => {
  const auth = localStorage.getItem('auth');
  const accessToken = auth ? JSON.parse(auth).state.accessToken : null;

  return {
    headers: {
      ...prevContext.headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});
export default authLink;
