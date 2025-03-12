import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact | Moses Kayuni",
  description: "Get in touch with Moses Kayuni for collaborations, job opportunities, or project inquiries.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FiMail className="h-5 w-5" />,
      title: "Email",
      value: "Kayunilow11@gmail.com",
      link: "mailto:Kayunilow11@gmail.com",
    },
    {
      icon: <FiPhone className="h-5 w-5" />,
      title: "Phone",
      value: "+260 901 9099",
      link: "tel:+2609019099",
    },
    {
      icon: <FiMapPin className="h-5 w-5" />,
      title: "Location",
      value: "Bowling Green, Kentucky",
      link: null,
    },
    {
      icon: <FiLinkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/moses-kayuni-7915709b/",
    },
    {
      icon: <FiGithub className="h-5 w-5" />,
      title: "GitHub",
      value: "Check my repositories",
      link: "https://github.com/Mkayuni",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, 
                creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-primary p-3 bg-primary/10 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                          target={item.link.startsWith('http') ? "_blank" : undefined}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">My Location</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Based in Bowling Green, Kentucky, but available for remote work worldwide.
            </p>
          </div>
          
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            {/* This would be a placeholder for an actual map */}
            <div className="w-full h-full bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-600 dark:text-gray-400">
                Map placeholder - Bowling Green, Kentucky
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}