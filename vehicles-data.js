
//-------------
// BAZA DANYCH
//-------------

// ↓ NIE ZAPOMNIJ HUJU JEBANY!
const IloscPojazdow = 3

const Car1 = [
'Fiat 126p', //Nazwa w rzeczywistości
'Flan 126p', //Nazwa w grze
'car', //Obraz [.png]
'Darmowy', //Cena [PLN]
'Fastback', //Typ nadwozia
'RWD', //Typ Napędu
'Benzyna', //Typ paliwa
0, //Pojemność baku [l]
'Manualna', //Skrzynia biegów
4, //Ilość biegów
25, //Moc silnika [KM]
129 //Maksymalna prędkość [km/h]
]

const Car2 = [
'Renault 9', //Nazwa w rzeczywistości
'Reno 9', //Nazwa w grze
'car', //Obraz [.png]
420, //Cena [PLN]
'Sedan', //Typ nadwozia
'RWD', //Typ Napędu
'Benzyna', //Typ paliwa
0, //Pojemność baku [l]
'Manualna', //Skrzynia biegów
4, //Ilość biegów
25, //Moc silnika [KM]
150 //Maksymalna prędkość [km/h]
]

const Car3 = [
'Smart Fortwo', //Nazwa w rzeczywistości
'SM Forfew', //Nazwa w grze
'car', //Obraz [.png]
'Nie na sprzedaż', //Cena [PLN]
'Hatchback', //Typ nadwozia
'RWD', //Typ Napędu
'Benzyna', //Typ paliwa
0, //Pojemność baku [l]
'Manualna', //Skrzynia biegów
6, //Ilość biegów
25, //Moc silnika [KM]
127 //Maksymalna prędkość [km/h]
]

//---------------------
// WYŚWIETLANIE DANYCH
//---------------------

for(let n = 1; n <= IloscPojazdow; n++){
    
    document.write("<table>")
    
      document.write("<tr>")
        document.write("<th class='veh-model' colspan='6'>")
          document.write(eval('Car'+n+'[1]')+"ㅤ/ㅤ"+eval('Car'+n+'[0]'))
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


