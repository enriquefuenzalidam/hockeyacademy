import Contacto from "./Contacto";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Contacto'
};

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
        <Contacto />
        </Suspense>
    );
}
