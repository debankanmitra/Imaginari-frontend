import Nav from "../components/Nav";
import { useState } from "react";

function Generate() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("BlueWillow v4");

	const [showGeneratedImage, setShowGeneratedImage] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		toggleDropdown(); // Close the dropdown after selecting an option
	};
	return (
		<>
			<Nav />
			<div className="relative bg-gradient-to-b from-blue-100 via-transparent ">
				<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
					<div className="flex flex-col md:grid md:grid-cols-2">
						<div className="">
							<form className="lg:max-w-sm ">
								<div className="text-center">
									<h1 className="block text-2xl font-bold text-gray-900">
										Generate an Image
									</h1>
								</div>

								<div className="mt-5 ">
									<div className="flex flex-col ">
										<div className="relative w-full inline-block text-left">
											<span className="text-md font-semibold text-gray-500">
												Model
											</span>
											<div className="my-2">
												<button
													type="button"
													onClick={toggleDropdown}
													className="inline-flex w-full justify-between rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
													id="menu-button"
													aria-expanded={isOpen}
													aria-haspopup="true"
												>
													{selectedOption
														? selectedOption
														: "OptiBlueWillow v4"}
													<svg
														className={`-mr-1 h-5 w-5 text-gray-400 ${
															isOpen ? "transform rotate-180" : ""
														}`}
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fillRule="evenodd"
															d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
															clipRule="evenodd"
														/>
													</svg>
												</button>
											</div>
											<span className="text-sm font-semibold text-gray-400 text-balance tracking-tighter">
												Different AI models can produce different or better
												results so feel free to experiment.
											</span>

											{isOpen && (
												<div
													className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
													role="menu"
													aria-orientation="vertical"
													aria-labelledby="menu-button"
													tabIndex="-1"
												>
													<div className="py-1" role="none">
														<a
															href="#"
															className="text-gray-700 block px-4 py-2 text-sm"
															role="menuitem"
															tabIndex="-1"
															onClick={() =>
																handleOptionSelect("BlueWillow v4")
															}
														>
															BlueWillow v4
														</a>
														<a
															href="#"
															className="text-gray-700 block px-4 py-2 text-sm"
															role="menuitem"
															tabIndex="-1"
															onClick={() => handleOptionSelect("DALL.E 2")}
														>
															DALL.E 2
														</a>
													</div>
													<div className="py-1" role="none">
														<a
															href="#"
															className="text-gray-700 block px-4 py-2 text-sm"
															role="menuitem"
															tabIndex="-1"
															onClick={() =>
																handleOptionSelect("Stable Diffusion v2")
															}
														>
															Stable Diffusion v2
														</a>
														<a
															href="#"
															className="text-gray-700 block px-4 py-2 text-sm"
															role="menuitem"
															tabIndex="-1"
															onClick={() =>
																handleOptionSelect("Google Imagen 2")
															}
														>
															Google Imagen 2
														</a>
													</div>
												</div>
											)}
										</div>
										<br />

										<div>
											<label
												htmlFor="message"
												className="block mb-2 text-md font-semibold text-gray-500"
											>
												Prompt
											</label>
											<textarea
												id="message"
												rows="4"
												className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-violet-300"
												placeholder="Write your thoughts here..."
											></textarea>
											<span className="text-sm font-semibold text-gray-400 text-balance tracking-tighter">
												What do you want to see? You can use a single word or a
												full sentence.
											</span>
										</div>
										<br />

										<div>
											<label
												htmlFor="message"
												className="block mb-2 text-md font-semibold text-gray-500"
											>
												Negative Prompt
											</label>
											<textarea
												id="message"
												rows="4"
												className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-violet-300"
												placeholder="Write your thoughts here..."
											></textarea>
											<span className="text-sm font-semibold text-gray-400 text-balance tracking-tighter">
												Describe details you don&apos;t want in your image like
												color, objects, or a scenery.
											</span>
										</div>
									</div>

									<div className="mt-5">
										<button
											type="submit"
											className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
										>
											Get started
										</button>
									</div>
								</div>
							</form>
						</div>

						<div className="">
							<main className="relative flex-1 focus:outline-none">
								<div className="py-6">
									<div className="px-4 mx-auto 2xl:max-w-7xl sm:px-6 md:px-8">
										<div className="py-4">
											{/* <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-lg transition sm:p-6"> */}
											<div className="block w-full border border-gray-100 p-8 mt-12 bg-white lg:mt-0 rounded-3xl shadow-lg py-20">
												{showGeneratedImage ? (
													<img
														alt="hero"
														className="object-cover object-center w-72 h-64 mx-auto lg:ml-auto rounded-2xl"
														src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
													/>
												) : (
													<article className="rounded-lg bg-white p-4 sm:p-6 mx-auto">
														<span className="inline-block rounded bg-blue-600 p-2 text-white">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																className="h-6 w-6"
																fill="none"
																viewBox="0 0 24 24"
																stroke="currentColor"
															>
																<path d="M12 14l9-5-9-5-9 5 9 5z" />
																<path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth="2"
																	d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
																/>
															</svg>
														</span>
														<a href="#">
															<h3 className="mt-0.5 text-lg font-medium text-gray-900">
																Generated images will appear here.
															</h3>
														</a>
														<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
															Looks like you haven&apos;t created anything yet! On
															the Left hand template provide sample prompt and
															then click Generate. Our text-to-image feature
															turns your words into beautiful AI visuals.
														</p>
													</article>
												)}
											</div>
											{/* </div> */}
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Generate;
