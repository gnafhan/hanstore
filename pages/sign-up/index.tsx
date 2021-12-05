import Image from "next/image"
import SignUpForm from "../../components/organisms/SignUpForm"
import Link from "next/link"
export default function SignUp() {
    return (
        <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
            <form action="">
                <div className="pb-50">
                    <Link href="/">
                    <a className="navbar-brand" href="../index.html">
                        <Image src="/icon/logo.svh" width = {60} height={60}/>
                    </a>
                    </Link>
                </div>
                <SignUpForm/>
            </form>
        </div>
    </section>

    )
}
