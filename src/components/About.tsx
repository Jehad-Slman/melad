import Image from "next/image"

import aboutImage from "../../public/landpageImage.jpg"

import classes from "./about.module.css"

export default function About() {
    return(
        <section className={classes.about} id="about">
            <h2>About Me</h2>
            <main>
                <p>
                    <span>MELAD ALHEAK</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptate, accusantium commodi est architecto, corrupti reprehenderit cumque autem, similique ipsum iusto dicta soluta provident laboriosam nesciunt nisi odio deleniti? Recusandae!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut doloremque, quidem, cum dolorem reiciendis nemo beatae natus ipsum, voluptatibus tempora quos dolore molestias amet temporibus soluta commodi eaque doloribus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt optio rem iure vitae aut facilis repellendus, a reiciendis libero temporibus molestias et provident debitis exercitationem voluptas ab dolorem itaque?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et optio fugit modi in natus pariatur! Voluptatibus aperiam consequatur impedit autem sed incidunt doloribus aliquam consequuntur mollitia, repellat quam reprehenderit voluptates.
                </p>
                <Image
                src={aboutImage}
                width={100}
                height={200}
                alt=""
                />
            </main>
        </section>
    )
}