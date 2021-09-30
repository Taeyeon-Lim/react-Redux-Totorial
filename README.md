# redux Tutorial

- install redux

```javaScript
yarn add redux
```

- react 없이, 초기 상태 생성(not undefined), 4가지 액션, 리듀서 및 스토어 생성
- redux에서 store 호출, 구독

<br/>

---

## redux 모듈

- **리덕스 모듈이란?** : 액션 타입, 액션 생성 함수, 리듀서

- **Ducks 패턴**
  > redux 사용을 위해서, 공식 문서에서는 actions와 reducer를 다른 파일에서 관리하지만,
  > 대부분의 actions, reducer는 하나의 짝으로 함께 동작한다
  >
  > > 따라서, **모듈(액션 타입 + 액션 생성 함수 + 리듀서)들을 한 곳에서 하나의 모듈로 관리하자!**
