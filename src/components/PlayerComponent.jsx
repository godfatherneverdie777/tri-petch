import React from "react";
import { Carousel } from 'react-responsive-carousel';


export default function PlayerComponent() {
    return (
        <section>
            <div className="relative pt-0 mobile:pt-0 tablet:pt-0 desktop:pt-16">
                <p className="text-5xl font-bold text-left text-gray-300 mobile:block tablet:hidden desktop:hidden pl-4 py-8">PLAYERS</p>
                <div className="relative desktop:bottom-0 desktop:right-64 mobile:hidden tablet:block desktop:block">
                    <img src="/images/player.png" className="absolute tablet:-top-12 tablet:-right-72 desktop:-top-0 desktop:right-0" alt="" />
                </div>
                <div className="mobile:block tablet:hidden desktop:hidden z-10">
                    <img src='/images/player-mobile.png' className="mx-auto" alt="true" />
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
                        <p className="text-medium text-left text-black">Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.</p>
                    </div>
                    <div className="p-8">
                        <div className="flex flex-row">
                            <div className="mr-2">
                                <p>02</p>
                                <hr className="w-full h-1 bg-purple-800 border-0 rounded my-2 dark:bg-gray-700" />
                            </div>
                            <p className="text-3xl text-gray-400">COLLABORATION</p>
                        </div>
                        <p className="text-medium text-left text-black">Work with recruiter to increase your chances of findingtalented athlete.</p>
                    </div>
                    <div className="p-8  justify-center">
                        <div className="flex flex-row">
                            <div className="mr-2">
                                <p>03</p>
                                <hr className="w-full h-1 bg-purple-800 border-0 rounded my-2 dark:bg-gray-700" />
                            </div>
                            <p className="text-3xl text-gray-400">GROWTH</p>
                        </div>
                        <p className="text-medium text-left text-black">Save your time, recruit proper athlets for your team.</p>
                    </div>
                </Carousel>
                <div className="flex flex-col bg-white mobile:hidden tablet:block desktop:block">
                    <div className="flex pl-0 tablet:pl-0 desktop:pl-32">
                        <div className="flex-1">
                            <p className="text-8xl font-bold text-left text-gray-300 pl-16">PLAYERS</p>
                        </div>
                        <div className="flex-1">

                        </div>
                    </div>
                    <div className="flex p-16">
                        <div className="flex-1 pl-0 tablet:pl-0 desktop:pl-32">
                            <div className="flex flex-row">
                                <div className="mr-2">
                                    <p>01</p>
                                    <hr className="w-full h-1 bg-purple-800 border-0 rounded my-2 dark:bg-gray-700" />
                                </div>
                                <p className="text-4xl text-gray-400">CONNECTION</p>
                            </div>
                            <p className="text-lg text-left text-black">Connect with talented athlete directly, you can watch their
                                skills<br />through video showreels directly from Surface 1.</p>
                        </div>
                        <div className="flex-1">

                        </div>
                    </div>
                    <div className="flex bg-zinc-200 p-16">
                        <div className="flex-1 pl-0 tablet:pl-0 desktop:pl-32">
                            <div className="flex flex-row">
                                <div className="mr-2">
                                    <p>02</p>
                                    <hr className="w-full h-1 bg-purple-800 border-0 rounded my-2 dark:bg-gray-700" />
                                </div>
                                <p className="text-4xl text-gray-400">COLLABORATION</p>
                            </div>
                            <p className="text-medium text-left text-black">Work with recruiter to increase your chances of finding talented athlete.</p>
                        </div>
                        <div className="flex-1">

                        </div>
                    </div>
                    <div className="flex bg-indigo-950 p-16">
                        <div className="flex-1 pl-0 tablet:pl-0 desktop:pl-32">
                            <div className="flex flex-row">
                                <div className="mr-2 text-violet-600">
                                    <p>03</p>
                                    <hr className="w-full h-1 bg-white border-0 rounded my-2 dark:bg-gray-700" />
                                </div>
                                <p className="text-4xl text-gray-400">GROWTH</p>
                            </div>
                            <p className="text-medium text-left text-white">Save your time, recruit proper athlets for your team.</p>
                        </div>
                        <div className="flex-1">

                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </section>
    )
}