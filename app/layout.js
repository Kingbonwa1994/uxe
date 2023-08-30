import Navbar from '@/components/NavBar'
import './globals.css'
import { Caudex } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Caudex({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: '1cliQ',
  description: 'Home && Business Services',
}

const RootLayout = ({ children }) => {
  return (
    <html className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
      <div className="flex-grow">
        <Navbar/>
        <main className="my-0 py-16">{children}</main>
      </div>
      <Footer />
    </html>
  );
};
export default RootLayout;