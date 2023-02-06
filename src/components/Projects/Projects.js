import React, {useState} from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ButtonB } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  return (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Projects':localStorage.getItem('lang')==='jpn'?'プロジェクト':'Dự Án':null}</SectionTitle>
    <GridContainer>
      {!showMore?projects.slice(0,6).map((project,i)=>(
        <BlogCard key={i}>
          <Img src={project.image}/>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
          <CardInfo>{project.description}</CardInfo>
          :localStorage.getItem('lang')==='jpn'?
          <CardInfo>{project.descriptionJP}</CardInfo>
          :<CardInfo>{project.descriptionVN}</CardInfo>
          :null}
          <div>
            <TitleContent>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'STACK':localStorage.getItem('lang')==='jpn'?'スタック':'STACK':null}</TitleContent>
            <TagList>
              {project.tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))} 
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit} target='_blank'>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Visit App':localStorage.getItem('lang')==='jpn'?'アプリにアクセス':'Xem trang web':null}</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))
      :
      projects.map((project,i)=>(
        <BlogCard key={i}>
          <Img src={project.image}/>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
          <CardInfo>{project.description}</CardInfo>
          :localStorage.getItem('lang')==='jpn'?
          <CardInfo>{project.descriptionJP}</CardInfo>
          :<CardInfo>{project.descriptionVN}</CardInfo>
          :null}
          <div style={{marginTop: 10}}>
            <TitleContent>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'STACK':localStorage.getItem('lang')==='jpn'?'スタック':'STACK':null}</TitleContent>
            <TagList>
              {project.tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))} 
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit} target='_blank'>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Visit App':localStorage.getItem('lang')==='jpn'?'アプリにアクセス':'Xem trang web':null}</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
       {!showMore && (<ButtonB onClick={()=> setShowMore(!showMore)}>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Show More':localStorage.getItem('lang')==='jpn'?'もっと見せる':'Hiển thị thêm':null}</ButtonB>)}
    </GridContainer>
    <br /><br />
  </Section>
);
}

export default Projects;