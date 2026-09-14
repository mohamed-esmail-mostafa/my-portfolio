import { redirect } from 'next/navigation';

// The root path is handled by proxy.ts (locale routing).
// This redirect is a build-time fallback for static prerendering.
export default function RootPage() {
  redirect('/en');
}
