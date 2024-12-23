import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <table width="100%" cellPadding="0" cellSpacing="0" border="0">
        {/* Header */}
        <tr>
          <td>
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <td className="p-4">
                  <img src="/lovable-uploads/7d33b251-5da3-4129-b72f-dbbaa244d846.png" alt="Logo" className="h-8" />
                </td>
                <td align="right" className="p-4">
                  <Button variant="outline" className="bg-[#FF6B00] text-white border-none hover:bg-[#FF6B00]/90">
                    Contact Us
                  </Button>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Hero Section */}
        <tr>
          <td>
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <td width="50%" className="bg-[#FF6B00] p-12">
                  <h1 className="text-5xl font-bold text-white mb-4">
                    SELL YOUR CAR<br />
                    FROM YOUR<br />
                    HOME!
                  </h1>
                  <Button className="bg-black text-white hover:bg-black/90 mt-4">
                    GET YOUR OFFER
                  </Button>
                </td>
                <td width="50%" className="bg-black">
                  <img 
                    src="/lovable-uploads/7d33b251-5da3-4129-b72f-dbbaa244d846.png" 
                    alt="Car app" 
                    className="w-full h-full object-cover"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/* Welcome Text */}
        <tr>
          <td className="p-12">
            <h2 className="text-2xl mb-4">Hey ___,</h2>
            <p className="text-gray-600 max-w-2xl">
              If you're looking for an easy and safe way to sell your car, we are here 
              for you. We come to you, pay you on the spot, and take care of all DMV 
              paperwork. Pick up is also included.
            </p>
            <p className="text-gray-600 mt-4">
              Call/text us at (714) 699-9999 or click the button below to get started
            </p>
            <Button className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90 mt-6">
              BEAT MY OFFER
            </Button>
          </td>
        </tr>

        {/* Services Section */}
        <tr>
          <td className="p-12">
            <h2 className="text-3xl font-bold mb-8">
              OUR <span className="text-[#FF6B00]">SERVICES</span>
            </h2>
            <table width="100%" cellPadding="8" cellSpacing="0" border="0">
              <tr>
                <td width="25%" className="text-center">
                  <div className="bg-[#FF6B00] p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Service 1" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-white font-bold mb-2">Book Valuation Appraisal</h3>
                    <Button variant="secondary" size="sm">LEARN MORE</Button>
                  </div>
                </td>
                <td width="25%" className="text-center">
                  <div className="bg-[#FF6B00] p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Service 2" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-white font-bold mb-2">Apply for New Car</h3>
                    <Button variant="secondary" size="sm">LEARN MORE</Button>
                  </div>
                </td>
                <td width="25%" className="text-center">
                  <div className="bg-[#FF6B00] p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Service 3" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-white font-bold mb-2">Sell My Car</h3>
                    <Button variant="secondary" size="sm">LEARN MORE</Button>
                  </div>
                </td>
                <td width="25%" className="text-center">
                  <div className="bg-[#FF6B00] p-4 rounded-lg">
                    <img src="/placeholder.svg" alt="Service 4" className="w-full h-48 object-cover rounded mb-4" />
                    <h3 className="text-white font-bold mb-2">Get an Offer</h3>
                    <Button variant="secondary" size="sm">LEARN MORE</Button>
                  </div>
                </td>
              </tr>
            </table>
            <div className="text-center mt-8">
              <Button className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90">
                SEARCH ALL SERVICES
              </Button>
            </div>
          </td>
        </tr>

        {/* Testimonials */}
        <tr>
          <td className="bg-[#FF6B00] p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-8">
              What our customers are<br />
              saying about us
            </h2>
            <div className="bg-white text-black p-8 rounded-lg max-w-2xl mx-auto">
              <div className="text-[#FF6B00] text-2xl mb-4">★★★★★</div>
              <p className="mb-4">
                Car Trackers came through -- better than the dealership buyout. The process 
                was smooth and my car was picked up the following day. And the best part... He 
                found me a new car the same week! For all my future car needs, I definitely plan 
                to use Car Trackers again.
              </p>
              <p className="font-bold">Jane L.</p>
              <p className="text-sm text-gray-600">Venice Beach, CA - July 6, 2024</p>
            </div>
            <Button className="bg-black text-white hover:bg-black/90 mt-8">
              GET YOUR OFFER
            </Button>
          </td>
        </tr>

        {/* Chat Section */}
        <tr>
          <td className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-8">CHAT WITH US</h2>
            <div className="text-[#FF6B00] text-6xl mb-8">💬</div>
          </td>
        </tr>

        {/* Footer */}
        <tr>
          <td className="bg-black text-white p-8">
            <table width="100%" cellPadding="4" cellSpacing="0" border="0">
              <tr>
                <td>© 2024 CARTRACKERS</td>
                <td align="right">All Rights Reserved</td>
              </tr>
              <tr>
                <td colSpan={2} className="text-sm text-gray-400">
                  Hours: Mon-Fri 8AM - 8PM · Sat 8AM - 6PM · Sun 9AM - 5PM
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <table width="100%" cellPadding="4" cellSpacing="0" border="0">
                    <tr>
                      <td>Privacy Policy</td>
                      <td>Terms of Services</td>
                      <td>Contact Us</td>
                      <td>About Us</td>
                      <td>Services</td>
                      <td>Our Office</td>
                      <td>Who We Are</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Index;