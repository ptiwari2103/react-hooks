const products = [
{title:"Mangeo",id:1,isFruit:true},
{title:"Apple",id:1,isFruit:true},
{title:"Onion",id:1,isFruit:false},
];

export default function Soppinglist(){
    const listitems = products.map(product =>
        <li key={product.id} style={{color: product.isFruit?'green':'red'}}>{product.title}</li>
        );

    return (
        <ul>{listitems}</ul>
    );
}