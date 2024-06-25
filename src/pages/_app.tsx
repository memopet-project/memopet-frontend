import '@/styles/globals.css';
import baseStyle from '@/styles/reset';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Global, ThemeProvider } from '@emotion/react';
import MainLayout from '@/components/layout/MainLayout';
import { theme } from '@/types/theme';
import { DeviceProvider } from '@/context/DeviceContext';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

export const getServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'];

  return {
    props: { userAgent },
  };
};

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = /Mobile/.test(pageProps.userAgent);

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Global styles={baseStyle} />
            <DeviceProvider userAgent={pageProps.userAgent}>
              <MainLayout footerShown={!isMobile}>
                <Component {...pageProps} />
              </MainLayout>
            </DeviceProvider>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
