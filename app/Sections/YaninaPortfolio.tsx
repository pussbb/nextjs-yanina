"use client";
import React from 'react';
import {useRect} from "@/app/hooks/useRect";
import {motion} from 'framer-motion';

const variants = {
    initial: {
        y: -100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            staggerChildren: 0.1,
        },
    },
    hover: {
        scale: 1.1,
        transition: { duration: 0.2 },
    },
};

export const YaninaPortfolio = () => {
    const imageRef = React.createRef<HTMLImageElement>();
    let contentRect = useRect(imageRef)
    //const ref = useRef<HTMLDivElement|null>();
    //const isInView = useInView(ref, { margin: "-100px" });

    return (
        <section className="section pb-[50px]" style={{ position: "relative" }}>
            <motion.div
                className={'container text-center'}
                variants={variants}
                initial="initial"
                whileInView="animate"
            >
                <motion.h3 variants={variants}>Яніна Попеско</motion.h3>
                <motion.h6 variants={variants}>Yanina Popesko</motion.h6>

                <motion.div
                    //ref={ref}
                    className={'inline-flex text-left social-list'} style={{
                        //top: contentRect.top + 10,
                        width: contentRect.width,
                        left: contentRect.left
                    }}
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                >
                    <motion.a
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.5,
                                    staggerChildren: 0.1,
                                },
                                translateY: 20,
                            }}
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            href={'https://t.me/yaninapopesko'}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            <motion.img variants={variants} className={'social'} loading={'lazy'} alt={'telegram'}
                                 src={'/social/telegram.svg'}/>
                    </motion.a>
                    <motion.a
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    duration: 0.5,
                                    staggerChildren: 0.1,
                                },
                                translateY: -3,
                            }}
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            href={'https://www.instagram.com/yanina_popesko/'}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            <motion.img variants={variants} className={'social'} loading={'lazy'} alt={'instagram'}
                                 src={'/social/instagram.svg'}/>
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 0.5,
                                staggerChildren: 0.1,
                            },
                            translateY: -2,
                            translateX: 6,
                        }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                            href={'https://www.facebook.com/yaninapopesko'}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                    >
                            <motion.img variants={variants} className={'social'} loading={'lazy'} alt={'facebook'}
                                 src={'/social/facebook.svg'}/>
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 0.5,
                                staggerChildren: 0.1,
                            },
                            translateY: 20,
                        }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                            href={'https://www.tiktok.com/@yaninapopesko'}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            <motion.img variants={variants} className={'social'} loading={'lazy'} alt={'tiktok'}
                                 src={'/social/tiktok.svg'}/>
                    </motion.a>
                </motion.div>

                <motion.img
                    initial={{y: -10}}
                    animate={{y: 20}}
                    className="profile"
                    loading="lazy"
                    ref={imageRef}
                    src="/portfolio/IMG_8808.webp"
                    alt="Yanina Portfolio"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 2,
                        //repeat: Infinity,
                    }}/>
            </motion.div>
        </section>
    );
};
//
export default YaninaPortfolio;