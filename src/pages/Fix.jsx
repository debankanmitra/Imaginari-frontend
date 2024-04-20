

function Fix() {
    const handleSubmit = (e) => {
		e.preventDefault();
		const formdata = new FormData();
		formdata.append('model', "erasable-diffusion"); // model name
		console.log("Form Data:", formdata);
	};
  return (
    <div>

    <button onClick={handleSubmit} type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" > Generate </button>
    </div>
  );
}

export default Fix;
