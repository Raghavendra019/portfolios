export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md fixed top-0 w-full z-10">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  )
}
