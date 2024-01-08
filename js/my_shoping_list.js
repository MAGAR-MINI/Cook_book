function shoping_list(num, data, diners) {
    var title_my_shopping_list = document.createElement("h1");
    title_my_shopping_list.className = "title_my_shopping_list";
    title_my_shopping_list.innerHTML = "My shopping List";
    document.getElementById('my_shopping_list').appendChild(title_my_shopping_list);

    for (var i = 0; i < num; i++) {

        // יצירת div 
        var shoping_element = document.createElement("div");
        shoping_element.className = "shoping_element";
        shoping_element.id = "shoping_element_" + i;
        document.getElementById('my_shopping_list').appendChild(shoping_element);

        var unit = data['extendedIngredients'][i]['unit'];
        var originalName = data['extendedIngredients'][i]['originalName'];

        // אפשרות להוספה והורדה של מוצרים
        var change_amount = document.createElement('input');
        change_amount.className = 'change_amount';
        change_amount.type = "number";
        change_amount.value = data['extendedIngredients'][i]['amount'] / data['servings'] * diners;
        shoping_element.appendChild(change_amount);

        // הצגת שם המוצר
        var shoping_element_text = document.createElement('p');
        shoping_element_text.className = "shoping_element_text";
        shoping_element_text.innerText = unit + " " + originalName;
        shoping_element.appendChild(shoping_element_text);

        // כפתור מחיקת מוצר מהרשימה 
        var button_remove = document.createElement('button');
        button_remove.className = 'button_remove';
        button_remove.innerHTML = "x";
        button_remove.id = "shoping_element_" + i;
        button_remove.addEventListener('click', (function (id) {
            return function () {
                playId(id);
            }
        })(button_remove.id));
        shoping_element.appendChild(button_remove);
    }

    function playId(id) {
        document.getElementById(id).remove();
        console.log(document.getElementById(id));
    }
}