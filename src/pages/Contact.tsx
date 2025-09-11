import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Building } from 'lucide-react';
import { ContactForm } from '../types';
import { usePageTitle } from '../hooks/usePageTitle';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  usePageTitle('Contact - WorldLink Logistics');
  const { currentLanguage } = useLanguage();
  
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    language: currentLanguage.code
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Freight Consolidation & Full Container Loads',
    'Personal Effects & Project Shipments',
    'Refrigerated Food Containers',
    'Customs Clearing & Compliance',
    'Airfreight Services',
    'Product Sourcing & Procurement',
    'Inland Transport & CFS Warehousing'
  ];

  const contactInfo = [
    {
      icon: <Building className="h-6 w-6 text-sky-500" />,
      title: 'Company',
      content: 'WORLDLINK LOGISTICS LTD - Business Registration Number: C14126723'
    },
    {
      icon: <MapPin className="h-6 w-6 text-sky-500" />,
      title: 'Address',
      content: 'PLOT 30A BUSINESS & INDUSTRIAL PARK, JIN FEI ZONE RICHE TERRE, Mauritius'
    },
    {
      icon: <Phone className="h-6 w-6 text-sky-500" />,
      title: 'Phone Numbers',
      content: 'Neeraj: 52582275 | Simtee: 52549671 | Christopher: 55005465'
    },
    {
      icon: <Mail className="h-6 w-6 text-sky-500" />,
      title: 'Email Addresses',
      content: 'Neeraj@worldlink.mu | christopher@worldlink.mu | simtee@worldlink.mu'
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Inclure la langue actuelle dans les données
      const dataToSend = {
        ...formData,
        language: currentLanguage.code
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      // Vérifier si la réponse est OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Vérifier le type de contenu
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('La réponse du serveur n\'est pas au format JSON');
      }

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
            language: currentLanguage.code
          });
        }, 3000);
      } else {
        // Afficher une erreur à l'utilisateur
        alert(`Erreur: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof Error) {
        if (error.message.includes('404')) {
          alert('Erreur: La fonction d\'envoi d\'email n\'est pas disponible. Veuillez contacter l\'administrateur.');
        } else if (error.message.includes('JSON')) {
          alert('Erreur: Problème de communication avec le serveur. Veuillez réessayer.');
        } else {
          alert(`Erreur: ${error.message}`);
        }
      } else {
        alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-2xl font-light mb-8 text-sky-200">
            Get in touch with WorldLink Logistics
          </p>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Ready to streamline your logistics operations? Contact our expert team for personalized
            solutions and exceptional service.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Send us a Message</h2>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-green-600 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-3"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 hover:border-sky-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-3"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 hover:border-sky-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-3"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 hover:border-sky-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-3"
                    >
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 hover:border-sky-300"
                    >
                      <option value="">Select a Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 hover:border-sky-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white py-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info + Map */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg"
                  >
                    <div className="bg-sky-100 p-3 rounded-full">{info.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">{info.title}</h3>
                      <p className="text-gray-600 text-lg">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* OpenStreetMap Section */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Location</h3>
                <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=57.51524%2C-20.12682%2C57.53524%2C-20.10682&layer=mapnik&marker=-20.11682,57.52524"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="WorldLink Logistics Location - Jin Fei Zone Riche Terre, Mauritius"
                  ></iframe>
                </div>
                <div className="mt-4 text-center text-gray-600">
                  <p className="font-semibold">JIN FEI ZONE RICHE TERRE</p>
                  <p className="text-sm">Mauritius</p>
                  <p className="text-xs text-gray-500 mt-1">PLOT 30A BUSINESS & INDUSTRIAL PARK</p>
                  <a
                    href="https://www.openstreetmap.org/?mlat=-20.11682&mlon=57.52524#map=16/-20.11682/57.52524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline text-sm mt-2 inline-block"
                  >
                    View on OpenStreetMap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-sky-200 mb-10">
            Contact us today for a free consultation and quote on your logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+23052582275"
              className="bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Neeraj: 52582275</span>
            </a>
            <a
              href="mailto:Neeraj@worldlink.mu"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
