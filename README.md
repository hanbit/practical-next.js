# 실전에서 바로 쓰는 Next.js

<a href="https://www.hanbit.co.kr/store/books/look.php?p_code=B1068448075"><img src="https://www.hanbit.co.kr/data/books/B1068448075_l.jpg" height="256px" align="right"></a>

『[실전에서 바로 쓰는 Next.js](https://www.hanbit.co.kr/store/books/look.php?p_code=B1068448075)』(한빛미디어, 2023) 예제 코드 저장소입니다.
 

<details>
<summary>이 저장소의 코드는 원서의 저자가 제공하는 코드에서 다음 내용을 수정한 것입니다.</summary>

 - node.js 버전을 12에서 18로 변경하였습니다. CHAPTER 11에서 사용하는 Dockerfile의 베이스 이미지 역시 node 18 버전을 사용하도록 변경하였습니다.
 - 일부 의존성 패키지의 호환성, 보안 문제 해결을 위해 next.js 패키지 버전을 13.1.1, react와 react-dom 패키지 버전을 18.2.0으로 업그레이드 하였습니다. Next.js 버전을 변경하여도 책의 코드와 차이나는 부분은 없으니 책의 예시 코드를 그대로 따라해도 무방합니다.
 - 계약 문제로 종료된 원격 API / GraphQL 서버를 대체하기 위해 CHAPTER 4의 API / GraphQL 서버 코드를 추가하였습니다.
 - 그 외 사용하는 패키지의 의존성 및 버그를 해결하기 위해 버전을 업그레이드 또는 사용해야 할 특정 버전을 지정하였습니다.
 
 원서의 저자가 제공하는 코드는 [여기](https://github.com/PacktPublishing/Real-World-Next.js)에서 확인할 수 있습니다. 
</details>


## 공지사항

『실전에서 바로 쓰는 Next.js』와 원서는 책의 예제 코드를 따라가면서 전체 애플리케이션을 완성하는 구조로 이루어져 있습니다.  

이에 따라 원서의 저자는 CHAPTER 4 코드 작성을 위한 외부 API endpoint를 별도로 제공하고 있었는데, 작년 6월부터 서비스가 중단되었고 그 이후 별도의 조치가 없는 상태입니다.
그래서 부득이하게 CHAPTER 4의 코드를 따라하고 이해할 수 있도록 외부 API endpoint 코드를 임의로 흉내내어 제공하고 있습니다.  

(https://github.com/hanbit/practical-next.js/tree/main/04-nextjs-data-flow/consuming-rest-apis-on-the-server-side/pages/api/04/users,
https://github.com/hanbit/practical-next.js/tree/main/04-nextjs-data-flow/consuming-rest-apis-on-the-client-side/pages/api/04/users)  

해당 코드는 원 저자가 만들어서 제공한 API endpoint 소스 코드를 제공받지 못한 상태로 임의로 구현한 것이며, CHAPTER 4에서 설명하는 내용과는 거리가 멀기 때문에 책에는 추가 설명을 덧붙이지 않았습니다.
GitHub 저장소 코드를 클론하지 않고 예제 코드를 처음부터 입력하며 실습하시는 독자분들을 미처 배려하지 못했습니다. 죄송합니다.  

CHAPTER 4의 코드를 처음부터 따라하고 싶은 분들은 다음 가이드라인을 참고해주세요(리눅스/맥 기준).  


## 이 책에 대하여

Next.js는 확장성과 성능이 뛰어난 리액트 프레임워크로, 하이브리드 렌더링, 라우트 프리페칭, 자동 이미지 최적화, 국제화 등 여러 가지 기능을 제공합니다.

Next.js는 다양한 용도로 사용됩니다. 온라인 상거래 플랫폼이나 블로그 웹 사이트 등 여러 가지 목적의 웹 애플리케이션을 Next.js로 만들 수 있습니다. 이 책은 성능이나 사용자 경험 및 개발 경험을 유지하면서 훌륭한 웹 애플리케이션을 만드는 방법을 다룹니다. Next.js 기초로 시작해서 프레임워크가 애플리케이션 개발에 어떤 도움을 주는지와 실제 애플리케이션 개발에 Next.js가 얼마나 유용한지 하나씩 배워갈 것입니다. 또한 웹 사이트에 가장 잘 맞는 렌더링 방법, 애플리케이션을 안전하게 만드는 방법, 여러 플랫폼 중 가장 알맞은 곳에 애플리케이션을 배포하는 방법도 알아볼 것입니다.

이 책을 다 읽고 나면 Headless CMS나 그 외의 데이터 소스와 Next.js를 연결해서 애플리케이션을 설계하고, 만들고, 배포할 수 있습니다.  


## 목차
**PART 1. Next.js의 세계로**  
CHAPTER 1. Next.js 알아보기  
CHAPTER 2. 렌더링 전략  
CHAPTER 3. Next.js 기초와 내장 컴포넌트  

**PART 2. Next.js 실전 감각 익히기**  
CHAPTER 4. 코드 구성과 데이터 불러오기  
CHAPTER 5. 지역 및 전역 상태 관리  
CHAPTER 6. CSS와 내장 스타일링 메서드  
CHAPTER 7. UI 프레임워크  
CHAPTER 8. 커스텀 서버  
CHAPTER 9. 테스트  
CHAPTER 10. SEO와 성능 관리  
CHAPTER 11. 배포 플랫폼  

**PART 3. Next.js로 상용 애플리케이션 만들기**  
CHAPTER 12. 인증과 사용자 세션 관리  
CHAPTER 13. GraphCMS로 온라인 상거래 웹 사이트 만들기  
CHAPTER 14. 예제 프로젝트로 살펴보는 Next.js의 다음 단계  
