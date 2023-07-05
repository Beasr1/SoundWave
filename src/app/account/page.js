import Header from "@/components/Header";
import SubscriptionContent from "./components/SubscriptionContent";

const Account = () => {
  return (
    <div className="bg-primary rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Account Settings
          </h1>
        </div>
      </Header>
      <SubscriptionContent />
    </div>
  );
};

export default Account;
