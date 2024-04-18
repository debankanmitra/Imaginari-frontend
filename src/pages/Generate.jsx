import Nav from "../components/Nav";

function Generate() {
	return (
		<>
			<Nav />

			<div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-white">
				<div className="md:flex mt-10 ">
					<div className="flex flex-col lg:w-96 border border-red-600">
						<div className="flex flex-col flex-grow overflow-y-auto bg-white border-r">
							<div className="flex flex-col flex-shrink-0">
								<ul
									role="list"
									className="border-b border-gray-200 divide-y divide-gray-200"
								>
									<li>
										<div className="relative flex items-start p-4 space-x-3 group">
											<div className="flex-1 min-w-0">
												<div className="text-sm font-medium leading-6 text-black">
													<a
														href="#"
														className="inline-flex items-start justify-between w-full"
													>
														<span>Bills and bills</span>
														<div className="self-center flex-shrink-0 text-xs font-normal text-gray-500">
															Wed
														</div>
													</a>
												</div>
												<p className="mt-5 text-sm text-gray-500">
													Invoice for the batcave
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="relative flex items-start p-4 space-x-3 group">
											<div className="flex-1 min-w-0">
												<div className="text-sm font-medium leading-6 text-black">
													<a
														href="#"
														className="inline-flex items-start justify-between w-full"
													>
														<span>Pick up your batman suits</span>
														<div className="self-center flex-shrink-0 text-xs font-normal text-gray-500">
															Wed
														</div>
													</a>
												</div>
												<p className="mt-5 text-sm text-gray-500">
													Ready to be wear
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col flex-1 w-0 overflow-hidden border border-black mt-10">
					<main className="relative flex-1 focus:outline-none">
						<div className="py-6">
							<div className="px-4 mx-auto 2xl:max-w-7xl sm:px-6 md:px-8">
								{/* <!-- === Remove and replace with your own content... === --> */}
								<div className="py-4">
									<div className=" border border-gray-200 border-dashed rounded-lg">
										<div className="block w-full p-8 mt-12 bg-slate-200 lg:mt-0 rounded-3xl">
											<img
												alt="hero"
												className="object-cover object-center w-72 h-64 mx-auto lg:ml-auto rounded-2xl"
												src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
											/>
										</div>
									</div>
								</div>
								{/* <!-- === End ===  --> */}
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

export default Generate;
