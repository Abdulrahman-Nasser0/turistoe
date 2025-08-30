import React from "react";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import { validatePersonalInfo } from "@/validations/bookingValidation";

const PersonalInfo = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  errors,
  setErrors,
}) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleContinue = () => {
    const personalData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
      country: formData.country,
    };

    const validationErrors = validatePersonalInfo(personalData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    nextStep();
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
          Personal Information
        </h2>

        <form className="space-y-4 sm:space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.firstName}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.lastName}
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
              )}
            </div>
          </div>

          {/* Address Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address *
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your street address"
            />
            {errors.address && (
              <div className="text-red-500 text-sm mt-1">{errors.address}</div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your city"
              />
              {errors.city && (
                <div className="text-red-500 text-sm mt-1">{errors.city}</div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code *
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                  errors.zipCode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter ZIP code"
              />
              {errors.zipCode && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.zipCode}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country *
              </label>
              <select
                value={formData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                  errors.country ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="IT">Italy</option>
                <option value="ES">Spain</option>
                <option value="JP">Japan</option>
                <option value="other">Other</option>
              </select>
              {errors.country && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.country}
                </div>
              )}
            </div>
          </div>

          {/* Special Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requirements (Optional)
            </label>
            <textarea
              value={formData.specialRequirements || ""}
              onChange={(e) =>
                handleInputChange("specialRequirements", e.target.value)
              }
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base"
              placeholder="Any special dietary requirements, accessibility needs, or other requests..."
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={formData.acceptTerms || false}
              onChange={(e) =>
                handleInputChange("acceptTerms", e.target.checked)
              }
              className="mt-1 flex-shrink-0"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-[#003C82] hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#003C82] hover:underline">
                Privacy Policy
              </a>
              *
            </label>
          </div>
          {errors.acceptTerms && (
            <div className="text-red-500 text-sm">{errors.acceptTerms}</div>
          )}
        </form>

        

        <div className="flex flex-col md:flex-row gap-3 my-10 justify-center items-center">
          <Button
            onClick={handleContinue}
            className={"md:order-3 !text-lg !w-full md:!w-fit !px-10" }
          >
            Continue
          </Button>
          <Button onClick={prevStep} className={"md:order-2 !text-lg !w-full md:!w-fit !px-10"}>
            Back
          </Button>

          <Button onClick={handleGoHome} className={"!text-lg !w-full md:!w-fit !px-10"}>
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
