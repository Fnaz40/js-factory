function laptop(lapName, lapColor, lapFeature, lapMemory) {
    return {
        "name": lapName,
        "color": lapColor,
        "feature": lapFeature,
        discription: function () {
            console.log(`${this.name} is amazing for work and ${this.name} features awesome.`);
        },
        "memory": lapMemory
    }
}
let laptopBox = laptop("Acer", "Gray", ["Screen-touch", "Wireless-display", "Purified-Voice", "Camera"], ["8-GB DDR3", "500-GB HDD", "64-bit"]);


function dress(dessColor, dressEmbriod){
    return{
        "color": dessColor,
        design: function(){
            console.log(`This dress is printed chack style designer dress.`);
        },
        "launch": 2019,
        "embroidery": dressEmbriod
    }
}

let dressBox = dress(["white", "black", "red", "yellow", "pink", "blue"], "shafoon");

function mobCompany(mobNAme, mobColor, mobFeatures, mobNo){
    return{
        "name": mobNAme,
        "color": mobColor,
        "features": mobFeatures,
        "no": mobNo,
        about: function(){
            console.log(`its dual sim mobile and ${this.name} bettery is best.`)
        }
    }
}
 let comapnyBox = mobCompany("Samsung", "white", ["4gb Ram", "8gb Rom", "16gb memory"], 2302546565);















