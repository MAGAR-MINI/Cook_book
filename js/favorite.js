document.addEventListener("DOMContentLoaded", function() {

    var button_favorite_food = document.getElementById("button_favorite_food");
    var arr_favorite_food = [];
  
    button_favorite_food.addEventListener('click', function () {

        var favorite_food = document.createElement("div");
        favorite_food.className = "favorite_food";
        document.body.appendChild(favorite_food);

        for (let i = 0; i < arr_favorite_food.length; i++) {

            //יצירת תגית כללית למאכל
            var divElement = document.createElement("button");
            divElement.className = "food_div";
            divElement.addEventListener('click', function () {
                // print_data((arr_favorite[i].id));
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
    });
  });
  