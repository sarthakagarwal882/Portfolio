import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "work.sarthak882@gmail.com",
      href: "mailto:work.sarthak882@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7456846208",
      href: "tel:+917456846208",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sarthakagarwal882",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sarthak-agarwal-ab6308245/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can
            work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      {item.href !== "#" ? (
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-purple-100 hover:text-purple-600 transition-colors"
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="border-2 border-purple-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Work Together
              </h3>
              <div className="space-y-6">
                <p className="text-gray-700">
                  I'm currently open to new opportunities and exciting projects.
                  Whether you're looking for a full-stack developer, need help
                  with an existing project, or want to discuss a potential
                  collaboration, I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">
                      What I Can Help With:
                    </h4>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>• Full-stack web application development</li>
                      <li>• React.js and Next.js projects</li>
                      <li>• Backend API development</li>
                      <li>• Database design and optimization</li>
                      <li>• Cloud deployment and DevOps</li>
                    </ul>
                  </div>
                  <a
                    className="w-full bg-purple-600 flex hover:bg-purple-700 p-4 rounded-lg text-white font-semibold items-center justify-center transition-colors interactive"
                    type="button"
                    href={`mailto:work.sarthak882@gmail.com`}
                  >
                    <Mail
                      className="h-5 w-5 mr-2 bg-purple-600"
                    />
                    Send Me an Email
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
