import { cn } from "./utils";

export function Section({ children, className, fullWidth = false, ...props }) {
    return (
        <section className={cn("py-20 px-6 md:px-12 w-full", className)} {...props}>
            <div className={cn("mx-auto", fullWidth ? "w-full max-w-[1920px]" : "max-w-7xl")}>
                {children}
            </div>
        </section>
    );
}
