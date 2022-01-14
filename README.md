<div style="text-align: center;"><h1>원티드 프리온보딩 코스<br />
프론트엔드 선발 과제</h1></div>

## 🚀 배포

🔗 **과제물**(Netlify): [https://pre-onboarding-hyo-choi.netlify.app/](https://pre-onboarding-hyo-choi.netlify.app/)
<br />
🔗 **Storybook**: [https://main--61df0caa24fa0d004afe84fa.chromatic.com/](https://main--61df0caa24fa0d004afe84fa.chromatic.com/)

<br/>

## ℹ️ 프로젝트 정보
### 개발 기간
2022.01.11(화) ~ 2022.01.14(금), 총 4일
### 개발 목적
[위코드 X 원티드] 프론트앤드 프리온보딩 선발 과제를 해결합니다.
### 개발 내용
- 원티드 페이지 상단 영역(GNB+Carousel)을 React 기반으로 클론합니다.
  - GNB는 마크업(HTML+CSS)만 작업합니다.
  - Carousel은 라이브러리를 사용하지 않고 원티드 사이트와 동일하게 구현합니다.
- 반응형을 지원하도록 작업합니다.
- Netlify로 배포합니다.

<br />

## 🧰 기술 스택
[![Netlify Status](https://api.netlify.com/api/v1/badges/9bbb7ca1-7465-40de-9ebb-ec2b402af0d6/deploy-status)](https://app.netlify.com/sites/pre-onboarding-hyo-choi/deploys) <br />
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

- Netlify를 통해 과제를 배포했습니다.
- React에서 Typescript 기반으로 개발했습니다.
  - 원티드 측에 문의하여 Typescript 사용 가능 여부를 확인한 후 진행했습니다.
- CSS module과 SASS를 이용해 스타일링했습니다.
- Storybook을 통해 반응형 UI를 개발하고 Chromatic으로 배포했습니다.
- commit convention으로 [gitmoji](https://gitmoji.dev/)를 이용했습니다.

<br />

## 📁 디렉토리 구조
```bash
.
├── public
└── src
    ├── Icons
    ├── components     # 컴포넌트 목록
    │   ├── MenuItem  # GNB 내부 컴포넌트
    │   ├── NavBar    # GNB 컴포넌트
    │   ├── SlideItem # Carousel 내부 컴포넌트
    │   └── Slider    # Carousel 컴포넌트
    ├── constants
    ├── hooks     # custom hooks
    └── utils
```

<br />

## 📚 Etc.

- [개발 중 마주친 이슈들과 해결/구현 방법 기록](https://github.com/hyo-choi/wanted-pre-onboarding/issues?q=is%3Aissue+is%3Aclosed)
