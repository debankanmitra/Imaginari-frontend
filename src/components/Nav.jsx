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
							className="flex items-center gap-2 text-xl font-semibold "
							aria-label="Brand"
						>
							<svg
								width="35"
								height="30"
								viewBox="0 0 120 120"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M32.2701 6.77872L46.3114 59.1816V1.56877C47.4248 1.30896 48.5501 1.08014 49.6864 0.88329V59.187L65.4793 0.24707C66.6174 0.350104 67.7464 0.48492 68.8652 0.650622L52.9451 60.0654L84.5902 5.25444C85.6211 5.71823 86.6366 6.21028 87.6356 6.7296L55.8725 61.745L101.218 16.3991C102.036 17.1722 102.832 17.9681 103.605 18.7857L58.2522 64.1382L113.274 32.3713C113.793 33.3704 114.285 34.386 114.749 35.417L59.9515 67.0542L119.35 51.1384C119.516 52.2573 119.651 53.3863 119.753 54.5244L60.8143 70.3171L119.116 70.3171C118.919 71.4534 118.691 72.5787 118.431 73.6921L60.8052 73.6921L113.218 87.7362C112.68 88.7669 112.113 89.78 111.517 90.7745L59.9466 76.9561L103.02 101.825C102.205 102.663 101.365 103.478 100.502 104.268L58.2629 79.8811L90.2245 111.843C89.2136 112.433 88.1838 112.995 87.1363 113.527L55.8729 82.2641L76.357 117.744C75.2355 118.061 74.1006 118.346 72.9534 118.598L52.9471 83.9465L62.593 119.945C61.7332 119.982 60.8688 120 60 120C59.7035 120 59.4074 119.998 59.1119 119.994L49.6864 84.8172V119.117C48.5501 118.92 47.4248 118.692 46.3114 118.432V84.8228L38.0006 115.839C36.9406 115.421 35.8954 114.974 34.8659 114.498L43.0501 83.9539L27.6866 110.564C26.7354 109.955 25.8026 109.32 24.8891 108.66L40.1319 82.2586L18.7854 103.605C17.9678 102.832 17.1719 102.036 16.3988 101.219L37.7386 79.8789L11.3449 95.1173C10.6845 94.2039 10.0491 93.2711 9.4399 92.32L36.0629 76.9492L5.50365 85.1375C5.02799 84.1081 4.58065 83.0628 4.16263 82.0028L35.1786 73.6921H1.5693C1.30942 72.5787 1.08054 71.4534 0.88362 70.3171L35.1695 70.3171L0.00653905 60.8952C0.00218472 60.5974 0 60.2991 0 60.0002C0 59.1338 0.0183668 58.2716 0.0547323 57.4141L36.058 67.0611L1.40079 47.0518C1.65314 45.9045 1.93833 44.7696 2.25531 43.648L37.7492 64.1404L6.47275 32.864C7.00485 31.8165 7.5668 30.7867 8.15747 29.7757L40.1323 61.7505L15.7357 19.4945C16.5257 18.6317 17.3406 17.792 18.1792 16.9767L43.0522 60.0579L29.2317 8.47926C30.2262 7.88407 31.2393 7.31686 32.2701 6.77872Z"
									fill="black"
								/>
							</svg>
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
