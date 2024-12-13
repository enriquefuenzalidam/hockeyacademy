import Eventosproximos from "./Eventosproximos";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Próximos Eventos'
};

export default function Page() {


    return (
<Suspense fallback={<Loading />}>
        <Eventosproximos />
        </Suspense>
    );
}


