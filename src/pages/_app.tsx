import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

import MainLayout from "~/componments/MainLayout";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MainLayout > 
      <div >  
      {/* {typeof window === 'undefined' ? null : <Component {...pageProps} />} */}
      <Component {...pageProps} />

      </div>
    </MainLayout> 
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
