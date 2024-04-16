import { useState } from "react";

function Nav() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	return (
		<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm bg-gray-50">
			<nav
				className="mt-6 relative max-w-[85rem] w-11/12 bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto  "
				aria-label="Global"
			>
				<div className="flex items-center justify-between">
					<a
						className="flex-none text-xl font-semibold "
						href="#"
						aria-label="Brand"
					>
						Brand
					</a>
					<div className="md:hidden">
						<button
							type="button"
							className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
							data-hs-collapse="#navbar-collapse-with-animation"
							aria-controls="navbar-collapse-with-animation"
							aria-label="Toggle navigation"
							onClick={toggleDropdown}
						>
							<svg
								className={
									isDropdownOpen
										? "hs-collapse-open:block hidden flex-shrink-0 size-4"
										: "hs-collapse-open:hidden flex-shrink-0 size-4"
								}
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="3" x2="21" y1="6" y2="6" />
								<line x1="3" x2="21" y1="12" y2="12" />
								<line x1="3" x2="21" y1="18" y2="18" />
							</svg>
						</button>
					</div>
				</div>
				<div
					id="navbar-collapse-with-animation"
					className={
						isDropdownOpen
							? "hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
							: "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
					}
				>
					<div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
						<a
							className="font-medium text-blue-600 md:py-6 "
							href="#"
							aria-current="page"
						>
							Landing
						</a>
						<a
							className="font-medium text-gray-500 hover:text-gray-400 md:py-6 "
							href="#"
						>
							Account
						</a>
						<a
							className="font-medium text-gray-500 hover:text-gray-400 md:py-6"
							href="#"
						>
							Work
						</a>
						<a
							className="font-medium text-gray-500 hover:text-gray-400 md:py-6"
							href="#"
						>
							Blog
						</a>

						<div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
							<button
								type="button"
								className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium"
								onClick={toggleDropdown}
							>
								Dropdown
								<svg
									className="ms-2 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="m6 9 6 6 6-6" />
								</svg>
							</button>

							<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2   before:absolute top-full md:border before:-top-5 before:start-0 before:w-full before:h-5">
								<a
									className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 "
									href="#"
								>
									About
								</a>
								<div className="hs-dropdown relative [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
									<button className="w-full flex justify-between items-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
										Sub Menu
										<svg
											className="md:-rotate-90 ms-2 size-4"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="m6 9 6 6 6-6" />
										</svg>
									</button>

									<div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 md:mt-2 bg-white md:shadow-md rounded-lg p-2  before:absolute md:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
										<a
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
											href="#"
										>
											About
										</a>
										<a
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
											href="#"
										>
											Downloads
										</a>
										<a
											className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
											href="#"
										>
											Team Account
										</a>
									</div>
								</div>

								<a
									className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
									href="#"
								>
									Downloads
								</a>
								<a
									className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
									href="#"
								>
									Team Account
								</a>
							</div>
						</div>

						<a
							className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-s md:border-gray-300 md:my-6 md:ps-6"
							href="#"
						>
							<svg
								className="flex-shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
								<circle cx="12" cy="7" r="4" />
							</svg>
							Log in
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Nav;
