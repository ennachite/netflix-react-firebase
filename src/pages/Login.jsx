import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext.jsx";
import {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {user, logIn} = UserAuth()
    const navigate = useNavigate()

    const handlSubmit = async (event) => {
        event.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover'
                     src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/f88936a8-e6e7-4813-a16e-e405d8d71a45/FR-en-20230508-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                     alt="/"/>
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">
                                Sign In
                            </h1>
                            {error ? <p className="p-3 bg-red-700 my-2 rounded">{error}</p> : null}
                            <form onSubmit={handlSubmit} className="w-full flex flex-col py-4">
                                <input onChange={(event) => setEmail(event.target.value)}
                                       className="py-3 px-2 my-2 bg-gray-700 rounded" type="email" placeholder="Email"
                                       autoComplete="email"/>
                                <input onChange={(event) => setPassword(event.target.value)}
                                       className="py-3 px-2 my-2 bg-gray-700 rounded" type="password"
                                       placeholder="Password" autoComplete="currentPassword"/>
                                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
                                <div className="flex justify-between items-center text-sm text-gray-600">
                                    <p>
                                        <input className="mr-2" type="checkbox"/> Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="py-8 text-sm">
                                    <span className="text-gray-600">New to Netflix?</span> {' '}
                                    <Link to="/signup">Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login