import {
    About,
    Collaboration,
    Featuring,
    InterDJ,
    Landing,
} from "@/components/home";

export default function Page() {
    return (
        <>
            <Landing />
            <About />
            <InterDJ videoUrl="https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5ldEq0BtftWbQ0YSerPhIaCFGm517y4ARsnBi" />
            <Featuring />
            <InterDJ
                videoUrl="https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5PcFKyKv1F2SgsmIHa63A4UOerjdK8VhzM7CN"
                overlayColor="bg-primary/5"
            />
            <Collaboration />
        </>
    );
}
