function Button({ label }) {
  return (
    <div className="border-2 border-primary text-primary w-max p-3 mt-8 rounded-full cursor-pointer">
      <a href="">{label}</a>
    </div>
  );
}

export default Button;
