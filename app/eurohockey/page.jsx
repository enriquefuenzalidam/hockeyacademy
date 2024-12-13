import Eurohockey from "./Eurohockey";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Eurohockey'
};

export default function Page() {

    return ( 
        <Suspense fallback={<Loading />}>
            <Eurohockey /> 
        </Suspense>
    );
}


