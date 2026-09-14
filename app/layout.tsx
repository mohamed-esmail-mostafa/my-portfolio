// Root layout required by Next.js App Router.
// The real layout lives in app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
