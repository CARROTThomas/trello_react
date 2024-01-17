export class GlobalConstant {
    public static token = localStorage.getItem("bearerToken")
    public static baseurl = "https://trello.thibautstachnick.com/api/"
    public static isLogged :boolean = localStorage.getItem("bearerToken") !== null
}