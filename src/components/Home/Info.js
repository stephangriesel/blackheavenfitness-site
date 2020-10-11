import React from 'react'
// import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section>
            <section className="py-5 mt-5">
                <div className="container"></div>
                <Title title="About ME"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p>
                            Shaleka Black-Heaven- 29 years old. Started on my fitness journey 2 years ago as a personal trainer, I quickly found my love for hiit and group fitness, I'm all about high energy and pushing to the limits of what we can do. I talk a lot, I'm loud, I'm fun and I'm motivated, I'm here for the people that want to give 100% and more. I love basketball, anime and MMA!
                        </p>
                        <p>
                            <button className="try"><a href="https://try.beat81.com/shaleka/">Join me for FREE workout</a></button>
                        </p>
                        {/* <Link to="/about">
                            <button className="btn text-uppercase btn-yellowish">About</button>
                        </Link> */}
                    </div>
                </div>
            </section>
        </section>
    )
}
