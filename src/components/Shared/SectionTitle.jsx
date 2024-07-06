const SectionTitle = ({ heading, subheading }) => {
    return (
      <div className="text-center text-[#D99904] space-y-2 mb-4">
        <p>
          <small>---{subheading}---</small>
        </p>
        <p className="border-2 w-2/6 mx-auto "></p>
        <h2 className="text-4xl font-normal text-[#151515] my-4">{heading}</h2>
        <p className="border-2 w-2/6 mx-auto "></p>
      </div>
    );
  };
  
  export default SectionTitle;
  