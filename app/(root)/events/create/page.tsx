// app/events/create/page.tsx
import EventForm from "@/components/shared/EventForm";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const CreateEvent = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={user.id} />
      </div>
    </>
  );
};

export default CreateEvent;
