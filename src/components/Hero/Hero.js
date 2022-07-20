import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
      <>
        <SectionTitle main center>
          Welcome to <br/>
          Minh Hieu's Portfolio
        </SectionTitle>
        <SectionText>
        I am a final year student majoring in IT at Da Nang University of Technology. With the goal of becoming a fullstack developer in the future. The purpose of create this app to introduce myself.
        </SectionText>
        <Button><a href="https://youtu.be/ljr5u8Rdjjk" target='_blank'>Learn More</a></Button>
      </>: localStorage.getItem('lang')==='jpn'?
      <>
        <SectionTitle main center>
          ようこそ <br/>
          ミン・ヒエウのポートフォリオ
        </SectionTitle>
        <SectionText>
        私はダナン工科大学のIT学部の４年生です。将来、フルスタック開発者になることは目的です。 それで、自分能力を紹介するために、このアプリケーションを作りました。
        </SectionText>
        <Button><a href="https://youtu.be/ljr5u8Rdjjk" target='_blank'>もっと詳しく</a></Button>
      </>:
      <>
        <SectionTitle main center>
          Chào mừng đến với <br/>
          Hồ Sơ Năng Lực của Minh Hiếu
        </SectionTitle>
        <SectionText>
        Tôi đang là sinh viên năm cuối chuyên ngành CNTT trường Đại học Bách Khoa Đà Nẵng. Với mục tiêu trở thành nhà phát triển fullstack tương lai. Mục đích của việc tạo ứng dụng này để giới thiệu bản thân.
        </SectionText>
        <Button><a href="https://youtu.be/ljr5u8Rdjjk" target='_blank'>Đọc Thêm</a></Button>
      </>:null}
    </LeftSection>
  </Section>
);

export default Hero;