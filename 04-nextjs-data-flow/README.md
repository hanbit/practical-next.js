### CHAPTER 4의 코드를 처음부터 따라하고 싶은 분들은 다음 가이드라인을 참고해주새요(리눅스 또는 맥 기준).


1. 한빛미디어 코드를 클론합니다.  
```$ git clone https://github.com/hanbit/practical-next.js.git```

2. 4장에서 따라할 부분의 완성 코드 디렉토리로 이동합니다.(예: 서버 측에서 데이터 불러오기)  
```$ cd practical-next.js/04-nextjs-data-flow/consuming-rest-apis-on-the-server-side``` 

3. 해당 디렉토리의 애플리케이션을 실행합니다.  
```$ npm install && npm run dev```  

4. 해당 애플리케이션이 어떤 주소에서 실행되는지 확인합니다.  
```...  
ready - started server on 0.0.0.0:3000, url: http://localhost:3000  
...``` 

5. 새로운 Next.js 프로젝트를 시작합니다. 이 내용은 책에 있는 부분을 따라하시면 됩니다.  
$ npx create-next-app ssr-rest-api  
$ cd ssr-rest-api  
$ yarn add axios  

6. 첫 번째 예제 코드를 작성합니다. 98페이지 코드를 pages/index.js에 추가합니다.  
오탈자에는 등록되어 있으나, REST API를 요청하는 주소는 위 4번 문항에서 확인하신 주소로 적절히 바꾸셔야 합니다.  

$ cat pages/index.js  
import { useEffect } from 'react';  
import Link from 'next/link';  
import axios from 'axios';  

export async function getServerSideProps() {  
  const usersReq =  
    await axios.get('http://localhost:3000/api/04/users');  
  return {  

... 중략 ...  
export default HomePage;  

7. 해당 프로젝트의 애플리케이션을 시작합니다. 이 때 새로 시작한 애플리케이션의 접속 주소를 기억합니다.  
$ npm run dev  

> ssr-rest-api@0.1.0 dev  
> next dev  

warn  - Port 3000 is in use, trying 3001 instead.  
ready - started server on 0.0.0.0:3001, url: http://localhost:3001  
... 후략 ...  

8. 웹 브라우저에서 위 주소(http://localhost:3001) 주소로 접근하면, 새로 만든 애플리케이션의 페이지를 확인하실 수 있습니다.  


이 후 새로 만든 프로젝트에서 계속 코드를 추가하면서 실습을 진행할 수 있습니다.  
