// let 이름 :string[] = ['kim', 'park'];
// let 이름 :{name? : string} = {name : '이지연'};  /* ? : name속성은 옵션임. 안들어와도 에러내지 않게해줌  */

/* 타입 변수에 담아 사용하기 type alias */
/* 다양한 타입이 들어올 수 있게하려면 : Union Type */
type Name = string|number;  
let 이름 : Name = 'kim';   

/*  함수에 타입지정 
    parameter 타입지정,
    return값 타입지정
*/
function 함수(x:number) : number{
    return x * 2;
}
함수(123);

/* array에 쓸 수 있는 tuple 타입 */
/* type Member = [number, boolean];
let john:Member = [123, true];
 */

type Member = {
    /* name : string */ /* name말고도 age:string ...등 타입지정해야될 속성이 너무 많으면 */
    [key:string] : string   /* 글자로 된 모든 object속성의 타입은 :string */
}
let john:Member = { name : 'kim'}

/* class타입 지정 가능 */
class User{
    name :string;   /* 미리 변수로 빼서 타입지정해야됨 */
    constructor(name: string){
        this.name = name;
    }
}


let 회원들:(string|number)[] = [123, '가나다'];
let 오브젝트:{a : string|number} = { a : 123 };

/* any 모든 자료형 허용해줌, ts가 실드(타입)를 씌워준다면 이건 실드해제하는 문법, 일반 js로 만드는것과 같다 */
/* let 애니 : any;
애니 = 123;
애니 = true;
 */

let 언노운 : unknown;
언노운 = 123;
언노운 = true;

// let 변수1 :string = 언노운;  => 에러남
// 언노운 - 1 => 이런것도 안됨 unknown은 number 타입이 아님
// 타입 엄격하게 지켜야함

let 나이 :string|number;
// 나이 + 1;    => 에러남
/* 
왜 타입 맞는데 +1이 안되는 것?
- 타입스크립트는 타입 엄격한 것 좋아함

string + 1 (허용)
number + 1 (허용)
string|number + 1 (안됨) 
*/






/* 근데 타입스크립트가 자동으로 타입을 부여해줌 */







