import React, { useState, useEffect } from 'react';
import { Truck, Warehouse, Package, Snowflake, FileText, Plane, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import VideoHero from '../components/VideoHero';
import LogisticsSeparator from '../components/LogisticsSeparator';
import { usePageTitle } from '../hooks/usePageTitle';


interface HomeProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomeProps> = ({ onPageChange }) => {
  usePageTitle('WorldLink Logistics - Trusted Logistics Worldwide');
  const { t } = useLanguage();
  const [experienceCount, setExperienceCount] = useState(0);

  const publicAsset = (relativePath: string) => `${import.meta.env.BASE_URL}${relativePath.replace(/^\//, '')}`;

  // Animation d'auto-incrémentation pour l'expérience
  useEffect(() => {
    const targetCount = 11;
    const duration = 2000; // 2 secondes
    const increment = targetCount / (duration / 16); // 60 FPS
    
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(timer);
      }
      setExperienceCount(Math.floor(currentCount));
    }, 16);
    
    return () => clearInterval(timer);
  }, []);



  const services = [
    {
      icon: <Truck className="h-12 w-12 text-white" />,
      title: 'Freight Consolidation & Full Container Loads',
      description: 'Optimisez vos coûts de transport avec notre service de consolidation de fret et de chargement de conteneurs complets.'
    },
    {
      icon: <Package className="h-12 w-12 text-white" />,
      title: 'Personal Effects & Project Shipments',
      description: 'Transport spécialisé pour vos effets personnels et projets avec traitement délicat et sécurisé.'
    },
    {
      icon: <Snowflake className="h-12 w-12 text-white" />,
      title: 'Refrigerated Food Containers',
      description: 'Conteneurs frigorifiques spécialisés pour le transport de denrées alimentaires avec chaîne du froid contrôlée.'
    },
    {
      icon: <FileText className="h-12 w-12 text-white" />,
      title: 'Customs Clearing & Compliance',
      description: 'Services de dédouanement et de conformité réglementaire pour assurer le passage en douane de vos marchandises.'
    },
    {
      icon: <Plane className="h-12 w-12 text-white" />,
      title: 'Airfreight Services',
      description: 'Transport aérien rapide et fiable pour vos envois urgents avec réseau de partenaires internationaux.'
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-white" />,
      title: 'Product Sourcing & Procurement',
      description: 'Sourcing et approvisionnement de produits à l\'international avec identification des meilleurs fournisseurs.'
    },
    {
      icon: <Warehouse className="h-12 w-12 text-white" />,
      title: 'Inland Transport & CFS Warehousing',
      description: 'Transport terrestre et entreposage CFS avec solutions complètes pour la gestion de vos conteneurs.'
    }
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <VideoHero
            videoSrc={publicAsset('hero.mp4')}
            posterSrc={publicAsset('worldlink.png')}
            alt=""
            className="w-full h-full"
          />
          
          {/* Overlay gradient optimisé */}
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute z-10 text-white bottom-0 left-0 p-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight font-serif">
            <span className="block">Trusted Logistics.</span>
            <span className="block mt-2">Worldwide Connections.</span>
          </h1>
        </div>


      </section>

      {/* Business Profile Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-black text-blue-900 leading-tight font-serif tracking-wide">
                  About Worldlink
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-black leading-relaxed">
                <p className="text-lg">
                  Founded in 2014 by Director <strong>Mr. Neeraj Goreeba</strong>, Worldlink Logistics Ltd has rapidly grown from a
                  two-person team to a leading logistics provider in Mauritius, employing over 30 professionals today.
                </p>
                <p className="text-lg mb-12">
                  With its own CFS warehousing facility at <strong>Jin Fei Business & Industrial Park, Riche Terre</strong>, the
                  company offers a comprehensive suite of freight and logistics solutions.
                </p>
                
                {/* Experience Stat */}
                <div className="stat flex items-end mt-32">
                  <span className="stat-number text-7xl font-bold text-[var(--color-darkblue)]">
                    <span className="stat-total-1">+{experienceCount}</span>
                  </span>
                  <div className="caption ml-5 text-base text-gray-600 flex flex-col">
                    <span>years</span>
                    <span>experience</span>
                  </div>
                </div>
              </div>


            </div>

            {/* Right Column - About Image */}
            <div className="relative flex justify-end">
              <img 
                src="about.jpg" 
                alt="About Worldlink" 
                className="w-96 h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Separator */}
      <LogisticsSeparator />

      {/* Services Preview */}
      <section className="py-20 bg-white overflow-hidden w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left mb-16">
            <h2 className="text-5xl font-black text-[var(--color-darkblue)] mb-4 font-serif tracking-wide">{t('services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              {t('services.subtitle')}
            </p>
          </div>

          {/* Modern Freight Slider */}
          <div className="relative w-full">
            {/* Static services grid instead of auto-scrolling */}
            <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide w-full">
            {services.map((service, index) => (
              <div
                key={index}
                  className="flex-shrink-0 w-[446px] h-96 bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
                >
                  {/* Background Image - Fills entire card */}
                  <div className="absolute inset-0">
                    {index === 0 && (
                      <img 
                        src="https://forto.com/wp-content/uploads/2024/12/freight-consolidation.png" 
                        alt="Freight Consolidation" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {index === 1 && (
                      <img 
                        src="https://media.istockphoto.com/id/835810076/photo/scanning-and-checking-boxes.jpg?s=612x612&w=0&k=20&c=Wq8kPSXxLEhNJ9LrcB2bUJqzRt6JNGhXLercaYqp2IY=" 
                        alt="Personal Effects" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {index === 2 && (
                      <img 
                        src="https://img.freepik.com/premium-photo/container-logistic-reefer-shipping-frozen-food-refrigerated-container-export-logistics_33867-1869.jpg" 
                        alt="Refrigerated Containers" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {index === 3 && (
                      <img 
                        src="https://www.shutterstock.com/image-photo/female-custom-clearance-officer-checking-600nw-2434808501.jpg" 
                        alt="Customs Clearing" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {index === 4 && (
                      <img 
                        src="https://media.istockphoto.com/id/504606896/photo/stack-of-cargo-containers-at-the-docks.jpg?s=612x612&w=0&k=20&c=JinxScutWXDYJX10eRw6OOolv8ddCgNZZwbvHibi3Uo=" 
                        alt="Airfreight" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {index === 5 && (
                      <img 
                        src="https://cdn.prod.website-files.com/6335c554700eee67b981880d/63877d390f3ba7726c6333e4_1Freight-Forwarding-Industry-in-India-Outlook-and-Establishment.jpeg" 
                        alt="Product Sourcing" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    {index === 6 && (
                      <img 
                        src="https://www.shutterstock.com/shutterstock/videos/1102479091/thumb/11.jpg?ip=x480" 
                        alt="Inland Transport" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>
                  
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Content overlay - Text and button on top of image */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Title at top */}
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Bottom content area */}
                    <div className="space-y-4">
                      {/* Description */}
                      <p className="text-white leading-relaxed text-sm font-medium">
                        {service.description}
                      </p>
                      
                      {/* Dots separator */}
                      <div className="dots text-xl text-white/80">•••</div>
                      
                      {/* CTA Section */}
                      <div className="freight-content-cta flex items-center justify-between">
                        <button
                          onClick={() => onPageChange(index === 0 ? 'freight-consolidation' : 
                                                   index === 1 ? 'personal-effects' : 
                                                   index === 2 ? 'refrigerated-containers' : 
                                                   index === 3 ? 'customs-clearing' : 
                                                   index === 4 ? 'airfreight' : 
                                                   index === 5 ? 'product-sourcing' : 
                                                   'inland-transport')}
                          className="freight-cta main__btn bg-gradient-to-r from-[var(--color-darkblue)] to-sky-600 hover:from-[var(--color-darkblue)] hover:to-sky-500 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2 group"
                        >
                          <span className="text-lg font-bold group-hover:rotate-90 transition-transform duration-300">+</span>
                          <span>See service details</span>
                        </button>
                        
                        {/* Small circles decoration */}
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            ))}
          </div>

            {/* Custom Navigation Arrow */}
            <div className="custom-nav-arrow" onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              if (container) {
                container.scrollBy({ left: 500, behavior: 'smooth' });
              }
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>

        </div>
      </section>


      {/* Contact Section - Nouvelle section complète */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Image avec overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/029/551/910/large_2x/warehouse-of-modern-logistics-with-rows-of-tall-shelves-full-of-boxes-and-products-huge-distribution-warehouse-generative-ai-photo.jpg"
            alt="Warehouse background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Form Container */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
              {/* Section Header dans la carte */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Let's get down to business
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Get in touch with our logistics experts and get a customized quote for your shipping needs
                </p>
              </div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="form-item md:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="form-item">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="form-item">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone_number" 
                    placeholder="Enter your phone number" 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Country */}
                <div className="form-item">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select id="country" name="country" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all duration-300 bg-white">
                    <option value="">Select your country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Ascension Island">Ascension Island</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                    <option value="British Virgin Islands">British Virgin Islands</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Canary Islands">Canary Islands</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Caribbean Netherlands">Caribbean Netherlands</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Ceuta & Melilla">Ceuta & Melilla</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Clipperton Island">Clipperton Island</option>
                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo - Brazzaville">Congo - Brazzaville</option>
                    <option value="Congo - Kinshasa">Congo - Kinshasa</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curaçao">Curaçao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czechia">Czechia</option>
                    <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Diego Garcia">Diego Garcia</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Eswatini">Eswatini</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">Falkland Islands</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">French Southern Territories</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard & McDonald Islands">Heard & McDonald Islands</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong SAR China">Hong Kong SAR China</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao SAR China">Macao SAR China</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">Micronesia</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                    <option value="North Korea">North Korea</option>
                    <option value="North Macedonia">North Macedonia</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Outlying Oceania">Outlying Oceania</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territories">Palestinian Territories</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn Islands">Pitcairn Islands</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Réunion">Réunion</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Sint Maarten">Sint Maarten</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia & South Sandwich Islands">South Georgia & South Sandwich Islands</option>
                    <option value="South Korea">South Korea</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="St. Barthélemy">St. Barthélemy</option>
                    <option value="St. Helena">St. Helena</option>
                    <option value="St. Kitts & Nevis">St. Kitts & Nevis</option>
                    <option value="St. Lucia">St. Lucia</option>
                    <option value="St. Martin">St. Martin</option>
                    <option value="St. Pierre & Miquelon">St. Pierre & Miquelon</option>
                    <option value="St. Vincent & Grenadines">St. Vincent & Grenadines</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard & Jan Mayen">Svalbard & Jan Mayen</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="São Tomé & Príncipe">São Tomé & Príncipe</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                    <option value="Tristan da Cunha">Tristan da Cunha</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks & Caicos Islands">Turks & Caicos Islands</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="U.S. Outlying Islands">U.S. Outlying Islands</option>
                    <option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City">Vatican City</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Wallis & Futuna">Wallis & Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                    <option value="Åland Islands">Åland Islands</option>
                  </select>
                </div>

                {/* Services */}
                <div className="form-item">
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                    Services *
                  </label>
                  <select id="services" name="services" required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all duration-300 bg-white">
                    <option value="">Select a service</option>
                    <option value="Air Freight">Air Freight</option>
                    <option value="Sea Freight">Sea Freight</option>
                    <option value="Clearing Services">Clearing Services</option>
                    <option value="Project Cargo Management">Project Cargo Management</option>
                    <option value="Perishable & Dangerous Cargo">Perishable & Dangerous Cargo</option>
                    <option value="Warehousing">Warehousing</option>
                    <option value="Removals">Removals</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-item md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    placeholder="Tell us about your shipping needs..." 
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all duration-300 resize-vertical"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="form-item md:col-span-2">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get a quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;