import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { setUser, setToken } = useStateContext();
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/login", formData)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });
    };
    return (
        <form>
            <h1 className="text-center text-2xl">Login to your account</h1>
            <div className="flex flex-col gap-3 mt-4">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    className="border-2 border-black p-2 w-[22vw]"
                    onChange={onChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    className="border-2 border-black p-2"
                    onChange={onChange}
                />

                <button
                    type="submit"
                    className="border-2 border-black p-2 bg-purple-600 text-white mt-2"
                    onSubmit={onSubmit}
                >
                    Login
                </button>

                <p>
                    Not Registered?
                    <Link
                        to="/signup"
                        className="text-blue-600 hover:underline"
                    >
                        {" "}
                        Signup Now
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default Login;
