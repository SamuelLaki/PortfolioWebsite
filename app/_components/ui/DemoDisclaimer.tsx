import { AlertCircle } from "lucide-react";

const DemoDisclaimer = () => {
  return (
    <div className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 mb-4">
      <AlertCircle className="size-4 text-red-600 dark:text-red-400 flex-shrink-0" />
      <p className="text-sm text-red-700 dark:text-red-300">
        <span className="font-medium">Demo temporarily unavailable:</span> Live demos are currently down for maintenance.
      </p>
    </div>
  );
};

export default DemoDisclaimer; 