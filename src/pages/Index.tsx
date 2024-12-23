import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
        {/* Header */}
        <tbody>
          <tr>
            <td>
              <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                <tbody>
                  <tr className="sm:flex-row">
                    <td className="p-4 block sm:table-cell">
                      <img src="/lovable-uploads/7d33b251-5da3-4129-b72f-dbbaa244d846.png" alt="Logo" className="h-8 mx-auto sm:mx-0" />
                    </td>
                    <td align="center" className="p-4 block sm:table-cell sm:text-right">
                      <Button variant="outline" className="bg-[#FF6B00] text-white border-none hover:bg-[#FF6B00]/90 w-full sm:w-auto">
                        Contact Us
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Hero Section */}
          <tr>
            <td>
              <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                <tbody>
                  <tr className="flex flex-col sm:table-row">
                    <td className="bg-[#FF6B00] p-6 sm:p-12 w-full sm:w-1/2 text-center sm:text-left">
                      <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
                        SELL YOUR CAR<br />
                        FROM YOUR<br />
                        HOME!
                      </h1>
                      <Button className="bg-black text-white hover:bg-black/90 mt-4 w-full sm:w-auto">
                        GET YOUR OFFER
                      </Button>
                    </td>
                    <td className="bg-black w-full sm:w-1/2">
                      <img 
                        src="/lovable-uploads/7d33b251-5da3-4129-b72f-dbbaa244d846.png" 
                        alt="Car app" 
                        className="w-full h-48 sm:h-full object-cover"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Welcome Text */}
          <tr>
            <td className="p-6 sm:p-12 text-center sm:text-left">
              <h2 className="text-2xl mb-4">Hey ___,</h2>
              <p className="text-gray-600 max-w-2xl mx-auto sm:mx-0">
                If you're looking for an easy and safe way to sell your car, we are here 
                for you. We come to you, pay you on the spot, and take care of all DMV 
                paperwork. Pick up is also included.
              </p>
              <p className="text-gray-600 mt-4">
                Call/text us at (714) 699-9999 or click the button below to get started
              </p>
              <Button className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90 mt-6 w-full sm:w-auto">
                BEAT MY OFFER
              </Button>
            </td>
          </tr>

          {/* Services Section */}
          <tr>
            <td className="p-6 sm:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                OUR <span className="text-[#FF6B00]">SERVICES</span>
              </h2>
              <table width="100%" cellPadding={8} cellSpacing={0} border={0}>
                <tbody>
                  <tr className="flex flex-col sm:table-row">
                    {[
                      { title: "Book Valuation Appraisal", img: "/placeholder.svg" },
                      { title: "Apply for New Car", img: "/placeholder.svg" },
                      { title: "Sell My Car", img: "/placeholder.svg" },
                      { title: "Get an Offer", img: "/placeholder.svg" }
                    ].map((service, index) => (
                      <td key={index} className="w-full sm:w-1/4 p-2 block sm:table-cell">
                        <div className="bg-[#FF6B00] p-4 rounded-lg mb-4 sm:mb-0">
                          <img src={service.img} alt={service.title} className="w-full h-48 object-cover rounded mb-4" />
                          <h3 className="text-white font-bold mb-2">{service.title}</h3>
                          <Button variant="secondary" size="sm" className="w-full">LEARN MORE</Button>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <div className="text-center mt-8">
                <Button className="bg-[#FF6B00] text-white hover:bg-[#FF6B00]/90 w-full sm:w-auto">
                  SEARCH ALL SERVICES
                </Button>
              </div>
            </td>
          </tr>

          {/* Testimonials */}
          <tr>
            <td className="bg-[#FF6B00] p-6 sm:p-12 text-center text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                What our customers are<br />
                saying about us
              </h2>
              <div className="bg-white text-black p-6 sm:p-8 rounded-lg max-w-2xl mx-auto">
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
              <Button className="bg-black text-white hover:bg-black/90 mt-8 w-full sm:w-auto">
                GET YOUR OFFER
              </Button>
            </td>
          </tr>

          {/* Chat Section */}
          <tr>
            <td className="p-6 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8">CHAT WITH US</h2>
              <div className="text-[#FF6B00] text-4xl sm:text-6xl mb-8">💬</div>
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td className="bg-black text-white p-4 sm:p-8">
              <table width="100%" cellPadding={4} cellSpacing={0} border={0}>
                <tbody>
                  <tr className="flex flex-col sm:table-row">
                    <td className="text-center sm:text-left">© 2024 CARTRACKERS</td>
                    <td className="text-center sm:text-right">All Rights Reserved</td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="text-sm text-gray-400 text-center sm:text-left">
                      Hours: Mon-Fri 8AM - 8PM · Sat 8AM - 6PM · Sun 9AM - 5PM
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div className="flex flex-col sm:flex-row justify-between gap-4 text-center sm:text-left">
                        <span>Privacy Policy</span>
                        <span>Terms of Services</span>
                        <span>Contact Us</span>
                        <span>About Us</span>
                        <span>Services</span>
                        <span>Our Office</span>
                        <span>Who We Are</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;