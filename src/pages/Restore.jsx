import Nav from "../components/Nav";
import { useState } from "react";
function Restore() {
	const [image, setImage] = useState(null);
	const [file, setFile] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [url, setUrl] = useState(null);
	const [selectedOption, setSelectedOption] = useState("Photai v2");

	const [showGeneratedImage, setShowGeneratedImage] = useState("text");

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		toggleDropdown(); // Close the dropdown after selecting an option
	};

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		setFile(file);

		reader.onloadend = () => {
			setImage(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		if (!image) {
			// Handle error if no file is selected (optional)
			console.error("Please select an image");
			return;
		}

		formData.append("image", file); // imageData is the base64 encoded image
		setShowGeneratedImage("loading");
		try {
			const response = await fetch("http://127.0.0.1:8000/restore", {
				method: "POST",
				body: formData,
			});
			const data = await response.json();
			setUrl(data.output); // Assuming the response contains the URL of the generated image
			setShowGeneratedImage("image"); // Update state to show the image
		} catch (error) {
			console.error("Error uploading image:", error);
		}
	};
	return (
		<>
			<Nav />
			<div className="relative bg-gradient-to-b from-blue-100 via-transparent mt-4">
				<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
					<div className="flex flex-col md:grid md:grid-cols-2">
						<div className="">
							<form className="lg:max-w-sm ">
								<div className="text-center">
									<h1 className="block text-3xl font-bold text-gray-900">
										Restore an Image
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
															onClick={() => handleOptionSelect("Photai v2")}
														>
															Photai v2
														</a>
														{/* <a
															href="#"
															className="text-gray-700 block px-4 py-2 text-sm"
															role="menuitem"
															tabIndex="-1"
															onClick={() => handleOptionSelect("DALL.E 2")}
														>
															DALL.E 2
														</a> */}
													</div>
													{/* <div className="py-1" role="none">
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
													</div> */}
												</div>
											)}
										</div>
										<br />
										<div>
											<label
												htmlFor="message"
												className="block mb-2 text-md font-semibold text-gray-500"
											>
												Image
											</label>
											{/* upload */}
											<div className="flex items-center justify-center w-full">
												<label
													htmlFor="dropzone-file"
													className="flex flex-col items-center justify-center w-full h-38 p-4 border-2 border-violet-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
												>
													<div className="flex flex-col items-center justify-center pt-5 pb-6">
														<svg
															className="w-8 h-8 mb-4 text-gray-500 "
															aria-hidden="true"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 20 16"
														>
															<path
																stroke="currentColor"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth="2"
																d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
															/>
														</svg>
														<p className="text-sm text-gray-500">
															<span className="font-semibold">
																Click to upload
															</span>{" "}
															or drag and drop an image
														</p>
													</div>
													<br />
													<input
														id="dropzone-file"
														type="file"
														className="hidden"
														onChange={handleImageUpload}
													/>
													{image && (
														<div>
															<img
																src={image}
																alt="Uploaded"
																className="max-h-64 w-auto rounded-md"
															/>
														</div>
													)}
												</label>
											</div>
											{/* upload */}

											<span className="text-sm font-semibold text-gray-400 text-balance tracking-tighter">
												Upload an image to use as base.
											</span>
											<p className="text-sm font-bold text-gray-500 text-balance tracking-tighter">
												NOTE: Image should be in png or jpg format
											</p>
										</div>
										<br />
									</div>

									<div className="mt-5">
										<button
											onClick={handleSubmit}
											type="submit"
											className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
										>
											Generate
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
												{showGeneratedImage == "image" && (
													<img
														alt="hero"
														className="object-cover object-center w-72 h-64 mx-auto lg:ml-auto rounded-2xl"
														src={url}
													/>
												)}
												{showGeneratedImage == "text" && (
													<article className="rounded-lg bg-white p-4 sm:p-6 mx-auto">
														<span className="inline-block p-2 text-white">
															<svg
																fill="blue"
																xmlns="http://www.w3.org/2000/svg"
																className="w-9 h-9"
																viewBox="0 0 984 984"
															>
																<g>
																	<path d="M972,60c0-33.1-26.9-60-60-60H72C38.9,0,12,26.9,12,60v519c0,33.1,26.9,60,60,60h840c33.1,0,60-26.9,60-60V60z" />
																	<path d="M921,716H205c-28.2,0-51,22.8-51,51s22.8,51,51,51h716c28.2,0,51-22.8,51-51S949.2,716,921,716z" />
																	<path d="M921,882H330.8c-28.2,0-51,22.8-51,51s22.8,51,51,51H921c28.2,0,51-22.8,51-51S949.2,882,921,882z" />
																</g>
															</svg>
														</span>
														<a href="#">
															<h3 className="mt-0.5 text-lg font-medium text-gray-900">
																Animated images will appear here.
															</h3>
														</a>
														<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
															Looks like you haven&apos;t created anything yet!
															On the Left hand template provide sample prompt
															and then click Generate. Our image-to-image
															feature turns your words into beautiful AI
															visuals.
														</p>
													</article>
												)}
												{showGeneratedImage == "loading" && (
													<div className="mx-auto border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
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

export default Restore;
