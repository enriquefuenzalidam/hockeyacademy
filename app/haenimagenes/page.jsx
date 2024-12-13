
import HAenimagenes from "./HAenimagenes";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Imágenes y Videos'
};
  

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <HAenimagenes />
        </Suspense>
    );
}


