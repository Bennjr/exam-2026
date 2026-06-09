export function Footer() {
    return (
        <footer className="w-full bg-zinc-50">
            <div className="mx-auto max-w-[1200px] px-6 py-8 text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Kontorutleie AS. Alle rettigheter reservert.
            </div>
        </footer>
    );
}
