//最初に読み込みで変数全部持ってくる
window.onload = function(){
    const selectElement = document.getElementById('select_type');
    const div_farm = document.getElementById("farm");
    const div_mod = document.getElementById("mod")
    selectElement.onchange=type.bind(null,selectElement,div_farm,div_mod)
    type(selectElement,div_farm,div_mod)

    const select_farm_item=document.getElementById("select_farm_item")
    const item=items
    const item_list = JSON.parse(item)
    create_select(select_farm_item,item_list)
    console.log('load complete!');
}

//selectによってfarmかmodの表示を切り替える
function type(selectElement,div_farm,div_mod) {
    const search_value=selectElement.value;
    if(search_value==="defult"){
        div_farm.classList.remove('is-show');
        div_mod.classList.remove('is-show');
    }
    else 
    if(search_value==="farm"){
        hide_show(div_mod,div_farm);
    }else if(search_value==="mod"){
        hide_show(div_farm,div_mod);
    }
}
async function hide_show(hide,show){
    await hide.classList.remove('is-show');
    await show.classList.add('is-show');
}


//farmの要素をtaglistから生成する
function create_select(farm_item,item){
    const list_length=Object.keys(item).length
    for(let i=1;i<=list_length;i++){
        let option = document.createElement("option");
        option.value=item[i]
        option.text=item[i]
        farm_item.appendChild(option);
    }
}