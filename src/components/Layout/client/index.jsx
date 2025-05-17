import Navbar from "./Navbar"
import Loading from "../../Loading"
import Footer from "./Footer"

const ClientLayout = ({ children, isLoading }) => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[url('/images/bg.svg')] bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col w-full bg-[url('/images/Home/hero.svg')] bg-contain bg-no-repeat">
                <Navbar />
                <main className="min-h-screen flex flex-col">
                    {
                        isLoading ? <Loading /> : children
                    }
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default ClientLayout