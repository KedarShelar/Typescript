function Chkstring (StrMarvellous:string) : string {
    const keyword : string = "marvellous";
    if(StrMarvellous.toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
        return "String contains marvellous in it";
    }else{
        return "String does not contain marvellous in it";
    }
}

console.log(Chkstring("Pune Kothrud Marvellous Infosystem"))