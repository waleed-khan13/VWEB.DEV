"use client";

import { Suspense } from "react";
import ContactPageContent from "./ContactPageContent";

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading Contact Page...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
