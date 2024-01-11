// document.addEventListener("DOMContentLoaded", function() {

function print_favorite(arr_favorite) {

    var favorite_food = document.createElement("div");
    favorite_food.className = "favorite_food";
    //favorite_food.id = arr_favorite.length;
    document.body.appendChild(favorite_food);
//

    for (var i = 0; i < arr_favorite.length; i++) {

        //יצירת תגית כללית למאכל
        var divElement = document.createElement("button");
        divElement.className = "food_div";
        divElement.addEventListener('click', function (i) {
            console.log("arr_favorite = " + arr_favorite[0].diners);
            shoping_list(((arr_favorite[i].extendedIngredients), (arr_favorite[i]), (arr_favorite[i].diners)));
        });
        favorite_food.appendChild(divElement);

        // יצירת תגית תמונה
        var imgElement = document.createElement("img");
        imgElement.src = arr_favorite[i].image;
        imgElement.className = "picture_food";
        divElement.appendChild(imgElement);

        //יצירת תגית כללית לתיאור
        var divForText = document.createElement("div");
        divForText.className = "title_for_food_div";
        divElement.appendChild(divForText);

        // יצירת תגית כותרת
        var divTitle = document.createElement("h4");
        divTitle.className = "title_for_food";
        divTitle.innerHTML = arr_favorite[i].title;
        divForText.appendChild(divTitle);

        // יצירת תגית תיאור
        var divText = document.createElement("h5");
        divText.className = "description_of_food";
        divText.innerHTML = arr_favorite[i].title;
        divForText.appendChild(divText);
    }
}
// })








