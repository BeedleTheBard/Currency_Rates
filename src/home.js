import React,{useState} from 'react';

function Home(){
    const [targetlist,setTargetlist]=useState([]);
    const [conversion,setConversion]=useState(true);
    const [source,setSource]=useState("");
    const Exchangedata={
        'Arabic Dirham(AED)': 0.048,

        'Afghani(AFN)': 1.16,

        'Lek(ALL)': 1.46,

        'Netherlands Guilder(ANG)': 0.024,

        'Kwanza(AOA)': 5.97,

        'Argentine Peso(ARS)': 1.44,

        'Australian Dollar(AUD)': 0.017,

        'Guilder(AWG)': 0.024,

        'Manat(AZN)': 0.022,

        'Convertible Mark(BAM)': 0.023,

        'Barbadian Dollar(BBD)': 0.026,

        'Taka(BDT)': 1.13,

        'Bulgarian Lev(BGN)': 0.023,

        'Bahrain Dinar(BHD)': 0.0049,

        'Burundi Franc(BIF)': 26.35,

        'Bermudian Dollar(BMD)': 0.013,

        'Brunei Dollar(BND)': 0.018,

        'Boliviano(BOB)': 0.09,

        'Real(BRL)': 0.063,

        'Bahamian Dollar(BSD)': 0.013,

        'Ngultrum(BTN)': 1,

        'Pula(BWP)': 0.15,

        'Belarus Rubel(BYR)': 0.043,

        'Belize Dollar(BZD)': 0.026,

        'Canadian Dollar(CAD)': 0.016,

        'Congolais Franc(CDF)': 26.41,

        'Swiss Franc(CHF)': 0.012,

        'Chilean Peso(CLP)': 10.32,

        'Renminbi Yuan(CNY)': 0.083,

        'Colombian Peso(COP)': 49.57,

        'Colón(CRC)': 8.55,

        'Cuban Peso(CUP)': 0.31,

        'Cape Verdean Escudo(CVE)': 1.32,

        'Czech Krone(CZK)': 0.3,

        'Djibouti Franc(DJF)': 2.33,

        'Danish Krone(DKK)': 0.089,

        'Dominican Peso(DOP)': 0.72,

        'Algerian Dinar(DZD)': 1.87,

        'Egypt Pound(EGP)': 0.24,

        'Nakfa(ERN)': 0.196,

        'Birr(ETB)': 0.67,

        'Euro(EUR)': 0.012,

        'Fidschi Dollar(FJD)': 0.027,

        'Falklands Pound(FKP)': 0.00992,

        'Sterling Pound(GBP)': 0.00995,

        'Georgian Lari(GEL)': 0.042,

        'Guernsey Pound(GGP)': 0.01,

        'Ghana Cedi(GHS)': 0.099,

        'Gibraltar Pound(GIP)': 0.01,

        'Dalasi(GMD)': 0.71,

        'Guinea Franc(GNF)': 117,

        'Quetzal(GTQ)': 0.1,

        'Guyana Dollar(GYD)': 2.74,

        'Hong Kong Dollar(HKD)': 0.1,

        'Lempira(HNL)': 0.32,

        'Kuna(HRK)': 0.09,

        'Gourde(HTG)': 1.38,

        'Hungarian Forint(HUF)': 4.47,

        'Indonesian Rupiah(IDR)': 188.27,

        'Israeli Shekel(ILS)': 0.042,

        'Manx Pound(IMP)': 0.01,

        'Indian Rupee(INR)': 1,

        'Iraqi Dinar(IQD)': 19.14,

        'Iranian Rial(IRR)': 554.53,

        'Icelandic Krone(ISK)': 1.7,

        'Jersey Sterling Pound(JEP)': 0.009886686,

        'Jamaica Dollar(JMD)': 2.01,

        'Jordanian Dinar(JOD)': 0.0093,

        'Japanese Yen(JPY)': 1.6,

        'Kenian Schilling(KES)': 1.5,

        'Som(KGS)': 1.27,

        'Cambodian Riel(KHR)': 53.16,

        'Kiribati Dollar(KID)': 54.61,

        'Comorian Franc(KMF)': 5.87,

        'Won(KPW)': 16,

        'Won(KRW)': 16,

        'Kuwaiti Dinar(KWD)': 0.004,

        'Cayman Dollar(KYD)': 0.011,

        'Tenge(KZT)': 6.48,

        'Kip(LAK)': 152.73,

        'Lebanese Pound(LBP)': 19.89,

        'Sri Lanka Rupee(LKR)': 3.77,

        'Liberian Dollar(LRD)': 2,

        'Lesotho Loti(LSL)': 0.19,

        'Libyan Dinar(LYD)': 0.061,

        'Moroccan Dirham(MAD)': 0.13,

        'Leu(MDL)': 0.24,

        'Malagasy Ariary(MGA)': 52.44,

        'Denar(MKD)': 0.73,

        'Kyat(MMK)': 23.32,

        'Tugrik(MNT)': 38.46,

        'Macanese Pataca(MOP)': 0.11,

        'Ouguiya(MRO)': 0.48,

        'Mauritian Rupee(MUR)': 0.58,

        'Maldivian Rufiyaa(MVR)': 0.2,

        'Kwacha(MWK)': 10.73,

        'Mexican Peso(MXN)': 0.26,

        'Ringgit(MYR)': 0.055,

        'Metical(MZN)': 0.84,

        'Namibian Dollar(NAD)': 0.19,

        'Naira(NGN)': 5.45,

        'Córdoba Oro(NIO)': 0.47,

        'Norwegian Krone(NOK)': 0.11,

        'Nepalese Rupee(NPR)': 1.6,

        'New Zealand Dollar(NZD)': 0.019,

        'Omani Rial(OMR)': 0.005,

        'Panamanian Balboa(PAB)': 0.013,

        'Nuevo Sol(PEN)': 0.049,

        'Kina(PGK)': 0.046,

        'Philippine Peso(PHP)': 0.69,

        'Pakistanian Rupee(PKR)': 2.38,

        'Zloty(PLN)': 0.057,

        'Guaraní(PYG)': 91.38,

        'Qatari Rial(QAR)': 0.048,

        'Leu(RON)': 0.059,

        'Serbian Dinar(RSD)': 1.4,

        'Russian Rubel(RUB)': 1.34,

        'Rwandan Franc(RWF)': 13.33,

        'Saudi Rial(SAR)': 0.049,

        'Salomon Dollar(SBD)': 0.11,

        'Seychelles Rupee(SCR)': 0.19,

        'Sudanese Pound(SDG)': 5.86,

        'Swedish Krone(SEK)': 0.12,

        'Singapore Dollar(SGD)': 0.018,

        'St.-Helena Pound(SHP)': 0.01,

        'Leone(SLL)': 155.29,

        'Somalian Shilling(SOS)': 7.67,

        'Surinam Dollar(SRD)': 0.27,

        'South Sudanese Pound(SSP)': 1.724,

        'Dobra(STD)': 292.54,

        'Syrian Pound(SYP)': 6.665,

        'Swazi Lilangeni(SZL)': 0.19,

        'Thai Baht(THB)': 0.44,

        'Somoni(TJS)': 0.17,

        'Manat(TMT)': 0.046,

        'Tunesian Dinar(TND)': 0.039,

        "Pa'anga(TOP)": 0.029,

        'Turkish Lira(TRY)': 0.19,

        'Trinidad and Tobago Dollar(TTD)': 0.089,

        'Tuvaluan Dollar(TVD)': 0.0174,

        'New Taiwan Dollar(TWD)': 0.38,

        'Tansanian Shilling(TZS)': 30.40,

        'Hrywnja(UAH)': 0.39,

        'Ugandan Schilling(UGX)': 47.23,

        'US Dollar(USD)': 0.013,

        'Uruguay Peso(UYU)': 0.55,

        'Uzbekistan Sum(UZS)': 150.55,

        'Dong(VND)': 299.74,

        'Vatu(VUV)': 1.4746,

        'Tala(WST)': 0.03412,

        'Central African Franc(XAF)': 7.83,

        'East Caribbean Dollar(XCD)': 0.035,

        'West African Franc(XOF)': 7.82,

        'Pacific Franc(XPF)': 1.43,

        'Jemen Rial(YER)': 3.28,

        'South African Rand(ZAR)': 0.19,

        'Zambian Kwacha(ZMW)': 0.23,

        'Zimbabwe Dollar(ZWL)': 4.7285
    }


    function handleClicks(curr){
        var element=document.getElementById("source");
        var ilist=document.getElementById("slist");
        element.innerHTML=curr;
        element.appendChild(ilist);
        setSource(curr);
    }

    function handleClickt(curr){
        var element=document.getElementById("target");
        var ilist=document.getElementById("tlist");
        if(targetlist.indexOf(curr) <0){
            targetlist.push(curr);
        }
        else{
            targetlist.splice(targetlist.indexOf(curr), 1);
        }
        element.innerHTML=Object.keys(targetlist).length+' items selected';
        element.appendChild(ilist);
    }

    function handleconversion(){
        if(Object.keys(targetlist).length==0){
            alert("Please select target currency/currencies");
        }
        else if(source==null){
            alert("Please select a source currency");
        }
        else{
            setConversion(!conversion);
        }
    }

    const AddTable=()=>{
        return targetlist.map((k)=>{
            return <tr key={k}>
                    <td>{k}</td>
                    <td>{(Exchangedata[k]/Exchangedata[source]).toFixed(6)}</td>
                    <td>{(Exchangedata[source]/Exchangedata[k]).toFixed(6)}</td>
                </tr>;                   
            });
    }

    function handleReturn(){
        setConversion(!conversion);
    }

    return(
        <div>
            {conversion ? (
                <div>
                <div>
                    <h1>Welcome!</h1>
                </div>
                <div>
                    <button className="convertbutton" onClick={handleconversion}>Show conversion rates</button>
                </div>
                <div className='descriptor'>
                    <ul>
                        <li>Source:</li>
                        <li>Targets:</li>
                    </ul>
                </div>
                <div className='homepage'>
                    <ul>
                        <li id="source">Source Currency
                            <ul id="slist">
                                <li onClick={()=>handleClicks('Arabic Dirham(AED)')}>Arabic Dirham(AED)</li>

                                <li onClick={()=>handleClicks('Afghani(AFN)')}>Afghani(AFN)</li>

                                <li onClick={()=>handleClicks('Lek(ALL)')}>Lek(ALL)</li>

                                <li onClick={()=>handleClicks('Netherlands Guilder(ANG)')}>Netherlands Guilder(ANG)</li>

                                <li onClick={()=>handleClicks('Kwanza(AOA)')}>Kwanza(AOA)</li>

                                <li onClick={()=>handleClicks('Argentine Peso(ARS)')}>Argentine Peso(ARS)</li>

                                <li onClick={()=>handleClicks('Australian Dollar(AUD)')}>Australian Dollar(AUD)</li>

                                <li onClick={()=>handleClicks('Guilder(AWG)')}>Guilder(AWG)</li>

                                <li onClick={()=>handleClicks('Manat(AZN)')}>Manat(AZN)</li>

                                <li onClick={()=>handleClicks('Convertible Mark(BAM)')}>Convertible Mark(BAM)</li>

                                <li onClick={()=>handleClicks('Barbadian Dollar(BBD)')}>Barbadian Dollar(BBD)</li>

                                <li onClick={()=>handleClicks('Taka(BDT)')}>Taka(BDT)</li>

                                <li onClick={()=>handleClicks('Bulgarian Lev(BGN)')}>Bulgarian Lev(BGN)</li>

                                <li onClick={()=>handleClicks('Bahrain Dinar(BHD)')}>Bahrain Dinar(BHD)</li>

                                <li onClick={()=>handleClicks('Burundi Franc(BIF)')}>Burundi Franc(BIF)</li>

                                <li onClick={()=>handleClicks('Bermudian Dollar(BMD)')}>Bermudian Dollar(BMD)</li>

                                <li onClick={()=>handleClicks('Brunei Dollar(BND)')}>Brunei Dollar(BND)</li>

                                <li onClick={()=>handleClicks('Boliviano(BOB)')}>Boliviano(BOB)</li>

                                <li onClick={()=>handleClicks('Real(BRL)')}>Real(BRL)</li>

                                <li onClick={()=>handleClicks('Bahamian Dollar(BSD)')}>Bahamian Dollar(BSD)</li>

                                <li onClick={()=>handleClicks('Ngultrum(BTN)')}>Ngultrum(BTN)</li>

                                <li onClick={()=>handleClicks('Pula(BWP)')}>Pula(BWP)</li>

                                <li onClick={()=>handleClicks('Belarus Rubel(BYR)')}>Belarus Rubel(BYR)</li>

                                <li onClick={()=>handleClicks('Belize Dollar(BZD)')}>Belize Dollar(BZD)</li>

                                <li onClick={()=>handleClicks('Canadian Dollar(CAD)')}>Canadian Dollar(CAD)</li>

                                <li onClick={()=>handleClicks('Congolais Franc(CDF)')}>Congolais Franc(CDF)</li>

                                <li onClick={()=>handleClicks('Swiss Franc(CHF)')}>Swiss Franc(CHF)</li>

                                <li onClick={()=>handleClicks('Chilean Peso(CLP)')}>Chilean Peso(CLP)</li>

                                <li onClick={()=>handleClicks('Renminbi Yuan(CNY)')}>Renminbi Yuan(CNY)</li>

                                <li onClick={()=>handleClicks('Colombian Peso(COP)')}>Colombian Peso(COP)</li>

                                <li onClick={()=>handleClicks('Colón(CRC)')}>Colón(CRC)</li>

                                <li onClick={()=>handleClicks('Cuban Peso(CUP)')}>Cuban Peso(CUP)</li>

                                <li onClick={()=>handleClicks('Cape Verdean Escudo(CVE)')}>Cape Verdean Escudo(CVE)</li>

                                <li onClick={()=>handleClicks('Czech Krone(CZK)')}>Czech Krone(CZK)</li>

                                <li onClick={()=>handleClicks('Djibouti Franc(DJF)')}>Djibouti Franc(DJF)</li>

                                <li onClick={()=>handleClicks('Danish Krone(DKK)')}>Danish Krone(DKK)</li>

                                <li onClick={()=>handleClicks('Dominican Peso(DOP)')}>Dominican Peso(DOP)</li>

                                <li onClick={()=>handleClicks('Algerian Dinar(DZD)')}>Algerian Dinar(DZD)</li>

                                <li onClick={()=>handleClicks('Egypt Pound(EGP)')}>Egypt Pound(EGP)</li>

                                <li onClick={()=>handleClicks('Nakfa(ERN)')}>Nakfa(ERN)</li>

                                <li onClick={()=>handleClicks('Birr(ETB)')}>Birr(ETB)</li>

                                <li onClick={()=>handleClicks('Euro(EUR)')}>Euro(EUR)</li>

                                <li onClick={()=>handleClicks('Fidschi Dollar(FJD)')}>Fidschi Dollar(FJD)</li>

                                <li onClick={()=>handleClicks('Falklands Pound(FKP)')}>Falklands Pound(FKP)</li>

                                <li onClick={()=>handleClicks('Sterling Pound(GBP)')}>Sterling Pound(GBP)</li>

                                <li onClick={()=>handleClicks('Georgian Lari(GEL)')}>Georgian Lari(GEL)</li>

                                <li onClick={()=>handleClicks('Guernsey Pound(GGP)')}>Guernsey Pound(GGP)</li>

                                <li onClick={()=>handleClicks('Ghana Cedi(GHS)')}>Ghana Cedi(GHS)</li>

                                <li onClick={()=>handleClicks('Gibraltar Pound(GIP)')}>Gibraltar Pound(GIP)</li>

                                <li onClick={()=>handleClicks('Dalasi(GMD)')}>Dalasi(GMD)</li>

                                <li onClick={()=>handleClicks('Guinea Franc(GNF)')}>Guinea Franc(GNF)</li>

                                <li onClick={()=>handleClicks('Quetzal(GTQ)')}>Quetzal(GTQ)</li>

                                <li onClick={()=>handleClicks('Guyana Dollar(GYD)')}>Guyana Dollar(GYD)</li>

                                <li onClick={()=>handleClicks('Hong Kong Dollar(HKD)')}>Hong Kong Dollar(HKD)</li>

                                <li onClick={()=>handleClicks('Lempira(HNL)')}>Lempira(HNL)</li>

                                <li onClick={()=>handleClicks('Kuna(HRK)')}>Kuna(HRK)</li>

                                <li onClick={()=>handleClicks('Gourde(HTG)')}>Gourde(HTG)</li>

                                <li onClick={()=>handleClicks('Hungarian Forint(HUF)')}>Hungarian Forint(HUF)</li>

                                <li onClick={()=>handleClicks('Indonesian Rupiah(IDR)')}>Indonesian Rupiah(IDR)</li>

                                <li onClick={()=>handleClicks('Israeli Shekel(ILS)')}>Israeli Shekel(ILS)</li>

                                <li onClick={()=>handleClicks('Manx Pound(IMP)')}>Manx Pound(IMP)</li>

                                <li onClick={()=>handleClicks('Indian Rupee(INR)')}>Indian Rupee(INR)</li>

                                <li onClick={()=>handleClicks('Iraqi Dinar(IQD)')}>Iraqi Dinar(IQD)</li>

                                <li onClick={()=>handleClicks('Iranian Rial(IRR)')}>Iranian Rial(IRR)</li>

                                <li onClick={()=>handleClicks('Icelandic Krone(ISK)')}>Icelandic Krone(ISK)</li>

                                <li onClick={()=>handleClicks('Jersey Sterling Pound(JEP)')}>Jersey Sterling Pound(JEP)</li>

                                <li onClick={()=>handleClicks('Jamaica Dollar(JMD)')}>Jamaica Dollar(JMD)</li>

                                <li onClick={()=>handleClicks('Jordanian Dinar(JOD)')}>Jordanian Dinar(JOD)</li>

                                <li onClick={()=>handleClicks('Japanese Yen(JPY)')}>Japanese Yen(JPY)</li>

                                <li onClick={()=>handleClicks('Kenian Schilling(KES)')}>Kenian Schilling(KES)</li>

                                <li onClick={()=>handleClicks('Som(KGS)')}>Som(KGS)</li>

                                <li onClick={()=>handleClicks('Cambodian Riel(KHR)')}>Cambodian Riel(KHR)</li>

                                <li onClick={()=>handleClicks('Kiribati Dollar(KID)')}>Kiribati Dollar(KID)</li>

                                <li onClick={()=>handleClicks('Comorian Franc(KMF)')}>Comorian Franc(KMF)</li>

                                <li onClick={()=>handleClicks('Won(KPW)')}>Won(KPW)</li>

                                <li onClick={()=>handleClicks('Won(KRW)')}>Won(KRW)</li>

                                <li onClick={()=>handleClicks('Kuwaiti Dinar(KWD)')}>Kuwaiti Dinar(KWD)</li>

                                <li onClick={()=>handleClicks('Cayman Dollar(KYD)')}>Cayman Dollar(KYD)</li>

                                <li onClick={()=>handleClicks('Tenge(KZT)')}>Tenge(KZT)</li>

                                <li onClick={()=>handleClicks('Kip(LAK)')}>Kip(LAK)</li>

                                <li onClick={()=>handleClicks('Lebanese Pound(LBP)')}>Lebanese Pound(LBP)</li>

                                <li onClick={()=>handleClicks('Sri Lanka Rupee(LKR)')}>Sri Lanka Rupee(LKR)</li>

                                <li onClick={()=>handleClicks('Liberian Dollar(LRD)')}>Liberian Dollar(LRD)</li>

                                <li onClick={()=>handleClicks('Lesotho Loti(LSL)')}>Lesotho Loti(LSL)</li>

                                <li onClick={()=>handleClicks('Libyan Dinar(LYD)')}>Libyan Dinar(LYD)</li>

                                <li onClick={()=>handleClicks('Moroccan Dirham(MAD)')}>Moroccan Dirham(MAD)</li>

                                <li onClick={()=>handleClicks('Leu(MDL)')}>Leu(MDL)</li>

                                <li onClick={()=>handleClicks('Malagasy Ariary(MGA)')}>Malagasy Ariary(MGA)</li>

                                <li onClick={()=>handleClicks('Denar(MKD)')}>Denar(MKD)</li>

                                <li onClick={()=>handleClicks('Kyat(MMK)')}>Kyat(MMK)</li>

                                <li onClick={()=>handleClicks('Tugrik(MNT)')}>Tugrik(MNT)</li>

                                <li onClick={()=>handleClicks('Macanese Pataca(MOP)')}>Macanese Pataca(MOP)</li>

                                <li onClick={()=>handleClicks('Ouguiya(MRO)')}>Ouguiya(MRO)</li>

                                <li onClick={()=>handleClicks('Mauritian Rupee(MUR)')}>Mauritian Rupee(MUR)</li>

                                <li onClick={()=>handleClicks('Maldivian Rufiyaa(MVR)')}>Maldivian Rufiyaa(MVR)</li>

                                <li onClick={()=>handleClicks('Kwacha(MWK)')}>Kwacha(MWK)</li>

                                <li onClick={()=>handleClicks('Mexican Peso(MXN)')}>Mexican Peso(MXN)</li>

                                <li onClick={()=>handleClicks('Ringgit(MYR)')}>Ringgit(MYR)</li>

                                <li onClick={()=>handleClicks('Metical(MZN)')}>Metical(MZN)</li>

                                <li onClick={()=>handleClicks('Namibian Dollar(NAD)')}>Namibian Dollar(NAD)</li>

                                <li onClick={()=>handleClicks('Naira(NGN)')}>Naira(NGN)</li>

                                <li onClick={()=>handleClicks('Córdoba Oro(NIO)')}>Córdoba Oro(NIO)</li>

                                <li onClick={()=>handleClicks('Norwegian Krone(NOK)')}>Norwegian Krone(NOK)</li>

                                <li onClick={()=>handleClicks('Nepalese Rupee(NPR)')}>Nepalese Rupee(NPR)</li>

                                <li onClick={()=>handleClicks('New Zealand Dollar(NZD)')}>New Zealand Dollar(NZD)</li>

                                <li onClick={()=>handleClicks('Omani Rial(OMR)')}>Omani Rial(OMR)</li>

                                <li onClick={()=>handleClicks('Panamanian Balboa(PAB)')}>Panamanian Balboa(PAB)</li>

                                <li onClick={()=>handleClicks('Nuevo Sol(PEN)')}>Nuevo Sol(PEN)</li>

                                <li onClick={()=>handleClicks('Kina(PGK)')}>Kina(PGK)</li>

                                <li onClick={()=>handleClicks('Philippine Peso(PHP)')}>Philippine Peso(PHP)</li>

                                <li onClick={()=>handleClicks('Pakistanian Rupee(PKR)')}>Pakistanian Rupee(PKR)</li>

                                <li onClick={()=>handleClicks('Zloty(PLN)')}>Zloty(PLN)</li>

                                <li onClick={()=>handleClicks('Guaraní(PYG)')}>Guaraní(PYG)</li>

                                <li onClick={()=>handleClicks('Qatari Rial(QAR)')}>Qatari Rial(QAR)</li>

                                <li onClick={()=>handleClicks('Leu(RON)')}>Leu(RON)</li>

                                <li onClick={()=>handleClicks('Serbian Dinar(RSD)')}>Serbian Dinar(RSD)</li>

                                <li onClick={()=>handleClicks('Russian Rubel(RUB)')}>Russian Rubel(RUB)</li>

                                <li onClick={()=>handleClicks('Rwandan Franc(RWF)')}>Rwandan Franc(RWF)</li>

                                <li onClick={()=>handleClicks('Saudi Rial(SAR)')}>Saudi Rial(SAR)</li>

                                <li onClick={()=>handleClicks('Salomon Dollar(SBD)')}>Salomon Dollar(SBD)</li>

                                <li onClick={()=>handleClicks('Seychelles Rupee(SCR)')}>Seychelles Rupee(SCR)</li>

                                <li onClick={()=>handleClicks('Sudanese Pound(SDG)')}>Sudanese Pound(SDG)</li>

                                <li onClick={()=>handleClicks('Swedish Krone(SEK)')}>Swedish Krone(SEK)</li>

                                <li onClick={()=>handleClicks('Singapore Dollar(SGD)')}>Singapore Dollar(SGD)</li>

                                <li onClick={()=>handleClicks('St.-Helena Pound(SHP)')}>St.-Helena Pound(SHP)</li>

                                <li onClick={()=>handleClicks('Leone(SLL)')}>Leone(SLL)</li>

                                <li onClick={()=>handleClicks('Somalian Shilling(SOS)')}>Somalian Shilling(SOS)</li>

                                <li onClick={()=>handleClicks('Surinam Dollar(SRD)')}>Surinam Dollar(SRD)</li>

                                <li onClick={()=>handleClicks('South Sudanese Pound(SSP)')}>South Sudanese Pound(SSP)</li>

                                <li onClick={()=>handleClicks('Dobra(STD)')}>Dobra(STD)</li>

                                <li onClick={()=>handleClicks('Syrian Pound(SYP)')}>Syrian Pound(SYP)</li>

                                <li onClick={()=>handleClicks('Swazi Lilangeni(SZL)')}>Swazi Lilangeni(SZL)</li>

                                <li onClick={()=>handleClicks('Thai Baht(THB)')}>Thai Baht(THB)</li>

                                <li onClick={()=>handleClicks('Somoni(TJS)')}>Somoni(TJS)</li>

                                <li onClick={()=>handleClicks('Manat(TMT)')}>Manat(TMT)</li>

                                <li onClick={()=>handleClicks('Tunesian Dinar(TND)')}>Tunesian Dinar(TND)</li>

                                <li onClick={()=>handleClicks("Pa'anga(TOP)")}>Pa'anga(TOP)</li>

                                <li onClick={()=>handleClicks('Turkish Lira(TRY)')}>Turkish Lira(TRY)</li>

                                <li onClick={()=>handleClicks('Trinidad and Tobago Dollar(TTD)')}>Trinidad and Tobago Dollar(TTD)</li>

                                <li onClick={()=>handleClicks('Tuvaluan Dollar(TVD)')}>Tuvaluan Dollar(TVD)</li>

                                <li onClick={()=>handleClicks('New Taiwan Dollar(TWD)')}>New Taiwan Dollar(TWD)</li>

                                <li onClick={()=>handleClicks('Tansanian Shilling(TZS)')}>Tansanian Shilling(TZS)</li>

                                <li onClick={()=>handleClicks('Hrywnja(UAH)')}>Hrywnja(UAH)</li>

                                <li onClick={()=>handleClicks('Ugandan Schilling(UGX)')}>Ugandan Schilling(UGX)</li>

                                <li onClick={()=>handleClicks('US Dollar(USD)')}>US Dollar(USD)</li>

                                <li onClick={()=>handleClicks('Uruguay Peso(UYU)')}>Uruguay Peso(UYU)</li>

                                <li onClick={()=>handleClicks('Uzbekistan Sum(UZS)')}>Uzbekistan Sum(UZS)</li>

                                <li onClick={()=>handleClicks('Dong(VND)')}>Dong(VND)</li>

                                <li onClick={()=>handleClicks('Vatu(VUV)')}>Vatu(VUV)</li>

                                <li onClick={()=>handleClicks('Tala(WST)')}>Tala(WST)</li>

                                <li onClick={()=>handleClicks('Central African Franc(XAF)')}>Central African Franc(XAF)</li>

                                <li onClick={()=>handleClicks('East Caribbean Dollar(XCD)')}>East Caribbean Dollar(XCD)</li>

                                <li onClick={()=>handleClicks('West African Franc(XOF)')}>West African Franc(XOF)</li>

                                <li onClick={()=>handleClicks('Pacific Franc(XPF)')}>Pacific Franc(XPF)</li>

                                <li onClick={()=>handleClicks('Jemen Rial(YER)')}>Jemen Rial(YER)</li>

                                <li onClick={()=>handleClicks('South African Rand(ZAR)')}>South African Rand(ZAR)</li>

                                <li onClick={()=>handleClicks('Zambian Kwacha(ZMW)')}>Zambian Kwacha(ZMW)</li>

                                <li onClick={()=>handleClicks('Zimbabwe Dollar(ZWL)')}>Zimbabwe Dollar(ZWL)</li>
                            </ul>
                        </li>
                        <li id="target">Target Currency
                            <ul id="tlist">
                                <li onClick={()=>handleClickt('Arabic Dirham(AED)')}>Arabic Dirham(AED)</li>

                                <li onClick={()=>handleClickt('Afghani(AFN)')}>Afghani(AFN)</li>

                                <li onClick={()=>handleClickt('Lek(ALL)')}>Lek(ALL)</li>

                                <li onClick={()=>handleClickt('Netherlands Guilder(ANG)')}>Netherlands Guilder(ANG)</li>

                                <li onClick={()=>handleClickt('Kwanza(AOA)')}>Kwanza(AOA)</li>

                                <li onClick={()=>handleClickt('Argentine Peso(ARS)')}>Argentine Peso(ARS)</li>

                                <li onClick={()=>handleClickt('Australian Dollar(AUD)')}>Australian Dollar(AUD)</li>

                                <li onClick={()=>handleClickt('Guilder(AWG)')}>Guilder(AWG)</li>

                                <li onClick={()=>handleClickt('Manat(AZN)')}>Manat(AZN)</li>

                                <li onClick={()=>handleClickt('Convertible Mark(BAM)')}>Convertible Mark(BAM)</li>

                                <li onClick={()=>handleClickt('Barbadian Dollar(BBD)')}>Barbadian Dollar(BBD)</li>

                                <li onClick={()=>handleClickt('Taka(BDT)')}>Taka(BDT)</li>

                                <li onClick={()=>handleClickt('Bulgarian Lev(BGN)')}>Bulgarian Lev(BGN)</li>

                                <li onClick={()=>handleClickt('Bahrain Dinar(BHD)')}>Bahrain Dinar(BHD)</li>

                                <li onClick={()=>handleClickt('Burundi Franc(BIF)')}>Burundi Franc(BIF)</li>

                                <li onClick={()=>handleClickt('Bermudian Dollar(BMD)')}>Bermudian Dollar(BMD)</li>

                                <li onClick={()=>handleClickt('Brunei Dollar(BND)')}>Brunei Dollar(BND)</li>

                                <li onClick={()=>handleClickt('Boliviano(BOB)')}>Boliviano(BOB)</li>

                                <li onClick={()=>handleClickt('Real(BRL)')}>Real(BRL)</li>

                                <li onClick={()=>handleClickt('Bahamian Dollar(BSD)')}>Bahamian Dollar(BSD)</li>

                                <li onClick={()=>handleClickt('Ngultrum(BTN)')}>Ngultrum(BTN)</li>

                                <li onClick={()=>handleClickt('Pula(BWP)')}>Pula(BWP)</li>

                                <li onClick={()=>handleClickt('Belarus Rubel(BYR)')}>Belarus Rubel(BYR)</li>

                                <li onClick={()=>handleClickt('Belize Dollar(BZD)')}>Belize Dollar(BZD)</li>

                                <li onClick={()=>handleClickt('Canadian Dollar(CAD)')}>Canadian Dollar(CAD)</li>

                                <li onClick={()=>handleClickt('Congolais Franc(CDF)')}>Congolais Franc(CDF)</li>

                                <li onClick={()=>handleClickt('Swiss Franc(CHF)')}>Swiss Franc(CHF)</li>

                                <li onClick={()=>handleClickt('Chilean Peso(CLP)')}>Chilean Peso(CLP)</li>

                                <li onClick={()=>handleClickt('Renminbi Yuan(CNY)')}>Renminbi Yuan(CNY)</li>

                                <li onClick={()=>handleClickt('Colombian Peso(COP)')}>Colombian Peso(COP)</li>

                                <li onClick={()=>handleClickt('Colón(CRC)')}>Colón(CRC)</li>

                                <li onClick={()=>handleClickt('Cuban Peso(CUP)')}>Cuban Peso(CUP)</li>

                                <li onClick={()=>handleClickt('Cape Verdean Escudo(CVE)')}>Cape Verdean Escudo(CVE)</li>

                                <li onClick={()=>handleClickt('Czech Krone(CZK)')}>Czech Krone(CZK)</li>

                                <li onClick={()=>handleClickt('Djibouti Franc(DJF)')}>Djibouti Franc(DJF)</li>

                                <li onClick={()=>handleClickt('Danish Krone(DKK)')}>Danish Krone(DKK)</li>

                                <li onClick={()=>handleClickt('Dominican Peso(DOP)')}>Dominican Peso(DOP)</li>

                                <li onClick={()=>handleClickt('Algerian Dinar(DZD)')}>Algerian Dinar(DZD)</li>

                                <li onClick={()=>handleClickt('Egypt Pound(EGP)')}>Egypt Pound(EGP)</li>

                                <li onClick={()=>handleClickt('Nakfa(ERN)')}>Nakfa(ERN)</li>

                                <li onClick={()=>handleClickt('Birr(ETB)')}>Birr(ETB)</li>

                                <li onClick={()=>handleClickt('Euro(EUR)')}>Euro(EUR)</li>

                                <li onClick={()=>handleClickt('Fidschi Dollar(FJD)')}>Fidschi Dollar(FJD)</li>

                                <li onClick={()=>handleClickt('Falklands Pound(FKP)')}>Falklands Pound(FKP)</li>

                                <li onClick={()=>handleClickt('Sterling Pound(GBP)')}>Sterling Pound(GBP)</li>

                                <li onClick={()=>handleClickt('Georgian Lari(GEL)')}>Georgian Lari(GEL)</li>

                                <li onClick={()=>handleClickt('Guernsey Pound(GGP)')}>Guernsey Pound(GGP)</li>

                                <li onClick={()=>handleClickt('Ghana Cedi(GHS)')}>Ghana Cedi(GHS)</li>

                                <li onClick={()=>handleClickt('Gibraltar Pound(GIP)')}>Gibraltar Pound(GIP)</li>

                                <li onClick={()=>handleClickt('Dalasi(GMD)')}>Dalasi(GMD)</li>

                                <li onClick={()=>handleClickt('Guinea Franc(GNF)')}>Guinea Franc(GNF)</li>

                                <li onClick={()=>handleClickt('Quetzal(GTQ)')}>Quetzal(GTQ)</li>

                                <li onClick={()=>handleClickt('Guyana Dollar(GYD)')}>Guyana Dollar(GYD)</li>

                                <li onClick={()=>handleClickt('Hong Kong Dollar(HKD)')}>Hong Kong Dollar(HKD)</li>

                                <li onClick={()=>handleClickt('Lempira(HNL)')}>Lempira(HNL)</li>

                                <li onClick={()=>handleClickt('Kuna(HRK)')}>Kuna(HRK)</li>

                                <li onClick={()=>handleClickt('Gourde(HTG)')}>Gourde(HTG)</li>

                                <li onClick={()=>handleClickt('Hungarian Forint(HUF)')}>Hungarian Forint(HUF)</li>

                                <li onClick={()=>handleClickt('Indonesian Rupiah(IDR)')}>Indonesian Rupiah(IDR)</li>

                                <li onClick={()=>handleClickt('Israeli Shekel(ILS)')}>Israeli Shekel(ILS)</li>

                                <li onClick={()=>handleClickt('Manx Pound(IMP)')}>Manx Pound(IMP)</li>

                                <li onClick={()=>handleClickt('Indian Rupee(INR)')}>Indian Rupee(INR)</li>

                                <li onClick={()=>handleClickt('Iraqi Dinar(IQD)')}>Iraqi Dinar(IQD)</li>

                                <li onClick={()=>handleClickt('Iranian Rial(IRR)')}>Iranian Rial(IRR)</li>

                                <li onClick={()=>handleClickt('Icelandic Krone(ISK)')}>Icelandic Krone(ISK)</li>

                                <li onClick={()=>handleClickt('Jersey Sterling Pound(JEP)')}>Jersey Sterling Pound(JEP)</li>

                                <li onClick={()=>handleClickt('Jamaica Dollar(JMD)')}>Jamaica Dollar(JMD)</li>

                                <li onClick={()=>handleClickt('Jordanian Dinar(JOD)')}>Jordanian Dinar(JOD)</li>

                                <li onClick={()=>handleClickt('Japanese Yen(JPY)')}>Japanese Yen(JPY)</li>

                                <li onClick={()=>handleClickt('Kenian Schilling(KES)')}>Kenian Schilling(KES)</li>

                                <li onClick={()=>handleClickt('Som(KGS)')}>Som(KGS)</li>

                                <li onClick={()=>handleClickt('Cambodian Riel(KHR)')}>Cambodian Riel(KHR)</li>

                                <li onClick={()=>handleClickt('Kiribati Dollar(KID)')}>Kiribati Dollar(KID)</li>

                                <li onClick={()=>handleClickt('Comorian Franc(KMF)')}>Comorian Franc(KMF)</li>

                                <li onClick={()=>handleClickt('Won(KPW)')}>Won(KPW)</li>

                                <li onClick={()=>handleClickt('Won(KRW)')}>Won(KRW)</li>

                                <li onClick={()=>handleClickt('Kuwaiti Dinar(KWD)')}>Kuwaiti Dinar(KWD)</li>

                                <li onClick={()=>handleClickt('Cayman Dollar(KYD)')}>Cayman Dollar(KYD)</li>

                                <li onClick={()=>handleClickt('Tenge(KZT)')}>Tenge(KZT)</li>

                                <li onClick={()=>handleClickt('Kip(LAK)')}>Kip(LAK)</li>

                                <li onClick={()=>handleClickt('Lebanese Pound(LBP)')}>Lebanese Pound(LBP)</li>

                                <li onClick={()=>handleClickt('Sri Lanka Rupee(LKR)')}>Sri Lanka Rupee(LKR)</li>

                                <li onClick={()=>handleClickt('Liberian Dollar(LRD)')}>Liberian Dollar(LRD)</li>

                                <li onClick={()=>handleClickt('Lesotho Loti(LSL)')}>Lesotho Loti(LSL)</li>

                                <li onClick={()=>handleClickt('Libyan Dinar(LYD)')}>Libyan Dinar(LYD)</li>

                                <li onClick={()=>handleClickt('Moroccan Dirham(MAD)')}>Moroccan Dirham(MAD)</li>

                                <li onClick={()=>handleClickt('Leu(MDL)')}>Leu(MDL)</li>

                                <li onClick={()=>handleClickt('Malagasy Ariary(MGA)')}>Malagasy Ariary(MGA)</li>

                                <li onClick={()=>handleClickt('Denar(MKD)')}>Denar(MKD)</li>

                                <li onClick={()=>handleClickt('Kyat(MMK)')}>Kyat(MMK)</li>

                                <li onClick={()=>handleClickt('Tugrik(MNT)')}>Tugrik(MNT)</li>

                                <li onClick={()=>handleClickt('Macanese Pataca(MOP)')}>Macanese Pataca(MOP)</li>

                                <li onClick={()=>handleClickt('Ouguiya(MRO)')}>Ouguiya(MRO)</li>

                                <li onClick={()=>handleClickt('Mauritian Rupee(MUR)')}>Mauritian Rupee(MUR)</li>

                                <li onClick={()=>handleClickt('Maldivian Rufiyaa(MVR)')}>Maldivian Rufiyaa(MVR)</li>

                                <li onClick={()=>handleClickt('Kwacha(MWK)')}>Kwacha(MWK)</li>

                                <li onClick={()=>handleClickt('Mexican Peso(MXN)')}>Mexican Peso(MXN)</li>

                                <li onClick={()=>handleClickt('Ringgit(MYR)')}>Ringgit(MYR)</li>

                                <li onClick={()=>handleClickt('Metical(MZN)')}>Metical(MZN)</li>

                                <li onClick={()=>handleClickt('Namibian Dollar(NAD)')}>Namibian Dollar(NAD)</li>

                                <li onClick={()=>handleClickt('Naira(NGN)')}>Naira(NGN)</li>

                                <li onClick={()=>handleClickt('Córdoba Oro(NIO)')}>Córdoba Oro(NIO)</li>

                                <li onClick={()=>handleClickt('Norwegian Krone(NOK)')}>Norwegian Krone(NOK)</li>

                                <li onClick={()=>handleClickt('Nepalese Rupee(NPR)')}>Nepalese Rupee(NPR)</li>

                                <li onClick={()=>handleClickt('New Zealand Dollar(NZD)')}>New Zealand Dollar(NZD)</li>

                                <li onClick={()=>handleClickt('Omani Rial(OMR)')}>Omani Rial(OMR)</li>

                                <li onClick={()=>handleClickt('Panamanian Balboa(PAB)')}>Panamanian Balboa(PAB)</li>

                                <li onClick={()=>handleClickt('Nuevo Sol(PEN)')}>Nuevo Sol(PEN)</li>

                                <li onClick={()=>handleClickt('Kina(PGK)')}>Kina(PGK)</li>

                                <li onClick={()=>handleClickt('Philippine Peso(PHP)')}>Philippine Peso(PHP)</li>

                                <li onClick={()=>handleClickt('Pakistanian Rupee(PKR)')}>Pakistanian Rupee(PKR)</li>

                                <li onClick={()=>handleClickt('Zloty(PLN)')}>Zloty(PLN)</li>

                                <li onClick={()=>handleClickt('Guaraní(PYG)')}>Guaraní(PYG)</li>

                                <li onClick={()=>handleClickt('Qatari Rial(QAR)')}>Qatari Rial(QAR)</li>

                                <li onClick={()=>handleClickt('Leu(RON)')}>Leu(RON)</li>
                                <li onClick={()=>handleClickt('Serbian Dinar(RSD)')}>Serbian Dinar(RSD)</li>

                                <li onClick={()=>handleClickt('Russian Rubel(RUB)')}>Russian Rubel(RUB)</li>

                                <li onClick={()=>handleClickt('Rwandan Franc(RWF)')}>Rwandan Franc(RWF)</li>

                                <li onClick={()=>handleClickt('Saudi Rial(SAR)')}>Saudi Rial(SAR)</li>

                                <li onClick={()=>handleClickt('Salomon Dollar(SBD)')}>Salomon Dollar(SBD)</li>

                                <li onClick={()=>handleClickt('Seychelles Rupee(SCR)')}>Seychelles Rupee(SCR)</li>

                                <li onClick={()=>handleClickt('Sudanese Pound(SDG)')}>Sudanese Pound(SDG)</li>

                                <li onClick={()=>handleClickt('Swedish Krone(SEK)')}>Swedish Krone(SEK)</li>

                                <li onClick={()=>handleClickt('Singapore Dollar(SGD)')}>Singapore Dollar(SGD)</li>

                                <li onClick={()=>handleClickt('St.-Helena Pound(SHP)')}>St.-Helena Pound(SHP)</li>

                                <li onClick={()=>handleClickt('Leone(SLL)')}>Leone(SLL)</li>

                                <li onClick={()=>handleClickt('Somalian Shilling(SOS)')}>Somalian Shilling(SOS)</li>

                                <li onClick={()=>handleClickt('Surinam Dollar(SRD)')}>Surinam Dollar(SRD)</li>

                                <li onClick={()=>handleClickt('South Sudanese Pound(SSP)')}>South Sudanese Pound(SSP)</li>

                                <li onClick={()=>handleClickt('Dobra(STD)')}>Dobra(STD)</li>

                                <li onClick={()=>handleClickt('Syrian Pound(SYP)')}>Syrian Pound(SYP)</li>

                                <li onClick={()=>handleClickt('Swazi Lilangeni(SZL)')}>Swazi Lilangeni(SZL)</li>

                                <li onClick={()=>handleClickt('Thai Baht(THB)')}>Thai Baht(THB)</li>

                                <li onClick={()=>handleClickt('Somoni(TJS)')}>Somoni(TJS)</li>

                                <li onClick={()=>handleClickt('Manat(TMT)')}>Manat(TMT)</li>

                                <li onClick={()=>handleClickt('Tunesian Dinar(TND)')}>Tunesian Dinar(TND)</li>

                                <li onClick={()=>handleClickt("Pa'anga(TOP)")}>Pa'anga(TOP)</li>

                                <li onClick={()=>handleClickt('Turkish Lira(TRY)')}>Turkish Lira(TRY)</li>

                                <li onClick={()=>handleClickt('Trinidad and Tobago Dollar(TTD)')}>Trinidad and Tobago Dollar(TTD)</li>

                                <li onClick={()=>handleClickt('Tuvaluan Dollar(TVD)')}>Tuvaluan Dollar(TVD)</li>

                                <li onClick={()=>handleClickt('New Taiwan Dollar(TWD)')}>New Taiwan Dollar(TWD)</li>

                                <li onClick={()=>handleClickt('Tansanian Shilling(TZS)')}>Tansanian Shilling(TZS)</li>

                                <li onClick={()=>handleClickt('Hrywnja(UAH)')}>Hrywnja(UAH)</li>

                                <li onClick={()=>handleClickt('Ugandan Schilling(UGX)')}>Ugandan Schilling(UGX)</li>

                                <li onClick={()=>handleClickt('US Dollar(USD)')}>US Dollar(USD)</li>

                                <li onClick={()=>handleClickt('Uruguay Peso(UYU)')}>Uruguay Peso(UYU)</li>

                                <li onClick={()=>handleClickt('Uzbekistan Sum(UZS)')}>Uzbekistan Sum(UZS)</li>

                                <li onClick={()=>handleClickt('Dong(VND)')}>Dong(VND)</li>

                                <li onClick={()=>handleClickt('Vatu(VUV)')}>Vatu(VUV)</li>

                                <li onClick={()=>handleClickt('Tala(WST)')}>Tala(WST)</li>

                                <li onClick={()=>handleClickt('Central African Franc(XAF)')}>Central African Franc(XAF)</li>

                                <li onClick={()=>handleClickt('East Caribbean Dollar(XCD)')}>East Caribbean Dollar(XCD)</li>

                                <li onClick={()=>handleClickt('West African Franc(XOF)')}>West African Franc(XOF)</li>

                                <li onClick={()=>handleClickt('Pacific Franc(XPF)')}>Pacific Franc(XPF)</li>

                                <li onClick={()=>handleClickt('Jemen Rial(YER)')}>Jemen Rial(YER)</li>

                                <li onClick={()=>handleClickt('South African Rand(ZAR)')}>South African Rand(ZAR)</li>

                                <li onClick={()=>handleClickt('Zambian Kwacha(ZMW)')}>Zambian Kwacha(ZMW)</li>

                                <li onClick={()=>handleClickt('Zimbabwe Dollar(ZWL)')}>Zimbabwe Dollar(ZWL)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </div>
            ) : (
                <div>
                    <fieldset>
                        <table>
                            <thead>
                                <tr>
                                    <th>Currency</th>
                                    <th>{source} ▼▲</th>
                                    <th>inv. {source} ▼▲</th>
                                </tr>
                            </thead>
                            <tbody>
                                <AddTable />
                            </tbody>
                        </table>
                    <div className="buttoncontainer">
                    <button onClick={()=>handleReturn()}>Return</button>
                    </div>
                    </fieldset>
                </div>
                 )}
        </div>
    )
}

export default Home