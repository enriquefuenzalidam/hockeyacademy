import { Footer } from "components/footer";

export const metadata = {
    title: 'Classics'
}
  

export default function classics() {
    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white`}>
        <div className={` relative bg-fucsiaAzulFondoDos clear-both mt-28 `}>
            <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
            <Footer />
        </div>

        </main>
    );
}


