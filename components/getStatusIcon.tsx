import { Award, CheckCircle2, Loader2, XCircle } from "lucide-react";

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "Received":
      return <CheckCircle2 className="w-4 h-4 text-blue-500" />;
    case "In Review":
      return <Loader2 className="w-4 h-4 text-yellow-500 animate-spin" />;
    case "Judged":
      return <Award className="w-4 h-4 text-green-500" />;
    default:
      return <XCircle className="w-4 h-4 text-gray-500" />;
  }
};

export const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Received":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "In Review":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    case "Judged":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    default:
      return "bg-gray-500/10 text-gray-500 border-gray-500/20";
  }
};

export const getStatusClass = (status: boolean) => {
  switch (status) {
    case false:
      return "bg-green-500/10 text-green-400 border-green-500/50";
    case true:
      return "bg-gray-500/10 text-gray-400 border-gray-400/50";
    default:
      return "bg-gray-500/10 text-gray-500 border-gray-500/20";
  }
};
export const getStatusPaymentClass = (status: boolean) => {
  switch (status) {
    case true:
      return "bg-green-500/10 text-green-400 border-green-500/50";
    case false:
      return "bg-red-500/10 text-red-400 border-red-400/50";
    default:
      return "bg-gray-500/10 text-gray-500 border-gray-500/20";
  }
};
