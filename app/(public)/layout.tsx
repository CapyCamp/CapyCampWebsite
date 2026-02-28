import SiteHeader from "@/components/capycamp-header.no-ssr"
import SiteFooter from "@/components/capycamp-footer.no-ssr"

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen overflow-hidden pt-20">
      <div className="relative z-10">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </main>
  );
}
