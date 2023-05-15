import SavedShows from "../components/SavedShows.jsx";

const Account = () => {
    return (
        <>
            <div className="w-full text-white">
                <img className='w-full h-[400px] object-cover'
                     src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/f88936a8-e6e7-4813-a16e-e405d8d71a45/FR-en-20230508-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                     alt="/"/>
                <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
                <div className="absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
                </div>
            </div>
            <SavedShows />
        </>
    )
}

export default Account