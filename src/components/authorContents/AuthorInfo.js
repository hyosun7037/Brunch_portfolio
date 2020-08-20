// 작가소개 페이지
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthorIntro, TitIntro, DescIntro, ListTag } from 'styles/StyledComponentAll';

const AuthorInfo = () => {
    return (
        <div>
            {/* 소개글1 */}
          <AuthorIntro>
            <TitIntro>소개</TitIntro>
            <DescIntro>
                IT 필드의 모든 전략가들을 위한 데이터 드리븐 UX / 그로스해킹 이야기. 뷰저블만의 인사이트를 나눕니다.
            </DescIntro>
            <ListTag>
                <li><Link to="/키워드">UX</Link></li>
                <li><Link to="/키워드">디자인</Link></li>
                <li><Link to="/키워드">스타트업</Link></li>
                <li><Link to="/키워드">슈필라움</Link></li>
            </ListTag>
          </AuthorIntro> 
            {/* 소개글2 */}
          <AuthorIntro>
            <TitIntro>기타 이력 및 포트폴리오</TitIntro>
            <DescIntro>그로스 해킹을 돕는 UX 데이터 분석 툴, 뷰저블과 뷰저블리로 서비스 전환율을 최적화하세요!  
            <br />
            1. 뷰저블
            www.beusable.net
            <br />
            Beusable(뷰저블)은 UX 데이터 분석 올인원 플랫폼으로 9가지 특화된 전문 분석 기능을 갖추고 있습니다.
            UX Heatmaps, Session Reports, AB Test, Funnel, Comparing as Referrers, User Analytics, Activity Stream, Segmenting as CTA
            <br />
            <br />
            2. 뷰저블리
            www.beusably.net
            <br />
            Beusably(뷰저블리)는 스크린 숏이 아닌 실제 웹 사이트 위에 UX 데이터를 시각화하는 그로스 해킹 툴입니다. 숨겨진 메뉴나 동적 요소의 데이터까지 바로 확인 할수 있으며 클릭, 무브, 관심, 노출 히트맵이라는 특화된 히트맵 기능이 있습니다.
            <br />
            <br />
            <br />
            뷰저블과 뷰저블리를 만드는 포그리트(Fourgrit)는 UX 분석에 필요한 실용적인 데이터를 제공하는 테크 기업입니다.
            그로스 해킹에 최적화된 서비스를 만들고 있습니다.
            <br />
            <br />
            </DescIntro>
          </AuthorIntro> 
          <AuthorIntro></AuthorIntro> 
        </div>
    );
};

export default AuthorInfo;