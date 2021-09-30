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
  > > ducks는 3가지 주의점이 존재
  > >
  > > 1.  다른 모듈과 이름이 중복 되지 않도록, 액션 이름 앞에 **접두사**를 붙이는 것<br/>(ex. /counter/ADD_COUNT)
  > > 2.  모든 액션 생성 함수를 **export**할 것
  > > 3.  리듀서 함수는 **export default**를 사용할 것

<br/>

---

## 리액트에서 redux 사용하기

- install react-redux

```javaScript
yarn add react-redux
```
