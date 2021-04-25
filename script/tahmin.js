

const key = 'HpFGz6LueytrkJvt38eA92uNdPcAkHIC';

const havaDurumuGetir = async(id)=>{
    const temelUrl='http://dataservice.accuweather.com/currentconditions/v1/';
    const sorgu = `${id}?apikey=${key}`;

    const res = await fetch(temelUrl+sorgu);
    const veri = await res.json();

    return veri[0];
};


const sehirGetir = async(konum)=>{
    // url 'in sonuna parametre ekleyeceğimiz zaman, ekleyeceğimiz parametreyi '?' 'den sonra yapmalıyız
    // ve birden fazla parametre oldugunda da parametreler arası '&' ile ayırmalıyız.
    // Taslak:`url?parametre1=${}&parametre2=${}&parametre3=${}`;
    const temelUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const sorgu= `?apikey=${key}&q=${konum}`;

    const res = await fetch(temelUrl+sorgu);
    const veri = await res.json();
    return veri[0];
};



/*
sehirGetir('newyork')
.then(veri=>{
    return havaDurumuGetir(veri.Key);
})
.then(veri=>{
    console.log(veri);
})
.catch(err=>{
    console.log(err);
});
*/


