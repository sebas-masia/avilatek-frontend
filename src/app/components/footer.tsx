const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Product Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Solutions{" "}
                  <span className="text-xs text-purple-600 bg-purple-100 px-1 py-0.5 rounded">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Media kit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Help centre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Social</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  AngelList
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Get the app Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4">
              Get the app
            </h4>
            <div className="space-y-2">
              <a href="#" className="block">
                <img src="/icons/apple.svg" alt="App Store" className="w-32" />
              </a>
              <a href="#" className="block">
                <img
                  src="/images/GoogleBadge.png"
                  alt="Google Play"
                  className="w-32"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Untitled UI</span>
          </div>
          <p className="text-sm mt-4 md:mt-0">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
