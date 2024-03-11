"use client";
import React from 'react';
import {useRect} from "@/app/hooks/useRect";
import {motion} from 'framer-motion';
import {TypeWriter} from "@/app/components/TypeWritter";

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
                <h3><TypeWriter text={'Яніна Попеско'} /></h3>
                <h6><TypeWriter text={'Yanina Popesko'} /></h6>

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
                            //variants={headerSkillVariants}
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
                            whileInView="visible"
                            drag
                            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
                            dragElastic={0.1}
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