const services = [
  {
    id: '01',
    title: 'Web Design & Development',
    description: 'We curate immersive digital environments where motion meets functionality. Every interaction is intentionally choreographed to elevate your brand’s narrative.',
  },
  {
    id: '02',
    title: 'Brand Identity',
    description: 'Identity is the soul of your business. We translate your core values into a visual language that commands attention and builds lasting loyalty.',
  },
  {
    id: '03',
    title: 'SEO Strategy',
    description: 'Presence is nothing without findability. We implement sophisticated search strategies that align your content with the specific intent of your highest-value customers.',
  },
  {
    id: '04',
    title: 'Maintenance & Hosting',
    description: 'Performance is a standard, not an option. Our architectural hosting ensures your platform remains a seamless, high-speed sanctuary for your audience.',
  },
];

export default function StickyService() {
  return (
    <div className="bg-[#f5f4f2] min-h-screen">
      {/* Hero Header Section */}
      <div className="px-6 lg:px-20 py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start pb-20">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
            <div className="w-12 h-px bg-black/40" />
            <span className="text-black/60 uppercase tracking-widest text-xs font-medium">Services</span>
          </div>
          <div className="max-w-2xl text-right">
            <h1 className="text-5xl md:text-7xl font-medium text-[#1A1A1A] mb-6 leading-[1.1]">
              Form Meets Function.
            </h1>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed">
              We combine intentional design with modern technology to elevate your digital presence.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Stacking List */}
      <div className="relative border-2 border-red-400 pb-40">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="sticky top-0 w-full border-t border-b border-black/10 bg-[#f5f4f2]"
            style={{ 
              // This creates the stacking "shingle" effect
              marginTop: index === 0 ? '0' : '-1px' 
            }}
          >
            <div className="px-6 lg:px-20 py-18 lg:py-32 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* ID Column */}
                <div className="md:col-span-1">
                  <span className="text-xs font-medium text-black/40 tabular-nums">
                    {service.id}
                  </span>
                </div>

                {/* Title Column */}
                <div className="md:col-span-5">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1A1A1A] tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Description Column */}
                <div className="md:col-span-6 md:pl-12 lg:pl-24">
                  <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}