import Futbolmasculino from "./Futbolmasculino";
import Loading from "components/loading";
import { Suspense } from "react";

export const metadata = {
    title: 'Fútbol Masculino'
};

const Page = () => {

    
    return (
        <Suspense fallback={<Loading />}>
        <Futbolmasculino />
        </Suspense>
    );
}

export default Page;


