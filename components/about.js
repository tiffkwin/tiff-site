export default function About() {
    return (
      <section className="w-screen h-screen bg-black">
        <div className="flex items-center w-full h-full">
            <div className="flex flex-col w-full items-center">
                <div className="w-2/3 rounded border border-white">
                    <div className="rounded-t h-6 border-b border-white flex flex-row py-1 px-2 items-center bg-white">
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
                            i'm a software engineer who just really likes to learn new things. my favorite way to learn is through hands-on experience which means i spend a lot of my free time building things for fun! if you're interested, check out my work on <a href="https://github.com/tiffkwin" className="underline hover:no-underline">github</a> :)
                        </p>
                    </div>
                </div>
            </div>
        </div> 
      </section>
    );
  }