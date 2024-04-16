function Features() {
	return (
		<section>
			<div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
				<div className="text-center">
					<h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl text-balance">
						Building one pagers together
						<span className="text-gray-600">wherever and anywhere</span>
					</h1>

					<p className="w-1/2 mx-auto mt-4 text-base font-medium text-gray-500 text-balance">
						The fastest method for working together on staging and temporary
						environments.
					</p>

					<div className="grid gap-2 mt-12 text-center md:grid-cols-3">
						<div>
							<div className="p-2 overflow-hidden border rounded-3xl">
								<img
									src="rectangle.svg"
									alt="#_"
									className="w-full h-full mx-auto rounded-2xl"
								/>
							</div>
							<div className="mt-4">
								<p className="font-medium text-gray-900">
									No warranty disclaimer
								</p>
								<p className="mt-2 text-sm text-gray-500">
									The license comes with no warranties. The licensor provides
									the work &ldquo;as is,&rdquo; and users must use it at their
									own risk.
								</p>
							</div>
						</div>
						<div>
							<div className="p-2 overflow-hidden border rounded-3xl">
								<img
									src="rectangle.svg"
									alt="#_"
									className="w-full h-full mx-auto rounded-2xl"
								/>
							</div>
							<div className="px-8 mt-4">
								<p className="font-medium text-gray-900">
									Modification Freedom
								</p>
								<p className="mt-2 text-sm text-gray-500">
									You can adapt, remix, transform, and build upon the licensed
									work.
								</p>
							</div>
						</div>
						<div>
							<div className="p-2 overflow-hidden border rounded-3xl">
								<img
									src="rectangle.svg"
									alt="#_"
									className="w-full h-full mx-auto rounded-2xl"
								/>
							</div>
							<div className="px-8 mt-4">
								<p className="font-medium text-gray-900">
									Commercial use allowed
								</p>
								<p className="mt-2 text-sm text-gray-500">
									You are allowed to use the licensed work for both
									non-commercial and commercial purposes.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
