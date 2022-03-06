import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGR_kDBzqmSGrZUzV3Pchj3XcBoK1Xgro",
  authDomain: "mywebclonecoding.firebaseapp.com",
  projectId: "mywebclonecoding",
  storageBucket: "mywebclonecoding.appspot.com",
  messagingSenderId: "482411877269",
  appId: "1:482411877269:web:79742c06d6a320de269c9c",
  measurementId: "G-M9H3XPD1BK",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export default auth;

{/*
  module not found: error: package path . is not exported from package c:\dev\myweb\myweb\node_modules\firebase
  export 'initializeapp' (imported as 'initializeapp') was not found in 'firebase/app' (possible exports: default)
  export 'default' (imported as 'firebase') was not found in './fb.js' (possible exports: auth, signinwithgoogle)
  firebase를 이용해 구글 로그인 연동을 해주는데 계속 위와 같은 에러가 났다
  개빡쳐서 5시간동안 구글을 뒤졌다
  그러다 찾은 해답 (시이발)
    => 내가 설치한 firebase의 웹버전이 *10* 이었다
  웹버전 8에서 쓰이는 코드를 9에서도 쓸 수 있게 전부 다 뜯어고쳐도 계속 에러 난 이유가 이거였다
  씨이이이이이이이이이벌
  npm i firebase@9.6.8 을 해서 firbase의 웹 버전을 9로 맞춰줬다
  다시 실행해보니 에러창은 안났는데 아니 시벌 이젠 페이지에 아무것도 뜨지 않았다
  f12를 눌러 무슨 오류가 났는지 살펴봤다
  내 api key가 유효하지 않다고 떴다. 그럴리가 없잖아;;;
  다시 또 30분간 구글링...
  ㅋㅋ 결과는 어이없게도 apiKey를 piKey라고 오타내서 에러가 난거였다
  오타를 고쳐주니 드디어 제대로 실행이 되었다
  구글 로그인창도 잘 뜨고 console.log를 찍어보니 로그인도 잘 되었다
  하............
  수고많았다 나자신
  기특해.....쉬벌 ㅜㅜ
*/}
