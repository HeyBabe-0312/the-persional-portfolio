import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { VN, US, JP  } from 'country-flag-icons/react/3x2'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
const changeLang = (lang) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size="3rem"/>
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
      <>
        <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
        </li>
        <li>
          <Link href='#tech'>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#about'>
            <NavLink>About</NavLink>
          </Link>
        </li>
      </>: localStorage.getItem('lang')==='jpn'?
      <>
      <li>
      <Link href='#projects'>
        <NavLink>プロジェクト</NavLink>
      </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>テクノロジー</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>自分情報</NavLink>
        </Link>
      </li>
      </>:
      <>
      <li>
      <Link href='#projects'>
        <NavLink>Dự Án</NavLink>
      </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Công nghệ</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>Giới Thiệu</NavLink>
        </Link>
      </li>
      </>:null}
      
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/HeyBabe-0312' target='_blank'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/minhiuuu' target='_blank'>
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.youtube.com/channel/UCyBl91KCxwPNGZ08CZJU8qQ' target='_blank'>
        <AiFillYoutube size="3rem"/>
      </SocialIcons>
      <SocialIcons>
      {typeof window !== 'undefined' ? 
      localStorage.getItem('lang')==='eng'?<US onClick={()=>changeLang('jpn')} width={30}/>
      :localStorage.getItem('lang')==='jpn'?<JP onClick={()=>changeLang('vie')} width={30}/>
      :localStorage.getItem('lang')==='vie'?<VN onClick={()=>changeLang('eng')} width={30}/>:<US onClick={()=>changeLang('jpn')} width={30}/>:null}
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
