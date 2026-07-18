export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#242424]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          {/* Left — tagline */}
          <div className="flex flex-col gap-1">
            <p className="font-satoshi text-sm md:text-base text-white font-medium leading-relaxed">
              Building intelligent systems<br className="hidden sm:block" /> one model at a time.
            </p>
            <p className="text-xs text-[#6B7280] mt-1">
              &copy; {year} Madhur Chouhan
            </p>
          </div>

          {/* Right — attribution */}
          <p className="text-xs text-[#6B7280]">
            Built with{' '}
            <span className="text-[#A3A3A3] font-medium">Next.js</span> &amp;{' '}
            <span className="text-[#A3A3A3] font-medium">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
