function Hero() {
	return (
		<section className="py-24 bg-gray-50">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
					<div>
						<div className="max-w-xl mx-auto lg:mx-0">
							<h1 className="text-center text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance lg:text-left">
								AI Tools to create and edit images with text
							</h1>
							<p className="mt-4 text-base font-medium text-gray-500 text-center lg:text-left lg:max-w-sm">
								Generate images from prompts in seconds, edit photos, expand
								pictures, Enhance your images with ease. Type words get
								pictures, imagination is the only limit.
							</p>
							<div className="flex flex-col items-center justify-center lg:justify-start gap-2 mx-auto mt-8 md:flex-row">
								<a
									href="#features"
									className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
									aria-label="Primary action"
								>
									Start Creating
								</a>
								<button
									className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
									aria-label="Secondary action"
								>
									See Gallery
								</button>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
						<div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
							<img
								src="hero-images/image1.webp"
								alt="A old man"
								className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
							/>
							<img
								src="hero-images/image2.webp"
								alt="A dog"
								className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
							/>
							<img
								src="hero-images/image3.webp"
								alt="Gandhiji"
								className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
							/>
							<img
								src="hero-images/image4.webp"
								alt="Mandarin queen"
								className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
							/>
							<img
								src="hero-images/image5.webp"
								alt="Model"
								className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
							/>
							<img
								src="hero-images/image6.webp"
								alt="Anime"
								className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
