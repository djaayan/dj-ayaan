import { GeneralShell } from "@/components/globals/layouts";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Page() {
    return (
        <GeneralShell>
            <div className="flex flex-col gap-10 md:flex-row">
                <div className="relative aspect-square size-full basis-1/2 md:aspect-[2/3]">
                    <Image
                        src="https://utfs.io/a/wgl22isy86/HWQo5hUQqcU5IkFisSwChngXzp3P75S8LQjb9rxJsiAtKlZH"
                        alt="DJ"
                        width={500}
                        height={500}
                        className="size-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-tl from-background to-transparent" />
                </div>

                <div className="basis-1/2 space-y-6">
                    <h2 className="text-balance text-2xl font-bold uppercase md:text-4xl">
                        <span className="glitch-text font-bold tracking-wider text-primary">
                            {siteConfig.name}
                        </span>{" "}
                        is a DJ And Producer from India
                    </h2>

                    <div className="max-w-sm basis-1/2 space-y-5 text-balance text-sm md:text-base">
                        <p>
                            Among the few from Genx who has been on DJing map
                            spinning across the genres in this learning curve
                            for perfection. He is very hardworking and
                            passionate when it comes to music. Playing music is
                            mainly about bringing people together and to savour
                            the bliss and celebration called life. He is
                            associated with this profession when he was at an
                            early age and started his journey in the year 2008.
                        </p>

                        <p>
                            Now, he is touching the limits and extending his
                            reach day by day. He has explored almost every genre
                            of music throughout the journey. His flexibility
                            with different genres makes him stand out from the
                            rest and gives him the edge to his overall EDM
                            sense. A perfect sense to get his crowd on the dance
                            floor and groove them. Regular playing out and
                            parties has broadened his sense of music and has
                            made him a real artist and a true performer. Known
                            as a party starter, this man is loved for his
                            positive vibes, focus and dedication along with his
                            awesome musical talents.
                        </p>
                    </div>
                </div>
            </div>
        </GeneralShell>
    );
}
