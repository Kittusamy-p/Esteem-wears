export default function Footer() {
  return (
    <footer className="mt-10 border-t p-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} Esteem Innerwears. All rights reserved.
      </p>

      <p className="mt-2">
        Made by <span className="font-medium">Web Dude</span>, a product of{" "}
        <a
          href="https://neohive.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Neohive Technologies
        </a>
      </p>
    </footer>
  );
}
