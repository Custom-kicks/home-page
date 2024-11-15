import './globals.css';

export const metadata = {
  title: 'Custom Kicks - Shoes Beyond imagination 🚀',
  description: 'Customize your sneakers with unique designs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children} {/* Only renders content */}
      </body>
    </html>
  );
}