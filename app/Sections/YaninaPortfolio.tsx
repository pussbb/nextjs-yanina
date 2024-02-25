"use client";
import React, {useRef} from 'react';
import {useRect} from "@/app/hooks/useRect";

const imageRef = React.createRef<HTMLImageElement>();

export const YaninaPortfolio = () => {
    const contentRect = useRect(imageRef)

    return (
      <section className="section pb-[50px]">
          <div className="container text-center">
              <h3>Яніна Попеско</h3>
              <h6>Yanina Popesko</h6>
                      <img
                          loading="lazy"
                          ref={imageRef}
                          className="profile" src="/portfolio/IMG_8808.webp"
                          alt="Yanina Portfolio"/>
                  <div className={'inline-flex text-left social-list'} style={{
                      top: contentRect.bottom + 10,
                      width: contentRect.width,
                      left: contentRect.left - 20
                  }}>
                      <a
                          aria-label="location"
                          href={'https://t.me/yaninapopesko'}
                          target="_blank"
                          style={{
                              transform: `rotate(0deg) translateX(${contentRect.left}) translateY(-24px) rotate(0deg) scale(1) !important`
                          }}
                          rel="noopener noreferrer nofollow"
                      >
                          <img className={'social'} loading={'lazy'} alt={'telegram'} src={'/social/telegram.svg'}/>
                      </a>
                      <a
                          aria-label="location"
                          href={'https://www.instagram.com/yanina_popesko/'}
                          target="_blank"
                          style={{
                              transform: `rotate(0deg) translateX(${contentRect.left + 10}px) translateY(-2px) rotate(0deg) scale(1) !important`
                          }}
                          rel="noopener noreferrer nofollow"
                      >
                          <img className={'social'} loading={'lazy'} alt={'instagram'}
                               src={'/social/instagram.svg'}/>
                      </a>
                      <a
                          aria-label="location"
                          href={'https://www.facebook.com/yaninapopesko'}
                          target="_blank"
                          style={{
                              transform: `rotate(0deg) translateX(${contentRect.left + 25}px) translateY(-1px) rotate(0deg) scale(1) !important`
                          }}
                          rel="noopener noreferrer nofollow"
                      >
                          <img className={'social'} loading={'lazy'} alt={'facebook'}
                               src={'/social/facebook.svg'}/>
                      </a>
                      <a
                          aria-label="location"
                          href={'https://www.tiktok.com/@yaninapopesko'}
                          target="_blank"
                          style={{
                              transform: `rotate(0deg) translateX(${contentRect.left + 35}px) translateY(-24px) rotate(0deg) scale(1) !important`
                          }}
                          rel="noopener noreferrer nofollow"
                      >
                          <img className={'social'} loading={'lazy'} alt={'tiktok'}
                               src={'/social/tiktok.svg'}/>
                      </a>
                  </div>
          </div>
      </section>
    );
};
//
export default YaninaPortfolio;