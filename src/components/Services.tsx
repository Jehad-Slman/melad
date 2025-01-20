import Image from "next/image"

import PTImage from "../../public/personalTrainer.jpg";
import FIImage from "../../public/fitInstructor.jpg";
import PEImage from "../../public/physicalEducation.jpg"

import classes from "./services.module.css"

export default function Services() {
    return(
        <section className={classes.services} id="services">
            <h2>Services</h2>
            <main>
                <div>
                    <Image 
                    src={PTImage}
                    alt=""
                    width={100}
                    height={200}
                    />
                    <h3>Personal Trainer</h3>
                </div>

                <div>
                    <Image 
                    src={FIImage}
                    alt=""
                    width={100}
                    height={200}
                    />
                    <h3>Fitness Instructor</h3>
                </div>

                <div>
                    <Image 
                    src={PEImage}
                    alt=""
                    width={100}
                    height={200}
                    />
                    <h3>Physical Education</h3>
                </div>
            </main>
        </section>
    )
}