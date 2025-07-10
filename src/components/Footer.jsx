export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm max-w-4xl">
        <p>© {new Date().getFullYear()} Shreerang Vaidya. All rights reserved.</p>
        <p className="mt-2">Built with Preact, Tailwind CSS, and ♥</p>
      </div>
    </footer>
  )
}
