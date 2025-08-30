import React, { useState } from "react";
import { Calendar, MapPin, Users, Clock, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import { validateTripDetails } from "@/validations/bookingValidation";

const TripDetails = ({
  formData,
  updateFormData,
  nextStep,
  errors,
  setErrors,
}) => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(
    formData.packageType || "standard"
  );
  const [selectedRoom, setSelectedRoom] = useState(
    formData.roomType || "single"
  );

  const handleGoHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const packages = [
    {
      id: "standard",
      name: "Standard Package",
      price: 1500,
      description: "Basic accommodations with essential amenities",
      inclusions: [
        "Hotel accommodation",
        "Airport transfers",
        "Breakfast",
        "City tour",
      ],
    },
    {
      id: "premium",
      name: "Premium Package",
      price: 2500,
      description: "Enhanced experience with premium amenities",
      inclusions: [
        "4-star hotel",
        "All meals",
        "Private transfers",
        "Guided tours",
        "Travel insurance",
      ],
    },
    {
      id: "luxury",
      name: "Luxury Package",
      price: 4000,
      description: "Ultimate luxury travel experience",
      inclusions: [
        "5-star resort",
        "All meals & drinks",
        "Private car",
        "Personal guide",
        "Spa access",
        "Premium insurance",
      ],
    },
  ];

  const roomTypes = [
    { id: "single", name: "Single Room", price: 0 },
    { id: "double", name: "Double Room", price: 200 },
    { id: "suite", name: "Suite", price: 500 },
    { id: "family", name: "Family Room", price: 300 },
  ];

  const calculateTotalPrice = () => {
    const selectedPkg = packages.find((pkg) => pkg.id === selectedPackage);
    const selectedRoomType = roomTypes.find((room) => room.id === selectedRoom);

    if (!selectedPkg || !selectedRoomType) return 0;

    const basePrice = selectedPkg.price;
    const roomPrice = selectedRoomType.price;
    const totalGuests = formData.adults + formData.children;

    return (basePrice + roomPrice) * totalGuests;
  };

  const handleContinue = () => {
    const tripData = {
      packageType: selectedPackage,
      roomType: selectedRoom,
      inclusions:
        packages.find((pkg) => pkg.id === selectedPackage)?.inclusions || [],
      totalPrice: calculateTotalPrice(),
    };

    const validationErrors = validateTripDetails(tripData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    updateFormData(tripData);
    setErrors({});
    nextStep();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
          Trip Details
        </h2>

        {/* Trip Summary */}
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold mb-3">
            Your Trip Summary
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#003C82] flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-500">
                  Destination
                </div>
                <div className="font-medium text-sm sm:text-base truncate">
                  {formData.location}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#003C82] flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-500">Date</div>
                <div className="font-medium text-sm sm:text-base truncate">
                  {formData.date.toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#003C82] flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-500">Guests</div>
                <div className="font-medium text-sm sm:text-base">
                  {formData.adults} Adults, {formData.children} Children
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#003C82] flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm text-gray-500">Duration</div>
                <div className="font-medium text-sm sm:text-base">
                  7-10 days
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Package Selection */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Choose Your Package
          </h3>
          {errors.packageType && (
            <div className="text-red-500 text-sm mb-2">
              {errors.packageType}
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`border-2 rounded-lg p-3 sm:p-4 cursor-pointer transition-all ${
                  selectedPackage === pkg.id
                    ? "border-[#003C82] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <h4 className="font-semibold text-base sm:text-lg mb-2">
                  {pkg.name}
                </h4>
                <div className="text-xl sm:text-2xl font-bold text-[#003C82] mb-2">
                  ${pkg.price}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm mb-3">
                  {pkg.description}
                </p>
                <ul className="text-xs sm:text-sm space-y-1">
                  {pkg.inclusions.map((inclusion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#003C82] rounded-full mt-1.5 flex-shrink-0"></div>
                      <span className="leading-tight">{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Room Type Selection */}
        <div className="mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
            Select Room Type
          </h3>
          {errors.roomType && (
            <div className="text-red-500 text-sm mb-2">{errors.roomType}</div>
          )}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className={`border-2 rounded-lg p-3 sm:p-4 cursor-pointer transition-all ${
                  selectedRoom === room.id
                    ? "border-[#003C82] bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedRoom(room.id)}
              >
                <h4 className="font-medium mb-1 text-sm sm:text-base">
                  {room.name}
                </h4>
                <div className="text-[#003C82] font-semibold text-sm sm:text-base">
                  {room.price === 0 ? "Included" : `+$${room.price}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price Summary */}
        {selectedPackage && selectedRoom && (
          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3">
              Price Summary
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm sm:text-base">
                <span>
                  Package ({formData.adults + formData.children} guests)
                </span>
                <span>
                  $
                  {packages.find((pkg) => pkg.id === selectedPackage)?.price *
                    (formData.adults + formData.children)}
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span>Room upgrade</span>
                <span>
                  $
                  {roomTypes.find((room) => room.id === selectedRoom)?.price ||
                    0}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-base sm:text-lg">
                <span>Total</span>
                <span className="text-[#003C82]">${calculateTotalPrice()}</span>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col md:flex-row gap-3 my-10 justify-center items-center">
          <Button
            onClick={handleContinue}
            className="md:order-2 !text-lg !w-full md:!w-fit !px-10"
            disabled={!selectedPackage || !selectedRoom}
          >
            Continue
          </Button>
          <Button 
            onClick={handleGoHome} 
            className="!text-lg !w-full md:!w-fit !px-10"
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
