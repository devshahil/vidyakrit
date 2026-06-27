import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software & Web Development Portfolio',
  description: 'Explore Vidyakrit\'s portfolio of enterprise applications, premium websites, and custom software we have built for our clients.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
