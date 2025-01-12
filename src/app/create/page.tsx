import { StateProvider } from "@/app/StateProvider";
import DeatilsForm from "@/app/ui/create/DetailsForm";
import Resume from "@/app/ui/create/Resume";
import { getUsers } from "@/app/lib/data";

const getServerSideProps = async () => {
  const data = await getUsers();
  return {
    initialState: {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      phone: data.phone || "",
      address: data.address || "",
      title: data.title || "",
    },
  };
};

export default async function Page() {
  try {
    const repo = await getServerSideProps();
    return (
      <StateProvider initialState={repo.initialState}>
        <div className="flex gap-4">
          <div className="w-1/5">
            <DeatilsForm />
          </div>
          <div className="w-4/5">
            <Resume />
          </div>
        </div>
      </StateProvider>
    );
  } catch (error) {
    return <div>Error fetching: {JSON.stringify(error)}</div>;
  }
}
