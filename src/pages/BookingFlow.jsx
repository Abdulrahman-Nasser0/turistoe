import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/ui/Header';
import BookingSteps from '@/components/booking/BookingSteps';
import TripDetails from '@/components/booking/TripDetails';
import PersonalInfo from '@/components/booking/PersonalInfo';
import PaymentInfo from '@/components/booking/PaymentInfo';
import BookingConfirmation from '@/components/booking/BookingConfirmation';

const BookingFlow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {};
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Trip details 
    location: bookingData.location || 'Canada',
    date: bookingData.date || new Date(),
    adults: bookingData.adults || 1,
    children: bookingData.children || 0,
    
    // Trip package details
    packageType: '',
    roomType: '',
    inclusions: [],
    totalPrice: 0,
    
    // Personal information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    
    // Payment information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    billingAddress: '',
    
    // Booking confirmation
    bookingId: '',
    confirmationNumber: ''
  });

  const [errors, setErrors] = useState({});

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <TripDetails
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 2:
        return (
          <PersonalInfo
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 3:
        return (
          <PaymentInfo
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 4:
        return (
          <BookingConfirmation
            formData={formData}
            navigate={navigate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <BookingSteps
          currentStep={currentStep}
          goToStep={goToStep}
          completedSteps={currentStep - 1}
        />
        
        <div className="mt-4 sm:mt-8">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default BookingFlow;
