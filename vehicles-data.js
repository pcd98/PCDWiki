//-------------
// BAZA DANYCH
//-------------

// ↓ NIE ZAPOMNIJ HUJU JEBANY!
const IloscPojazdow = 7

const Car1 = [
'Fiat 126p', //Nazwa w rzeczywistości
'Flan 126p', //Nazwa w grze
'?', //Obraz [.png]
'Darmowy', //Cena [PLN]
'Fastback', //Typ nadwozia
'?', //Typ Napędu
'Benzyna', //Typ paliwa
'?', //Pojemność baku [l]
'Manualna', //Skrzynia biegów
'4', //Ilość biegów
'?', //Moc silnika [KM]
'129' //Maksymalna prędkość [km/h]
]

const Car2 = [
'Renault 9', //Nazwa w rzeczywistości
'Reno 9', //Nazwa w grze
'?', //Obraz [.png]
'?', //Cena [PLN]
'Sedan', //Typ nadwozia
'?', //Typ Napędu
'Benzyna', //Typ paliwa
'?', //Pojemność baku [l]
'Manualna', //Skrzynia biegów
'4', //Ilość biegów
'?', //Moc silnika [KM]
'150' //Maksymalna prędkość [km/h]
]

const Car3 = [
'Smart Fortwo', //Nazwa w rzeczywistości
'SM Forfew', //Nazwa w grze
'?', //Obraz [.png]
'Nie na sprzedaż', //Cena [PLN]
'Hatchback', //Typ nadwozia
'?', //Typ Napędu
'Benzyna', //Typ paliwa
'?', //Pojemność baku [l]
'Manualna', //Skrzynia biegów
'6', //Ilość biegów
'?', //Moc silnika [KM]
'127' //Maksymalna prędkość [km/h]
]

const Car4 = [
'FSO Polonez', //Nazwa w rzeczywistości
'FSA Coret', //Nazwa w grze
'?', //Obraz [.png]
'?', //Cena [PLN]
'Liftback', //Typ nadwozia
'?', //Typ Napędu
'Benzyna', //Typ paliwa
'?', //Pojemność baku [l]
'Manualna', //Skrzynia biegów
'5', //Ilość biegów
'?', //Moc silnika [KM]
'157' //Maksymalna prędkość [km/h]
]

const Car5 = [
'Vw Golf II', //Nazwa w rzeczywistości
'Wv Gold II', //Nazwa w grze
'?', //Obraz [.png]
'?', //Cena [PLN]
'Hatchback', //Typ nadwozia
'?', //Typ Napędu
'Benzyna', //Typ paliwa
'?', //Pojemność baku [l]
'Manualna', //Skrzynia biegów
'4', //Ilość biegów
'?', //Moc silnika [KM]
'167' //Maksymalna prędkość [km/h]
]

const Car6 = [
'Toyota Corolla E82', //Nazwa w rzeczywistości
'Toyama Corona E82', //Nazwa w grze
'?', //Obraz [.png]
'?', //Cena [PLN]
'Sedan', //Typ nadwozia
'?', //Typ Napędu
'Olej napędowy', //Typ paliwa
'?', //Pojemność baku [l]
'Manualna', //Skrzynia biegów
'5', //Ilość biegów
'?', //Moc silnika [KM]
'187' //Maksymalna prędkość [km/h]
]

const Car7 = [
'Audi 80 B4', //Nazwa w rzeczywistości
'Erbe 80', //Nazwa w grze
'?', //Obraz [.png]
'?', //Cena [PLN]
'Sedan', //Typ nadwozia
'?', //Typ Napędu
'Olej napędowy', //Typ paliwa
'?', //Pojemność baku [l]
'Manualna', //Skrzynia biegów
'5', //Ilość biegów
'?', //Moc silnika [KM]
'163' //Maksymalna prędkość [km/h]
]

//---------------------
// WYŚWIETLANIE DANYCH
//---------------------

for(let n = 1; n <= IloscPojazdow; n++){
    
    document.write("<table>")
    
      document.write("<tr>")
        document.write("<th class='veh-model' colspan='6'>")
          document.write("<h2>"+eval('Car'+n+'[1]')+"ㅤ/ㅤ"+eval('Car'+n+'[0]')+"</h2>")
        document.write("</th>")
      document.write("</tr>")
    
      document.write("<tr>")
        document.write("<td rowspan='4'>")
          document.write("<img src='"+eval('Car'+n+'[2]')+".png"+"'>")
        document.write("</td>")
        document.write("<th>")
          document.write("Cena w komisie")
        document.write("</th>")
        document.write("<th>")
          document.write("Typ nadwozia")
        document.write("</th>")
        document.write("<th>")
          document.write("Napęd")
        document.write("</th>")
        document.write("<th>")
          document.write("Typ paliwa")
        document.write("</th>")
        document.write("<th>")
          document.write("Pojemność baku")
        document.write("</th>") 
      document.write("</tr>")
    
      document.write("<tr>")
        document.write("<td>")
          document.write(eval('Car'+n+'[3]'))
          if(eval('Car'+n+'[3]') >= 0){
              document.write("zł")
          }
        document.write("</td>")
        document.write("<td>")
          document.write(eval('Car'+n+'[4]'))
        document.write("</td>")
        document.write("<td>")
          document.write(eval('Car'+n+'[5]'))
        document.write("</td>")
        document.write("<td>")
          document.write(eval('Car'+n+'[6]'))
        document.write("</td>")
        document.write("<td>")
          document.write(eval('Car'+n+'[7]')+"l")
        document.write("</td>") 
      document.write("</tr>")
    
      document.write("<tr>")
        document.write("<th>")
          document.write("Moc silnika")
        document.write("</th>")
        document.write("<th>")
          document.write("Max prędkość")
        document.write("</th>")
        document.write("<th>")
          document.write("Skrzynia biegów")
        document.write("</th>")
        document.write("<th>")
          document.write("Liczba biegów")
        document.write("</th>") 
        document.write("<th>")
          document.write("Wkrótce")
        document.write("</th>")
      document.write("</tr>")
    
      document.write("<tr>")
        document.write("<td>")
          document.write(eval('Car'+n+'[10]')+"KM")
        document.write("</td>")
        document.write("<td>")
          document.write(eval('Car'+n+'[11]')+"km/h")
        document.write("</td>")
        document.write("<td>")
          document.write(eval('Car'+n+'[8]'))
        document.write("</td>")
        document.write("<td>")
          document.write(eval('Car'+n+'[9]'))
        document.write("</td>")
        document.write("<td>")
          document.write("—")
        document.write("</td>")
      document.write("</tr>")
    
    document.write("</table><br>")
    
}


