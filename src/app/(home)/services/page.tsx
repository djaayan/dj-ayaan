import { GeneralShell } from "@/components/globals/layouts";
import { services } from "@/config/site";

export default function Page() {
    return (
        <GeneralShell
            classNames={{
                innerWrapper: "space-y-10",
            }}
        >
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="glitch-text text-4xl font-bold uppercase tracking-wider text-primary md:text-7xl">
                    Services
                </h2>

                <div className="flex items-center gap-1 md:gap-2">
                    <div className="glitch-text text-lg text-primary md:text-2xl">
                        ✧
                    </div>

                    <p className="max-w-md text-balance text-sm md:text-base">
                        Searching for the real entertainer for your event? Look
                        no further! Book now for a power-packed performance
                    </p>

                    <div className="glitch-text text-lg text-primary md:text-2xl">
                        ✧
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="group relative overflow-hidden bg-foreground/5 backdrop-blur-sm"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10 p-6">
                            <div className="mb-4 text-primary">
                                <service.icon className="size-8" />
                            </div>

                            <h3 className="mb-2 text-xl font-bold text-primary">
                                {service.title}
                            </h3>

                            <p className="text-sm text-gray-300">
                                {service.description}
                            </p>
                        </div>
                        <div className="absolute bottom-0 left-0 h-1 w-full scale-x-0 bg-gradient-to-r from-primary/50 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                    </div>
                ))}
            </div>
        </GeneralShell>
    );
}
