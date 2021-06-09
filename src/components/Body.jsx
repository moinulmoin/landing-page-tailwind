function Body() {
    return (
        <main className="h-[calc(100vh-120px)] flex flex-col md:flex-row md:justify-between justify-between md:items-center items-center px-6 py-14 md:px-12 lg:px-20 bg-gray-800">
            <div className="text-center mb-8 md:text-left">
                <h1 className="text-5xl mb-5 md:text-8xl text-gray-100">Welcome to</h1>
                <p className="text-3xl md:text-6xl mb-3 md:mb-5 text-gray-300">My Landing Page</p>
                <p className="text-xl md:text-3xl text-gray-400">Thanks for Vising!</p>
            </div>
            <div>
                <img src="./coding.svg" alt="" className="w-[500px] md:w-[400px] animate-pulse" />
            </div>
        </main>
    );
}

export default Body;
