export const STATISTIC_OPTIONS ={
    // webContainerJson : {
    //     "all": 108870,
    //     "charts": {
    //         "WordPress": 3237,
    //         "phpMyAdmin": 2164,
    //         "Joomla": 7561,
    //         "DedeCMS": 7778,
    //         "LiteSpeed": 7355,
    //         "Drupal": 2433,
    //         "FCKeditor": 53179,
    //         "CKEditor": 60092,
    //         "RoundCube": 7891
    //     }
    // },
    webServer : {
        "all": 6000000,
        "charts":{
            "LiteSpeed": 64426,
            "BigIP": 72138,
            "mini_httpd": 73588,
            "cisco-IOS": 122472,
            "CloudFront": 137785,
            "IdeaWebServer": 145524,
            "cloudflare-nginx": 159629,
            "Apache-Coyote": 162790,
            "SonicWALL": 230411,
            "Microsoft-HTTPAPI": 333383,
            "lighttpd": 358949,
            "Microsoft-IIS": 1289219,
            "nginx": 1510995,
            "unknow": 3092309,
            "Apache": 4159905,
            "AkamaiGHost": 5964476,

        }
    },
    country : {
        "all": 6000000,
        "charts":{
            "Mexico": 80619,
            "Spain": 80952,
            "Singapore": 81346,
            "Brazil": 93414,
            "Italy": 103408,
            "South Korea": 141109,
            "Netherlands": 143358,
            "Switzerland": 161220,
            "Israel": 169222,
            "India": 223458,
            "France": 227711,
            "Poland": 248472,
            "Taiwan": 447087,
            "Germany": 539988,
            "United Kingdom(UK)": 642312,
            "Japan": 875034,
            "China": 1242050,
            "United States(US)": 5577374
        }
    }
};
export const SITUATION_OPTIONS = {
    title: {
        text:'HTTPS协议全球普及情况',
        left: 'center',
        top: 'top'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value;
        }
    },

    visualMap: {
        type: 'piecewise', //分段型。
        splitNumber: 6,
        inverse: true,
        pieces: [{
            min: 0,
            max: 9,
            label:'0-9',
            color: '#6bc2ff'
        }, {
            min: 10,
            max: 99,
            label:'10-99',
            color: '#63baf7'
        }, {
            min: 100,
            max: 999,
            label:'100-999',
            color: '#63aae7'
        }, {
            min: 1000,
            max: 9999,
            label:'1000-9999',
            color: '#539ad7'
        }, {
            min: 10000,
            max: 99999,
            label:'10000-99999',
            color: '#438ac7'
        }, {
            min: 100000,
            max: 999999,
            label:'100000-999999',
            color: '#337ab7'
        }, {
            min: 1000000,
            label:'>1000000',
            color: '#236aa7'
        }],
        left: 'left',
        top: 'bottom',
        textStyle: {
            color: '#000'
        },
        // show:false
    },
    series: [
        {
            name: '443端口全球态势图',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                emphasis:{label:{show:true}}
            },
            data:[
                {name: 'Afghanistan', value: 323},
                {name: 'Angola', value: 185},
                {name: 'Albania', value: 268},
                {name: 'United Arab Emirates', value: 18460},
                {name: 'Argentina', value: 10419},
                // {name: 'Armenia', value: 2963.496},
                // {name: 'French Southern and Antarctic Lands', value: 268.065},
                {name: 'Australia', value: 354},
                {name: 'Austria', value: 37248},
                {name: 'Azerbaijan', value: 420},
                {name: 'Burundi', value: 7},
                {name: 'Belgium', value: 41546},
                {name: 'Benin', value: 154},
                // {name: 'Burkina Faso', value: 15540.284},
                {name: 'Bangladesh', value: 583},
                {name: 'Bulgaria', value: 7958},
                {name: 'The Bahamas', value: 1023},
                // {name: 'Bosnia and Herzegovina', value: 3845.929},
                {name: 'Belarus', value: 1420},
                {name: 'Belize', value: 191},
                // {name: 'Bermuda', value: 64.951},
                {name: 'Bolivia', value: 481},
                {name: 'Brazil', value: 93414},
                {name: 'Brunei', value: 159},
                {name: 'Bhutan', value: 33},
                {name: 'Botswana', value: 119},
                {name: 'Central African Rep.', value: 22},
                {name: 'Canada', value: 365126},
                {name: 'Switzerland', value: 161220},
                {name: 'Chile', value: 15181},
                {name: 'China', value: 1242050},
                // {name: 'Ivory Coast', value: 60508.978},
                {name: 'Cameroon', value: 115},
                {name: 'Dem. Rep. Congo', value: 53},
                {name: 'Congo', value: 29},
                {name: 'Colombia', value: 6999},
                {name: 'Costa Rica', value: 1144},
                {name: 'Cuba', value: 99},
                // {name: 'Northern Cyprus', value: 1.468},
                {name: 'Cyprus', value: 10911},
                {name: 'Czech Republic', value: 25911},
                {name: 'Germany', value: 539988},
                {name: 'Djibouti', value: 14},
                {name: 'Denmark', value: 32756},
                {name: 'Dominican Rep.', value: 501},
                {name: 'Algeria', value: 273},
                {name: 'Ecuador', value: 2082},
                {name: 'Egypt', value: 1392},
                {name: 'Eritrea', value: 1},
                {name: 'Spain', value: 80952},
                {name: 'Estonia', value: 2458},
                {name: 'Ethiopia', value: 587},
                {name: 'Finland', value: 26712},
                {name: 'Fiji', value: 491},
                {name: 'Falkland Islands', value: 5},
                {name: 'France', value: 227711},
                {name: 'Gabon', value: 37},
                {name: 'United Kingdom', value: 642312},
                // {name: 'Georgia', value: 4388.674},
                {name: 'Ghana', value: 276},
                {name: 'Guinea', value: 15},
                {name: 'Gambia', value: 15},
                // {name: 'Guinea Bissau', value: 10876.033},
                {name: 'Equatorial Guinea', value: 8},
                {name: 'Greece', value: 7001},
                {name: 'Greenland', value: 108},
                {name: 'Guatemala', value: 803},
                {name: 'French Guiana', value: 20},
                {name: 'Guyana', value: 21},
                {name: 'Honduras', value: 188},
                {name: 'Croatia', value: 2733},
                {name: 'Haiti', value: 43},
                {name: 'Hungary', value: 10984},
                {name: 'Indonesia', value: 17889},
                {name: 'India', value: 223458},
                {name: 'Ireland', value: 14199},
                {name: 'Iran', value: 2923},
                {name: 'Iraq', value: 104},
                {name: 'Iceland', value: 1931},
                {name: 'Israel', value: 169222},
                {name: 'Italy', value: 103408},
                {name: 'Jamaica', value: 354},
                {name: 'Jordan', value: 605},
                {name: 'Japan', value: 875034},
                {name: 'Kazakhstan', value: 1},
                {name: 'Kenya', value: 783},
                {name: 'Kyrgyzstan', value: 152},
                {name: 'Cambodia', value: 250},
                {name: 'Korea', value: 141109},
                // {name: 'Kosovo', value: 97.743},
                {name: 'Kuwait', value: 1322},
                {name: 'Laos', value: 42},
                {name: 'Lebanon', value: 732},
                {name: 'Liberia', value: 20},
                {name: 'Libya', value: 57},
                {name: 'Sri Lanka', value: 1505},
                // {name: 'Lesotho', value: 2008.921},
                {name: 'Lithuania', value: 6435},
                {name: 'Luxembourg', value: 4522},
                {name: 'Latvia', value: 2341},
                {name: 'Morocco', value: 778},
                {name: 'Moldova', value: 451},
                {name: 'Madagascar', value: 79},
                {name: 'Mexico', value: 80619},
                {name: 'Macedonia', value: 425},
                {name: 'Mali', value: 360},
                {name: 'Myanmar', value: 117},
                {name: 'Montenegro', value: 122},
                {name: 'Mongolia', value: 175},
                {name: 'Mozambique', value: 157},
                {name: 'Mauritania', value: 16},
                {name: 'Malawi', value: 36},
                {name: 'Malaysia', value: 24856},
                {name: 'Namibia', value: 877},
                {name: 'New Caledonia', value: 279},
                {name: 'Niger', value: 16},
                {name: 'Nigeria', value: 1135},
                {name: 'Nicaragua', value: 161},
                {name: 'Netherlands', value: 143358},
                {name: 'Norway', value: 30210},
                {name: 'Nepal', value: 235},
                {name: 'New Zealand', value: 20323},
                // {name: 'Oman', value: 2802.768},
                {name: 'Pakistan', value: 915},
                {name: 'Panama', value: 2166},
                {name: 'Peru', value: 4155},
                {name: 'Philippines', value: 6128},
                {name: 'Papua New Guinea', value: 140},
                {name: 'Poland', value: 248472},
                {name: 'Puerto Rico', value: 872},
                {name: 'Dem. Rep. Korea', value: 610},
                {name: 'Portugal', value: 11562},
                {name: 'Paraguay', value: 337},
                {name: 'Qatar', value: 2113},
                {name: 'Romania', value: 7411},
                {name: 'Russia', value: 68557},
                {name: 'Rwanda', value: 95},
                // {name: 'Western Sahara', value: 514.648},
                {name: 'Saudi Arabia', value: 6020},
                {name: 'Sudan', value: 43},
                {name: 'S. Sudan', value: 19},
                {name:"South Africa",value: 12615},
                {name: 'Senegal', value: 164},
                {name: 'Solomon Islands', value: 18},
                {name: 'Sierra Leone', value: 63},
                {name: 'El Salvador', value: 343},
                // {name: 'Somaliland', value: 9636.173},
                {name: 'Somalia', value: 55},
                // {name: 'Republic of Serbia', value: 3573.024},
                {name: 'Suriname', value: 185},
                {name: 'Slovakia', value: 4597},
                {name: 'Slovenia', value: 3617},
                {name: 'Sweden', value: 15},
                {name: 'Swaziland', value: 41},
                {name: 'Syria', value: 62},
                {name: 'Chad', value: 9},
                {name: 'Togo', value: 42},
                {name: 'Thailand', value: 14478},
                {name: 'Tajikistan', value: 68},
                {name: "Tanzania",value: 195},
                {name: 'Turkmenistan', value: 15},
                {name: 'East Timor', value: 15},
                // {name: 'Trinidad and Tobago', value: 1328.095},
                {name: 'Tunisia', value: 528},
                {name: 'Turkey', value: 15642},
                // {name: 'United Republic of Tanzania', value: 44973.33},
                {name: 'Uganda', value: 174},
                {name: 'Ukraine', value: 27500},
                {name: 'Uruguay', value: 1801},
                {name: 'United States', value: 5577374},
                {name: 'Uzbekistan', value: 182},
                {name: 'Venezuela', value: 1088},
                {name: 'Vietnam', value: 6728},
                {name: 'Vanuatu', value: 37},
                // {name: 'West Bank', value: 13.565},
                {name: 'Yemen', value: 47},
                {name: 'Zambia', value: 124},
                {name: 'Zimbabwe', value: 177}
            ]
        }
    ]
};
