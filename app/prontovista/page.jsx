import ProntoVista from "./Prontovista";
import { Suspense } from "react";
import Loading from "app/loading";

export const metadata = {
    title: 'Vista'
};

const Page = ({}) => {
    return (
        <Suspense fallback={<Loading />}>
            <ProntoVista />
        </Suspense>
    )
}

export default Page;