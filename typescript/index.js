// let 이름 :string[] = ['kim', 'park'];
// let 이름 :{name? : string} = {name : '이지연'};  /* ? : name속성은 옵션임. 안들어와도 에러내지 않게해줌  */
var 이름 = 'kim';
/*  함수에 타입지정
    parameter 타입지정,
    return값 타입지정
*/
function 함수(x) {
    return x * 2;
}
함수(123);
var john = { name: 'kim' };
/* class타입 지정 가능 */
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var 회원들 = [123, '가나다'];
var 오브젝트 = { a: 123 };
/* any 모든 자료형 허용해줌, ts가 실드(타입)를 씌워준다면 이건 실드해제하는 문법, 일반 js로 만드는것과 같다 */
/* let 애니 : any;
애니 = 123;
애니 = true;
 */
var 언노운;
언노운 = 123;
언노운 = true;
// let 변수1 :string = 언노운;  => 에러남
// 언노운 - 1 => 이런것도 안됨 unknown은 number 타입이 아님
// 타입 엄격하게 지켜야함
var 나이;
// 나이 + 1;    => 에러남
/*
왜 타입 맞는데 +1이 안되는 것?
- 타입스크립트는 타입 엄격한 것 좋아함

string + 1 (허용)
number + 1 (허용)
string|number + 1 (안됨)
*/
/* 근데 타입스크립트가 자동으로 타입을 부여해줌 */
