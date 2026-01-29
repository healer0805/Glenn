import LogoCarousel from '../components/LogoCarousel';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-bg-dark overflow-hidden">
        {/* Video Background Container */}
        <div className="absolute inset-0 w-full h-full opacity-100">
          <div className="w-full h-full" style={{ transform: 'scale(1.2) rotate(27deg) translateX(5%) translateY(-17%)', opacity: 1, mixBlendMode: 'screen' }}>
            <video
              src="/video/home-hero-bg.mp4"
              loop
              preload="auto"
              playsInline
              autoPlay
              muted
              className="w-full h-full block object-fill cursor-auto rounded-none"
              style={{ objectPosition: '50% 50%', backgroundColor: 'rgba(247, 247, 242, 0)' }}
            />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto flex items-center justify-between gap-8">
          {/* Left Side - Name and Professional Summary */}
          <div className="flex-1">
            <h1 
              className="text-tx-light mb-6"
              style={{
                fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                fontSize: '148px',
                fontStyle: 'normal',
                fontWeight: 400,
                letterSpacing: '0em',
                lineHeight: '0.9em',
                textAlign: 'left'
              }}
            >
              NICKOLAS KOSSUP
            </h1>
            <p className="text-tx-light text-bolder text-base leading-relaxed max-w-[450px]">
              16+ years of professional experience as a multi-media designer specializing in web design, branding, marketing, and print. Bringing both creative vision and technical expertise to every project and role. Diverse industry experience including gaming, tech, retail, real estate, beauty, and more.
            </p>
          </div>

          {/* Right Side - Services/Expertise List */}
          <div className="flex-1 flex flex-col items-end pr-[12rem]">
            <div className="text-right space-y-2 text-[#161616] text-lg font-medium">
              <div className="">Award Winning</div>
              <div className="">Art Director | Designer</div>
              <div className="">UX/UI Design</div>
              <div className="">Web Development</div>
              <div className="">Motion Animation</div>
              <div className="">Brand Identity Design</div>
            </div>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <LogoCarousel />
        </div>
      </section>

      {/* My Expertise Section */}
      <section className="py-16 bg-[#efeeec] md:py-8">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Header Section */}
          <div className="flex items-start justify-between border-b border-solid border-[#222725] pb-8">
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
                <span className="block">MY</span>
                <span className="block">EXPERTISE</span>
              </h2>
            </div>
            
            {/* Right Side - Tagline */}
            <div className="flex-1 max-w-md ml-8">
              <p className="text-[#222725] text-base leading-relaxed">
                TAILORED SOLUTIONS DESIGNED TO ELEVATE YOUR BRAND AND DRIVE RESULTS.
              </p>
            </div>
          </div>
              <h3 className="text-[#222725] text-base leading-relaxed text-lg font-bold mt-6">Expertise</h3>

          {/* Services List */}
          <div className="mt-8">
            {/* Services List */}
            <div className="space-y-0">
              {[
                { num: '01', name: 'Website Design & Development' },
                { num: '02', name: 'UX/UI Design' },
                { num: '03', name: 'Brand Identity Design' },
                { num: '04', name: 'Motion Animation' },
                { num: '05', name: 'Digital Marketing & Campaigns' },
                { num: '06', name: 'Typography' },
                { num: '07', name: 'Landing Page Design' },
                { num: '08', name: 'Package Design' },
                { num: '09', name: 'Hosting & Deployment' },
                { num: '10', name: 'Presentation Design' },
              ].map((service, index) => (
                <div key={index} className="relative w-full flex flex-row py-2" style={{ opacity: 1 }}>
                  {/* Column 1: Blank - No border */}
                  <div className="w-[30%]" style={{ flexShrink: 0 }}></div>
                  
                  {/* Columns 2-4 Container with border */}
                  <div className="flex-1 relative" style={{ opacity: 1 }}>
                    <div className="flex flex-row items-center w-full" style={{ width: '100%', opacity: 1 }}>
                      {/* Column 2: Number */}
                      <div className="w-[30%]" style={{ opacity: 1, flexShrink: 0 }}>
                        <p className="text-[#222725] text-lg font-medium">{service.num}</p>
                      </div>
                      
                      {/* Column 3: Service Name */}
                      <div className="w-24" style={{ flex: 1, opacity: 1, minWidth: 0 }}>
                        <p className="text-[#222725] text-lg font-medium text-left">{service.name}</p>
                      </div>
                      
                      {/* Column 4: Field/Bullet */}
                      <div className="w-24" style={{ opacity: 1, flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
                        <div 
                          className="flex items-center justify-center"
                          style={{
                            backgroundColor: 'rgb(21, 21, 19)',
                            borderRadius: '5px',
                            width: '12px',
                            height: '12px',
                            opacity: 1,
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: 'rgb(226, 225, 223)',
                              borderRadius: '9999px',
                              width: '4px',
                              height: '4px',
                              opacity: 1,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Underline - Only for columns 2-4 */}
                    <div
                      className="w-full"
                      style={{
                        backgroundColor: 'rgb(84, 84, 84)',
                        height: '1px',
                        opacity: 1,
                        marginTop: '8px',
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-16 bg-[#efeeec] md:py-8">
        <div className="mx-5 bg-[#151513] rounded-4xl pt-[5rem] pb-[2rem]">
          {/* Header Section */}
          <div className="max-w-[1400px] mx-auto flex items-start justify-between mb-12 border-b border-tx-light pb-8">
            {/* Left Side - Title */}
            <div className="flex flex-col">
              <h2 
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
                <span className="block">SELECTED</span>
                <span className="block">WORK</span>
              </h2>
              <div className="mt-4 border-t border-tx-light pt-2">
                <p className="text-tx-light text-base uppercase">LATEST WORK</p>
              </div>
            </div>
            
            {/* Right Side - Tagline */}
            <div className="flex-1 max-w-md ml-8">
              <p className="text-tx-light text-base leading-relaxed uppercase">
                IMPACTFUL SOLUTIONS THAT<br />
                STAND OUT,<br />
                CAPTURE ATTENTION,<br />
                AND DRIVE MEASURABLE SUCCESS
              </p>
            </div>
          </div>

          {/* Work Grid */}
          <div className="grid grid-cols-2 gap-3 px-[1.7rem] ">
            {[
              { 
                image: 'CZzxOhu4atI4gRONKCKvhUU7Ts0.jpg',
                title: 'Gaming',
                subtitle: 'Marketing'
              },
              { 
                image: 'NWuFIEw5APVBJGA4CS5Rj8Foo.jpg',
                title: 'Web Design',
                subtitle: 'Development'
              },
              { 
                image: 'sPCHqJJFFQ18pNJsnejn0r7A0lo.jpg',
                title: 'Branding',
                subtitle: 'Design'
              },
              { 
                image: 'VSG0e7NupLZb0oxt7zCQqEYM4.jpg',
                title: 'Past Work',
                subtitle: 'Various'
              },
            ].map((work, index) => (
              <div key={index} className="bg-[#efeeec] rounded-3xl overflow-hidden p-[.7rem]">
                {/* Image */}
                <div className="w-full h-[500px] overflow-hidden rounded-2xl">
                  <img
                    src={`/img/selected work/${work.image}`}
                    alt={work.title}
                    className="w-full h-full object-fill"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 bg-bg-light">
                  {/* Carousel Dots */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#cdcccc]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#cdcccc]"></div>
                  </div>
                  
                  {/* Title and Subtitle */}
                  <div className="flex flex-row justify-between">
                  <div className="mb-4">
                    <h3 className="text-[#090909] text-2xl mb-1">{work.title}</h3>
                    <p className="text-[#686867] text-base">{work.subtitle}</p>
                    </div>
                  {/* Explore Button */}
                  <button className="bg-[#e0eaea] text-[#363636] px-[2rem] h-[3.5rem] rounded-full border-solid text-xl border-1 hover:opacity-80 transition-opacity">
                    EXPLORE
                  </button>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Approved Section */}
      <section className="py-16 bg-[#efeeec] md:py-8">
        <div className="mx-auto px-[2rem]">
          {/* Header Section */}
          <div className="relative mb-12 border-b border-[#222725] pb-8">
            {/* Left Side - Title */}
            <div className="flex flex-col px-[1rem]">
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
                <span className="block">INDUSTRY</span>
                <span className="block">APPROVED</span>
              </h2>
            </div>
            
            {/* Right Side - Tagline */}
            <div className="absolute bottom-8 right-0 max-w-md">
              <p className="text-[#222725] text-base leading-relaxed text-right">
                HEAR FROM CLIENTS AND OTHER PROFESSIONALS ON WHAT YOU CAN EXPECT WHEN WORKING WITH ME.
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                text: "Nick's ability to innovate and deliver designs that impress regardless is a rare talent. Nick takes ownership in his projects. It was always a pleasure working with him.",
                name: "Alan Voong",
                title: "Sr Full Stack Engineer",
                company: "PlayStation",
                profileImage: "/img/testimonials/alan.jpg"
              },
              {
                text: "He's got a great taste that you can always count on, making designs that speak to the audience, whether it's for video games or editorial websites. It's great working w/ him!",
                name: "Ting Sang",
                title: "Marketing Manager",
                company: "Lightspeed Studio",
                profileImage: "/img/testimonials/ting.jpg"
              },
              {
                text: "Nick is an extremely talented designer with passion for days. His creative experience is super diverse which lends itself to a very strong leadership quality he posses.",
                name: "Carlos Estrada",
                title: "Associate Creative Director",
                company: "Apple",
                profileImage: "/img/testimonials/carlos.jpg"
              },
              {
                text: "Nick is an amazing animator and designer and brings an innovative and creative voice to any project he is a part of. Look forward to working with Nick soon.",
                name: "Kayvan Ghavim",
                title: "Alum",
                company: "Red Bull, Buzzfeed, Mashable, Twitch, CNET",
                profileImage: "/img/testimonials/kayvan.jpg"
              },
              {
                text: "Nick is a very talented designer who helps produce a lot of excellent pieces for our company's game projects. He is crucial to our social/community campaigns.",
                name: "Yiyan Lin",
                title: "Assistant Producer",
                company: "Tencent Games",
                profileImage: "/img/testimonials/yiyan.jpg"
              },
              {
                text: "He is extremely talented, hardworking, and sociable. Apart from consistently delivering high-level designs, he is also encouraging among his peers, especially during stressful times.",
                name: "Celine Chang",
                title: "Associate Producer",
                company: "Respawn Entertainment",
                profileImage: "/img/testimonials/celine.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#e2e1df] rounded-lg p-6 relative">
                {/* Profile Picture - Top Left */}
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                    <img 
                      src={testimonial.profileImage} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
                
                {/* LinkedIn Icon - Top Right */}
                <div className="absolute top-6 right-6 w-6 h-6 bg-[#cdcccc] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">in</span>
                </div>
                
                {/* Star Rating - Below Profile Picture */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#222725] text-xl">★</span>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-[#222725] text-base leading-relaxed mb-6" style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 500,  
                  letterSpacing: '-0.1px',
                  lineHeight: '24px',
                }}>{testimonial.text}</p>
                
                {/* Reviewer Info */}
                <div className="border-t border-[#ffffff] pt-4">
                  <p className="text-[#222725] font-bold text-base" style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif'}}>{testimonial.name} • {testimonial.title}</p>
                  <p className="text-[#222725] text-sm mt-1" style={{
                  fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif', fontWeight: 500}}>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employment History Section */}
      <section className="py-16 bg-[#efeeec] md:py-8">
        <div className="max-w-[1400px] mx-auto px-[2rem]">
          <div className="flex items-start justify-between gap-8">
            {/* Left Side - Title, Tagline, and Contact */}
            <div className="flex flex-col px-[1rem]">
              <h2 
                className="text-[#222725] mb-8"
                style={{
                  fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                  fontSize: '148px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  letterSpacing: '0em',
                  lineHeight: '0.9em',
                }}
              >
                <span className="block">EMPLOYMENT</span>
                <span className="block">HISTORY</span>
              </h2>
              
              {/* Separator Line */}
              <div className="border-b border-[#222725] mb-8"></div>
              
              
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            {/* Tagline */}
            <div className="mb-8">
                <p 
                  className="text-[#222725] font-bold"
                  style={{
                    fontFamily: '"Anton", "Anton Placeholder", sans-serif',
                    fontSize: '56px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    letterSpacing: '0em',
                    lineHeight: '1.1em',
                  }}
                >
                  <span className="block">SHAPING BRANDS</span>
                  <span className="block">ELEVATING EXPERIENCES.</span>
                </p>
              </div>
              
              {/* Contact Link */}
              <div className="flex items-center gap-2">
                <a href="/contact" className="text-[#222725] text-base underline decoration-[#222725] underline-offset-4">
                  CONTACT
                </a>
                <div 
                  className="flex items-center justify-center"
                  style={{
                    backgroundColor: '#222725',
                    borderRadius: '3px',
                    width: '12px',
                    height: '12px',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#efeeec',
                      borderRadius: '9999px',
                      width: '4px',
                      height: '4px',
                    }}
                  ></div>
                </div>
              </div>
          </div>
            {/* Right Side - Employment List */}
            <div className="flex-1 max-w-2xl">
              {[
                { company: 'SAMSUNG', title: 'Senior Designer' },
                { company: 'ZAM Agency', title: 'Design Manager' },
                { company: 'BROWGAL', title: 'Lead Visual Designer' },
                { company: 'SPECTRUM', title: 'Northeast Divisional Designer' },
                { company: 'SONA Enterprises', title: 'Multi-Media Designer' },
                { company: 'KOURY WEB', title: 'Graphic Designer' },
              ].map((job, index, array) => (
                <div key={index}>
                  <div className="flex items-center justify-between py-3">
                    <p 
                      className="text-[#222725] text-base"
                      style={{
                        fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        letterSpacing: '-0.1px',
                        lineHeight: '24px',
                      }}
                    >
                      {job.company} - {job.title}
                    </p>
                    <button
                      className="flex items-center justify-center bg-[#222725] text-white w-8 h-8 rounded-sm hover:opacity-80 transition-opacity"
                      style={{
                        fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                        fontSize: '18px',
                        fontWeight: 400,
                      }}
                    >
                      +
                    </button>
                  </div>
                  {index < array.length - 1 && (
                    <div className="border-b border-[#222725]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
