import Queeshockeyacademy from "./Queeshockeyacademy";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Qué es Hockey Academy'
};

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Queeshockeyacademy />
        </Suspense>
    );
}


