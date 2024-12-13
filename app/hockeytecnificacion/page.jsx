import Hockeytecnificacion from "./Hockeytecnificacion";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Hockey Tecnificación'
};
export default function Page() {

    return (
        <Suspense fallback={<Loading />}>
            <Hockeytecnificacion />
        </Suspense>
    );
}


