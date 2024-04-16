function Hero() {
	return (
		<section className="py-24 bg-gray-50">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
					<div>
						<div className="max-w-xl mx-auto lg:mx-0">
							<h1 className="text-center text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance lg:text-left">
								Building one pagers together, wherever and anywhere
							</h1>
							<p className="mt-4 text-base font-medium text-gray-500 text-center lg:text-left">
								The fastest method for working together
								<span className="md:block">
									on staging and temporary environments.
								</span>
							</p>
							<div className="flex flex-col items-center justify-center lg:justify-start gap-2 mx-auto mt-8 md:flex-row">
								<button
									className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 md:w-auto rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
									aria-label="Primary action"
								>
									Primary button
								</button>
								<button
									className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 md:w-auto rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
									aria-label="Secondary action"
								>
									Secondary button
								</button>
							</div>
						</div>
						<div className="flex flex-col gap-3 mt-10 lg:flex-row lg:gap-6">
							<a
								className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white rounded-full active:bg-tangaroa-800 active:text-tangaroa-300 bg-tangaroa-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tangaroa-900 focus:outline-none group hover:bg-tangaroa-700 hover:text-tangaroa-100 lg:w-auto"
								href="/overview"
							>
								Explora all pages
								<svg
									className="size-5 ml-3"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</a>
						</div>
					</div>
					<div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
						<div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
							<img
								src="https://pagedone.io/asset/uploads/1696238644.png"
								alt="Team tailwind section"
								className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
							/>
							<img
								src="https://pagedone.io/asset/uploads/1696238665.png"
								alt="Team tailwind section"
								className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
							/>
							<img
								src="https://pagedone.io/asset/uploads/1696238684.png"
								alt="Team tailwind section"
								className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
							/>
							<img
								src="https://pagedone.io/asset/uploads/1696238702.png"
								alt="Team tailwind section"
								className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
							/>
							<img
								src="https://pagedone.io/asset/uploads/1696238720.png"
								alt="Team tailwind section"
								className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
							/>
							<img
								src="https://pagedone.io/asset/uploads/1696238737.png"
								alt="Team tailwind section"
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
