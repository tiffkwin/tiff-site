import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function About() {
  const styling = {
      backgroundAttachment: 'fixed',
      backgroundPosition:'center',
      backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35) ), url(\'/california-water.jpg\')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // filter: 'grayscale(100%)'
  };

  return (
    <section className="w-screen h-screen bg-black" style={styling}>
      <div className="flex items-center w-full h-full">
        <div className="flex flex-col w-full items-center">
          <div className="w-2/3 rounded border border-white bg-black">
            <div className="rounded-t-sm h-6 border-b border-white flex flex-row py-1 px-2 items-center bg-white">
              <div className="rounded-full border-2 border-black h-3 w-3 mx-1 bg-black"></div>
              <div className="rounded-full border-2 border-black h-3 w-3 mr-1 bg-black"></div>
              <div className="rounded-full border-2 border-black h-3 w-3 mr-1 bg-black"></div>
            </div>
            <div className="flex flex-col w-full p-12">
              <div className="flex flex-row w-full text-center justify-center">
                <p className="text-xl text-white text-center tracking-wider">hi, i'm tiff</p>
                <div className="w-3 my-1 mx-2 bg-white animate-blink"></div>
              </div>
              <p className="text-white text-md tracking-wider mt-6">
                i'm a software engineer with experience in the healthcare industry who just really enjoys learning new things. my favorite way to learn is through hands-on experiences which means i spend a lot of my free time building things for fun!
              </p>
            </div>
          </div>
          <div className="flex flex-row w-2/3 items-center mt-4 justify-end">
            <button className="h-8 w-8 rounded-full bg-white mx-2 hover:bg-blue-50 hover:text-" onClick={() => window.open('https://github.com/tiffkwin')}>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </button>
            <button className="h-8 w-8 rounded-full bg-white mx-2 hover:bg-blue-50" onClick={() => window.open('https://www.linkedin.com/in/tiffany-k-nguyen/')}>
              <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </button>
            <button className="h-8 w-8 rounded-full bg-white mx-2 hover:bg-blue-50" onClick={() => window.open('https://twitter.com/tiffknguyen')}>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </button>
        </div>
        </div>
      </div> 
    </section>
  );
}