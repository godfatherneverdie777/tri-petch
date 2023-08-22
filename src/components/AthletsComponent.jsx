import React from "react";
import { Carousel } from 'react-responsive-carousel';

export default function AthletsComponent() {
    return (
        <section>
            <div className="pt-0 mobile:pt-0 tablet:pt-0 desktop:pt-16">
                <p className="text-5xl font-bold text-left text-gray-300 mobile:block tablet:hidden desktop:hidden pl-4">ATHLETS</p>
                <div className="absolute top-0 left-48 tablet:top-0 tablet:-left-52 desktop:top-0 desktop:left-48 mobile:hidden tablet:block desktop:block z-10">
                    <img src='/images/footballer.png' className="w-5/6 tablet:w-fit desktop:w-5/6" alt="" />
                </div>
                <div className="mobile:block tablet:hidden desktop:hidden z-10">
                    <img src='/images/footballer-mobile.png' className="mx-auto" alt="true" />
                </div>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    stopOnHover={true}
                    transitionTime={500}
                    swipeable={true}
                    emulateTouch={true}
                    className="mobile:block tablet:hidden desktop:hidden bg-zinc-200">
                    <div className="p-8">
                        <div className="flex flex-row">
                            <div className="mr-2">
                                <p>01</p>
                                <hr className="w-full h-1 bg-purple-800 border-0 rounded my-2 dark:bg-gray-700" />
                            </div>
                            <p className="text-3xl text-gray-400">CONNECTION</p>
                        </div>
                        <p className="text-medium text-left text-black">Connect with coaches directly, you can ping coaches to view profile.</p>
                    </div>
                    <div className="p-8">
                        <div className="flex flex-row">
                            <div className="mr-2">
                                <p>02</p>
                                <hr className="w-full h-1 bg-purple-800 border-0 rounded my-2 dark:bg-gray-700" />
                            </div>
                            <p className="text-3xl text-gray-400">COLLABORATION</p>
                        </div>
                        <p className="text-medium text-left text-black">Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</p>
                    </div>
                    <div className="p-8  justify-center">
                        <div className="flex flex-row">
                            <div className="mr-2">
                                <p>03</p>
                                <hr className="w-full h-1 bg-purple-800 border-0 rounded my-2 dark:bg-gray-700" />
                            </div>
                            <p className="text-3xl text-gray-400">GROWTH</p>
                        </div>
                        <p className="text-medium text-left text-black">Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc </p>
                    </div>
                </Carousel>
                <div className="flex flex-col bg-white mobile:hidden tablet:block desktop:block">
                    <div className="flex">
                        <div className="flex-1">

                        </div>
                        <div className="flex-1">
                            <p className="text-8xl font-bold text-left text-gray-300">ATHLETS</p>
                        </div>
                    </div>
                    <div className="flex p-16">
                        <div className="flex-1">

                        </div>
                        <div className="flex-1">
                            <div className="flex flex-row">
                                <div className="mr-2">
                                    <p>01</p>
                                    <hr className="w-full h-1 bg-purple-800 border-0 rounded my-2 dark:bg-gray-700" />
                                </div>
                                <p className="text-4xl text-gray-400">CONNECTION</p>
                            </div>
                            <p className="text-medium text-left text-black">Connect with coaches directly, you can ping coaches to view profile.</p>
                        </div>
                    </div>
                    <div className="flex bg-zinc-200 p-16">
                        <div className="flex-1">

                        </div>
                        <div className="flex-1">
                            <div className="flex flex-row">
                                <div className="mr-2">
                                    <p>02</p>
                                    <hr className="w-full h-1 bg-purple-800 border-0 rounded my-2 dark:bg-gray-700" />
                                </div>
                                <p className="text-4xl text-gray-400">COLLABORATION</p>
                            </div>
                            <p className="text-medium text-left text-black">Work with other student athletes to  increase visability. When you share and like<br />other players videos it will increase your visability as a player. This is the team<br />work aspect to Surface 1.</p>
                        </div>
                    </div>
                    <div className="flex bg-purple-700 p-16">
                        <div className="flex-1">

                        </div>
                        <div className="flex-1">
                            <div className="flex flex-row">
                                <div className="mr-2">
                                    <p>03</p>
                                    <hr className="w-full h-1 bg-white border-0 rounded my-2 dark:bg-gray-700" />
                                </div>
                                <p className="text-4xl text-gray-400">GROWTH</p>
                            </div>
                            <p className="text-medium text-left text-white">Resources and tools for you to get better as a student Athelte.
                                Access to<br />training classes, tutor sessions, etc</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}