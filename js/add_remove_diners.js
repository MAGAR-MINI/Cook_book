function add_diners(diners, data){
    var num = data['extendedIngredients'].length;

    diners = diners + 1;
    for (var i = 0; i < num; i++) {

        var amount = data['extendedIngredients'][i]['amount'] / data['servings'] * diners;
        var unit = data['extendedIngredients'][i]['unit'] ;
        var originalName = data['extendedIngredients'][i]['originalName'];

        document.getElementById("components_" + i).innerHTML = amount+ " " +unit+" " +originalName;
    }

    return diners;
}

function remove_diners(diners, data){
    var num = data['extendedIngredients'].length;

    diners = diners - 1;
    for (var i = 0; i < num; i++) {
        console.log(data);

        var amount = data['extendedIngredients'][i]['amount'] / data['servings'] * diners;
        var unit = data['extendedIngredients'][i]['unit'];
        var originalName = data['extendedIngredients'][i]['originalName'];

        document.getElementById("components_" + i).innerHTML = amount+ " " +unit+" " +originalName;
    }

    return diners;}