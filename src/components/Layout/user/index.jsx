import Navbar from "./Navbar"
import Loading from "../../Loading"
import Footer from "./Footer"

const UserLayout = ({ children, isLoading }) => {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen flex items-center justify-center">
                {
                    isLoading ? <Loading /> : children
                }
            </main>
            <Footer />
        </div>
    )
}

export default UserLayout