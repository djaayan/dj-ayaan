import {
    About,
    Collaboration,
    Featuring,
    InterDJ,
    Landing,
    Loader,
} from "@/components/home";

export default function Page() {
    return (
        <>
            <Loader />
            <Landing />
            <About />
            <InterDJ imageUrl="https://utfs.io/a/k28h802xyp/IiQWicq2IWP1i4YaBiWd5KXzQZsxyOoLAk8V6Sq372tuICnH" />
            <Featuring />
            <InterDJ
                videoUrl="https://utfs.io/a/k28h802xyp/IiQWicq2IWP1p55D4R3g8toxQPqMWjrODGNVlkcE7gdasb2A"
                overlayColor="bg-primary/5"
            />
            <Collaboration />
        </>
    );
}
