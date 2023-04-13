// const some_func =() =>{
//     // console.log(2**2)
//     return 2**2
// }

const openSideBar = () => {
        document.getElementById("mysidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
}

const closeSideBar = () => {
    document.getElementById("mysidenav").style.width = "0";
    document.getElementById("main").style.width = "0";

}