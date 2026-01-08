import { useState } from "react"

const Navbar = ({ darkMode, toggleDarkMode}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    {name: 'Home', link: '#home'},
    {name: 'About', link: '#about'},
    {name: 'Contact', link: '#contact'},
  ]
  return (
    <div>
      Navbar
    </div> 
  )
}

export default Navbar
