const d=document,
$table=d.querySelector(".postales-table"),
$template=d.getElementById("postales-template").content,
$fragment=d.createDocumentFragment();


//fech

const getAll =async()=>{

    //try{
        let res=await fetch("https://api.republicofdevs.com/api/v1/zipcodes"),
        json=await res.json();

        if(!res.ok) throw {status:res.status,statusText:res.status.statusText}

        jsoncontenido=(json.content);
        console.log(json)
        console.log(jsoncontenido);
        
        jsoncontenido.forEach(Element => {
            console.log(Element);
            
            $template.querySelector('.Id').textContent =Element.id;
            $template.querySelector('.CodigoPostal').textContent =Element.codigoPostal;
            $template.querySelector('.Asentamiento').textContent =Element.asentamiento;
            $template.querySelector('.ciudad').textContent =Element.ciudad;

            let $clone= d.importNode($template,true);
            $fragment.appendChild($clone);
            
            
        });
        $table.querySelector("tbody").appendChild($fragment);
    /*}catch(err){
        let message=err.statusText || "ocurrio un error :(";
        $table.insertAdjacentHTML("afterend",`<p><b>Error ${err.status}:${message}</b></p>`)
    }*/
}
d.addEventListener("DOMContentLoaded",getAll)
