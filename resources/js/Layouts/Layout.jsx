import React, { useEffect } from "react";
import { Head, usePage } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";

export default function Layout({ title, children }) {
    const {auth, canLogin, canRegister, isLoggedIn} = usePage().props;
    // useEffect(() => {
    //     console.log(dataX);
    // });
    return (
        <>
            <main>
                <header>
                    <Head title={title}/>
                    <Header
                        canLogin={canLogin}
                        canRegister={canRegister}
                        isLoggedIn={isLoggedIn}
                    />
                    <div className="text-3xl text-pal-gray-dark mx-auto py-4">
                        {title}
                    </div>
                </header>
                <section className="px-12 py-5">
                    {/* {flash.message && (
            <div class="alert">{flash.message}</div>
            )} */}
                    {children}
                </section>
                <footer></footer>
            </main>
        </>
    );
}
