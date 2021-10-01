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
  > > 따라서, **모듈(액션 타입 + 액션 생성 함수 + 리듀서)들을 한 곳에서 하나의 모듈로 관리!**
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

<br/>

- **컨테이너 컴포넌트와 프리젠테이셔널 컴포넌트**
  <br>

  > <img src="https://user-images.githubusercontent.com/54977412/135451815-19a30932-07e9-4655-ba28-68fa81d8e872.png" width="500px">
  >
  > 리덕스 창시자는 [컨테이너 컴포넌트] 와 [프리젠테이셔널 컴포넌트]를 분리해서 사용하는 방안을 제안했었으나,  
  > 현재는 훅이 있으니, 분리해서 사용하지 않아도 된다고 말하고 있으므로  
  > 편한 방법을 찾아서 사용하라고 했다

<br/>

- **redux 개발 툴킷 설치**

1. 크롬 웹 스토어 확장프로그램 설치
2. 터미널에도 설치

```javaScript
yarn add redux-devtools-extension
```

3. 스토어 생성 파일에서 코드 추가

```javaScript
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools()); // 스토어 생성(2번째 인자에 추가)
```

<br/>

- **제안된 방법으로 투두-리스트 만들기**

  > 1. 프리젠테이셔널 컨포넌트 생성(components/todos.js)
  > 2. 컨테이너 컴포넌트 생성(containers/TodosContainer.js)
  > 3. 스토어의 디스패치 사용
  >
  > 투두-item이 불필요하게 렌더링 되므로, memo를 사용한 최적화

<br/><br/>
