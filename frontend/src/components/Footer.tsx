export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white text-center p-4 mt-auto">
      <p>&copy; {currentYear} Javier Puerto. All Rights Reserved.</p>
    </footer>
  );
}