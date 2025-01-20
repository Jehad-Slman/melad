"use client"

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

import { FaMobile } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import classes from "./contact.module.css";

type Inputs = {
    email: string,
    name: string,
    message: string
  };

export default function Contact() {

    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        fetch("https://formspree.io/f/xvggekzn", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(res => console.log("res", res))
    }

    return(
        <section className={classes.contact} id="contact">
            <h2>Contact Me</h2>
            <main>
                <ul>
                    <li><FaMobile/> <Link href="tel:+49176 74191241">+49 176 74191241</Link></li>
                    <li><FaFacebook/><Link href="https://www.facebook.com/melad.alhaek">https://www.facebook.com/melad.alhaek</Link></li>
                </ul>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section>
                        <div>
                            <label>Email</label>
                            <input type="email" {...register("email")}/>
                        </div>
                        <div>
                            <label>Your Name</label>
                            <input type="text" {...register("name")}/>
                        </div>
                    </section>
                    
                    <div>
                        <label>Your Message</label>
                        <textarea {...register("message")}/>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </main>
        </section>
    )
}