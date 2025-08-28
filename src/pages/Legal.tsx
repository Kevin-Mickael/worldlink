import React from 'react';
import { Shield, FileText, Lock, Truck, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageTitle } from '../hooks/usePageTitle';

const Legal: React.FC = () => {
  usePageTitle('Legal & Compliance - WorldLink Logistics');
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-orange-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Legal & Compliance</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive legal information and compliance details for Worldlink Logistics Ltd
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          
          {/* Terms & Conditions */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Terms & Conditions</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <ol className="list-decimal list-inside space-y-3">
                <li>All quotations are subject to change without prior notice.</li>
                <li>Rates of exchange are subject to fluctuation and may affect final charges.</li>
                <li>Payment terms must be respected as agreed prior to the commencement of shipment.</li>
                <li>Quotations may vary if shipment volume increases or decreases, or if any additional services are required.</li>
                <li>Worldlink Logistics Ltd reserves the right to update or amend these terms at any time.</li>
              </ol>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                At Worldlink Logistics Ltd, we value the privacy of our clients. Any personal information, including
                emails, phone numbers, and business details, will be handled with the highest level of
                confidentiality. Data collected through our website, emails, or other communication channels will
                only be used for operational and service-related purposes.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not share, sell, or disclose client information to third parties unless required by law.</li>
                <li>Any cookies or digital tracking are used solely to improve user experience and website performance.</li>
              </ul>
            </div>
          </div>

          {/* Refund & Return Policy */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Truck className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Refund & Return Policy</h2>
            </div>
            <div className="text-gray-700">
              <p>
                Refunds or returns are not applicable, as Worldlink Logistics Ltd provides logistics, freight, and
                related services rather than physical goods.
              </p>
            </div>
          </div>

          {/* Delivery Policy */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Truck className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Delivery Policy</h2>
            </div>
            <div className="text-gray-700">
              <p>
                A delivery policy is not applicable, as Worldlink Logistics Ltd does not sell or distribute physical
                retail products. Delivery timelines and conditions are strictly service-based and communicated to
                clients prior to shipment.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
            </div>
            <div className="text-gray-700">
              <p>
                Worldlink Logistics Ltd provides services in good faith and in accordance with international
                logistics standards. While every effort is made to ensure accuracy and timely delivery, we are not
                liable for delays, damages, or losses caused by unforeseen circumstances beyond our control (e.g.,
                natural disasters, strikes, customs delays, shipping line disruptions).
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Questions about our Legal & Compliance?</h3>
            <p className="text-blue-700 mb-6">
              If you have any questions regarding our legal policies or compliance procedures, 
              please don't hesitate to contact our legal team.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-blue-800">
                <p className="font-semibold">Email:</p>
                <p>legal@worldlink.mu</p>
              </div>
              <div className="text-blue-800">
                <p className="font-semibold">Phone:</p>
                <p>+230 52582275</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
