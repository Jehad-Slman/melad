import Link from "next/link";

import classes from "./landPage.module.css";

export default function LandPage() {
    return(
        <section className={classes.land_page}>
            <main>
                <h2>Optimize your performance in life</h2>
                <h3>anywhere, anytime</h3>
                <p>Let's get you better everyday</p>
                <Link href="#">E-mail me</Link>
            </main>
        </section>
    )
}