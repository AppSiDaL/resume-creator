import DropdownComponent from "@/app/ui/create/DropdownComponent";
import PersonalInfoForm from "@/app/ui/create/forms/PersonalInfoForm";
import { IconBooks, IconUser } from "@tabler/icons-react";
export default function DetailsForm() {
  return (
    <div>
      <DropdownComponent
        icon={<IconUser size={24} />}
        title="Personal Information"
        description="Add your personal information"
      >
        <PersonalInfoForm />
      </DropdownComponent>
      <DropdownComponent
        icon={<IconBooks size={24} />}
        title="Education"
        description="Add your education information"
      >
        <PersonalInfoForm />
      </DropdownComponent>
    </div>
  );
}
