import { Github, Linkedin, Mail, Phone, Link, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollCaseStudies = (direction: 'left' | 'right') => {
    const container = document.getElementById('case-studies-container');
    if (container) {
      const scrollAmount = container.clientWidth;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      let newScroll;
      if (direction === 'right') {
        newScroll = currentScroll + scrollAmount;
        // If we're at or near the end, loop to start
        if (currentScroll >= maxScroll - 10) {
          newScroll = 0;
        }
      } else {
        newScroll = currentScroll - scrollAmount;
        // If we're at or near the start, loop to end
        if (currentScroll <= 10) {
          newScroll = maxScroll;
        }
      }

      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollPORs = (direction: 'left' | 'right') => {
    const container = document.getElementById('pors-container');
    if (container) {
      const scrollAmount = container.clientWidth;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      let newScroll;
      if (direction === 'right') {
        newScroll = currentScroll + scrollAmount;
        // If we're at or near the end, loop to start
        if (currentScroll >= maxScroll - 10) {
          newScroll = 0;
        }
      } else {
        newScroll = currentScroll - scrollAmount;
        // If we're at or near the start, loop to end
        if (currentScroll <= 10) {
          newScroll = maxScroll;
        }
      }

      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollExperience = (direction: 'left' | 'right') => {
    const container = document.getElementById('experience-container');
    if (container) {
      const scrollAmount = container.clientWidth;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      let newScroll;
      if (direction === 'right') {
        newScroll = currentScroll + scrollAmount;
        if (currentScroll >= maxScroll - 10) {
          newScroll = 0;
        }
      } else {
        newScroll = currentScroll - scrollAmount;
        if (currentScroll <= 10) {
          newScroll = maxScroll;
        }
      }

      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center py-4 gap-4">
            {[
              { label: 'About', id: 'about' },
              { label: 'Projects', id: 'projects' },
              { label: 'Experience', id: 'experience' },
              { label: 'PORs', id: 'pors' },
              { label: 'Contact', id: 'contact' },
              { label: 'Resume', id: 'resume', href: 'https://drive.google.com/file/d/1-OEHaSdhWn8Ew5XL4t9jreODToS0Vm60/view?usp=sharing' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => item.href ? window.open(item.href, '_blank') : scrollToSection(item.id)}
                className="px-6 py-2.5 bg-white border-2 border-blue-600/20 rounded-full shadow-sm 
                           hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600 
                           transition-all duration-300 font-medium text-gray-700
                           transform hover:-translate-y-0.5"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <header className="relative h-screen text-white">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/assets/images/background.png")', // Add your background image
              backgroundBlendMode: 'overlay'
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="container mx-auto px-6 h-full flex items-center relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
              <img
                src="/assets/images/tanmay.png"
                alt="Tanmay Singh"
                className="w-56 h-56 object-cover rounded-full border-4 border-white/50 shadow-2xl 
                           transform hover:scale-105 transition-transform duration-300
                           ring-4 ring-white/30 ring-offset-4 ring-offset-black/50"
              />
              <div className="text-center md:text-left max-w-2xl">
                <h1 className="text-6xl font-bold mb-6 drop-shadow-lg animate-fade-in">
                  Hi, I am <span className="text-white relative">
                    Tanmay
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-white/30 rounded-full"></span>
                  </span>
                </h1>
                <p className="text-2xl text-gray-100 leading-relaxed drop-shadow-lg font-medium">
                  A Final-year Undergrad from IIT Ropar with a deep interest in Product Management, 
                  Analytics, and Business Strategy.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="px-8 py-3 bg-white border-2 border-blue-600/20 rounded-full shadow-sm 
                              inline-block text-gray-700">
                About
              </span>
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 leading-relaxed">
              I am exploring the power of Product & Business Strategy and Data Analytics by continuously gaining knowledge and applying it to real-world projects. With hands-on experience in PRDs, SQL, Python, and data analytics, I have also developed strong expertise in market research, customer acquisition, and key performance metrics (KPIs).
              </p>
              <blockquote className="mt-8 text-xl italic text-gray-700">
                {/* "Always eager to learn and acquire new skills!" */}
              </blockquote>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-blue-50/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="px-8 py-3 bg-white border-2 border-blue-600/20 rounded-full shadow-sm 
                              inline-block text-gray-700">
                Projects
              </span>
            </h2>
            
            {/* Case Studies */}
            <div className="mb-20 relative">
              <h3 className="text-2xl font-semibold text-center mb-8 text-blue-600 relative">
                <span className="relative">
                  Case Studies
                </span>
              </h3>

              {/* Navigation Arrows */}
              <button 
                onClick={() => scrollCaseStudies('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10
                           bg-white/90 p-2 rounded-full shadow-lg hover:bg-blue-50 
                           transition-all duration-300 border border-blue-100
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>

              <button 
                onClick={() => scrollCaseStudies('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10
                           bg-white/90 p-2 rounded-full shadow-lg hover:bg-blue-50 
                           transition-all duration-300 border border-blue-100
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>

              {/* Scrollable Container */}
              <div className="relative overflow-hidden mx-8">
                <div 
                  id="case-studies-container"
                  className="flex gap-8 overflow-x-hidden scroll-smooth"
                  style={{ scrollSnapType: 'x mandatory' }}
                >
                  {/* Case Study 1 */}
                  <div className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] scroll-snap-align-start
                                bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl 
                                transition-all duration-300 flex flex-col transform hover:-translate-y-1">
                    <div className="relative">
                      <img
                        src="/assets/images/cs.jpg"
                        alt="Case Study 1"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Swiggy Product Improvement Challenge</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">Introduced Swiggy Swipe, Instashare, Group Ordering features.</p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <a href="https://www.notion.so/Swiggy-41f566d05cdb4f3aa8208b0278ab7d37" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          <Link className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Case Study 2 */}
                  <div className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] scroll-snap-align-start
                                bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl 
                                transition-all duration-300 flex flex-col transform hover:-translate-y-1">
                    <div className="relative">
                      <img
                        src="/assets/images/cs2.jpg"
                        alt="Case Study 2"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Improvement of order conversion rate on meesho</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">Reducing cart abandonment and improving order conversion for Meesho resellers.</p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <a href="https://drive.google.com/file/d/1v5yI1811pPNy7eCEy1c4UVIBCu3uBORt/view?usp=drive_link" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          <Link className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Case Study 3 */}
                  <div className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] scroll-snap-align-start
                                bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl 
                                transition-all duration-300 flex flex-col transform hover:-translate-y-1">
                    <div className="relative">
                      <img
                        src="/assets/images/cs3.png"
                        alt="Case Study 3"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">WhatsApp Payment Improvement</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">Increasing activation of WhatsApp by redifining its design.</p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <a href="https://drive.google.com/file/d/1wlP9T5rDMvLmnQ_SvE88FquCeVHgYtz0/view?usp=sharing" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          <Link className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Case Study 4 */}
                  <div className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] scroll-snap-align-start
                                bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl 
                                transition-all duration-300 flex flex-col transform hover:-translate-y-1">
                    <div className="relative">
                      <img
                        src="/assets/images/cs4.png"
                        alt="Case Study 4"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Enhancing LinkedIn with Innovative Monetization Features</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">Introducing new revenue streams to boost LinkedIn's profitability and user value.</p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <a href="https://drive.google.com/file/d/1CYkYk36eejMiOhEjkJZ1bVs7Uo8-zaJc/view?usp=sharing" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          <Link className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Case Study 5 */}
                  <div className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] scroll-snap-align-start
                                bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl 
                                transition-all duration-300 flex flex-col transform hover:-translate-y-1">
                    <div className="relative">
                      <img
                        src="/assets/images/cs5.png"
                        alt="Case Study 5"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">GTM Strategy for IBY in Japan</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">Crafting a market entry and growth strategy for IBY in Japan.</p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <a href="https://docs.google.com/presentation/d/1E0EBkFLu3ekBqGfgRS9r_GajhsOuEV_F/edit?usp=sharing&ouid=108006589505641960878&rtpof=true&sd=true" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          <Link className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Case Study 6 */}
                  <div className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] scroll-snap-align-start
                                bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl 
                                transition-all duration-300 flex flex-col transform hover:-translate-y-1">
                    <div className="relative">
                      <img
                        src="/assets/images/cs6.png"
                        alt="Case Study 6"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Enhancing Creator Monetization on Instagram</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">Developing new revenue opportunities to empower Instagram creators.</p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <a href="https://docs.google.com/presentation/d/1UvjTBvkgtJ0uyMyij83MAfLrDkmelrTU/edit?usp=sharing&ouid=108006589505641960878&rtpof=true&sd=true" 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          <Link className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Projects */}
            <div className="mb-20">
              <h3 className="text-2xl font-semibold text-center mb-8 text-blue-600">Analytics Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Loan Data Analytics & KPI Optimization</h3>
                    <h4 className="text-lg font-medium mb-2 text-blue-600">Tech Stacks: Python, SQL, Excel, Power BI</h4>
                    <p className="text-gray-600 mb-4">Analyzed a dataset of 38,000+ loan records using SQL and Excel to enhance key performance metrics and improve financial reporting data blending and table calculations to generate actionable insights like Loan Approval Rate, Default Rate, Prepayment Ratio.</p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <a href="https://drive.google.com/drive/folders/1WufsAP0cdclXKjf5XxvM8Df00yQkeSv4?usp=sharing" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      <Link className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">SuperStore Sales Data Analysis</h3>
                    <h4 className="text-lg font-medium mb-2 text-blue-600">Tech Stacks: Python, SQL, Power BI</h4>
                    <p className="text-gray-600 mb-4">Conducted data analysis on SuperStore sales data using SQL, Python (NumPy, Pandas), and Power BI to derive key business insights. Built interactive Power BI dashboards with dynamic filtering to visualize sales performance, customer segmentation, and regional trends, enabling data-driven decision-making.</p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <a href="your-analytics2-link-here" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      <Link className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Finance Project */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-blue-600">Finance Project</h3>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Time-Series Analysis and Forecasting of Log Returns Using ARMA/ARIMA Models</h3>
                    <p className="text-gray-600 mb-4">Conducted time-series analysis on log returns, applying statistical tests (ADF, PP, KPSS) to assess stationarity and selecting optimal ARMA/ARIMA models based on AIC values. Implemented forecasting techniques to predict financial trends, evaluating model performance through residual diagnostics and statistical significance.</p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <a href="https://drive.google.com/file/d/1rSxYLMTq9o5MjFHgQGnp2HWXpJLiudhO/view?usp=sharing" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                      <Link className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="px-8 py-3 bg-white border-2 border-blue-600/20 rounded-full shadow-sm 
                              inline-block text-gray-700">
                Experience
              </span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Navigation Arrows */}
              <button 
                onClick={() => scrollExperience('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10
                           bg-white/90 p-2 rounded-full shadow-lg hover:bg-blue-50 
                           transition-all duration-300 border border-blue-100
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>

              <button 
                onClick={() => scrollExperience('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10
                           bg-white/90 p-2 rounded-full shadow-lg hover:bg-blue-50 
                           transition-all duration-300 border border-blue-100
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>

              {/* Scrollable Container */}
              <div className="relative overflow-hidden mx-8">
                <div 
                  id="experience-container"
                  className="flex gap-8 overflow-x-hidden scroll-smooth"
                  style={{ scrollSnapType: 'x mandatory' }}
                >
                  {/* Experience Item 1 */}
                  <div className="flex-shrink-0 w-full scroll-snap-align-start">
                    <div className="relative pl-8 border-l-4 border-blue-600 hover:border-blue-700 transition-colors duration-300">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white
                                      ring-4 ring-blue-600/20 transform transition-transform duration-300
                                      hover:scale-110 hover:ring-blue-600/40" />
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <img 
                            src="/assets/images/vidyut.png" 
                            alt="VidyutTech Logo" 
                            className="w-12 h-12 object-contain rounded-lg"
                          />
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">VidyutTech Financial Services</h3>
                            <p className="text-blue-600 font-medium">Management Trainee: Product</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Created 10+ detailed PRDs to optimize inventory management workflows, improving operational efficiency and supporting
                          scalability for Vidyut's EV Resale business.</li>
                          <li>•  Optimized the in-house collection process with logic-based customer risk profiling, boosting efficiency by 15%; conducted
                          user testing with 30 customers, identifying 15 critical bugs and 20 enhancement opportunities.</li>
                          <li>• Designed and implemented data-driven dashboards using Metabase & SQL queries to track collection app metrics, enabling
                          real-time performance monitoring and decision-making; leveraged insights to optimize collection efficiency.</li>
                          <li>•  Built a robust communication framework using Exotel, Textlocal, and WhatsApp Business to manage EMI reminders,
                          unlimited plans, and vehicle immobilization notifications, enhancing customer engagement and driving operational efficiency.</li>
                          {/* <li>• Analyzed user feedback and metrics to identify opportunities for product improvement.</li> */}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Experience Item 2 */}
                  <div className="flex-shrink-0 w-full scroll-snap-align-start">
                    <div className="relative pl-8 border-l-4 border-blue-600 hover:border-blue-700 transition-colors duration-300">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white
                                      ring-4 ring-blue-600/20 transform transition-transform duration-300
                                      hover:scale-110 hover:ring-blue-600/40" />
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <img 
                            src="/assets/images/fiinlo.png" 
                            alt="Fiinlo Logo" 
                            className="w-12 h-12 object-contain rounded-lg"
                          />
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">Fiinlo</h3>
                            <p className="text-blue-600 font-medium">Founders Office</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Conducted market research on home loan products, analyzing 50+ banks & NBFCs for competitive insights</li>
                          <li>• Built data-driven Excel models for buy-versus-rent analysis, improving customer decision-making.</li>
                          <li>• Designed personalized prepayment strategies,collaborated with cross-functional teams to refine loan advisory solutions.</li>
                          {/* /* <li>• Created detailed product specifications and wireframes using Figma for upcoming features.</li> */}
                          {/* <li>• Analyzed user metrics and feedback to drive data-backed product decisions and improvements.</li> */}
                </ul>
                      </div>
                    </div>
              </div>

                  {/* Experience Item 3 */}
                  <div className="flex-shrink-0 w-full scroll-snap-align-start">
                    <div className="relative pl-8 border-l-4 border-blue-600 hover:border-blue-700 transition-colors duration-300">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white
                                      ring-4 ring-blue-600/20 transform transition-transform duration-300
                                      hover:scale-110 hover:ring-blue-600/40" />
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <img 
                            src="/assets/images/pmi.png" 
                            alt="PMI Logo" 
                            className="w-12 h-12 object-contain rounded-lg"
                          />
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">PMI</h3>
                            <p className="text-blue-600 font-medium">Product Management Intern</p>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                          <li>• Developed a common platform for Product role onboarding, streamlining recruitment processes.</li>
                          <li>• Conducted comprehensive market research and competitor analysis to identify market gaps.</li>
                          <li>• Spearheaded solution development by gathering feedback from 30+ HRs and candidates along with creating UI for the app.</li>
                          {/* <li>• Created high-fidelity prototypes using Figma, improving user experience by 50%.</li> */}
                          {/* <li>• Implemented agile methodologies to ensure iterative development and quick feedback loops.</li> */}
                </ul>
                      </div>
                    </div>
              </div>

                  {/* Experience Item 4 */}
                  <div className="flex-shrink-0 w-full scroll-snap-align-start">
                    <div className="relative pl-8 border-l-4 border-blue-600 hover:border-blue-700 transition-colors duration-300">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white
                                      ring-4 ring-blue-600/20 transform transition-transform duration-300
                                      hover:scale-110 hover:ring-blue-600/40" />
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <img 
                            src="/assets/images/uppturn.png" 
                            alt="Uppturn Logo" 
                            className="w-12 h-12 object-contain rounded-lg"
                          />
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">Uppturn</h3>
                            <p className="text-blue-600 font-medium">Business Development Intern (May 2021 - June 2021)</p>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                          <li>• Analyzed customer demographic and sales data, creating comprehensive Power BI dashboards.</li>
                          <li>• Built and maintained a database of 500+ qualified leads, improving conversion rates by 25%.</li>
                          <li>• Developed targeted marketing strategies based on customer segmentation analysis.</li>
                          <li>• Conducted competitive analysis to identify market opportunities and growth areas.</li>
                          {/* <li>• Collaborated with sales teams to optimize lead qualification and conversion processes.</li> */}
                </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Positions of Responsibility */}
        <section id="pors" className="py-20 bg-blue-50/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="px-8 py-3 bg-white border-2 border-blue-600/20 rounded-full shadow-sm 
                              inline-block text-gray-700">
                Positions of Responsibility
              </span>
            </h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Navigation Arrows */}
              <button 
                onClick={() => scrollPORs('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10
                           bg-white/90 p-2 rounded-full shadow-lg hover:bg-gray-50 
                           transition-all duration-300 border border-gray-200
                           focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button 
                onClick={() => scrollPORs('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10
                           bg-white/90 p-2 rounded-full shadow-lg hover:bg-gray-50 
                           transition-all duration-300 border border-gray-200
                           focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              {/* Scrollable Container */}
              <div className="relative overflow-hidden mx-8">
                <div 
                  id="pors-container"
                  className="flex gap-8 overflow-x-hidden scroll-smooth"
                  style={{ scrollSnapType: 'x mandatory' }}
                >
                  {/* POR 1 */}
                  <div className="flex-shrink-0 w-full scroll-snap-align-start
                                bg-white rounded-lg shadow-md p-6 hover:shadow-lg 
                                transition-all duration-300 border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Assistant Placement Coordinator, Placement Cell, IIT Ropar</h3>
                <ul className="space-y-2 text-gray-700">
                      <li>• Facilitated recruitment processes of 400+ students, from diverse backgrounds.</li>
                      <li>• Managed end-to-end placement activities, experts talks, ensuring seamless operations and engagement.</li>
                </ul>
              </div>

                  {/* POR 2 */}
                  <div className="flex-shrink-0 w-full scroll-snap-align-start
                                bg-white rounded-lg shadow-md p-6 hover:shadow-lg 
                                transition-all duration-300 border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Event Head, TechFest: Advitiya, IIT Ropar</h3>
                <ul className="space-y-2 text-gray-700">
                      <li>• Secured ₹1 lakh in sponsorships, boosting event funding and outreach.</li>
                      <li>• Managed logistics for 200+ attendees, ensuring seamless execution of Civil Engineering events.</li>
                </ul>
              </div>

                  {/* POR 3 */}
                  <div className="flex-shrink-0 w-full scroll-snap-align-start
                                bg-white rounded-lg shadow-md p-6 hover:shadow-lg 
                                transition-all duration-300 border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Core Team Member, ShARE & 180 Degrees Consulting, IIT Ropar</h3>
                <ul className="space-y-2 text-gray-700">
                      <li>• Led strategy projects delivering high-impact business solutions for startups and NGOs.</li>
                      <li>• Conducted market research & data analysis, driving insights for social and business impact.</li>
                </ul>
              </div>

                  {/* POR 4 */}
                  <div className="flex-shrink-0 w-full scroll-snap-align-start
                                bg-white rounded-lg shadow-md p-6 hover:shadow-lg 
                                transition-all duration-300 border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Coordinator, E-Cell, IIT Ropar</h3>
                <ul className="space-y-2 text-gray-700">
                      <li>• Organized startup events and mentorship sessions, fostering entrepreneurial growth on campus.</li>
                      <li>• Facilitated networking with investors and industry leaders like TBIF, Punjab Innovation mission, enabling startup opportunities for students.</li>
                </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="px-8 py-3 bg-white/10 border-2 border-white/20 rounded-full shadow-sm 
                              inline-block text-white">
                Contact
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="mailto:tanmay.945299@gmail.com" 
                 className="flex items-center gap-2 hover:text-blue-400 transition">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a href="tel:+917080320649" 
                 className="flex items-center gap-2 hover:text-blue-400 transition">
                <Phone className="w-5 h-5" />
                7080320649
              </a>
              <a href="https://www.linkedin.com/in/tanmay-singh-683997220" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center gap-2 hover:text-blue-400 transition">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="#" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center gap-2 hover:text-blue-400 transition">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

<style>
  {`
    #case-studies-container {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    #case-studies-container::-webkit-scrollbar {
      display: none;
    }
    .scroll-snap-align-start {
      scroll-snap-align: start;
    }
    #experience-container {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    #experience-container::-webkit-scrollbar {
      display: none;
    }
  `}
</style>