import Head from "next/head";
import xlsx from "xlsx";
import path from "path";
import fs from "fs";
import {ISneakers} from "@/interface";
import React from "react";
import SneakersMain from "@/components/sneakers/SneakersMain";

export default function Sneakers({sneakers}) {
    return (
        <>
            <Head>
                <title>Кроссовки</title>
                <meta name="description" content="Generated by create next app"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <link rel="icon" href="/sneaker_svg.svg"/>
            </Head>
            <SneakersMain sneakers={sneakers}/>
        </>
    )
}

export async function getStaticProps() {
    const urlExcel = path.resolve('./sneakers.xlsx');
    const file = fs.readFileSync(urlExcel);
    const workbook = xlsx.read(file);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const range = xlsx.utils.decode_range(sheet['!ref'] as string)
    const rowsTable = range.e.r - range.s.r + 2;

    let sneakers: ISneakers[] = [];

    for (let i = 2; i < rowsTable; ++i) {
        const obj: ISneakers = {
            article: '',
            price: '',
            brand: '',
            model: '',
            color: '',
            gender: '',
            popular: 0
        };
        if (sheet[`A${i}`] && sheet[`A${i}`].v) {
            obj.brand = sheet[`A${i}`].v.trim();
        }

        if (sheet[`B${i}`] && sheet[`B${i}`].v) {
            obj.model = sheet[`B${i}`].v.trim();
        }

        if (sheet[`C${i}`] && sheet[`C${i}`].v) {
            obj.color = sheet[`C${i}`].v.trim();
        }

        if (sheet[`D${i}`] && sheet[`D${i}`].v) {
            obj.article = (sheet[`D${i}`].v).toString().trim();
        }

        if (sheet[`E${i}`] && sheet[`E${i}`].v) {
            obj.price = (sheet[`E${i}`].v).toString().trim();
        }

        if (sheet[`F${i}`] && sheet[`F${i}`].v) {
            obj.gender = sheet[`F${i}`].v.trim();
        }

        if (sheet[`G${i}`] && sheet[`G${i}`].v) {
            obj.popular = parseInt(sheet[`G${i}`].v);
        }

        sneakers.push(obj);
    }

    /*sneakers = sneakers.concat(sneakers)
    sneakers = sneakers.concat(sneakers)
    sneakers = sneakers.concat(sneakers)
    sneakers = sneakers.concat(sneakers)
    sneakers = sneakers.concat(sneakers)*/


    return {
        props: {
            sneakers
        }
    }
}