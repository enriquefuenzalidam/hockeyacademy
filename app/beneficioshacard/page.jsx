import BenefeciosHaCard from "./Benefecioshacard";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Benefecios HA Card'
};
  

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <BenefeciosHaCard />
        </Suspense>
    );
}


