import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 25+'+', text: 'Open Source Projects.', textJP: 'オープンソースプロジェクト。', textVN: 'Dự án nguồn mở.'},
  { number: 2021, text: 'Web Development based on Scrum course.', textJP: 'スクラムコースに基づくWeb開発。', textVN: 'Phát triển Web dựa trên khóa học Scrum.'},
  { number: 2021, text: 'Complete 6 Course on Viblo Learning.', textJP: '「Viblo」ラーニングで6つのコースを完了します。', textVN: 'Hoàn thành 6 khóa học trên Viblo Learning.'},
  { number: 2020, text: 'Complete 5 Course on Codelearn.', textJP: '「Codelearn」で5つのコースを完了します。', textVN: 'Hoàn thành 5 khóa học trên Codelearn.'}
];

const Acomplishments = () => (
  <Section nopadding>
    <br /><br/>
    <SectionTitle>{typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?'Persional Acomplishments':localStorage.getItem('lang')==='jpn'?'パーソナルな成果':'Thành tích cá nhân':null}</SectionTitle>
    <Boxes>
      {data.map((card,i)=>(
        <Box key={i}>
          <BoxNum>{card.number}</BoxNum>
          {typeof window !== 'undefined' ? localStorage.getItem('lang')==='eng'?
          <BoxText>{card.text}</BoxText>
          : localStorage.getItem('lang')==='jpn'?
          <BoxText>{card.textJP}</BoxText>
          :<BoxText>{card.textVN}</BoxText>
          :null}
        </Box>
        ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
