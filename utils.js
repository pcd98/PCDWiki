
function pick(cat){
    if(cat == 'cars'){
        window.location.href = cat+'.html'
    }else{
        alert('404: Plik «'+cat+'.html» nie istnieje! Funkcja jeszcze niezaimplementowana.')
    }
}
