import CalabreseImg from "../../img/products/Calabrese.png"
import BananaImg from "../../img/products/Banana.png"
import NutsImg from "../../img/products/Nuts.png"
import TomatoImg from "../../img/products/Tomato.png"
import MungImg from "../../img/products/Mung.png"
import HazelnutImg from "../../img/products/Hazelnut.png"
import EggsImg from "../../img/products/Eggs.png"
import ZelcoImg from "../../img/products/Zelco.png"
import BeanImg from "../../img/products/Bean.png"
import WhiteHazelnutImg from "../../img/products/WhiteHazelnut.png"
import FreshImg from "../../img/products/FreshCorn.png"
import AlmondsImg from "../../img/products/Almonds.png"
import Mung2Img from "../../img/products/mung2.png"
import Hazelnut2Img from "../../img/products/brownHazelnut.png"
import OnionImg from "../../img/products/onion.png"
import CabbageImg from "../../img/products/cabbage.png"

import CalabreseImgWebp from "../../img/products/webp/Calabrese.webp"
import BananaImgWebp from "../../img/products/webp/Banana.webp"
import NutsImgWebp from "../../img/products/webp/Nuts.webp"
import TomatoImgWebp from "../../img/products/webp/Tomato.webp"
import MungImgWebp from "../../img/products/webp/Mung.webp"
import HazelnutImgWebp from "../../img/products/webp/Hazelnut.webp"
import EggsImgWebp from "../../img/products/webp/Eggs.webp"
import ZelcoImgWebp from "../../img/products/webp/Zelco.webp"
import BeanImgWebp from "../../img/products/webp/Bean.webp"
import WhiteHazelnutImgWebp from "../../img/products/webp/WhiteHazelnut.webp"
import FreshImgWebp from "../../img/products/webp/FreshCorn.webp"
import AlmondsImgWebp from "../../img/products/webp/Almonds.webp"
import Mung2ImgWebp from "../../img/products/webp/mung2.webp"
import Hazelnut2ImgWebp from "../../img/products/webp/brownHazelnut.webp"
import OnionImgWebp from "../../img/products/webp/onion.webp"
import CabbageImgWebp from "../../img/products/webp/cabbage.webp"

const allProducts = [
    {
        title: 'Calabrese Broccoli',
        fullPrice: "20.00",
        salePrice: "13.00",
        category: 'Vegetable',
        photo: CalabreseImg,
        photoWebp: CalabreseImgWebp,
        id: 1,
        raiting: 3
    },
    {
        title: 'Fresh Banana Fruites',
        fullPrice: "20.00",
        salePrice: "14.00",
        category: 'Fresh',
        photo: BananaImg,
        photoWebp: BananaImgWebp,

        id: 2,
        raiting: 5
    },
    {
        title: 'White Nuts',
        fullPrice: "20.00",
        salePrice: "15.00",
        category: 'Millets',
        photo: NutsImg,
        photoWebp: NutsImgWebp,
        id: 4,
        raiting: 4
    },
    {
        title: 'Vegan Red Tomato',
        fullPrice: "20.00",
        salePrice: "17.00",
        category: 'Vegetable',
        photo: TomatoImg,
        photoWebp: TomatoImgWebp,

        id: 5,
        raiting: 4
    },
    {
        title: 'Mung Bean',
        fullPrice: "20.00",
        salePrice: "11.00",
        category: 'Health',
        photo: MungImg,
        photoWebp: MungImgWebp,

        id: 6,
        raiting: 5
    },
    {
        title: 'Brown Hazelnut',
        fullPrice: "20.00",
        salePrice: "12.00",
        category: 'Nuts',
        photo: HazelnutImg,
        photoWebp: HazelnutImgWebp,

        id: 7,
        raiting: 2
    },
    {
        title: 'Eggs',
        fullPrice: "20.00",
        salePrice: "17.00",
        category: 'Fresh',
        photo: EggsImg,
        photoWebp: EggsImgWebp,

        id: 8,
        raiting: 5
    },
    {
        title: 'Zelco Suji Elaichi Rusk',
        fullPrice: "20.00",
        salePrice: "15.00",
        category: 'Fresh',
        photo: ZelcoImg,
        photoWebp: ZelcoImgWebp,

        id: 9,
        raiting: 2
    },
    {
        title: 'Mung Bean',
        fullPrice: "20.00",
        salePrice: "11.00",
        category: 'Health',
        photo: BeanImg,
        photoWebp: BeanImgWebp,
        id: 11,
        raiting: 5
    },
    {
        title: 'White Hazelnut',
        fullPrice: "20.00",
        salePrice: "12.00",
        category: 'Nuts',
        photo: WhiteHazelnutImg,
        photoWebp: WhiteHazelnutImgWebp,

        id: 16,
        raiting: 3
    },
    {
        title: 'Fresh Corn',
        fullPrice: "20.00",
        salePrice: "17.00",
        category: 'Fresh',
        photo: FreshImg,
        photoWebp: FreshImgWebp,

        id: 3,
        raiting: 4
    },
    {
        title: 'Organic Almonds',
        fullPrice: "20.00",
        salePrice: "15.00",
        category: 'Fresh',
        photo: AlmondsImg,
        photoWebp: AlmondsImgWebp,
        id: 10,
        raiting: 5
    },
    {
        title: 'Сauliflower',
        fullPrice: "20.00",
        salePrice: "11.00",
        category: 'Vegetable',
        photo: Mung2Img,
        photoWebp: Mung2ImgWebp,

        id: 15,
        raiting: 5
    },
    {
        title: 'Zucchini',
        fullPrice: "20.00",
        salePrice: "12.00",
        category: 'Vegetable',
        photo: Hazelnut2Img,
        photoWebp: Hazelnut2ImgWebp,

        id: 12,
        raiting: 2
    },
    {
        title: 'Onion',
        fullPrice: "20.00",
        salePrice: "17.00",
        category: 'Vegetable',
        photo: OnionImg,
        photoWebp: OnionImgWebp,

        id: 13,
        raiting: 5
    },
    {
        title: 'Cabbage',
        fullPrice: "20.00",
        salePrice: "9.00",
        category: 'Vegetable',
        photo: CabbageImg,
        photoWebp: CabbageImgWebp,

        id: 14,
        raiting: 4
    },
]

export default allProducts 