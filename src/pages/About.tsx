const About = () => {
  return (
    <div className="w-full">
      {/* About Gleen Section */}
      <section className="bg-bg-dark py-16">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-8 border-b border-[#545454] pb-8">
            {/* Left Side - Title */}
            <div className="flex flex-col">
              <h1
                className="text-tx-light"
                style={{
                  fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                  fontSize: '148px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '0em',
                  lineHeight: '0.9em',
                }}
              >
                <span className="block">ABOUT</span>
                <span className="block">GLEEN</span>
              </h1>
            </div>

            {/* Right Side - Tagline */}
            <div className="flex-1 max-w-md ml-8 self-end">
              <p className="text-tx-light text-base leading-relaxed text-right" style={{
            fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '1.6em',
          }}>
                ELEVATING WEB DESIGN & MARKETING FOR REAL ESTATE, GAMING, AND BEYOND
              </p>
            </div>
          </div>

          {/* Welcome To / My Life */}
          <div className="flex items-center justify-between mb-8"  style={{
            fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '1.6em',
          }}>
            <div className="text-tx-light">
              Welcome To
            </div>
            <div className="text-tx-light">
              My Life
            </div>
          </div>

          <div className="grid grid-cols-2 gap-24">
          {/* Header Image */}
          <div className="w-full h-[auto] overflow-hidden mb-12">
            <img
              src="/img/Glenn.png"
              alt="Gleen Wilmore"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6" style={{
            fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '1.6em',
          }}>
            <p
              className="text-tx-light"
            >
              Gleen Wilmore is an independent web designer based in Edinburgh, working with individuals, startups, and established businesses across Scotland and the UK.
            </p>
            <p
              className="text-tx-light"              
            >
              My work sits at the intersection of design and implementation. I design and build bespoke websites with a strong emphasis on clarity, performance, and long-term usability, taking care to ensure each project is considered both visually and technically. Rather than following a fixed stack, I select tools and frameworks according to the needs of the work, with experience across WordPress and modern front-end frameworks.
            </p>
            <p
              className="text-tx-light"              
            >
              I lead projects end-to-end, from early design exploration through to delivery. I work closely with clients throughout the process and, where appropriate, collaborate with a small network of trusted developers to maintain a high technical standard.
            </p>
            <p
              className="text-tx-light"              
            >
              My practice is grounded in restraint and attention to detail — favouring clean design, accessible interfaces, and systems that are straightforward to maintain. The focus is on producing work that feels deliberate, durable, and professional, and that continues to serve its purpose beyond launch.
            </p>
            <p
              className="text-tx-light"              
            >
            Outside of client work, I enjoy lifting weights and reading classic literature            
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 bg-[#efeeec] md:py-8">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-8 border-b border-[#222725] pb-8">
            {/* Left Side - Main Title */}
            <div className="flex flex-col">
              <h2
                className="text-[#222725]"
                style={{
                  fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                  fontSize: '148px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '0em',
                  lineHeight: '0.9em',
                }}
              >
                <span className="block">CORE</span>
                <span className="block">PRINCIPLES</span>
              </h2>
            </div>

            {/* Right Side - Tagline */}
            <div className="flex-1 max-w-md ml-8">
              <p className="text-[#222725] text-base leading-relaxed text-right">
                BUILT ON A FOUNDATION OF INTEGRITY, INNOVATION, AND COMMITMENT TO EXCELLENCE
              </p>
            </div>
          </div>

          {/* Principles List */}
          <div className="mt-8" style={{
            fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '1.6em',
          }}>
            {/* Headers */}
            <div className="flex mb-4 pb-2">
              <div className="w-[20%]">
                <span className="text-[#222725] text-base">CORE</span>
              </div>
              <div className="flex-1 text-right">
                <span className="text-[#222725] text-base">VALUES</span>
              </div>
            </div>

            {/* Principles List */}
            <div className="space-y-0">
              {[
                { num: '/01', core: 'Creative Freedom', value: 'Breaking traditional boundaries' },
                { num: '/02', core: 'Authenticity', value: 'Telling stories that resonate' },
                { num: '/03', core: 'Collaboration', value: 'Partnering with clients' },
                { num: '/04', core: 'Excellence', value: 'Pursuing quality' },
              ].map((principle, index) => (
                <div key={index} className="relative w-full flex flex-row py-2">
                  {/* Column 1: Number */}
                  <div className="w-[30%]"></div>
                  <div className="flex w-[70%] border-b border-[#222725]">
                  <div className="w-[20%]" style={{ flexShrink: 0 }}>
                    <p className="text-[#222725] text-lg font-medium">{principle.num}</p>
                  </div>
                    {/* Column 2: Core Principle */}
                    <div className="w-[40%]" style={{ flexShrink: 0 }}>
                      <p className="text-[#222725] text-lg font-medium text-left">{principle.core}</p>
                    </div>
                    {/* Column 3: Value Description */}
                    <div className="flex-1" style={{ minWidth: 0 }}>
                      <p className="text-[#222725] text-lg font-medium text-left">{principle.value}</p>
                    </div>
                  </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

