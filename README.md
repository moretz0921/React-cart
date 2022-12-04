### 환경 설정 
- React 18
- Styled-component
- Redux
- firebase
- json-server


### 기능 설명
#### 1. 회원가입 & 로그인 <br/>
![회원가잊](https://user-images.githubusercontent.com/53929795/172033526-bfa56b3c-fcd4-4bfd-b34e-6f971fd12921.png)

- firebase 연동 

- redux 유저 store 개발<br/>
: 유저가 있으면 메인으로 이동하게 끔 설정 

- login, logout 개발

 <br/>
 
#### 2. 상품 목록 페이지 <br/>
![상품목록](https://user-images.githubusercontent.com/53929795/172033524-325a81d2-d274-4801-9aa2-88b9d9e54844.png)

- 상품 API 요청<br/>
: axios를 통해 db.json 호출

- 상품 클릭시 detail 페이지 이동 

- 장바구니 버튼 클릭시 팝업 오픈 

 <br/>
 
#### 3. 상품 상세 페이지 <br/>
![detail](https://user-images.githubusercontent.com/53929795/172656248-27b4e837-2363-414b-a25b-a62ca5e9b2be.png)
- 디테일 정보 <br />
: react-query를 이용해서 data fetching 

- 탭 <br/>
: 현재 클릭된 tab 제목의 index와 내용의 index가 같을 경우 활성화 시킴 <br/> 

 <br/>
 
#### 4. 장바구니 페이지 <br/>
![장바구니](https://user-images.githubusercontent.com/53929795/172033625-b2d15c5e-1160-4b0a-908b-e3aece1004fd.png)

- 상품 목록 렌더링<br/>
: map 메서드를 이용해 목록 렌더링

- 장바구니 추가 기능<br/>
: 이름, 가격, 수량에 대한 상품 정보

- 장바구니 총 가격 합산 기능<br/>
: reduce 메서드를 이용해 총 가격 합산

- 장바구니 상품 삭제 기능<br/>
: 총합 금액 변경 및 splice 메서드를 이용해 상품 삭제

- 장바구니 상품 수량 수정 기능
- 장바구니 상품 중복 추가 방지 기능

 <br/>
 
#### 5. 기타
- 페이지네이션 <br/>
: 현재 페이지, 총 데이터 갯수 구해서 페이지 변경 <br/>
![페이지네이션](https://user-images.githubusercontent.com/53929795/172089764-c23261b1-b453-4940-ac94-b2951e134215.png) <br/>

- 인기순 필터링 <br/>
![필터링](https://user-images.githubusercontent.com/53929795/172089751-39a0dd43-810a-45f2-94bf-d867e869aecd.png)

- 검색 기능 <br/>
: new URLSearchParams 이용, 상품 페이지에서만 검색 가능 <br/><br/>
![url](https://user-images.githubusercontent.com/53929795/172033797-933ac7d4-3c4a-479c-8d06-d11019521b32.png)



### firebase 배포 



### 트러블 슈팅 
- react의 동작원리와 javascript의 기본적인 원리등을 이해해야만 코드가 완성되기 때문에 이러한 점이 어려웠다.
- json-server 사용 후 배포 과정에서 heroku를 이용했는데 push 과정에서 계속 Build failed이 발생되서 애를 먹었다. <br/>
아직 원인이 파악이 안됬지만, `"heroku-postbuild": "cross-env NODE_PATH=src npm run build"` 이 부분을 `"heroku-postbuild": "npm install"` 로 변경했더니 배포가 되었다.. 
