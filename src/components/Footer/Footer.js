import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Phone Number':localStorage.getItem('lang')==='jpn'?'電話番号':'Số điện thoại':null}</LinkTitle>
          <LinkItem href="tel:+84 928-488-738">+84 928-488-738</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Email Address':localStorage.getItem('lang')==='jpn'?'電子メールアドレス':'Địa chỉ email':null}</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            oppahd96@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Social networking site links':localStorage.getItem('lang')==='jpn'?'ソーシャルネットワーキングサイトのリンク':'Liên kết trang mạng xã hội':null}</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/HeyBabe-0312' target='_blank'>
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://twitter.com/HoMinHiu' target='_blank'>
          <AiFillTwitterCircle size="3rem"/>
        </SocialIcons>
        <SocialIcons href='https://www.facebook.com/minhiuuu' target='_blank'>
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
