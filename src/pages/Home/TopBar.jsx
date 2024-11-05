

const TopBar = () => {


  return (
    <div className="px-4 md:px-8 lg:px-16 text-center md:text-left ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight">
        <span className="text-purple-600">Documents </span>
        at Your <br className="hidden md:block" /> Fingertips.
        <br className="hidden md:block" /> Anytime, Anywhere
      </h1>
      
      <div className="text-sm sm:text-base md:text-lg lg:text-xl md:pt-6 mt-4 md:mt-6 ">
        <span className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 md:mb-4 text-purple-700 block">
          Say goodbye,
        </span>
        
        <p className="mt-2">
          To clutter and hello to seamless organization.
          <br className="hidden sm:block" />
          Our digital wallet keeps your important documents
          <br className="hidden sm:block" /> 
          safe, secure, and accessible anytime, anywhere.
        </p>
      </div>
    </div>
  );
};

export default TopBar;
