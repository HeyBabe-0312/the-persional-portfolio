import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section nopadding id='about'>
      <SectionDivider />
      <br /><br />
      {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
      <>
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
        I am a final year student majoring in IT at Da Nang University of Technology. With the goal of becoming a fullstack developer in the future. Here is a timeline and goals that I set for myself.
        </SectionText>
      </>: localStorage.getItem('lang')==='jpn'?
      <>
        <SectionTitle>自分情報</SectionTitle>
        <SectionText>
        私はダナン工科大学のIT学部の４年生です。将来、フルスタック開発者になることは目的です。 これが私が自分で設定したタイムラインと目標です。
        </SectionText>
      </>:
      <>
        <SectionTitle>Giới thiệu</SectionTitle>
        <SectionText>
        Tôi đang là sinh viên năm cuối chuyên ngành CNTT trường Đại học Bách Khoa Đà Nẵng. Với mục tiêu trở thành nhà phát triển fullstack tương lai. Dưới đây là dòng thời gian và mục tiêu mà tôi tự đặt ra.
        </SectionText>
      </>
      :null}
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
        {TimeLineData.map((item, i)=>(
          <CarouselMobileScrollNode key={i} final={i===TOTAL_CAROUSEL_COUNT-1}>
            <CarouselItem 
                index={i} 
                id={`carousel__item-${i}`}
                active={activeItem}
                onClick={(e) => handleClick(e, i)}>
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
                <CarouselItemText>{item.text}</CarouselItemText>
                :localStorage.getItem('lang')==='jpn'?
                <CarouselItemText>{item.textJP}</CarouselItemText>
                :<CarouselItemText>{item.textVN}</CarouselItemText>
                :null}
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
