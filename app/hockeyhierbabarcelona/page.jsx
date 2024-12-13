import Hockeyhierbabarcelona from "./Hockeyhierbabarcelona";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Hockey Barcelona'
};
const Page = () => {

    return (
        <Suspense fallback={<Loading />}>
            <Hockeyhierbabarcelona />
        </Suspense>
    );
}

export default Page;

