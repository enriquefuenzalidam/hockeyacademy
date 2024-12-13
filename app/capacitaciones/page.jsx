import Capacitaciones from "./Capacitaciones";
import { Suspense } from 'react';
import Loading from 'components/loading';


export const metadata = {
    title: 'Capacitaciones'
};

export default function Page() {


    return (
        <Suspense fallback={<Loading />}>
            <Capacitaciones />
        </Suspense>
    );
}


