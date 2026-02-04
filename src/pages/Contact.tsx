import { useEffect, useRef, useState } from 'react';
import { contactData } from '../data/contactData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { image, title, subtitle, form } = contactData;

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.opacity = '1';
              (entry.target as HTMLElement).style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(titleRef.current);
    }

    // Animate subtitle
    if (subtitleRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                (entry.target as HTMLElement).style.opacity = '1';
                (entry.target as HTMLElement).style.transform = 'translateY(0)';
              }, 200);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(subtitleRef.current);
    }

    // Animate form
    if (formRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                (entry.target as HTMLElement).style.opacity = '1';
                (entry.target as HTMLElement).style.transform = 'translateY(0)';
              }, 400);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(formRef.current);
    }

    // Animate image
    if (imageRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.opacity = '1';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(imageRef.current);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full">
      <section className="relative min-h-[90vh] flex items-center justify-center bg-bg-dark overflow-hidden">
        {/* Background Image for Mobile */}
        <div
          className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url(${image})`,
            zIndex: 0,
          }}
        />

        {/* Absolute Positioned Image for Desktop */}
        <img
          ref={imageRef}
          src={image}
          alt="Contact"
          className="hidden md:block absolute left-0 top-[56px] w-[560px] h-[560px] object-contain transition-all duration-700 cursor-pointer"
          style={{
            opacity: 0,
            filter: 'brightness(1)',
            zIndex: 1,
          }}
        />

        {/* Centered Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-8 lg:p-12">
            {/* Title */}
            <h1
              ref={titleRef}
              className="text-[#efeeec] mb-4 md:mb-6 w-[fit-content] font-anton-large uppercase text-center"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
              }}
            >
              <span className="block">{title.line1}</span>
              <span className="block">{title.line2}</span>
              {/* Subtitle */}
              <p
                ref={subtitleRef}
                className="text-[#efeeec] mt-8 mb-10 md:mt-10 md:mb-10 font-inter-display-lg text-center"
                style={{
                  lineHeight: '1.5em',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s',
                }}
              >
                {subtitle}
              </p>
            </h1>
          <div className="flex flex-col justify-center max-w-full md:max-w-lg w-full">


            {/* Contact Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s',
              }}
            >
              {form.fields.map((field) => (
                <div key={field.name} className={field.name === 'message' ? 'mb-6 md:mb-8' : 'mb-4 md:mb-6'}>
                  <label
                    htmlFor={field.name}
                    className="block text-[#efeeec] mb-2 font-inter-display-xs"
                    style={{
                      color: '#cdcccc',
                    }}
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] as string}
                      onChange={handleChange}
                      rows={field.rows}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#cdcccc] text-white focus:outline-none focus:border-white transition-colors resize-y font-inter-display-xs"
                      style={{
                        color: '#cdcccc',
                        minHeight: '120px',
                      }}
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData] as string}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#cdcccc] text-[#efeeec] focus:outline-none focus:border-white transition-colors font-inter-display-xs"
                      style={{
                        color: '#cdcccc',
                      }}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[100%] px-8 py-2 bg-[#cdcccc] text-[#151513] rounded-lg font-medium hover:bg-white transition-colors duration-300 font-inter-display-xs"
                style={{
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                {form.submitButton}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

