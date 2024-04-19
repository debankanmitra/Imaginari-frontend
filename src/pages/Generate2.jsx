import { useState } from "react";
import Nav from "../components/Nav";

function Generate2() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("BlueWillow v4");

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
			<div className="relative bg-gradient-to-bl from-blue-100 via-transparent  ">
				<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
					<div className="grid items-center md:grid-cols-2 gap-8 lg:gap-x-12">
						
						<div className="border border-black">
							<form>
								<div className="lg:max-w-sm border border-blue-950">
									<div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg ">
										<div className="text-center">
											<h1 className="block text-2xl font-bold text-gray-800 ">
												Generate an Image
											</h1>
										</div>

										<div className="mt-5 border border-red-600">
											<div className="flex flex-col border border-blue-900 overflow-y-scroll">
												<div className="relative w-full inline-block text-left border border-green-900">
													<span>Model</span>
													<div>
														<button
															type="button"
															onClick={toggleDropdown}
															className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
													<span>Different AI models can produce different or better results so feel free to experiment.</span>

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
														className="block mb-2 text-sm font-medium text-gray-900"
													>
														Prompt
													</label>
													<textarea
														id="message"
														rows="4"
														className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
														placeholder="Write your thoughts here..."
													></textarea>
													<span>What do you want to see? You can use a single word or a full sentence.</span>
												</div>
												<br />

												<div>
													<label
														htmlFor="message"
														className="block mb-2 text-sm font-medium text-gray-900"
													>
														Negative Prompt
													</label>
													<textarea
														id="message"
														rows="4"
														className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
														placeholder="Write your thoughts here..."
													></textarea>
													<span>Describe details you don&apos;t want in your image like color, objects, or a scenery.</span>
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
									</div>
								</div>
							</form>
						</div>
						<div className="border border-red-600">
							<div className="lg:col-span-4 mt-10 lg:mt-0">
								<img
									className="w-full rounded-xl"
									src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
									alt=" Description"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Generate2;
