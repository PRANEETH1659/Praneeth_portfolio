import { ArrowDown } from "lucide-react"

export const HeroSection=()=>{
    return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">

        <div className="container max-w-4xl mx-auto text-center z-10">

            <div className="space-y-6">

                <h1 className="text-4xl md:text-6xl font-bold tracking-light ">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Praneeth</span>
                    <span className="text-gradient ml-2  opacity-0 animate-fade-in-delay-2">{""}Ginjupalli</span>
                </h1>

                <p className="text-2xl md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Creating web experiences that are clean, fast, and seriously good-looking.
                </p>

                <div>
                    <a href="#projects" className="cosmic-button opacity-0 animate-fade-in-delay-4 ">View MY Projects</a>
                </div>

            </div>

        </div>


        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">

            <span className="text-sm text-muted-foreground mb-2 ">Scroll</span>

            <ArrowDown className="h-5 w-6 text-blue-400"/>

        </div>

           </section>
}