import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub,FaChartLine
  
 } from "react-icons/fa";
 import { useNavigate,Link } from "react-router-dom";
const testimonials = [
  {
    text: "Using our platform, we’ve been able to simplify our workflow and track progress effortlessly. It’s an essential tool that keeps our team productive and aligned.",
    name: "Alex Carter",
    role: "Product Manager, InnovateX",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    text: "This tool has transformed how we schedule and analyze content. Engagement is up and our team saves hours every week!",
    name: "Sophia Martinez",
    role: "Marketing Lead, BrightTech",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    text: "Finally, a solution that makes collaboration easy. Our projects run smoother and the results speak for themselves.",
    name: "Daniel Kim",
    role: "Founder, StartHub",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    text: "The analytics dashboard gives us insights we never had before. Data-driven decisions are now effortless for our team.",
    name: "Emily Johnson",
    role: "Data Analyst, Growthify",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];
export default function Landingpage() {
    const navigate=useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
   const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-orange-300">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white/20 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
        <h1 className="text-2xl font-bold text-white">FlowMetric</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-white">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">Landings</li>
          <li className="hover:text-gray-200 cursor-pointer">Pages</li>
          <li className="hover:text-gray-200 cursor-pointer">Docs</li>
          <li className="hover:text-gray-200 cursor-pointer">Help</li>
          <li className="hover:text-gray-200 cursor-pointer" onClick={()=>{navigate("/contact")}}>Contact Us</li>
        </ul>

        {/* Desktop Login Button */}
        <button className="hidden md:block bg-white text-purple-600 px-5 py-2 rounded-lg shadow hover:bg-gray-100">
          Login
        </button>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-white/90 shadow-lg rounded-xl p-6 flex flex-col gap-4 font-medium text-gray-800 md:hidden z-40">
          <span className="hover:text-purple-600 cursor-pointer">Home</span>
          <span className="hover:text-purple-600 cursor-pointer">Landings</span>
          <span className="hover:text-purple-600 cursor-pointer">Pages</span>
          <span className="hover:text-purple-600 cursor-pointer">Docs</span>
          <span className="hover:text-purple-600 cursor-pointer">Help</span>
          <Link to="/contact" className="hover:text-purple-600 cursor-pointer">Contact Us</Link>
          <button className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow hover:bg-purple-700">
            Login
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between pt-28 md:pt-32 px-8 lg:px-20 gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            We help you <br /> grow your business <br />
            <span className="text-yellow-200">faster</span>
          </h2>
          <p className="mt-4 text-white/90">
            FlowMetric is the analytics platform that helps you stay focused on goals, track engagement, and scale your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow hover:bg-gray-100">
              See how it works
            </button>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white/20">
              Get a free demo
            </button>
          </div>
        </div>

        {/* Right Content (Dashboard Mockup) */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="bg-white shadow-2xl rounded-2xl p-6 w-[360px] md:w-[420px]">
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            {/* Bar Chart Mockup */}
            <div className="grid grid-cols-6 gap-2 h-40 items-end">
              <div className="bg-purple-400 rounded-md h-10"></div>
              <div className="bg-purple-400 rounded-md h-16"></div>
              <div className="bg-purple-400 rounded-md h-24"></div>
              <div className="bg-pink-400 rounded-md h-32"></div>
              <div className="bg-orange-400 rounded-md h-20"></div>
              <div className="bg-yellow-400 rounded-md h-28"></div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute -top-6 -left-8 bg-white shadow-lg rounded-xl p-4 w-32">
            <p className="text-xs text-gray-500">20 Days</p>
            <p className="text-sm font-semibold">Likes ↑ 10%</p>
          </div>

          <div className="absolute -top-10 right-0 bg-white shadow-lg rounded-xl p-4 w-36">
            <p className="text-xs text-gray-500">Ads Statuses</p>
            <div className="flex flex-wrap gap-1 mt-2">
              <span className="px-2 py-0.5 text-xs bg-green-100 text-green-600 rounded-md">Active</span>
              <span className="px-2 py-0.5 text-xs bg-yellow-100 text-yellow-600 rounded-md">Pending</span>
              <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-md">Inactive</span>
            </div>
          </div>

          <div className="absolute bottom-6 -right-8 bg-white shadow-lg rounded-xl p-4 w-28 flex flex-col items-center">
            <span className="text-2xl">👍</span>
            <p className="text-xs text-gray-500">Total Likes</p>
            <p className="font-bold text-purple-600">398K</p>
          </div>
        </div>
      </section>
      {/* Trusted By Section */}
<section className="mt-20 px-6 md:px-20">
  <div className="flex flex-wrap justify-center items-center gap-10 border-2 border-purple-500 py-6 rounded-xl bg-white-50 shadow-lg">
    <span className="text-gray-800 font-semibold text-xl">Slack</span>
    <span className="text-gray-800 font-semibold text-xl">Netflix</span>
    <span className="text-gray-800 font-semibold text-xl">Google</span>
    <span className="text-gray-800 font-semibold text-xl">Airbnb</span>
    <span className="text-gray-800 font-semibold text-xl">Uber</span>
  </div>
</section>

{/* Schedule Section */}
<section className="mt-20 px-7 md:px-20 flex flex-col md:flex-row items-center gap-12">
  {/* Left Text */}
  <div className="flex-1">
    <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
      Plan Your Posts <br /> Anytime, Anywhere
    </h2>
    <p className="mt-4 text-gray-700">
      Automate your content publishing and reach your audience at the perfect time. Enjoy features that make scheduling effortless:
    </p>

    <ul className="mt-4 space-y-2 text-gray-700">
      <li className="flex items-center gap-2">
        <span className="text-purple-500">✔</span> Optimal Posting Time
      </li>
      <li className="flex items-center gap-2">
        <span className="text-purple-500">✔</span> Location Targeting
      </li>
      <li className="flex items-center gap-2">
        <span className="text-purple-500">✔</span> Tag Relevant Users
      </li>
      <li className="flex items-center gap-2">
        <span className="text-purple-500">✔</span> Maximize Engagement
      </li>
    </ul>

    <a
      href="#"
      className="inline-block mt-6 text-purple-600 font-semibold hover:underline"
    >
      Discover scheduled posting →
    </a>
  </div>

  {/* Right Image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/computer.jpg"
      alt="Laptop Schedule"
      className="w-[90%] md:w-[70%] drop-shadow-2xl"
    />
  </div>
</section>
{/* Hashtag Performance Section */}
<section className="bg-white py-20 px-6 md:px-20">
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
      Track any hashtag(s) Performance
    </h2>
    <p className="mt-4 text-gray-500">
      Don’t waste time on manual searches. Let automation handle it for you.
      Simplify workflows, reduce errors, and save time.
    </p>
  </div>

  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {/* Hashtag Growth */}
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start gap-4
      transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-rotate-1 cursor-pointer">
      <div className="bg-red-400 p-3 rounded-lg text-white">
        {/* Example: Using FaHashtag from react-icons/fa */}
        <span className="w-6 h-6 flex items-center justify-center">
          <FaChartLine />
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900">Hashtag Growth</h3>
      <p className="text-gray-500 text-sm">
        Follow a hashtag growth in total posts, videos, and images.
      </p>
    </div>

    {/* Influencers by Hashtag */}
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start gap-4
      transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:rotate-1 cursor-pointer">
      <div className="bg-blue-400 p-3 rounded-lg text-white">
        <FaLinkedinIn className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">Influencers by Hashtag</h3>
      <p className="text-gray-500 text-sm">
        Identify the most influential people posting with your hashtag.
      </p>
    </div>

    {/* Most Influential Post */}
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-start gap-4
      transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:-rotate-1 cursor-pointer">
      <div className="bg-yellow-400 p-3 rounded-lg text-white">
        <FaInstagram className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">Most Influential Post</h3>
      <p className="text-gray-500 text-sm">
        See the most influential posts on hashtags you are following.
      </p>
    </div>

    
    {/* Navigation Dots + Arrows (static for now) */}
    <div className="flex items-center justify-between mt-6">
      <button className="text-blue-600 hover:text-blue-800">←</button>
      <div className="flex gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>
      <button className="text-blue-600 hover:text-blue-800">→</button>
    </div>
  </div>
</section>
 <section className="bg-blue-50 py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
      {/* Left Side */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Empowering the growth of <br /> 200+ startups & enterprises worldwide.
        </h2>
        <p className="mt-4 text-gray-600">
          From small businesses to global brands, we help teams scale with ease
          and confidence.
        </p>
      </div>

      {/* Right Side (Carousel) */}
      <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg relative">
        {/* Stars */}
        <div className="flex items-center text-yellow-400 mb-4">★★★★★</div>

        {/* Quote */}
        <p className="text-gray-600 italic">
          “{testimonials[currentIndex].text}”
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 mt-6">
          <img
            src={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-gray-900">
              {testimonials[currentIndex].name}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="text-blue-600 hover:text-blue-800"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="text-blue-600 hover:text-blue-800"
          >
            →
          </button>
        </div>
      </div>
    </section>
    <section className="relative bg-gradient-to-r from-black via-sky-400 to-sky-400 py-14 px-8 md:px-20 shadow-2xl overflow-hidden">
  {/* Decorative circles */}
  <div className="absolute right-0 top-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute left-0 bottom-0 w-56 h-56 bg-black/10 rounded-full blur-2xl"></div>

  <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Left Content */}
    <div className="text-white max-w-lg">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Boost your brand presence <br /> on social media 🚀
      </h2>
      <p className="mt-3 text-white/90">
        Join 1500+ happy customers growing their audience and engagement with us.
      </p>

      {/* Avatars */}
      <div className="flex items-center mt-5">
        <div className="flex -space-x-3">
          <img src="https://i.pravatar.cc/100?img=5" alt="user1" className="w-10 h-10 rounded-full border-2 border-white" />
          <img src="https://i.pravatar.cc/100?img=6" alt="user2" className="w-10 h-10 rounded-full border-2 border-white" />
          <img src="https://i.pravatar.cc/100?img=7" alt="user3" className="w-10 h-10 rounded-full border-2 border-white" />
          <img src="https://i.pravatar.cc/100?img=8" alt="user4" className="w-10 h-10 rounded-full border-2 border-white" />
        </div>
        <span className="ml-3 text-white/90">and many more</span>
      </div>
    </div>

    {/* Right CTA Button */}
    <div>
      <a
        href="#"
        className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
      >
        Get Your Free Trial
      </a>
    </div>
  </div>
</section>
   <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-16 pb-10 relative overflow-hidden">
      {/* Decorative gradient circle */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-2xl font-bold">FlowMetric<span className="text-purple-500">.</span></h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Build a modern and creative website with crealand.
          </p>

          {/* Social icons */}
          <div className="flex space-x-3 mt-5">
            <a href="#" className="p-3 bg-gray-700/40 rounded-full hover:bg-purple-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-gray-700/40 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-gray-700/40 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 bg-gray-700/40 rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-3 bg-gray-700/40 rounded-full hover:bg-gray-500 transition">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Landingpage</a></li>
            <li><a href="#" className="hover:text-white transition">Features</a></li>
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">Referral Program</a></li>
            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">Design</a></li>
            <li><a href="#" className="hover:text-white transition">Themes</a></li>
            <li><a href="#" className="hover:text-white transition">Illustrations</a></li>
            <li><a href="#" className="hover:text-white transition">UI Kit</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700/40 pt-6 text-center text-gray-400 text-sm relative z-10">
        <p>
          Copyright © {new Date().getFullYear()} <span className="text-purple-400 font-semibold">FlowMetric</span>. 
          Crafted with ❤️ by <span className="text-white font-medium">FlowMetric</span>.
        </p>
      </div>
    </footer>

    </div>
  );
}
