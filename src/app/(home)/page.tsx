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
            <InterDJ videoUrl="https://utfs.io/a/k28h802xyp/IiQWicq2IWP1fGHDf6QjXzIwZ9M8KWHtpurA31eTDRc04qnU" />
            <Featuring />
            <InterDJ
                videoUrl="https://utfs.io/a/k28h802xyp/IiQWicq2IWP1p55D4R3g8toxQPqMWjrODGNVlkcE7gdasb2A"
                overlayColor="bg-primary/5"
            />
            <Collaboration />
        </>
    );
}
