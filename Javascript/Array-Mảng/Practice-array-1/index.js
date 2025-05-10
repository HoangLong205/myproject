let girls = ["Lan", "Hoa", "Dao", "Huong"];
let boys = ["Ti", "Teo", "Tuat", "Hoi"];
let count = girls.length > boys.length ? boys.length : girls.length;
for (var i = 0; i < count; i++) {
    console.log('Cap ' + i + ': ' + girls[getRandomGirlIndex(girls)] + ' - ' + boys[getRandomBoyIndex(boys)]);
}

function getRandomGirlIndex(girl) {
    var girlIndex = Math.floor(Math.random() * girl.length);
    return girlIndex;
}

function getRandomBoyIndex(boy) {
    var boyIndex = Math.floor(Math.random() * (boy.length - 1) );
    return boyIndex;
}
