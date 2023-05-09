import React from "react";
import csc from "country-state-city";

export const data = [];
export const getCountry = () => {
  const x = csc.getAllCountries();
  console.log(x);
  for (let i = 0; i < x.length; i++) {
    const element = {
      code: x[i].phonecode,
      value: x[i].name,
      label: x[i].sortname,
    };
    data.push(element);
  }
};

export default [
  {
    value: 1,
    label: "Afghanistan",
    sortname: "AF",
    phoneCode: 93,
  },
  {
    value: 2,
    label: "Albania",
    sortname: "AL",
    phoneCode: 355,
  },
  {
    value: 3,
    label: "Algeria",
    sortname: "DZ",
    phoneCode: 213,
  },
  {
    value: 4,
    label: "American Samoa",
    sortname: "AS",
    phoneCode: 1684,
  },
  {
    value: 5,
    label: "Andorra",
    sortname: "AD",
    phoneCode: 376,
  },
  {
    value: 6,
    label: "Angola",
    sortname: "AO",
    phoneCode: 244,
  },
  {
    value: 7,
    label: "Anguilla",
    sortname: "AI",
    phoneCode: 1264,
  },
  {
    value: 8,
    label: "Antarctica",
    sortname: "AQ",
    phoneCode: 0,
  },
  {
    value: 9,
    label: "Antigua And Barbuda",
    sortname: "AG",
    phoneCode: 1268,
  },
  {
    value: 10,
    label: "Argentina",
    sortname: "AR",
    phoneCode: 54,
  },
  {
    value: 11,
    label: "Armenia",
    sortname: "AM",
    phoneCode: 374,
  },
  {
    value: 12,
    label: "Aruba",
    sortname: "AW",
    phoneCode: 297,
  },
  {
    value: 13,
    label: "Australia",
    sortname: "AU",
    phoneCode: 61,
  },
  {
    value: 14,
    label: "Austria",
    sortname: "AT",
    phoneCode: 43,
  },
  {
    value: 15,
    label: "Azerbaijan",
    sortname: "AZ",
    phoneCode: 994,
  },
  {
    value: 16,
    label: "Bahamas The",
    sortname: "BS",
    phoneCode: 1242,
  },
  {
    value: 17,
    label: "Bahrain",
    sortname: "BH",
    phoneCode: 973,
  },
  {
    value: 18,
    label: "Bangladesh",
    sortname: "BD",
    phoneCode: 880,
  },
  {
    value: 19,
    label: "Barbados",
    sortname: "BB",
    phoneCode: 1246,
  },
  {
    value: 20,
    label: "Belarus",
    sortname: "BY",
    phoneCode: 375,
  },
  {
    value: 21,
    label: "Belgium",
    sortname: "BE",
    phoneCode: 32,
  },
  {
    value: 22,
    label: "Belize",
    sortname: "BZ",
    phoneCode: 501,
  },
  {
    value: 23,
    label: "Benin",
    sortname: "BJ",
    phoneCode: 229,
  },
  {
    value: 24,
    label: "Bermuda",
    sortname: "BM",
    phoneCode: 1441,
  },
  {
    value: 25,
    label: "Bhutan",
    sortname: "BT",
    phoneCode: 975,
  },
  {
    value: 26,
    label: "Bolivia",
    sortname: "BO",
    phoneCode: 591,
  },
  {
    value: 27,
    label: "Bosnia and Herzegovina",
    sortname: "BA",
    phoneCode: 387,
  },
  {
    value: 28,
    label: "Botswana",
    sortname: "BW",
    phoneCode: 267,
  },
  {
    value: 29,
    label: "Bouvet Island",
    sortname: "BV",
    phoneCode: 0,
  },
  {
    value: 30,
    label: "Brazil",
    sortname: "BR",
    phoneCode: 55,
  },
  {
    value: 31,
    label: "British Indian Ocean Territory",
    sortname: "IO",
    phoneCode: 246,
  },
  {
    value: 32,
    label: "Brunei",
    sortname: "BN",
    phoneCode: 673,
  },
  {
    value: 33,
    label: "Bulgaria",
    sortname: "BG",
    phoneCode: 359,
  },
  {
    value: 34,
    label: "Burkina Faso",
    sortname: "BF",
    phoneCode: 226,
  },
  {
    value: 35,
    label: "Burundi",
    sortname: "BI",
    phoneCode: 257,
  },
  {
    value: 36,
    label: "Cambodia",
    sortname: "KH",
    phoneCode: 855,
  },
  {
    value: 37,
    label: "Cameroon",
    sortname: "CM",
    phoneCode: 237,
  },
  {
    value: 38,
    label: "Canada",
    sortname: "CA",
    phoneCode: 1,
  },
  {
    value: 39,
    label: "Cape Verde",
    sortname: "CV",
    phoneCode: 238,
  },
  {
    value: 40,
    label: "Cayman Islands",
    sortname: "KY",
    phoneCode: 1345,
  },
  {
    value: 41,
    label: "Central African Republic",
    sortname: "CF",
    phoneCode: 236,
  },
  {
    value: 42,
    label: "Chad",
    sortname: "TD",
    phoneCode: 235,
  },
  {
    value: 43,
    label: "Chile",
    sortname: "CL",
    phoneCode: 56,
  },
  {
    value: 44,
    label: "China",
    sortname: "CN",
    phoneCode: 86,
  },
  {
    value: 45,
    label: "Christmas Island",
    sortname: "CX",
    phoneCode: 61,
  },
  {
    value: 46,
    label: "Cocos (Keeling) Islands",
    sortname: "CC",
    phoneCode: 672,
  },
  {
    value: 47,
    label: "Colombia",
    sortname: "CO",
    phoneCode: 57,
  },
  {
    value: 48,
    label: "Comoros",
    sortname: "KM",
    phoneCode: 269,
  },
  {
    value: 49,
    label: "Republic Of The Congo",
    sortname: "CG",
    phoneCode: 242,
  },
  {
    value: 50,
    label: "Democratic Republic Of The Congo",
    sortname: "CD",
    phoneCode: 242,
  },
  {
    value: 51,
    label: "Cook Islands",
    sortname: "CK",
    phoneCode: 682,
  },
  {
    value: 52,
    label: "Costa Rica",
    sortname: "CR",
    phoneCode: 506,
  },
  {
    value: 53,
    label: "Cote D''Ivoire (Ivory Coast)",
    sortname: "CI",
    phoneCode: 225,
  },
  {
    value: 54,
    label: "Croatia (Hrvatska)",
    sortname: "HR",
    phoneCode: 385,
  },
  {
    value: 55,
    label: "Cuba",
    sortname: "CU",
    phoneCode: 53,
  },
  {
    value: 56,
    label: "Cyprus",
    sortname: "CY",
    phoneCode: 357,
  },
  {
    value: 57,
    label: "Czech Republic",
    sortname: "CZ",
    phoneCode: 420,
  },
  {
    value: 58,
    label: "Denmark",
    sortname: "DK",
    phoneCode: 45,
  },
  {
    value: 59,
    label: "Djibouti",
    sortname: "DJ",
    phoneCode: 253,
  },
  {
    value: 60,
    label: "Dominica",
    sortname: "DM",
    phoneCode: 1767,
  },
  {
    value: 61,
    label: "Dominican Republic",
    sortname: "DO",
    phoneCode: 1809,
  },
  {
    value: 62,
    label: "East Timor",
    sortname: "TP",
    phoneCode: 670,
  },
  {
    value: 63,
    label: "Ecuador",
    sortname: "EC",
    phoneCode: 593,
  },
  {
    value: 64,
    label: "Egypt",
    sortname: "EG",
    phoneCode: 20,
  },
  {
    value: 65,
    label: "El Salvador",
    sortname: "SV",
    phoneCode: 503,
  },
  {
    value: 66,
    label: "Equatorial Guinea",
    sortname: "GQ",
    phoneCode: 240,
  },
  {
    value: 67,
    label: "Eritrea",
    sortname: "ER",
    phoneCode: 291,
  },
  {
    value: 68,
    label: "Estonia",
    sortname: "EE",
    phoneCode: 372,
  },
  {
    value: 69,
    label: "Ethiopia",
    sortname: "ET",
    phoneCode: 251,
  },
  {
    value: 70,
    label: "External Territories of Australia",
    sortname: "XA",
    phoneCode: 61,
  },
  {
    value: 71,
    label: "Falkland Islands",
    sortname: "FK",
    phoneCode: 500,
  },
  {
    value: 72,
    label: "Faroe Islands",
    sortname: "FO",
    phoneCode: 298,
  },
  {
    value: 73,
    label: "Fiji Islands",
    sortname: "FJ",
    phoneCode: 679,
  },
  {
    value: 74,
    label: "Finland",
    sortname: "FI",
    phoneCode: 358,
  },
  {
    value: 75,
    label: "France",
    sortname: "FR",
    phoneCode: 33,
  },
  {
    value: 76,
    label: "French Guiana",
    sortname: "GF",
    phoneCode: 594,
  },
  {
    value: 77,
    label: "French Polynesia",
    sortname: "PF",
    phoneCode: 689,
  },
  {
    value: 78,
    label: "French Southern Territories",
    sortname: "TF",
    phoneCode: 0,
  },
  {
    value: 79,
    label: "Gabon",
    sortname: "GA",
    phoneCode: 241,
  },
  {
    value: 80,
    label: "Gambia The",
    sortname: "GM",
    phoneCode: 220,
  },
  {
    value: 81,
    label: "Georgia",
    sortname: "GE",
    phoneCode: 995,
  },
  {
    value: 82,
    label: "Germany",
    sortname: "DE",
    phoneCode: 49,
  },
  {
    value: 83,
    label: "Ghana",
    sortname: "GH",
    phoneCode: 233,
  },
  {
    value: 84,
    label: "Gibraltar",
    sortname: "GI",
    phoneCode: 350,
  },
  {
    value: 85,
    label: "Greece",
    sortname: "GR",
    phoneCode: 30,
  },
  {
    value: 86,
    label: "Greenland",
    sortname: "GL",
    phoneCode: 299,
  },
  {
    value: 87,
    label: "Grenada",
    sortname: "GD",
    phoneCode: 1473,
  },
  {
    value: 88,
    label: "Guadeloupe",
    sortname: "GP",
    phoneCode: 590,
  },
  {
    value: 89,
    label: "Guam",
    sortname: "GU",
    phoneCode: 1671,
  },
  {
    value: 90,
    label: "Guatemala",
    sortname: "GT",
    phoneCode: 502,
  },
  {
    value: 91,
    label: "Guernsey and Alderney",
    sortname: "XU",
    phoneCode: 44,
  },
  {
    value: 92,
    label: "Guinea",
    sortname: "GN",
    phoneCode: 224,
  },
  {
    value: 93,
    label: "Guinea-Bissau",
    sortname: "GW",
    phoneCode: 245,
  },
  {
    value: 94,
    label: "Guyana",
    sortname: "GY",
    phoneCode: 592,
  },
  {
    value: 95,
    label: "Haiti",
    sortname: "HT",
    phoneCode: 509,
  },
  {
    value: 96,
    label: "Heard and McDonald Islands",
    sortname: "HM",
    phoneCode: 0,
  },
  {
    value: 97,
    label: "Honduras",
    sortname: "HN",
    phoneCode: 504,
  },
  {
    value: 98,
    label: "Hong Kong S.A.R.",
    sortname: "HK",
    phoneCode: 852,
  },
  {
    value: 99,
    label: "Hungary",
    sortname: "HU",
    phoneCode: 36,
  },
  {
    value: 100,
    label: "Iceland",
    sortname: "IS",
    phoneCode: 354,
  },
  {
    value: 101,
    label: "India",
    sortname: "IN",
    phoneCode: 91,
  },
  {
    value: 102,
    label: "Indonesia",
    sortname: "ID",
    phoneCode: 62,
  },
  {
    value: 103,
    label: "Iran",
    sortname: "IR",
    phoneCode: 98,
  },
  {
    value: 104,
    label: "Iraq",
    sortname: "IQ",
    phoneCode: 964,
  },
  {
    value: 105,
    label: "Ireland",
    sortname: "IE",
    phoneCode: 353,
  },
  {
    value: 106,
    label: "Israel",
    sortname: "IL",
    phoneCode: 972,
  },
  {
    value: 107,
    label: "Italy",
    sortname: "IT",
    phoneCode: 39,
  },
  {
    value: 108,
    label: "Jamaica",
    sortname: "JM",
    phoneCode: 1876,
  },
  {
    value: 109,
    label: "Japan",
    sortname: "JP",
    phoneCode: 81,
  },
  {
    value: 110,
    label: "Jersey",
    sortname: "XJ",
    phoneCode: 44,
  },
  {
    value: 111,
    label: "Jordan",
    sortname: "JO",
    phoneCode: 962,
  },
  {
    value: 112,
    label: "Kazakhstan",
    sortname: "KZ",
    phoneCode: 7,
  },
  {
    value: 113,
    label: "Kenya",
    sortname: "KE",
    phoneCode: 254,
  },
  {
    value: 114,
    label: "Kiribati",
    sortname: "KI",
    phoneCode: 686,
  },
  {
    value: 115,
    label: "Korea North",
    sortname: "KP",
    phoneCode: 850,
  },
  {
    value: 116,
    label: "Korea South",
    sortname: "KR",
    phoneCode: 82,
  },
  {
    value: 117,
    label: "Kuwait",
    sortname: "KW",
    phoneCode: 965,
  },
  {
    value: 118,
    label: "Kyrgyzstan",
    sortname: "KG",
    phoneCode: 996,
  },
  {
    value: 119,
    label: "Laos",
    sortname: "LA",
    phoneCode: 856,
  },
  {
    value: 120,
    label: "Latvia",
    sortname: "LV",
    phoneCode: 371,
  },
  {
    value: 121,
    label: "Lebanon",
    sortname: "LB",
    phoneCode: 961,
  },
  {
    value: 122,
    label: "Lesotho",
    sortname: "LS",
    phoneCode: 266,
  },
  {
    value: 123,
    label: "Liberia",
    sortname: "LR",
    phoneCode: 231,
  },
  {
    value: 124,
    label: "Libya",
    sortname: "LY",
    phoneCode: 218,
  },
  {
    value: 125,
    label: "Liechtenstein",
    sortname: "LI",
    phoneCode: 423,
  },
  {
    value: 126,
    label: "Lithuania",
    sortname: "LT",
    phoneCode: 370,
  },
  {
    value: 127,
    label: "Luxembourg",
    sortname: "LU",
    phoneCode: 352,
  },
  {
    value: 128,
    label: "Macau S.A.R.",
    sortname: "MO",
    phoneCode: 853,
  },
  {
    value: 129,
    label: "Macedonia",
    sortname: "MK",
    phoneCode: 389,
  },
  {
    value: 130,
    label: "Madagascar",
    sortname: "MG",
    phoneCode: 261,
  },
  {
    value: 131,
    label: "Malawi",
    sortname: "MW",
    phoneCode: 265,
  },
  {
    value: 132,
    label: "Malaysia",
    sortname: "MY",
    phoneCode: 60,
  },
  {
    value: 133,
    label: "Maldives",
    sortname: "MV",
    phoneCode: 960,
  },
  {
    value: 134,
    label: "Mali",
    sortname: "ML",
    phoneCode: 223,
  },
  {
    value: 135,
    label: "Malta",
    sortname: "MT",
    phoneCode: 356,
  },
  {
    value: 136,
    label: "Man (Isle of)",
    sortname: "XM",
    phoneCode: 44,
  },
  {
    value: 137,
    label: "Marshall Islands",
    sortname: "MH",
    phoneCode: 692,
  },
  {
    value: 138,
    label: "Martinique",
    sortname: "MQ",
    phoneCode: 596,
  },
  {
    value: 139,
    label: "Mauritania",
    sortname: "MR",
    phoneCode: 222,
  },
  {
    value: 140,
    label: "Mauritius",
    sortname: "MU",
    phoneCode: 230,
  },
  {
    value: 141,
    label: "Mayotte",
    sortname: "YT",
    phoneCode: 269,
  },
  {
    value: 142,
    label: "Mexico",
    sortname: "MX",
    phoneCode: 52,
  },
  {
    value: 143,
    label: "Micronesia",
    sortname: "FM",
    phoneCode: 691,
  },
  {
    value: 144,
    label: "Moldova",
    sortname: "MD",
    phoneCode: 373,
  },
  {
    value: 145,
    label: "Monaco",
    sortname: "MC",
    phoneCode: 377,
  },
  {
    value: 146,
    label: "Mongolia",
    sortname: "MN",
    phoneCode: 976,
  },
  {
    value: 147,
    label: "Montserrat",
    sortname: "MS",
    phoneCode: 1664,
  },
  {
    value: 148,
    label: "Morocco",
    sortname: "MA",
    phoneCode: 212,
  },
  {
    value: 149,
    label: "Mozambique",
    sortname: "MZ",
    phoneCode: 258,
  },
  {
    value: 150,
    label: "Myanmar",
    sortname: "MM",
    phoneCode: 95,
  },
  {
    value: 151,
    label: "Namibia",
    sortname: "NA",
    phoneCode: 264,
  },
  {
    value: 152,
    label: "Nauru",
    sortname: "NR",
    phoneCode: 674,
  },
  {
    value: 153,
    label: "Nepal",
    sortname: "NP",
    phoneCode: 977,
  },
  {
    value: 154,
    label: "Netherlands Antilles",
    sortname: "AN",
    phoneCode: 599,
  },
  {
    value: 155,
    label: "Netherlands The",
    sortname: "NL",
    phoneCode: 31,
  },
  {
    value: 156,
    label: "New Caledonia",
    sortname: "NC",
    phoneCode: 687,
  },
  {
    value: 157,
    label: "New Zealand",
    sortname: "NZ",
    phoneCode: 64,
  },
  {
    value: 158,
    label: "Nicaragua",
    sortname: "NI",
    phoneCode: 505,
  },
  {
    value: 159,
    label: "Niger",
    sortname: "NE",
    phoneCode: 227,
  },
  {
    value: 160,
    label: "Nigeria",
    sortname: "NG",
    phoneCode: 234,
  },
  {
    value: 161,
    label: "Niue",
    sortname: "NU",
    phoneCode: 683,
  },
  {
    value: 162,
    label: "Norfolk Island",
    sortname: "NF",
    phoneCode: 672,
  },
  {
    value: 163,
    label: "Northern Mariana Islands",
    sortname: "MP",
    phoneCode: 1670,
  },
  {
    value: 164,
    label: "Norway",
    sortname: "NO",
    phoneCode: 47,
  },
  {
    value: 165,
    label: "Oman",
    sortname: "OM",
    phoneCode: 968,
  },
  {
    value: 166,
    label: "Pakistan",
    sortname: "PK",
    phoneCode: 92,
  },
  {
    value: 167,
    label: "Palau",
    sortname: "PW",
    phoneCode: 680,
  },
  {
    value: 168,
    label: "Palestinian Territory Occupied",
    sortname: "PS",
    phoneCode: 970,
  },
  {
    value: 169,
    label: "Panama",
    sortname: "PA",
    phoneCode: 507,
  },
  {
    value: 170,
    label: "Papua new Guinea",
    sortname: "PG",
    phoneCode: 675,
  },
  {
    value: 171,
    label: "Paraguay",
    sortname: "PY",
    phoneCode: 595,
  },
  {
    value: 172,
    label: "Peru",
    sortname: "PE",
    phoneCode: 51,
  },
  {
    value: 173,
    label: "Philippines",
    sortname: "PH",
    phoneCode: 63,
  },
  {
    value: 174,
    label: "Pitcairn Island",
    sortname: "PN",
    phoneCode: 0,
  },
  {
    value: 175,
    label: "Poland",
    sortname: "PL",
    phoneCode: 48,
  },
  {
    value: 176,
    label: "Portugal",
    sortname: "PT",
    phoneCode: 351,
  },
  {
    value: 177,
    label: "Puerto Rico",
    sortname: "PR",
    phoneCode: 1787,
  },
  {
    value: 178,
    label: "Qatar",
    sortname: "QA",
    phoneCode: 974,
  },
  {
    value: 179,
    label: "Reunion",
    sortname: "RE",
    phoneCode: 262,
  },
  {
    value: 180,
    label: "Romania",
    sortname: "RO",
    phoneCode: 40,
  },
  {
    value: 181,
    label: "Russia",
    sortname: "RU",
    phoneCode: 70,
  },
  {
    value: 182,
    label: "Rwanda",
    sortname: "RW",
    phoneCode: 250,
  },
  {
    value: 183,
    label: "Saint Helena",
    sortname: "SH",
    phoneCode: 290,
  },
  {
    value: 184,
    label: "Saint Kitts And Nevis",
    sortname: "KN",
    phoneCode: 1869,
  },
  {
    value: 185,
    label: "Saint Lucia",
    sortname: "LC",
    phoneCode: 1758,
  },
  {
    value: 186,
    label: "Saint Pierre and Miquelon",
    sortname: "PM",
    phoneCode: 508,
  },
  {
    value: 187,
    label: "Saint Vincent And The Grenadines",
    sortname: "VC",
    phoneCode: 1784,
  },
  {
    value: 188,
    label: "Samoa",
    sortname: "WS",
    phoneCode: 684,
  },
  {
    value: 189,
    label: "San Marino",
    sortname: "SM",
    phoneCode: 378,
  },
  {
    value: 190,
    label: "Sao Tome and Principe",
    sortname: "ST",
    phoneCode: 239,
  },
  {
    value: 191,
    label: "Saudi Arabia",
    sortname: "SA",
    phoneCode: 966,
  },
  {
    value: 192,
    label: "Senegal",
    sortname: "SN",
    phoneCode: 221,
  },
  {
    value: 193,
    label: "Serbia",
    sortname: "RS",
    phoneCode: 381,
  },
  {
    value: 194,
    label: "Seychelles",
    sortname: "SC",
    phoneCode: 248,
  },
  {
    value: 195,
    label: "Sierra Leone",
    sortname: "SL",
    phoneCode: 232,
  },
  {
    value: 196,
    label: "Singapore",
    sortname: "SG",
    phoneCode: 65,
  },
  {
    value: 197,
    label: "Slovakia",
    sortname: "SK",
    phoneCode: 421,
  },
  {
    value: 198,
    label: "Slovenia",
    sortname: "SI",
    phoneCode: 386,
  },
  {
    value: 199,
    label: "Smaller Territories of the UK",
    sortname: "XG",
    phoneCode: 44,
  },
  {
    value: 200,
    label: "Solomon Islands",
    sortname: "SB",
    phoneCode: 677,
  },
  {
    value: 201,
    label: "Somalia",
    sortname: "SO",
    phoneCode: 252,
  },
  {
    value: 202,
    label: "South Africa",
    sortname: "ZA",
    phoneCode: 27,
  },
  {
    value: 203,
    label: "South Georgia",
    sortname: "GS",
    phoneCode: 0,
  },
  {
    value: 204,
    label: "South Sudan",
    sortname: "SS",
    phoneCode: 211,
  },
  {
    value: 205,
    label: "Spain",
    sortname: "ES",
    phoneCode: 34,
  },
  {
    value: 206,
    label: "Sri Lanka",
    sortname: "LK",
    phoneCode: 94,
  },
  {
    value: 207,
    label: "Sudan",
    sortname: "SD",
    phoneCode: 249,
  },
  {
    value: 208,
    label: "Suriname",
    sortname: "SR",
    phoneCode: 597,
  },
  {
    value: 209,
    label: "Svalbard And Jan Mayen Islands",
    sortname: "SJ",
    phoneCode: 47,
  },
  {
    value: 210,
    label: "Swaziland",
    sortname: "SZ",
    phoneCode: 268,
  },
  {
    value: 211,
    label: "Sweden",
    sortname: "SE",
    phoneCode: 46,
  },
  {
    value: 212,
    label: "Switzerland",
    sortname: "CH",
    phoneCode: 41,
  },
  {
    value: 213,
    label: "Syria",
    sortname: "SY",
    phoneCode: 963,
  },
  {
    value: 214,
    label: "Taiwan",
    sortname: "TW",
    phoneCode: 886,
  },
  {
    value: 215,
    label: "Tajikistan",
    sortname: "TJ",
    phoneCode: 992,
  },
  {
    value: 216,
    label: "Tanzania",
    sortname: "TZ",
    phoneCode: 255,
  },
  {
    value: 217,
    label: "Thailand",
    sortname: "TH",
    phoneCode: 66,
  },
  {
    value: 218,
    label: "Togo",
    sortname: "TG",
    phoneCode: 228,
  },
  {
    value: 219,
    label: "Tokelau",
    sortname: "TK",
    phoneCode: 690,
  },
  {
    value: 220,
    label: "Tonga",
    sortname: "TO",
    phoneCode: 676,
  },
  {
    value: 221,
    label: "Trinidad And Tobago",
    sortname: "TT",
    phoneCode: 1868,
  },
  {
    value: 222,
    label: "Tunisia",
    sortname: "TN",
    phoneCode: 216,
  },
  {
    value: 223,
    label: "Turkey",
    sortname: "TR",
    phoneCode: 90,
  },
  {
    value: 224,
    label: "Turkmenistan",
    sortname: "TM",
    phoneCode: 7370,
  },
  {
    value: 225,
    label: "Turks And Caicos Islands",
    sortname: "TC",
    phoneCode: 1649,
  },
  {
    value: 226,
    label: "Tuvalu",
    sortname: "TV",
    phoneCode: 688,
  },
  {
    value: 227,
    label: "Uganda",
    sortname: "UG",
    phoneCode: 256,
  },
  {
    value: 228,
    label: "Ukraine",
    sortname: "UA",
    phoneCode: 380,
  },
  {
    value: 229,
    label: "United Arab Emirates",
    sortname: "AE",
    phoneCode: 971,
  },
  {
    value: 230,
    label: "United Kingdom",
    sortname: "GB",
    phoneCode: 44,
  },
  {
    value: 231,
    label: "United States",
    sortname: "US",
    phoneCode: 1,
  },
  {
    value: 232,
    label: "United States Minor Outlying Islands",
    sortname: "UM",
    phoneCode: 1,
  },
  {
    value: 233,
    label: "Uruguay",
    sortname: "UY",
    phoneCode: 598,
  },
  {
    value: 234,
    label: "Uzbekistan",
    sortname: "UZ",
    phoneCode: 998,
  },
  {
    value: 235,
    label: "Vanuatu",
    sortname: "VU",
    phoneCode: 678,
  },
  {
    value: 236,
    label: "Vatican City State (Holy See)",
    sortname: "VA",
    phoneCode: 39,
  },
  {
    value: 237,
    label: "Venezuela",
    sortname: "VE",
    phoneCode: 58,
  },
  {
    value: 238,
    label: "Vietnam",
    sortname: "VN",
    phoneCode: 84,
  },
  {
    value: 239,
    label: "Virgin Islands (British)",
    sortname: "VG",
    phoneCode: 1284,
  },
  {
    value: 240,
    label: "Virgin Islands (US)",
    sortname: "VI",
    phoneCode: 1340,
  },
  {
    value: 241,
    label: "Wallis And Futuna Islands",
    sortname: "WF",
    phoneCode: 681,
  },
  {
    value: 242,
    label: "Western Sahara",
    sortname: "EH",
    phoneCode: 212,
  },
  {
    value: 243,
    label: "Yemen",
    sortname: "YE",
    phoneCode: 967,
  },
  {
    value: 244,
    label: "Yugoslavia",
    sortname: "YU",
    phoneCode: 38,
  },
  {
    value: 245,
    label: "Zambia",
    sortname: "ZM",
    phoneCode: 260,
  },
  {
    value: 246,
    label: "Zimbabwe",
    sortname: "ZW",
    phoneCode: 26,
  },
];
