import React from 'react';
import Image from "next/image";
import CustomLink from "@/components/ui/customLink";

//Component should be only in UL
const CategoryCard = () => {
    return(
        <li>
            <Image src={'asd'} alt={'speakers'} />
            <h3></h3>
            <CustomLink link={'/'} type={"glass"} text={'SHOP'} />
        </li>
    )
}

export default CategoryCard;