import Hockeyespagna from "./Hockeyespagna";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Hockey Espagna'
};

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Hockeyespagna />
        </Suspense>
    );
}


