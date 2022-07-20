import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Projects':localStorage.getItem('lang')==='jpn'?'プロジェクト':'Dự Án':null}</SectionTitle>
    <GridContainer>
      {projects.map((project,i)=>(
        <BlogCard key={i}>
          <Img src={project.image}/>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
          <CardInfo>{project.description.length > 150 ? project.description.substring(0,150)+'...':project.description}</CardInfo>
          :localStorage.getItem('lang')==='jpn'?
          <CardInfo>{project.descriptionJP.length > 130 ? project.descriptionJP.substring(0,130)+'...':project.descriptionJP}</CardInfo>
          :<CardInfo>{project.descriptionVN.length > 150 ? project.descriptionVN.substring(0,150)+'...':project.descriptionVN}</CardInfo>
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
      ))}
    </GridContainer>
    <br /><br />
  </Section>
);

export default Projects;