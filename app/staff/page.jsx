import Staff from "./Staff";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Staff'
};
  

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <Staff />
        </Suspense>
    );
}


