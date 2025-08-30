import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const BookingSteps = ({ currentStep, goToStep, completedSteps }) => {
  const steps = [
    { id: 1, title: 'Trip Details', description: 'Choose your package' },
    { id: 2, title: 'Personal Info', description: 'Your information' },
    { id: 3, title: 'Payment', description: 'Secure payment' },
    { id: 4, title: 'Confirmation', description: 'Booking complete' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6">
      {/* Mobile: Vertical Stack */}
      <div className="block md:hidden space-y-4">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center w-full">
            {/* Step Circle */}
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 cursor-pointer transition-all flex-shrink-0",
                currentStep === step.id
                  ? "bg-[#003C82] border-[#003C82] text-white"
                  : step.id <= completedSteps
                  ? "bg-green-500 border-green-500 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-400"
              )}
              onClick={() => step.id <= completedSteps + 1 && goToStep(step.id)}
            >
              {step.id <= completedSteps ? (
                <Check className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <span className="text-xs sm:text-sm font-medium">{step.id}</span>
              )}
            </div>

            {/* Step Content */}
            <div className="ml-3 flex-1">
              <div
                className={cn(
                  "text-sm sm:text-base font-medium",
                  currentStep === step.id
                    ? "text-[#003C82]"
                    : step.id <= completedSteps
                    ? "text-green-600"
                    : "text-gray-400"
                )}
              >
                {step.title}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">{step.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Horizontal Layout */}
      <div className="hidden md:flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            {/* Step Circle */}
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 cursor-pointer transition-all flex-shrink-0",
                currentStep === step.id
                  ? "bg-[#003C82] border-[#003C82] text-white"
                  : step.id <= completedSteps
                  ? "bg-green-500 border-green-500 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-400"
              )}
              onClick={() => step.id <= completedSteps + 1 && goToStep(step.id)}
            >
              {step.id <= completedSteps ? (
                <Check className="w-5 h-5 lg:w-6 lg:h-6" />
              ) : (
                <span className="text-sm lg:text-base font-medium">{step.id}</span>
              )}
            </div>

            {/* Step Content */}
            <div className="ml-3 flex-1 min-w-0">
              <div
                className={cn(
                  "text-sm lg:text-base font-medium truncate",
                  currentStep === step.id
                    ? "text-[#003C82]"
                    : step.id <= completedSteps
                    ? "text-green-600"
                    : "text-gray-400"
                )}
              >
                {step.title}
              </div>
              <div className="text-xs lg:text-sm text-gray-500 truncate">{step.description}</div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "w-8 lg:w-16 h-0.5 mx-2 lg:mx-4 flex-shrink-0",
                  step.id < completedSteps
                    ? "bg-green-500"
                    : step.id === completedSteps
                    ? "bg-[#003C82]"
                    : "bg-gray-300"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
