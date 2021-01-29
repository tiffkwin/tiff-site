export default function Hero() {
  const styling = {
    backgroundAttachment: 'fixed',
    backgroundPosition:'center',
    backgroundImage: 'url(\'/california-water.jpg\')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <section className="w-screen h-screen" style={styling}>
      <div className="flex items-center w-full h-full text-center">
        <div className="flex flex-col w-full items-center">
            <p className="bg-black py-2 px-6 text-2xl text-white text-center tracking-widest">TIFFANY NGUYEN</p>
            </div>
      </div> 
    </section>
  );
}