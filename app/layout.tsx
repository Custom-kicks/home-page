import './globals.css';
import Navbar from './Navbar/Navbar';

export const metadata = {
  title: 'Custom Kicks',
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
        <Navbar/>
        {children}
      </body>
    </html>
  );
}