"use client";
import React from 'react';
import {useRect} from "@/app/hooks/useRect";
import {motion} from 'framer-motion';
import {TypeWriter} from "@/app/components/TypeWritter";
import {AnimatedText} from "@/app/components/AnimatedText";

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

    const texts = [
       // ' - Тренер-реабілітолог',
       // ' - Засновниця клубу з художньої гімнастики ',
       // ' - Авторка онлайн курсу «Здорова стопа»'
        ' - Як виправити плоскостопість у дитини.',
        ' - Як допомогти дитині позбутися вальгусної деформації.',
        ' - Як зміцнити стопи вашої дитини.',
        ' - Як попередити майбутні проблеми з ходьбою вашої дитини.',
        ' - Як забезпечити здорове майбутнє вашій дитині.'

    ]

    return (
        <section className="section collage" style={{position: "relative", paddingBottom: '90px'}}>
            <motion.div
                className={'container wide text-center'}
                variants={variants}
                initial="initial"
                whileInView="animate"
            >
                <h3><TypeWriter text={'Яніна Попеско'}/></h3>
                <h6><TypeWriter text={'досвідченний тренер-реабілітолог'}/></h6>
                <div className="row">
                    <div className={'col-4'}>
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
                                initial={{opacity: 0, scale: 0.5}}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.1,
                                        staggerChildren: 0.1,
                                    },
                                    translateY: 20,
                                }}
                                whileInView="visible"
                                drag
                                dragConstraints={{left: 5, right: 10, top: 10, bottom: 10}}
                                dragElastic={0.1}
                                whileHover={{scale: 1.5}}
                                whileTap={{scale: 0.9}}
                                href={'https://t.me/yaninapopesko'}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <motion.img variants={variants} className={'social'} loading={'lazy'} alt={'telegram'}
                                            src={'/social/telegram.svg'}/>
                            </motion.a>
                            <motion.a
                                initial={{opacity: 0, scale: 0.5}}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.1,
                                        staggerChildren: 0.1,
                                    },
                                    translateY: -3,
                                }}
                                whileHover={{scale: 1.5}}
                                whileTap={{scale: 0.9}}
                                href={'https://www.instagram.com/yanina_popesko/'}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <motion.img variants={variants} className={'social'} loading={'lazy'} alt={'instagram'}
                                            src={'/social/instagram.svg'}/>
                            </motion.a>
                            <motion.a
                                initial={{opacity: 0, scale: 0.5}}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.1,
                                        staggerChildren: 0.1,
                                    },
                                    translateY: -2,
                                    translateX: 6,
                                }}
                                whileHover={{scale: 1.5}}
                                whileTap={{scale: 0.9}}
                                href={'https://www.facebook.com/yaninapopesko'}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <motion.img variants={variants} className={'social'} loading={'lazy'} alt={'facebook'}
                                            src={'/social/facebook.svg'}/>
                            </motion.a>
                            <motion.a
                                initial={{opacity: 0, scale: 0.5}}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.1,
                                        staggerChildren: 0.1,
                                    },
                                    translateY: 25,
                                    translateX: 5,
                                }}
                                whileHover={{scale: 1.5}}
                                whileTap={{scale: 0.9}}
                                target="_blank"
                                onClick={(e) => {
                                    e.preventDefault()
                                    window.open( "mailto:" + atob('eWFuaW5hcG9wZXNrb0BnbWFpbC5jb20='), '_blank', "noopener")?.focus();
                                }}
                                rel="noopener noreferrer nofollow"
                            >
                                <motion.img variants={variants} className={'social'} loading={'lazy'} alt={'tiktok'}
                                            src={'/social/email.svg'}/>
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
                                duration: 0.1,
                                //repeat: Infinity,
                            }}/>

                    </div>
                    <div className={'col-8 mobileSmallFont introList'}
                         style={{color: 'rgb(34 34 34 / var(--tw-text-opacity))', filter: 'grayscale(1)'}}>
                        <AnimatedText text={texts} className={'text-left text-base'}/>
                        <ul style={{ display:'none' }}>{
                            texts.map((i) => <li key={i}>{i}</li>)
                        }</ul>
                    </div>
                </div>

            </motion.div>

        </section>
    )
        ;
};
//
export default YaninaPortfolio;