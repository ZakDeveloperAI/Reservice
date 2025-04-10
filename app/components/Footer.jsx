function Footer() {
  return (
    <div className="bg-gray-100 py-4 text-center">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Reservice. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;