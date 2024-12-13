import Hockeyhierbavalencia from "./Hockeyhierbavalencia";
import Loading from "components/loading";
import { Suspense } from "react";


export const metadata = {
    title: 'Hockey Valencia'
};
const Page = () => {

    return (
        <Suspense fallback={<Loading />}>
            <Hockeyhierbavalencia />
        </Suspense>
    );
}

export default Page;

