import Head from "next/head";
import React from "react";
import xlsx from "xlsx";
import fs from "fs";
import path from "path";
import {ISneakers} from "@/interface";
import SneakerMainContent from "@/components/sneakerPage/SneakerMainContent";

export default function ProductPage({sneaker}) {
    return (
        <>
            <Head>
                <title>{sneaker.brand + ' ' + sneaker.model}</title>
                <meta name="description" content="Test"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <link rel="icon" href="/sneaker_svg.svg"/>
            </Head>
            <SneakerMainContent sneaker={sneaker}/>
        </>
    )
}

export async function getStaticPaths() {
    const urlExcel = path.resolve('./sneakers.xlsx');
    const file = fs.readFileSync(urlExcel);
    const workbook = xlsx.read(file);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const range = xlsx.utils.decode_range(sheet['!ref'] as string)
    const rowsTable = range.e.r - range.s.r + 2;

    const paths: Array<{ params: { id: string } }> = [];

    for (let i = 2; i < rowsTable; ++i) {
        if (sheet[`D${i}`] && sheet[`D${i}`].v) {
            paths.push({params: {id: (sheet[`D${i}`].v).toString().trim()}});
        }
    }

    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const urlExcel = path.resolve('./sneakers.xlsx');
    const file = fs.readFileSync(urlExcel);
    const workbook = xlsx.read(file);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const range = xlsx.utils.decode_range(sheet['!ref'] as string)
    const rowsTable = range.e.r - range.s.r + 2;

    let replacement: string = '';

    const obj: ISneakers = {
        article: '',
        price: '',
        brand: '',
        model: '',
        color: '',
        gender: '',
        popular: 0
    };

    const objReplacement = {};


    for (let i = 2; i < rowsTable; ++i) {
        if (sheet[`D${i}`] && sheet[`D${i}`].v && params.id === (sheet[`D${i}`].v).toString().trim()) {
            obj.article = (sheet[`D${i}`].v).toString().trim();

            if (sheet[`A${i}`] && sheet[`A${i}`].v) {
                obj.brand = sheet[`A${i}`].v.trim();
            }

            if (sheet[`B${i}`] && sheet[`B${i}`].v) {
                obj.model = sheet[`B${i}`].v.trim();
            }

            if (sheet[`C${i}`] && sheet[`C${i}`].v) {
                obj.color = sheet[`C${i}`].v.trim();
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

            if (sheet[`H${i}`] && sheet[`H${i}`].v) {
                replacement = (sheet[`H${i}`].v).toString().trim();
            }
        }

        if (sheet[`H${i}`] && sheet[`H${i}`].v) {
            const rep = (sheet[`H${i}`].v).toString().trim();

            let article, color;
            if (sheet[`D${i}`] && sheet[`D${i}`].v) {
                article = (sheet[`D${i}`].v).toString().trim();
            }

            if (sheet[`C${i}`] && sheet[`C${i}`].v) {
                color = sheet[`C${i}`].v.trim();
            }

            if (article && color) {
                if (!objReplacement[rep]) {
                    objReplacement[rep] = [];
                }

                objReplacement[rep].push({
                    article,
                    color
                })
            }
        }
    }

    if (replacement !== '') {
        obj.replacement = objReplacement[replacement];
    }

    return {
        props: {
            sneaker: obj
        }
    }
}