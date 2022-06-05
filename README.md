### 기술 스택
- React 18
- Styled-component
- Redux
- firebase
- json-server


### 기능 설명
#### 1. 회원가입 & 로그인 기능 <br/>
![회원가잊](https://user-images.githubusercontent.com/53929795/172033526-bfa56b3c-fcd4-4bfd-b34e-6f971fd12921.png)

- firebase 연동 

- redux 유저 store 개발<br/>
: 유저가 있으면 메인으로 이동하게 끔 설정 

- login, logout 개발


#### 2. 상품 페이지 기능 <br/>
![상품목록](https://user-images.githubusercontent.com/53929795/172033524-325a81d2-d274-4801-9aa2-88b9d9e54844.png)

- 상품 API 요청<br/>
: axios를 통해 db.json 호출

- 상품 클릭시 detail 페이지 이동 

- 장바구니 버튼 클릭시 팝업 오픈 

#### 3. 장바구니 페이지 기능 <br/>
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

#### 4. 기타 기능
- 페이지네이션
- 인기순 필터링 
- 검색 기능 <br/>
: new URLSearchParams 이용, 상품 페이지에서만 검색 가능 <br/><br/>
![url](https://user-images.githubusercontent.com/53929795/172033797-933ac7d4-3c4a-479c-8d06-d11019521b32.png)


### firebase 배포 
