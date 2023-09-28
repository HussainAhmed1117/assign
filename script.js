var items=document.getElementsByClassName('list-group-item');
// items[0].style.fontWeight='bold';
// items[1].style.fontWeight='bold';
// items[2].style.fontWeight='bold';
// items[3].style.fontWeight='bold';
// items[2].style.backgroundColor='green'

// var item1=document.getElementsByClassName('group-item');
// item1[0].style.backgroundColor='green'
// var item2=document.getElementsByTagName('li');
// for(let i=0;i<item2.length;i++)
// {
//     item2[i].style.fontStyle='italic';
// }
items[1].style.backgroundColor='green';
items[2].style.display='none';
for(let i=0;i<items.length;i++)
{
    if(i%2!=0)
    {
        items[i].style.backgroundColor='green';
    }
}
