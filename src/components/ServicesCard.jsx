const ServicesCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex items-center  justify-center rounded-full bg-coral-red ">
        <img src={imgURL} alt={label} width={24} height={24} />

      </div>
      <h3 className="mt-3 text-3xl leading-normal font-bold font-palanquin">{label}</h3>
      <p className="mt-3 font-montserrat text-lg break-words leading-normal text-slate-gray ">{subtext}</p>
    </div>
  );
};

export default ServicesCard;
