import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="fixed inset-0 overflow-auto">
      {/* Desktop/Large: exact Figma layout */}
      <div className="hidden items-start justify-center lg:flex">
        {/* Full-bleed vertical guides pinned to viewport edges */}
        <div className="pointer-events-none fixed left-0 top-0 z-50 hidden h-screen w-[2.5px] bg-black lg:block" />
        <div className="pointer-events-none fixed right-0 top-0 z-50 hidden h-screen w-[2.5px] bg-black lg:block" />
        {/* Fixed artboard exactly 1440x1024 to match Figma, scaled to 100% width */}
        <div
          className="relative h-[1024px] w-[1440px] overflow-hidden rounded-[20px] border-[2.5px] border-transparent bg-white/30 backdrop-blur-[9px]"
          style={{
            transformOrigin: "top center",
            // scale to fill 100% viewport width while preserving proportions
            transform: "scale(var(--sx))",
            // @ts-expect-error custom property for runtime scaling
            "--sx": "calc(100vw/1440)",
          }}
        >
        {/* Inner content */}
        {/* Background blurred ellipses */}
        <div className="pointer-events-none absolute left-[38px] top-[-372px] h-[807px] w-[807px] rounded-full bg-[#9E77F6]/60 blur-[800px]" />
        <div className="pointer-events-none absolute left-[-117px] top-[646px] h-[813px] w-[813px] rounded-full bg-[#B0D2E5]/60 blur-[800px]" />
        <div className="pointer-events-none absolute left-[1083px] top-[667px] h-[667px] w-[667px] rounded-full bg-[#9E77F6] blur-[400px]" />
        <div className="pointer-events-none absolute left-[638px] top-[-247px] h-[667px] w-[667px] rounded-full bg-[#E474F6] blur-[400px]" />

        {/* Left column content positioned by exact Figma coordinates */}
        <h1 className="absolute left-[126px] top-[293.5px] w-[381px] text-center text-[56px] leading-[66.192px] text-[#1a1e1d]">
          Welcome back
        </h1>
        <p className="absolute left-[126px] top-[367.5px] w-[381px] text-center text-[18px] leading-[27.9px] text-[#626168]">
          Step into our shopping metaverse for an unforgettable shopping experience
        </p>

        {/* Email input (x:126, y:459.5, w:381, h:57) */}
        <div className="absolute left-[126px] top-[459.5px] flex h-[57px] w-[381px] items-center gap-3 rounded-[8px] border border-white bg-white/40 px-4">
          <span className="inline-flex h-6 w-6 items-center justify-center">
            {/* sms outline icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="#1A1E1D" strokeWidth="1.5" />
              <path d="M4 7.5L12 12.5L20 7.5" stroke="#1A1E1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <input
            type="email"
            placeholder="Email"
            className="h-full w-full bg-transparent text-[16px] leading-[24.8px] text-[#1a1e1d] placeholder:text-[#626168] outline-none"
          />
        </div>

        {/* Password input (x:126, y:536.5, w:381, h:57) */}
        <div className="absolute left-[126px] top-[536.5px] flex h-[57px] w-[381px] items-center gap-3 rounded-[8px] border border-white bg-white/40 px-4">
          <span className="inline-flex h-6 w-6 items-center justify-center">
            {/* lock outline icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="10.5" width="14" height="9" rx="2.25" stroke="#1A1E1D" strokeWidth="1.5" />
              <path d="M8 10.5V8.25C8 6.17893 9.67893 4.5 11.75 4.5C13.8211 4.5 15.5 6.17893 15.5 8.25V10.5" stroke="#1A1E1D" strokeWidth="1.5" />
              <circle cx="12" cy="15" r="1.25" fill="#1A1E1D" />
            </svg>
          </span>
          <input
            type="password"
            placeholder="Password"
            className="h-full w-full bg-transparent text-[16px] leading-[24.8px] text-[#1a1e1d] placeholder:text-[#626168] outline-none"
          />
        </div>

        {/* CTA button (x:126, y:629.5, w:381, h:43) */}
        <button className="absolute left-[126px] top-[629.5px] h-[43px] w-[381px] cursor-pointer rounded-[8px] bg-[#9414FF] text-[16px] leading-[18.9px] text-white">Login</button>

        {/* Signup text (x:126, y:708.5, w:381, h:auto) */}
        <p className="absolute left-[126px] top-[708.5px] w-[381px] text-center text-[14px] leading-[21.7px] text-[#626168]">
          Don&apos;t have an account? <span>Sign up</span>
        </p>

        {/* Right imagery: use single composite image as requested */}
        <div className="absolute left-[614px] top-0 h-[1024px] w-[826px] overflow-hidden">
          <Image
            src="/Frame 1216257797.png"
            alt="right composite"
            fill
            sizes="826px"
            className="object-cover"
            priority
          />

          {/* Logo: relative to right panel: Figma x:784, panel starts at 614 => x inside panel: 170 */}
          <div className="absolute left-[170px] top-[661px] z-20 h-[75px] w-[413px]">
            <Image
              src="/meetusvr 3d logo-01 2.png"
              alt="meetusvr logo"
              fill
              sizes="413px"
              className="object-contain"
              priority
            />
          </div>
        </div>
        </div>
      </div>

      {/* Mobile/Tablet: responsive stacked layout */}
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-start gap-6 p-6 lg:hidden">
        {/* Soft gradient background to mimic Figma tones */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_800px_at_70%_10%,#E474F6_0%,transparent_60%),radial-gradient(800px_800px_at_10%_10%,#9E77F6_0%,transparent_50%)] opacity-40" />

        {/* Image on top */}
        <div className="relative mt-4 w-full overflow-hidden rounded-xl bg-white/20 p-2 backdrop-blur-sm aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/9]">
          <Image
            src="/Frame 1216257797.png"
            alt="visual"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl text-[#1a1e1d]">Welcome back</h1>
            <p className="mt-2 text-sm md:text-base text-[#626168]">
              Step into our shopping metaverse for an unforgettable shopping experience
            </p>
          </div>

          <div className="flex w-full flex-col gap-4">
            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-white/80 bg-white/50 px-4 backdrop-blur">
              <span className="inline-flex h-5 w-5 items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="#1A1E1D" strokeWidth="1.5" />
                  <path d="M4 7.5L12 12.5L20 7.5" stroke="#1A1E1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <input type="email" placeholder="Email" className="h-full w-full bg-transparent outline-none" />
            </div>
     
            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-white/80 bg-white/50 px-4 backdrop-blur">
              <span className="inline-flex h-5 w-5 items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="10.5" width="14" height="9" rx="2.25" stroke="#1A1E1D" strokeWidth="1.5" />
                  <path d="M8 10.5V8.25C8 6.17893 9.67893 4.5 11.75 4.5C13.8211 4.5 15.5 6.17893 15.5 8.25V10.5" stroke="#1A1E1D" strokeWidth="1.5" />
                </svg>
              </span>
              <input type="password" placeholder="Password" className="h-full w-full bg-transparent outline-none" />
            </div>

            <button className="h-11 w-full cursor-pointer rounded-lg bg-[#9414FF] text-white">Login</button>
          </div>

          <p className="text-center text-sm text-[#626168]">Don't have an account? <span>Sign up</span></p>
        </div>
      </div>
    </div>
  );
}
