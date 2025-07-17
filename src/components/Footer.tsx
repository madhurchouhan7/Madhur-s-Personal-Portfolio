export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 px-4 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Madhur Chouhan. All rights reserved.
        </p>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          Built with 🤍 by Madhur Chouhan
        </p>
      </div>
    </footer>
  );
}
