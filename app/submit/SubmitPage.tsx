// "use client";
// import ContentWrapper from "@/components/content-wrapper";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function SubmitPage() {
//   const [invitationCode, setInvitationCode] = useState("");
//   const [agreedToTerms, setAgreedToTerms] = useState(false);
//   const router = useRouter();

//   const handleSubmit = () => {
//     if (invitationCode && agreedToTerms) {
//       console.log("Submitting code:", invitationCode);
//     }
//   };

//   return (
//     <ContentWrapper>
//       <div className="w-full max-w-3xl mx-auto space-y-12 border border-gray-700 rounded-lg p-8 md:p-12 bg-[#1a1a1a]">
//         {/* Header */}
//         <div className="text-center">
//           <h1 className="text-white md:text-2xl lg:text-3xl font-bold text-xl tracking-wide">
//             INVITATION CODE - ENTER YOUR CODE TO PROCEED
//           </h1>
//         </div>

//         {/* Invitation Code Form */}
//         <div className="space-y-6">
//           <div className="space-y-3">
//             <label className="text-white text-lg block">
//               Invitation Code<span className="text-red-500">*</span>
//             </label>
//             <Input
//               type="text"
//               placeholder="Enter Your Invitation Code"
//               value={invitationCode}
//               onChange={(e) => setInvitationCode(e.target.value)}
//               className="w-full h-12 bg-transparent border border-gray-600 text-white placeholder:text-gray-500 rounded-lg px-4"
//             />
//           </div>

//           {/* Terms Checkbox */}
//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="terms"
//               checked={agreedToTerms}
//               onCheckedChange={(checked) =>
//                 setAgreedToTerms(checked as boolean)
//               }
//               className="border-gray-600 data-[state=checked]:bg-white data-[state=checked]:text-black"
//             />
//             <label
//               htmlFor="terms"
//               className="text-white text-sm cursor-pointer"
//             >
//               I agree to Terms & Conditions and Privacy Policy.
//               <span className="text-red-500">*</span>
//             </label>
//           </div>

//           {/* Submit Button */}
//           <div className="flex justify-center pt-6">
//             <Button
//               onClick={handleSubmit}
//               className="max-w-sm w-full h-12 font-bold text-black"
//             >
//               SUBMIT INVITE CODE
//             </Button>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className="text-center"></div>

//         {/* Action Buttons */}
//         <div className="flex flex-col items-center pt-8 px-4 max-w-4xl mx-auto">
//           <h2 className="text-white text-xl md:text-2xl font-bold tracking-wide text-center mb-6">
//             CLICK HERE TO ENTER CUT TO BLACK PRIZE
//           </h2>

//           <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-2xl">
//             <Button
//               onClick={() => router.push("/request-invitation")}
//               className="w-full sm:w-auto px-8 h-12 bg-transparent border border-gray-600 text-white hover:bg-gray-800 hover:border-white transition-all rounded-lg text-base font-normal"
//             >
//               REQUEST INVITE
//             </Button>

//             <Button
//               onClick={() => router.push("/lost-invitation")}
//               className="w-full sm:w-auto px-8 h-12 bg-transparent border border-gray-600 text-white hover:bg-gray-800 hover:border-white transition-all rounded-lg text-base font-normal"
//             >
//               LOST INVITATION CODE
//             </Button>
//           </div>
//         </div>

//         {/* Footer Text */}
//         <div className="text-center pt-4">
//           <p className="text-gray-400 text-sm max-w-2xl mx-auto">
//             payment screen (if applicable) appears After code verification
//             upload instructions will be sent after payment is verified.
//           </p>
//         </div>
//       </div>
//     </ContentWrapper>
//   );
// }

"use client";
import ContentWrapper from "@/components/content-wrapper";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { API_URL } from "@/lib/config";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { Loader2 } from "lucide-react";

export default function SubmitPage() {
  const [invitationCode, setInvitationCode] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    invitationCode: "",
    terms: "",
  });
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false); // Add this state at component level

  const handleSubmit = async () => {
    if (isSubmitting) return; // Prevent multiple submits

    // Reset errors
    const newErrors = {
      invitationCode: "",
      terms: "",
    };

    // Validate invitation code
    if (!invitationCode.trim()) {
      newErrors.invitationCode = "Please enter your invitation code";
    }

    // Validate terms agreement
    if (!agreedToTerms) {
      newErrors.terms = "Please agree to Terms & Conditions.";
    }

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      return; // Early return on validation errors
    }

    setIsSubmitting(true); // Start loading

    console.log("Submitting code:", invitationCode.trim());

    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${API_URL}/invitation/${invitationCode.trim()}`
      );
      console.log("API Response:", data); // Debug log for success case

      if (data.success) {
        toast.success("Invitation code verified! Redirecting...");
        Cookies.set("__INVITE-CODE", invitationCode.trim());
        Cookies.set("__INVITE-CODE-VERIFIED", "true");
        Cookies.set("__INVITE-CODE-TIMESTAMP", new Date().toISOString());
        localStorage.setItem(
          "userData",
          JSON.stringify({
            email: data.data.email,
            fullName: data.data.fullName,
            used: data.data.used,
            paymentVerified: data.data.paymentVerified,
            code: data.data.code,
          })
        );
        // Set cookies for the invitation code
        setIsLoading(false);
        router.push("/upload-submission");
      } else {
        // Handle non-success responses (e.g., custom error in data)
        toast.error(data.message || "Invalid invitation code");
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error("API Error:", error); // Debug log for error case
      setIsLoading(false);

      if (error.response?.status === 404) {
        toast.error("Invitation code not found. Please try again.");
        setIsLoading(false);
      } else if (
        error.response?.status === 400 ||
        error.response?.status === 422
      ) {
        toast.error(
          error.response.data.message || "Invalid invitation code format"
        );
        setIsLoading(false);
      } else if (error.response?.status >= 500) {
        toast.error("Server error. Please try again later");
        setIsLoading(false);
      } else {
        toast.error("Network error. Check your connection and try again");
        setIsLoading(false);
      }
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  const handleInvitationCodeChange = (value: string) => {
    setInvitationCode(value);
    // Clear error when user starts typing
    if (errors.invitationCode) {
      setErrors((prev) => ({
        ...prev,
        invitationCode: "",
      }));
    }
  };

  const handleTermsChange = (checked: boolean) => {
    setAgreedToTerms(checked);
    // Clear error when user checks the box
    if (errors.terms) {
      setErrors((prev) => ({
        ...prev,
        terms: "",
      }));
    }
  };

  return (
    <ContentWrapper>
      <div className="w-full max-w-3xl mx-auto space-y-12 border border-gray-700 rounded-lg p-8 md:p-12 bg-[#1a1a1a]">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-white md:text-2xl lg:text-3xl font-bold text-xl tracking-wide">
            INVITATION CODE - ENTER YOUR CODE TO PROCEED
          </h1>
        </div>

        {/* Invitation Code Form */}
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-white text-lg block">
              Invitation Code<span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              placeholder="Enter Your Invitation Code"
              value={invitationCode}
              onChange={(e) => handleInvitationCodeChange(e.target.value)}
              className="w-full h-12 bg-transparent border border-gray-600 text-white placeholder:text-gray-500 rounded-lg px-4"
            />
            {errors.invitationCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.invitationCode}
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) =>
                  handleTermsChange(checked as boolean)
                }
                className="border-gray-600 data-[state=checked]:bg-white data-[state=checked]:text-black"
              />
              <label
                htmlFor="terms"
                className="text-white text-sm cursor-pointer "
              >
                I agree to{" "}
                <Link
                  href="/terms-conditions"
                  className=" hover:underline underline-offset-2 hover:text-yellow-500"
                >
                  Terms & Conditions.
                </Link>
                <span className="text-red-500">*</span>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              onClick={handleSubmit}
              className="max-w-sm w-full h-12 font-bold text-black"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>SUBMITTING...</span>
                </div>
              ) : (
                "SUBMIT INVITE CODE"
              )}
            </Button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center"></div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center pt-8 px-4 max-w-4xl mx-auto">
          <h2 className="text-white text-xl md:text-2xl font-bold tracking-wide text-center mb-6">
            CLICK HERE TO ENTER CUT TO BLACK PRIZE
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-2xl">
            <Button
              onClick={() => router.push("/request-invitation")}
              className="w-full sm:w-auto px-8 h-12 bg-transparent border border-gray-600 text-white hover:bg-gray-800 hover:border-white transition-all rounded-lg text-base font-normal"
            >
              REQUEST INVITE
            </Button>

            <Button
              onClick={() => router.push("/lost-invitation")}
              className="w-full sm:w-auto px-8 h-12 bg-transparent border border-gray-600 text-white hover:bg-gray-800 hover:border-white transition-all rounded-lg text-base font-normal"
            >
              LOST INVITATION CODE
            </Button>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center pt-4">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            payment screen (if applicable) appears After code verification
            upload instructions will be sent after payment is verified.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
}
