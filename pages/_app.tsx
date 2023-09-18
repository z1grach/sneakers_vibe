import '@/styles/globals.scss';
import {AppProps} from "next/app";
import {MobxProvider} from "@/components/mobx/mobxProvider";
import AppStart from "@/components/AppStart";

export default function App({Component, pageProps}: AppProps) {
    return (
        <MobxProvider>
            <AppStart Component={Component} pageProps={pageProps}/>
        </MobxProvider>
    )
}