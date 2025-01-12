import { StateProvider } from "@/app/StateProvider";
import DetailsForm from "@/app/ui/create/DetailsForm";
import Resume from "@/app/ui/create/Resume";

export default function Page() {
  return (
    <StateProvider>
      <div className="flex gap-4">
        <div className="w-1/5">
          <DetailsForm />
        </div>
        <div className="w-4/5">
          <Resume />
        </div>
      </div>
    </StateProvider>
  );
}