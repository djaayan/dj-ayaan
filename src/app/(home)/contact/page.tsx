import { GeneralShell } from "@/components/globals/layouts";
import { Iframe } from "@/components/ui/iframe";

export default function Page() {
    return (
        <GeneralShell
            classNames={{
                innerWrapper: "space-y-10",
            }}
        >
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="glitch-text text-4xl font-bold uppercase tracking-wider text-primary md:text-7xl">
                    Contact Us
                </h2>

                <div className="flex items-center gap-1 md:gap-2">
                    <div className="glitch-text text-lg text-primary md:text-2xl">
                        ✧
                    </div>

                    <p className="max-w-md text-balance text-sm md:text-base">
                        Have a question or want to book a performance? Fill out
                        the form below and we&apos;ll get back to you as soon as
                        possible.
                    </p>

                    <div className="glitch-text text-lg text-primary md:text-2xl">
                        ✧
                    </div>
                </div>
            </div>
            <Iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScEpYWHVdJfC05TDCOqejgiof3-UOXRGnvrVB1BuSwUzZjz9g/viewform?embedded=true"
                className="min-h-96 w-full"
            />
        </GeneralShell>
    );
}
