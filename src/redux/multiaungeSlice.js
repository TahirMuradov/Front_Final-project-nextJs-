import { createSlice } from "@reduxjs/toolkit";

const az={
    "pages": [
        {
            "name": "Əsas Səhifə",
            "page_url": "/home"
        },
        {
            "name": "Mağaza",
            "page_url": "/shop"
        },
        {
            "name": "Haqqımızda",
            "page_url": "/about"
        },
        {
            "name": "Əlaqə",
            "page_url": "/contact"
        },
        {
           "name": "Səbət",
            "page_url": "/cart"
        },
        {
            "name": "Seçilmişlər",
            "page_url": "/wishlist"
        },
        {
            "name": "404 | Xəta, səhifə tapılmadı",
            "page_url": "/404"
        },
        {
            "name": "'search' üçün number nəticə",
            "page_url": "/search"
        }
    ],
    "header": {
        "call": "Zəng edin",
        "search": "Axtarış",
        "pages": [
            {
                "name": "Əsas Səhifə",
                "link": "/home"
            },
            {
                "name": "Mağaza",
                "link": "/shop"
            },
            {
                "name": "Haqqımızda",
                "link": "/about"
            },
            {
                "name": "Əlaqə",
                "link": "/contact"
            }
        ]
    },
    "footer": {
        "pages": [
            {
                "name": "İndi Alış-veriş Et",
                "link": "/shop"
            },
            {
                "name": "Haqqımızda",
                "link": "/about"
            },
            {
                "name": "Əlaqə",
                "link": "/contact"
            },
            {
                "name": "Səbətinizi Yoxlayın",
                "link": "/cart"
            }
        ],
        "desc": "Elessi ilə üslub və rahatlığa adım atın!",
        "copyrighted": "Elessi. Bütün hüquqlar qorunur.",
        "columns": [
            {
                "title": "Məhsullar",
                "items": [
                    {
                        "text": "Ayaqqabılar",
                        "href": "/product/shoes"
                    },
                    {
                        "text": "İdman Ayaqqabıları",
                        "href": "/product/sneakers"
                    },
                    {
                        "text": "Dik-dabanlar",
                        "href": "/product/highheels"
                    },
                    {
                        "text": "Başmaqlar",
                        "href": "/product/slippers"
                    }
                ]
            },
            {
                "title": "Tərəfdaşlar",
                "items": [
                    {
                        "text": "Adidas",
                        "href": "https://www.adidas.com/us"
                    },
                    {
                        "text": "Nike",
                        "href": "https://www.nike.com/"
                    },
                    {
                        "text": "Bvlgari",
                        "href": "https://www.bulgari.com/"
                    },
                    {
                        "text": "Dolce&Gabbana",
                        "href": "https://www.dolcegabbana.com/"
                    }
                ]
            },
            {
                "title": "Əlaqədə Qalın",
                "desc": "Sosial mediada bizi izləyin:",
                "items": [
                    {
                        "icon": "fab fa-facebook",
                        "link": "https://www.facebook.com/"
                    },
                    {
                        "icon": "fab fa-twitter",
                        "link": "https://www.twitter.com/"
                    },
                    {
                        "icon": "fab fa-instagram",
                        "link": "https://www.instagram.com/"
                    },
                    {
                        "icon": "fab fa-linkedin",
                        "link": "https://www.linkedin.com/"
                    }
                ]
            }
        ]
    },
    "home": {
        "title": "Əsas Səhifə",
        "slider": [
            {
                "title": "Səyahət Ayaqqabıları"
            }
        ]
    },
    "shop": {
        "title": "Mağaza"
    },
    "cart": {
        "title": "Səbət"
    },
    "about": {
        "title": "Haqqımızda"
    },
    "contact": {
        "title": "Əlaqə"
    },
    "wishlist": {
        "title": "Seçilmişlər"
    },
    "error": {
        "title": "404 | Xəta, səhifə tapılmadı",
        "gohome": "Əsas Səhifəyə Qayıt"
    }
}
const eng={
    "pages": [
        {
            "name": "Home",
            "page_url": "/home"
        },
        {
            "name": "Shop",
            "page_url": "/shop"
        },
        {
            "name": "About Us",
            "page_url": "/about"
        },
        {
            "name": "Contact Us",
            "page_url": "/contact"
        },
        {
            "name": "Cart",
            "page_url": "/cart"
        },
        {
            "name": "Wishlist",
            "page_url": "/wishlist"
        },
        {
            "name": "404 | Opps, page not found",
            "page_url": "/404"
        },
        {
            "name": "number results for 'search'",
            "page_url": "/search"
        }
    ],
    "header": {
        "call": "Call",
        "search": "Search",
        "pages": [
            {
                "name": "Home",
                "link": "/home"
            },
            {
                "name": "Shop",
                "link": "/shop"
            },
            {
                "name": "About Us",
                "link": "/about"
            },
            {
                "name": "Contact Us",
                "link": "/contact"
            }
        ]
    },
    "footer": {
        "pages": [
            {
                "name": "Shop Now",
                "link": "/shop"
            },
            {
                "name": "About Us",
                "link": "/about"
            },
            {
                "name": "Contact Us",
                "link": "/contact"
            },
            {
                "name": "Check Your Cart",
                "link": "/cart"
            }
        ],
        "desc": "Step into Style and Comfort with Elessi!",
        "copyrighted": "Elessi. All rights reserved.",
        "columns": [
            {
                "title": "Products",
                "items": [
                    {
                        "text": "Shoes",
                        "href": "/product/shoes"
                    },
                    {
                        "text": "Sneakers",
                        "href": "/product/sneakers"
                    },
                    {
                        "text": "High-heels",
                        "href": "/product/highheels"
                    },
                    {
                        "text": "Slippers",
                        "href": "/product/slippers"
                    }
                ]
            },
            {
                "title": "Partners",
                "items": [
                    {
                        "text": "Adidas",
                        "href": "https://www.adidas.com/us"
                    },
                    {
                        "text": "Nike",
                        "href": "https://www.nike.com/"
                    },
                    {
                        "text": "Bvlgari",
                        "href": "https://www.bulgari.com/"
                    },
                    {
                        "text": "Dolce&Gabbana",
                        "href": "https://www.dolcegabbana.com/"
                    }
                ]
            },
            {
                "title": "Stay Connected",
                "desc": "Follow us on social media:",
                "items": [
                    {
                        "icon": "fab fa-facebook",
                        "link": "https://www.facebook.com/"
                    },
                    {
                        "icon": "fab fa-twitter",
                        "link": "https://www.twitter.com/"
                    },
                    {
                        "icon": "fab fa-instagram",
                        "link": "https://www.instagram.com/"
                    },
                    {
                        "icon": "fab fa-linkedin",
                        "link": "https://www.linkedin.com/"
                    }
                ]
            }
        ]
    },
    "home": {
        "title": "Home",
        "slider": [
            {
                "title": "Travel Boots"
            }
        ]
    },
    "shop": {
        "title": "Shop"
    },
    "cart": {
        "title": "Cart"
    },
    "about": {
        "title": "About Us"
    },
    "contact": {
        "title": "Contact Us"
    },
    "wishlist": {
        "title": "Wishlist"
    },
    "error": {
        "title": "404 | Opps, page not found",
        "gohome": "Go Home"
    }
}
const tr={
    "pages": [
        {
            "name": "Ana Sayfa",
            "page_url": "/home"
        },
        {
            "name": "Mağaza",
            "page_url": "/shop"
        },
        {
            "name": "Hakkımızda",
            "page_url": "/about"
        },
        {
            "name": "İletişim",
            "page_url": "/contact"
        },
        {
            "name": "Sepet",
            "page_url": "/cart"
        },
        {
            "name": "İstek Listesi",
            "page_url": "/wishlist"
        },
        {
            "name": "404 | Hata, sayfa bulunamadı",
            "page_url": "/404"
        },
        {
            "name": "'search' için number sonuç",
            "page_url": "/search"
        }
    ],
    "header": {
        "call": "Bizi arayın",
        "search": "Arama",
        "pages": [
            {
                "name": "Ana Sayfa",
                "link": "/home"
            },
            {
                "name": "Mağaza",
                "link": "/shop"
            },
            {
                "name": "Hakkımızda",
                "link": "/about"
            },
            {
                "name": "İletişim",
                "link": "/contact"
            }
        ]
    },
    "footer": {
        "pages": [
            {
                "name": "Şimdi Alışveriş Yap",
                "link": "/shop"
            },
            {
                "name": "Hakkımızda",
                "link": "/about"
            },
            {
                "name": "İletişim",
                "link": "/contact"
            },
            {
                "name": "Sepeti Kontrol Et",
                "link": "/cart"
            }
        ],
        "desc": "Elessi ile Tarz ve Konfora Adım Atın!",
        "copyrighted": "Elessi. Tüm hakları saklıdır.",
        "columns": [
            {
                "title": "Ürünler",
                "items": [
                    {
                        "text": "Ayakkabılar",
                        "href": "/product/shoes"
                    },
                    {
                        "text": "Spor Ayakkabıları",
                        "href": "/product/sneakers"
                    },
                    {
                        "text": "Yüksek Topuklu Ayakkabılar",
                        "href": "/product/highheels"
                    },
                    {
                        "text": "Terlikler",
                        "href": "/product/slippers"
                    }
                ]
            },
            {
                "title": "Ortaklar",
                "items": [
                    {
                        "text": "Adidas",
                        "href": "https://www.adidas.com/us"
                    },
                    {
                        "text": "Nike",
                        "href": "https://www.nike.com/"
                    },
                    {
                        "text": "Bvlgari",
                        "href": "https://www.bulgari.com/"
                    },
                    {
                        "text": "Dolce&Gabbana",
                        "href": "https://www.dolcegabbana.com/"
                    }
                ]
            },
            {
                "title": "Bağlantıda Kalın",
                "desc": "Bizi sosyal medyada takip edin:",
                "items": [
                    {
                        "icon": "fab fa-facebook",
                        "link": "https://www.facebook.com/"
                    },
                    {
                        "icon": "fab fa-twitter",
                        "link": "https://www.twitter.com/"
                    },
                    {
                        "icon": "fab fa-instagram",
                        "link": "https://www.instagram.com/"
                    },
                    {
                        "icon": "fab fa-linkedin",
                        "link": "https://www.linkedin.com/"
                    }
                ]
            }
        ]
    },
    "home": {
        "title": "Ana Sayfa",
        "slider": [
            {
                "title": "Seyahat Botları"
            }
        ]
    },
    "shop": {
        "title": "Mağaza"
    },
    "cart": {
        "title": "Sepet"
    },
    "about": {
        "title": "Hakkımızda"
    },
    "contact": {
        "title": "İletişim"
    },
    "wishlist": {
        "title": "İstek Listesi"
    },
    "error": {
        "title": "404 | Hata, sayfa bulunamadı",
        "gohome": "Ana Sayfaya Dön"
    }
}
const initialState={
    launge:az
}

const multilaungeSlice=createSlice({
    name:"multilanguage",
initialState,
reducers:{
    changeLaunguage:(state,action)=>{
const selectedLAunge=action.payload;
console.log(state.launge);
switch (selectedLAunge) {
    case "az":
        state.launge=az
        console.log("az dili secildi");
        break;
        case "tr":
        console.log("tr dili secildi");   
        state.launge=tr
            break;
            case "en":
                state.launge=eng
                console.log("en dili secildi");
                break;
    default:
        break;
}

    }
}
})
export const multilaungeActions=multilaungeSlice.actions;
export default multilaungeSlice.reducer;