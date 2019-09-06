// 이곳에서 많은 함수들을 추가된다. MVC패턴에 의해서 나누는 과정이 꼭 필요.

/*

    function lalalalal () {
        return true
    }

    이것과

    lalalalal = () => true 이것은 같은 것이다. 

    즉 밑에 arrow function에서 무언가 리턴하고 싶다면, 밑에 코드 처럼 작성하면 된다. 정리하면 true를 리턴하는 함수이다.
*/

export const join = (req, res) => res.render("join", { pageTitle: "Join"});
export const login = (req, res) => res.render("login", { pageTitle: "Login"});
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout"});
export const users = (req, res) => res.render("users", { pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password"});