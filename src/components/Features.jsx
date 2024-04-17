import PropTypes from "prop-types";

const Card = ({ img, title, description }) => {
	return (
		<div>
			<div className="overflow-hidden rounded-3xl border p-2">
				<img src={img} alt="#_" className="mx-auto h-full w-full rounded-2xl" />
			</div>
			<div className="mt-4 flex flex-col justify-between px-4">
				<div>
					<p className="text-base text-gray-900">{title}</p>
					<p className="mt-2">{description}</p>
				</div>
				<div className="mt-8 flex">
					<a
						href="#_"
						className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none"
						aria-label="Read more about the topic"
					>
						<span>Read more</span>
						<svg
							aria-hidden="true"
							focusable="false"
							className="ml-2 size-4"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

const details = [
	{
		img: "imageGenerate.webp",
		title: "Generate Image",
		description:
			"The licensor provides the work 'as is,' and users must use it at their own risk.",
	},
	{
		img: "Replace.jpg",
		title: "Edit Image",
		description:
			"The licensor provides the work 'as is,' and users must use it at their own risk.",
	},
	{
		img: "upscaler.jpg",
		title: "Upscale Image",
		description:
			"The licensor provides the work 'as is,' and users must use it at their own risk.",
	},
	{
		img: "inpainting.jpg",
		title: "Image Inpainting",
		description:
			"The licensor provides the work 'as is,' and users must use it at their own risk.",
	},
	{
		img: "outpainting.jpg",
		title: "Image Outpainting",
		description:
			"The licensor provides the work 'as is,' and users must use it at their own risk.",
	},
	{
		img: "remove-background.jpg",
		title: "Remove Background",
		description:
			"The licensor provides the work 'as is,' and users must use it at their own risk.",
	},
	{
		img: "restore.webp",
		title: "Restore Images",
		description:
			"The licensor provides the work 'as is,' and users must use it at their own risk.",
	},
	{
		img: "anime.jpg",
		title: "Image to Anime",
		description:
			"The licensor provides the work 'as is,' and users must use it at their own risk.",
	}
];
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

					<div className="grid grid-cols-2 mt-12 text-sm font-medium text-gray-500 gap-x-2 gap-y-12 lg:grid-cols-3 lg:gap-y-16 text-balance text-left">
						{details.map((detail, index) => (
							<Card
								key={index}
								img={detail.img}
								title={detail.title}
								description={detail.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
