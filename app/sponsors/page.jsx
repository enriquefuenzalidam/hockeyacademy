import Sponsors from "./Sponsors";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Sponsors'
};
  

export default function Page() {


    return (
        <Suspense fallback={<Loading />}>
            <Sponsors />
        </Suspense>
    );
}


