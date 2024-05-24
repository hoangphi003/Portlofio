function ContactCart({ iconURL, value, className }) {
  return (
    <div
      className={`p-4 w-[22rem] rounded-sm max-sm:mt-10 lg:mr-2 lg:mb-20 lg:mt-10   ${
        className !== null ? "lg:last:absolute bottom-[-65px]" : "bg-amber-800"
      }`}
    >
      <ul className="flex ">
        <li className="pe-3">
          <img src={iconURL} alt="Mail" width={20} height={20} className="" />
        </li>
        <li className="text-primary">{value}</li>
      </ul>
    </div>
  );
}

export default ContactCart;
