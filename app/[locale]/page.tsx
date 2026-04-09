import DashboardPM from "@/components/ui/DashboardPM";
import NewsletterForm from "@/components/ui/NewsletterForm";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const tSections = await getTranslations("sections");
  const tNewsletter = await getTranslations("newsletter");

  return (
    <>
      <DashboardPM />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-12">
        <section className="max-w-md mx-auto text-center mt-8">
          <h2 className="text-lg font-bold text-foreground mb-2">
            {tSections("newsletter")}
          </h2>
          <p className="text-xs text-muted mb-4">
            {tNewsletter("description")}
          </p>
          <NewsletterForm />
        </section>
      </div>
    </>
  );
}
