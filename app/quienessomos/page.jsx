import Quienessomos from "./Quienessomos";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Quiénes Somos'
};
  

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Quienessomos />
        </Suspense>
    );
}


