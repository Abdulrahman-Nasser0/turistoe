import React from 'react';
import { CheckCircle, Calendar, MapPin, Users, CreditCard, Download, Home } from 'lucide-react';
import Button from '@/components/ui/Button';

const BookingConfirmation = ({ formData, navigate }) => {
  const handleDownloadConfirmation = () => {
    // In a real app, this would generate and download a PDF
    console.log('Downloading confirmation...');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 text-center">
        <div className="mb-4 sm:mb-6">
          <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Thank you for choosing Turistoe. Your trip has been successfully booked.
          </p>
        </div>

        {/* Confirmation Details */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Booking Details</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-xs sm:text-sm text-gray-500">Booking ID</div>
              <div className="font-semibold text-sm sm:text-base break-all">{formData.bookingId}</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-500">Confirmation Number</div>
              <div className="font-semibold text-sm sm:text-base break-all">{formData.confirmationNumber}</div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#003C82] mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-medium text-sm sm:text-base">{formData.location}</div>
                <div className="text-xs sm:text-sm text-gray-600">{formData.packageType} Package</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#003C82] mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-medium text-sm sm:text-base">{formData.date.toLocaleDateString()}</div>
                <div className="text-xs sm:text-sm text-gray-600">Check-in date</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#003C82] mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-medium text-sm sm:text-base">{formData.adults} Adults, {formData.children} Children</div>
                <div className="text-xs sm:text-sm text-gray-600">{formData.roomType} room</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-[#003C82] mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <div className="font-medium text-sm sm:text-base">${formData.totalPrice}</div>
                <div className="text-xs sm:text-sm text-gray-600">Payment confirmed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Information */}
        <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 text-left">
          <h3 className="text-base sm:text-lg font-semibold mb-3">Primary Guest</h3>
          <div className="space-y-2">
            <div className="text-sm sm:text-base">
              <span className="text-gray-600">Name: </span>
              <span className="font-medium">{formData.firstName} {formData.lastName}</span>
            </div>
            <div className="text-sm sm:text-base">
              <span className="text-gray-600">Email: </span>
              <span className="font-medium break-all">{formData.email}</span>
            </div>
            <div className="text-sm sm:text-base">
              <span className="text-gray-600">Phone: </span>
              <span className="font-medium">{formData.phone}</span>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 text-left">
          <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">What's Next?</h3>
          <ul className="text-xs sm:text-sm text-blue-800 space-y-1">
            <li>• You'll receive a confirmation email shortly with your e-tickets</li>
            <li>• Our travel coordinator will contact you within 24 hours</li>
            <li>• Check your email for detailed itinerary and packing list</li>
            <li>• Ensure your passport is valid for at least 6 months</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-3 my-10 justify-center items-center">
          <Button 
            onClick={handleBackToHome}
            className="md:order-2 !text-lg !w-full md:!w-fit !px-10 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
          <Button 
            onClick={handleDownloadConfirmation}
            className="!text-lg !w-full md:!w-fit !px-10 flex items-center justify-center gap-2 !bg-white !text-[#003C82] !border-[#003C82] hover:!bg-gray-50 hover:!text-[#003C82]"
          >
            <Download className="w-4 h-4" />
            Download Confirmation
          </Button>
        </div>

        {/* Contact Information */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            Questions about your booking? Contact us at{' '}
            <a href="mailto:support@turistoe.com" className="text-[#003C82] hover:underline break-all">
              support@turistoe.com
            </a>{' '}
            or call{' '}
            <a href="tel:+1-800-TURISTOE" className="text-[#003C82] hover:underline">
              +1-800-TURISTOE
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
