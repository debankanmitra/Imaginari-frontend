import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	return (
		<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm bg-gray-50">
			<nav
				className="mt-6 relative max-w-[85rem] w-11/12 bg-white border border-gray-200 rounded-[36px] py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 mx-auto"
				aria-label="Global"
			>
				<div className="flex items-center justify-between">
					{/* <!-- Brand --> */}
					<Link to="/">
						<div
							className="flex-none text-xl font-semibold "
							aria-label="Brand"
						>
							Imaginari
						</div>
					</Link>
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
						<Link to="/">
							<div
								className="font-medium text-blue-600 md:py-6 "
								aria-current="page"
							>
								Home
							</div>
						</Link>
						<a href="#features">
							<div className="font-medium text-gray-500 hover:text-gray-400 md:py-6 ">
								Features
							</div>
						</a>
						<Link to="/gallery">
							<div className="font-medium text-gray-500 hover:text-gray-400 md:py-6">
								Gallery
							</div>
						</Link>

						<div className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 cursor-not-allowed">
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
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Nav;
