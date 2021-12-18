# 🔥 Twitter

<img src="./README/twitter.png" alt="twitter" width="100%" />
> 항해99 트위터 클론코딩 주차 결과물 입니다.

<br />   
  
- [\[사이트 바로가기\]](http://?)  
- [\[시연영상 구경하기\]](http://??)

<br />

### 🖥️ Twitter Page View!

<p>
  <img src="./README/1.png"  width="50%" />
  <img src="./README/2.png" width="50%" />
  <img src="./README/3.png"  width="50%" />
  <img src="./README/4.png" width="50%" />
  <img src="./README/5.png"  width="50%" />
</p>

# 👥 멤버

- Back-end: [김주영](https://github.com/JooYoung2274), [이상협](https://github.com/23hh)
- Front-end: [전용태](https://github.com/yong313), [정민수](https://github.com/Chungune)
- [\[Front-End Github\]](https://github.com/CloneCoding-Twitter/Twitter-Front-End)
  <br />

# 🗓 프로젝트 기간

- 2021년 12월 13일 ~ 2021년 12월 18일 (6일 간)

<br />

# ⚙️ 기술 스택

### Back-End

<div>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">

</div>

### Front-End

<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=black">
  <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">  
  
</div>

<br />

# 📌 API 명세서

- 연애의 참견 API
  | 페이지 | 기능 | Method | URL | Request | Response |
  | --- | --- | --- | --- | --- | --- |
  | 회원가입 | 회원가입 | POST | /api/user/signupme | {
  loginId:
  nickname:
  password:
  passwordCheck:
  } | |
  | | 아이디 중복확인 | POST | /api/user/idcheck | {
  loginId:
  } | |
  | | 닉네임 중복확인 | POST | /api/user/nickcheck | {
  nickname:
  } | |  
   | 로그인 | 로그인 | POST | /api/user/login | {
  loginId:
  password:
  }| {
  loginId:
  nickname:
  } | |
  | 메인페이지 | 게시글 작성 | POST | /api/article |{
  formdata: {
  content:
  img:
  }
  }| {
  article:{
  id:
  loginId:
  nickname:
  content:
  image:
  }
  }|
  | | 게시글 삭제 | DELETE | DELETE | | |
  | 상세페이지 | 상세페이지 불러오기 | GET | /api/article/:articleId | | {
  article: {
  id:
  loginId:
  nickname:
  content:
  img:
  }
  }|
  | | 코멘트 불러오기 | GET | /api/article/:articleId/comment | | {
  comments:{
  id:
  loginId:
  nickname:
  comment
  }
  }|
  | | 코멘트 작성 | POST | /api/article/:articleId/comment |{
  comment:
  } | {
  id:
  comment:
  loginId:
  nickname:
  } | |
  | | 코멘트 삭제 | DELETE | /api/article/:articleId/comment/:commentId | | |

<br />

# 🔑 페이지 설명

- 로그인 페이지  
  \- 가입된 회원의 정보와 일치하는지 확인 후, 일치할 경우 로그인 성공
- 회원가입 페이지  
  \- 아이디 : 중복확인 / 영어 소문자 필수, 영어 대문자, 숫자 선택 3글자 이상  
  \- 닉네임 : 중복확인 / 영어 소문자 필수, 영어 대문자, 숫자 선택 3글자 이상  
  \- 비밀번호 : 영어 소문자 필수, 영어 대문자, 숫자 선택 3글자 이상  
  \- 비밀번호 확인 : 위 비밀번호와 일치하는지 확인
- 메인 페이지  
  \- 전체 게시글 조회 기능
  \- 로그인 유저 정보 보여주기
  \- 글 + 이미지 작성
- 게시글 상세 페이지  
  \- 클릭한 게시글 조회 정보
  \- 게시글 삭제 기능
  \- 해당 게시글에 달린 전체 댓글 조회 기능
  \- 댓글 삭제 기능

<br />
