// Root layout required by Next.js App Router.
// html/body/providers are set in app/[locale]/layout.tsx
// This shell is needed so Next.js has a valid root HTML document for the root segment.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
