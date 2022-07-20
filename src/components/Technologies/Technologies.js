import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="tech">
    <SectionDivider />
    <br /><br />
    {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
    <>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world. <br/>
        From Back-End To Design.
      </SectionText>
    </>: localStorage.getItem('lang')==='jpn'?
    <>
      <SectionTitle>テクノロジー</SectionTitle>
      <SectionText>
        私はウェッブ開発の世界でさまざまなテクノロジーを扱ってきました。<br/>
        バックエンドから設計ほど。
      </SectionText>
    </>:
    <>
      <SectionTitle>Công Nghệ</SectionTitle>
      <SectionText>
      Tôi đã làm việc với nhiều loại công nghệ trong thế giới phát triển web. <br/>
      Từ Back-End đến thiết kế.
      </SectionText>
    </>
    :null}
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Front-End':localStorage.getItem('lang')==='jpn'?'フロントエンド':'Front-End':null}</ListTitle>
          {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>:localStorage.getItem('lang')==='jpn'?
          <ListParagraph>
            ReactJSの<br />
            経験
          </ListParagraph>:
          <ListParagraph>
            Kinh nghiệm với <br />
            React.js
          </ListParagraph>
            :null}
          </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Back-End':localStorage.getItem('lang')==='jpn'?'バックエンド':'Back-End':null}</ListTitle>
          {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
          <ListParagraph>
            Experiece with <br />
            Node.js and Databases
          </ListParagraph>:localStorage.getItem('lang')==='jpn'?
          <ListParagraph>
            NodeJSとデータベースの<br />
            経験
          </ListParagraph>:
          <ListParagraph>
            Kinh nghiệm với <br />
            Node.js và Cơ sở dữ liệu
          </ListParagraph>
            :null}
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
          <ListParagraph>
            Experiece with <br />
            tools like Figma
          </ListParagraph>:localStorage.getItem('lang')==='jpn'?
          <ListParagraph>
            Figmaのようなツールの<br />
            経験
          </ListParagraph>:
          <ListParagraph>
            Kinh nghiệm với <br />
            các công cụ như Figma
          </ListParagraph>
            :null}
        </ListContainer>
      </ListItem>
    </List>
    <br /><br />
  </Section>
);

export default Technologies;
