import { Suspense } from "react";
import GlassCard from "@/components/ui/GlassCard";
import ConfirmContent from "./ConfirmContent";

export default function ConfirmerPage() {
  return (
    <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <Suspense
          fallback={
            <GlassCard>
              <p className="text-sm text-muted font-mono">Chargement...</p>
            </GlassCard>
          }
        >
          <ConfirmContent />
        </Suspense>
      </div>
    </div>
  );
}
