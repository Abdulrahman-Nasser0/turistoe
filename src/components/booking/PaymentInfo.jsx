import React, { useState } from "react";
import { CreditCard, Lock, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import { validatePaymentInfo } from "@/validations/bookingValidation";

const PaymentInfo = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  errors,
  setErrors,
}) => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

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

  const formatCardNumber = (value) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");
    // Add spaces every 4 digits
    return digits.replace(/(\d{4})/g, "$1 ").trim();
  };

  const formatExpiryDate = (value) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");
    // Add slash after 2 digits
    if (digits.length >= 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    }
    return digits;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s/g, "").length <= 16) {
      handleInputChange("cardNumber", formatted);
    }
  };

  const handleExpiryChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    if (formatted.replace(/\D/g, "").length <= 4) {
      handleInputChange("expiryDate", formatted);
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      handleInputChange("cvv", value);
    }
  };

  const handlePayment = async () => {
    const paymentData = {
      cardNumber: formData.cardNumber,
      expiryDate: formData.expiryDate,
      cvv: formData.cvv,
      cardName: formData.cardName,
      billingAddress: formData.billingAddress,
    };

    const validationErrors = validatePaymentInfo(paymentData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsProcessing(true);
    setErrors({});

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate booking confirmation
      const bookingId = "BK" + Date.now();
      const confirmationNumber =
        "TUR" + Math.random().toString(36).substr(2, 9).toUpperCase();

      updateFormData({
        bookingId,
        confirmationNumber,
        paymentStatus: "confirmed",
        bookingDate: new Date(),
      });

      nextStep();
    } catch {
      setErrors({ payment: "Payment processing failed. Please try again." });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <Lock className="w-5 h-5 text-green-500" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Secure Payment
          </h2>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold mb-3">
            Order Summary
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm sm:text-base">
              <span className="truncate mr-2">
                {formData.location} - {formData.packageType} Package
              </span>
              <span className="font-medium">${formData.totalPrice}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm text-gray-600">
              <span className="truncate mr-2">
                {formData.adults + formData.children} guests •{" "}
                {formData.roomType} room
              </span>
              <span>{formData.date.toLocaleDateString()}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold text-base sm:text-lg">
              <span>Total Amount</span>
              <span className="text-[#003C82]">${formData.totalPrice}</span>
            </div>
          </div>
        </div>

        <form className="space-y-4 sm:space-y-6">
          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </label>
            <div className="border border-gray-300 rounded-md p-3 bg-gray-50">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#003C82]" />
                <span className="font-medium text-sm sm:text-base">
                  Credit/Debit Card
                </span>
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">
                We accept Visa, Mastercard, and American Express
              </div>
            </div>
          </div>

          {/* Card Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Card Number *
            </label>
            <input
              type="text"
              value={formData.cardNumber || ""}
              onChange={handleCardNumberChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                errors.cardNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="1234 5678 9012 3456"
            />
            {errors.cardNumber && (
              <div className="text-red-500 text-sm mt-1">
                {errors.cardNumber}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date *
              </label>
              <input
                type="text"
                value={formData.expiryDate || ""}
                onChange={handleExpiryChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                  errors.expiryDate ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="MM/YY"
              />
              {errors.expiryDate && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.expiryDate}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV *
              </label>
              <input
                type="text"
                value={formData.cvv || ""}
                onChange={handleCvvChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                  errors.cvv ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="123"
              />
              {errors.cvv && (
                <div className="text-red-500 text-sm mt-1">{errors.cvv}</div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cardholder Name *
            </label>
            <input
              type="text"
              value={formData.cardName || ""}
              onChange={(e) => handleInputChange("cardName", e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                errors.cardName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Name as it appears on card"
            />
            {errors.cardName && (
              <div className="text-red-500 text-sm mt-1">{errors.cardName}</div>
            )}
          </div>

          {/* Billing Address */}
          <div>
            <div className="flex items-start gap-2 mb-2">
              <input
                type="checkbox"
                id="sameAsPersonal"
                checked={formData.sameAsPersonal || false}
                onChange={(e) => {
                  handleInputChange("sameAsPersonal", e.target.checked);
                  if (e.target.checked) {
                    handleInputChange("billingAddress", formData.address);
                  }
                }}
                className="mt-0.5 flex-shrink-0"
              />
              <label htmlFor="sameAsPersonal" className="text-sm text-gray-700">
                Billing address same as personal address
              </label>
            </div>

            {!formData.sameAsPersonal && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Billing Address *
                </label>
                <input
                  type="text"
                  value={formData.billingAddress || ""}
                  onChange={(e) =>
                    handleInputChange("billingAddress", e.target.value)
                  }
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003C82] text-sm sm:text-base ${
                    errors.billingAddress ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter billing address"
                />
                {errors.billingAddress && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.billingAddress}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="text-sm text-blue-800 font-medium">
                Secure Payment
              </span>
            </div>
            <div className="text-xs sm:text-sm text-blue-700 mt-1">
              Your payment information is encrypted and secure. We do not store
              your card details.
            </div>
          </div>

          {errors.payment && (
            <div className="text-red-500 text-sm">{errors.payment}</div>
          )}
        </form>

        <div className="flex flex-col md:flex-row gap-3 my-10 justify-center items-center">
          <Button
            onClick={handlePayment}
            className="md:order-3 !text-lg !w-full md:!w-fit !px-10"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent border-white" />
                <span className="hidden sm:inline">Processing...</span>
              </div>
            ) : (
              `Pay $${formData.totalPrice}`
            )}
          </Button>
          <Button
            onClick={prevStep}
            className="md:order-2 !text-lg !w-full md:!w-fit !px-10"
            disabled={isProcessing}
          >
            Back
          </Button>

          <Button
            onClick={handleGoHome}
            className="!text-lg !w-full md:!w-fit !px-10"
            disabled={isProcessing}
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
