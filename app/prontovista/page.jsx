import { Suspense } from "react";
import ProntoVista from "./Prontovista";

export const metadata = {
    title: 'Vista'
};

const Page = ({}) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
          <ProntoVista />
        </Suspense>
    )
}

export default Page;