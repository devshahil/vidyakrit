import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vidyakrit | Hire Expert Software Developers',
  description: 'Get in touch with Vidyakrit to discuss your custom software, website development, or School ERP requirements. Book a free consultation today.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
