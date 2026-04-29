
export default function Navbar() {

  return (
  <nav className="navbar">
  <div className="container">

    <div className="logo">
      <img 
      src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
      alt="Accredian Logo"/>
    </div>

    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#Stats">Stats</a></li>
      <li><a href="#Clients">Clients</a></li>
      <li><a href="#Accred">Accredian Edge</a></li>
      <li><a href="#Cat">CAT</a></li>
      <li><a href="#How">How It Works</a></li>
      <li><a href="#Faq">FAQs</a></li>
      <li><a href="#Test">Testimonials</a></li>
    </ul>

  </div>
</nav>

  );
}